import nodemailer from "nodemailer";
import type { InquiryRequest } from "@/lib/inquiry-request";
import { formatDurationLabel } from "@/lib/inquiry-plan-options";
import {
  getInquiryEmailFrom,
  getInquiryEmailTo,
  getSmtpConfig,
  isSmtpConfigured,
} from "@/lib/env";
import { SITE } from "@/lib/site-config";

function buildInquiryEmailContent(inquiry: InquiryRequest) {
  const lines = [
    "New custom trip inquiry",
    "",
    inquiry.tripType ? `Trip type: ${inquiry.tripType}` : null,
    inquiry.duration ? `Duration: ${formatDurationLabel(inquiry.duration)}` : null,
    `Name: ${inquiry.name}`,
    `Email: ${inquiry.email}`,
    inquiry.dates ? `Travel dates: ${inquiry.dates}` : null,
    inquiry.message ? `Notes:\n${inquiry.message}` : null,
    "",
    `Submitted via ${SITE.name} plan-your-trip form`,
  ].filter(Boolean);

  const text = lines.join("\n");
  const html = lines
    .map((line) => (line?.includes("\n") ? `<pre>${line}</pre>` : `<p>${line}</p>`))
    .join("");

  return {
    subject: `[${SITE.name}] Trip inquiry from ${inquiry.name}`,
    text,
    html,
  };
}

export async function sendInquiryEmail(inquiry: InquiryRequest): Promise<void> {
  if (!isSmtpConfigured()) {
    throw new Error("SMTP is not configured");
  }

  const smtp = getSmtpConfig();
  const transporter = nodemailer.createTransport({
    host: smtp.host,
    port: smtp.port,
    secure: smtp.secure,
    auth: {
      user: smtp.user,
      pass: smtp.pass,
    },
  });

  const { subject, text, html } = buildInquiryEmailContent(inquiry);

  await transporter.sendMail({
    from: getInquiryEmailFrom(),
    to: getInquiryEmailTo(),
    replyTo: inquiry.email,
    subject,
    text,
    html,
  });
}
