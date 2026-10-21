import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const EMAIL_USER = process.env.EMAIL_USER || "rohithanfreelance@gmail.com";
const EMAIL_PASS = (process.env.EMAIL_PASS || "utit bskb bqbz bkxj").replace(/\s+/g, "");
const TO_EMAIL = process.env.CONTACT_EMAIL || "rohithanfreelance@gmail.com";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, company, service, message } = await req.json();

    // Basic validation
    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const mailOptions = {
      from: `"Buildora Contact" <${EMAIL_USER}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New Enquiry from ${name} — ${service}`,
      text: `
New Contact Form Submission - Buildora Website

Name: ${name}
Email: ${email}
Mobile: ${phone}
Company: ${company || "N/A"}
Service: ${service}

Message:
${message}
      `.trim(),
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background: #1a1a1a; color: #e8e8e8; padding: 40px 20px; margin: 0 auto; max-width: 620px; border-radius: 8px;">
          <div style="border-bottom: 2px solid #89E900; padding-bottom: 20px; margin-bottom: 28px;">
            <div style="font-family: monospace; font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase; color: #89E900; margin-bottom: 6px;">BUILDORA · INCOMING INQUIRY</div>
            <h1 style="color: #ffffff; font-size: 22px; margin: 0; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase;">
              New Contact Form Submission
            </h1>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 28px;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: rgba(255,255,255,0.5); font-family: monospace; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; width: 130px;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: #ffffff; font-size: 14px; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: rgba(255,255,255,0.5); font-family: monospace; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: #89E900; font-size: 14px;">
                <a href="mailto:${email}" style="color: #89E900; text-decoration: none; font-weight: 600;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: rgba(255,255,255,0.5); font-family: monospace; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase;">Mobile</td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: #ffffff; font-size: 14px;">
                <a href="tel:${phone}" style="color: #ffffff; text-decoration: none;">${phone}</a>
              </td>
            </tr>
            ${company ? `
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: rgba(255,255,255,0.5); font-family: monospace; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase;">Company</td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: #ffffff; font-size: 14px;">${company}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: rgba(255,255,255,0.5); font-family: monospace; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase;">Service</td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08);">
                <span style="background: rgba(137,233,0,0.15); color: #89E900; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; padding: 4px 10px; border: 1px solid rgba(137,233,0,0.3); border-radius: 3px; font-weight: 600;">${service}</span>
              </td>
            </tr>
          </table>

          <div>
            <p style="color: rgba(255,255,255,0.5); font-family: monospace; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 10px;">Message</p>
            <div style="background: rgba(255,255,255,0.04); border-left: 3px solid #89E900; padding: 18px 20px; color: #ffffff; font-size: 14px; line-height: 1.7; border-radius: 0 4px 4px 0;">
              ${message.replace(/\n/g, "<br/>")}
            </div>
          </div>

          <div style="margin-top: 36px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.08); text-align: center;">
            <p style="color: rgba(255,255,255,0.3); font-family: monospace; font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; margin: 0;">
              Buildora · Technology. Strategy. Execution.
            </p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: err?.message || "Failed to send email." }, { status: 500 });
  }
}

