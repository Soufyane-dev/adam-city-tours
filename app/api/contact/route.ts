import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, phone, email, tour, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Adam City Tours Website" <${process.env.GMAIL_USER}>`,
      to: "adamcitytours274@gmail.com",
      subject: `Nouvelle réservation — ${tour || "Non précisé"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #b45309;">Nouvelle demande de réservation</h2>
          <table style="width:100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #555;">Nom</td>
              <td style="padding: 8px;">${name || "—"}</td>
            </tr>
            <tr style="background:#f9f9f9;">
              <td style="padding: 8px; font-weight: bold; color: #555;">Téléphone</td>
              <td style="padding: 8px;">${phone || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #555;">Email client</td>
              <td style="padding: 8px;">${email || "—"}</td>
            </tr>
            <tr style="background:#f9f9f9;">
              <td style="padding: 8px; font-weight: bold; color: #555;">Tour sélectionné</td>
              <td style="padding: 8px;">${tour || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #555;">Message</td>
              <td style="padding: 8px;">${message || "—"}</td>
            </tr>
          </table>
          <p style="margin-top: 24px; color: #888; font-size: 12px;">
            Envoyé depuis le formulaire de contact — adamcitytours.com
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
