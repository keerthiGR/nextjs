




import nodemailer from "nodemailer";
export async function POST(request) {
  const body = await request.json();
  const { firstname, lastname, emailaddress, phonenumber, message } = body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "keerthiyadhav98@gmail.com",
        pass: "zdts tben imqw xiwu",
      },
    });

    const mailOptions = {
      from: emailaddress,
      to: "keerthiyadhav85@gmail.com",
      subject: "New enquiry from website",
      text: `
        First Name: ${firstname}
        Last Name: ${lastname}
        Email: ${emailaddress}
        Phone Number: ${phonenumber}
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




