import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, message } = body;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: process.env.USER_EMAIL,
      to: process.env.USER_EMAIL,
      subject: email,
      text: message,
    });

    console.log("Message Submitted!!");
    return NextResponse.json(info);
  } catch (error) {
    console.error("Error sending message:", error);
    return NextResponse.error();
  }
}
