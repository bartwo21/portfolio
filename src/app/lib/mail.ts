"use server";

import nodemailer from "nodemailer";

export async function sendMail({
  to,
  name,
  subject,
  body,
}: {
  to: string;
  name: string;
  subject: string;
  body: string;
}) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });
  try {
    const testResult = await transporter.verify();
    console.log("testResult", testResult);
  } catch (error) {
    console.error("error", error);
    return;
  }

  try {
    const sendResult = await transporter.sendMail({
      from: SMTP_EMAIL,
      to,
      subject,
      html: body,
    });
    console.log("sendResult", sendResult);
  } catch (error) {
    console.error("error", error);
  }
}
