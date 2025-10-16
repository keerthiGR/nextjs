// // import nodemailer from 'nodemailer';

// // export async function POST(req, res) {
// //   const { firstname, lastname, emailaddress, phonenumber, message } = await req.json();
 
// //   let transporter = nodemailer.createTransport({
// //     service: 'gmail',
// //     auth: {
// //       user: process.env.GMAIL_USER,
// //       pass: process.env.GMAIL_PASS,
// //       // user: "shashinjain81@gmail.com",
// //       // pass: "mify vlrs zbtq scxc",
// //     },
// //   });

// //   let mailOptions = {
// //     from: emailaddress,
// //     to: 'shashinjain81@gmail.com',
// //     subject: `You received a new enquiry`,
// //     text: `
// //       FirstName: ${firstname}
// //       LastName: ${lastname}
// //       Email: ${emailaddress}
// //       Phone Number: ${phonenumber}
// //       Message: ${message}
// //     `,
// //   };

// //   try {
// //     await transporter.sendMail(mailOptions);
// //     return new Response(JSON.stringify({ status: 'Ok', message: 'Email sent successfully' }), { status: 200 });
// //   } catch (error) {
// //     return new Response(JSON.stringify({ status: 'Error', message: error.message }), { status: 500 });
// //   }
// // }




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




// import nodemailer from "nodemailer";



//   if (!name || !email || !message) {
//     return new Response(JSON.stringify({ success: false, message: "Missing fields" }), { status: 400 });
//   }

//   try {
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: "keerthiyadhav98@gmail.com",
//         pass: "zdts tben imqw xiwu",
//       },
//     });

//     const mailOptions = {
//       from: email,
//       to: "keerthiyadhav85@gmail.com",
//       subject: subject || "New Contact Message",
//       text: `
//         Name: ${name}
//         Email: ${email}
//         Message: ${message}
//       `,
//     };

//     await transporter.sendMail(mailOptions);

//     return new Response(JSON.stringify({ success: true, message: "Email sent successfully!" }), { status: 200 });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return new Response(JSON.stringify({ success: false, message: "Email sending failed" }), { status: 500 });
//   }
// }