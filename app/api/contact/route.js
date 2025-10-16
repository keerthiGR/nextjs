import nodemailer from "nodemailer";

export async function POST(request) {
  const body = await request.json();
  const { name, email, subject, message } = body;

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ success: false, message: "Missing fields" }), { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "keerthiyadhav98@gmail.com",
        pass: "zdts tben imqw xiwu",
      },
    });

    const mailOptions = {
      from: email,
      to: "keerthiyadhav85@gmail.com",
      subject: subject || "New Contact Message",
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true, message: "Email sent successfully!" }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ success: false, message: "Email sending failed" }), { status: 500 });
  }
}
