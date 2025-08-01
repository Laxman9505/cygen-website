/** @format */

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const configs = {
  service: "gmail",
  user: "sales@cygenconsulting.com.au",
  pass: "muoo vuue tkpa aacw",
  port: 587,
  smtpHost: "smtp.gmail.com",
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, company, industry, message } =
      body;

    const transporter = nodemailer.createTransport({
      host: configs.smtpHost,
      port: configs.port,
      secure: false,
      auth: {
        user: configs.user,
        pass: configs.pass,
      },
    });

    const mailOptions = {
      from: configs.user,
      to: "sales@cygenconsulting.com.au",
      subject: `New Enquiry from ${firstName} ${lastName}`,
      html: `
        <h2>New Enquiry Received</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Industry:</strong> ${industry || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p><em>This enquiry was submitted through the Cygen website contact form.</em></p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
