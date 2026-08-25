"use server";

import nodemailer from "nodemailer";

interface ApplicationData {
  name: string;
  email: string;
  link: string;
  message: string;
  jobTitle: string;
  companyName: string;
}

export async function sendApplication(data: ApplicationData) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: Number(process.env.SMTP_PORT) === 465, 
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.JOB_APPLICATION_EMAIL,
      replyTo: data.email,
      subject: `New Application: ${data.jobTitle} at ${data.companyName}`,
      text: `
You have received a new application for the ${data.jobTitle} position at ${data.companyName}.

Name: ${data.name}
Email: ${data.email}
LinkedIn/Portfolio: ${data.link || "Not provided"}

Message:
${data.message}
      `,
      html: `
        <h2>New Application: ${data.jobTitle} at ${data.companyName}</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>LinkedIn/Portfolio:</strong> ${data.link ? `<a href="${data.link}">${data.link}</a>` : "Not provided"}</p>
        <br/>
        <h3>Message/Intro:</h3>
        <p style="white-space: pre-wrap;">${data.message}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    
    return { success: true };
  } catch (error) {
    console.error("Failed to send application email:", error);
    return { success: false, error: "Failed to send application. Please try again later." };
  }
}
