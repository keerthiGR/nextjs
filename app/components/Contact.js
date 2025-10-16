"use client";
import styles from "../../app/page.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Calendar, Clock, Mail, MapPin, Phone } from "lucide-react";
// import BookingSidebar from "../booking-sidebar/page.js";
import BookingSidebar from "../../components/booking-sidebar/page";
import { useState } from "react";

const Contact = () => {
  const router = useRouter();
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const validationSchema = Yup.object({
    firstname: Yup.string()
      .required("Please fill out this field")
      .min(3, "Minimum 3 characters"),
    lastname: Yup.string()
      .required("Please fill out this field")
      .min(1, "Minimum 1 character"),
    emailaddress: Yup.string()
      .email("Please enter a valid email address")
      .required("Please enter an email address")
      .matches(
        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,}$/,
        "Please enter a valid email address"
      ),
    phonenumber: Yup.string()
      .min(10, "Please enter a valid phone number")
      .max(20, "Please enter a valid phone number")
      // .matches(/^[0-9]{10}$/, 'Please enter a valid 10-digit phone number')
      .required("Please enter a phone number"),
    message: Yup.string()
      .required("Please fill out this field")
      .min(5, "Minimum 5 characters"),
  });

  // const formik = useFormik({
  //   initialValues: {
  //     firstname: "",
  //     lastname: "",
  //     emailaddress: "",
  //     phonenumber: "",
  //     message: "",
  //   },
  //   validationSchema,
  //   onSubmit: async (values) => {
  //     try {
  //       console.log("", values); // Debugging submission values
  //       // const response = await fetch(
  //       //   "https://www.i11labs.com/i11nodeemail/api/emailService/i11contact",
  //       //   {
  //       //     method: "POST",
  //       //     headers: {
  //       //       "Content-Type": "application/json",
  //       //     },
  //       //     body: JSON.stringify(values),
  //       //   }
  //       // );
  //       const response = await fetch("/api/contact", {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify(values),
  //       });

  //       const res = await response.json();
  //       console.log("", res); // Debugging response

  //       if (res.status === "Ok" || res.message === "Email Sent Successfully") {
  //         document.getElementById("contactform").reset();
  //         console.log(""); // Debugging navigation
  //         router
  //           .push("/contact-thank")
  //           .then(() => {
  //             console.log("");
  //           })
  //           .catch((err) => {
  //             console.error("", err);
  //           });
  //       } else {
  //         console.error("", res.message);
  //       }
  //     } catch (error) {
  //       console.error("", error);
  //     }
  //   },
  // });

  const formik = useFormik({
  initialValues: {
    firstname: "",
    lastname: "",
    emailaddress: "",
    phonenumber: "",
    message: "",
  },
  validationSchema,
  onSubmit: async (values, { resetForm }) => {
    try {
      console.log("Submitting form values:", values);
      
      // Use relative path - this should work in both local and production
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      console.log("Response status:", response.status);
      console.log("Response ok:", response.ok);

      // Check if response is OK before parsing JSON
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const res = await response.json();
      console.log("API Response:", res);

      if (res.success || res.status === "Ok" || res.message === "Email sent successfully!") {
        resetForm();
        console.log("Form submitted successfully, navigating to thank you page");
        router.push("/contact-thank");
      } else {
        console.error("Server returned error:", res.message);
        alert(`Failed to send message: ${res.message}`);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Failed to send message. Please try again or contact us directly.");
    }
  },
});

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col p-0">
            <div className="bg-con d-none d-sm-block">
              <h1 className={`${styles.banner_text1} mt-5`}>Connect With Us</h1>
            </div>
            <div className="bg-con-mb d-block d-sm-none">
              <h1 className={`${styles.banner_text1} mt-5`}>Connect With Us</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid" style={{ backgroundColor: "#ffffffff" }}>
        <div className="container pt-md-5 pt-2 mx-auto" data-aos="fade-up">
          <div className="row gy-4 py-5">
            {/* Card 1 */}
            <div className="col-12 col-md-4">
              <div
                className="p-4 h-100"
                style={{
                  border: "1px solid #E2E4E9",
                  boxShadow: "0px 4px 6px -1px #14181F1A",
                }}
              >
                <Mail
                  size={50}
                  color="#F71735"
                  style={{
                    backgroundColor: "#F9FAFB",
                    marginBottom: "12px",
                    padding: "12px",
                    borderRadius: "4px",
                  }}
                />
                <p className={`${styles.para5} mb-0`}>Send Us an Email</p>
                <p className={`${styles.para3} pt-1`}>connect@i11labs.com</p>
                <div className="row justify-content-center">
                  <div className="col-12 col-md-12 col-xl-12 pt-4 pt-xl-3">
                    <a
                      href="mailto:connect@i11labs.com?subject=Inquiry%20from%20Website&body=Hi%20i11Labs%2C%0A"
                      className={`${styles.btn1}`}
                      style={{
                        textDecoration: "none",
                        display: "inline-block",
                        alignContent: "center",
                      }}
                    >
                      Send Message
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-12 col-md-4">
              <div
                className="p-4 h-100"
                style={{
                  border: "1px solid #E2E4E9",
                  boxShadow: "0px 4px 6px -1px #14181F1A",
                }}
              >
                <Phone
                  size={50}
                  color="#F71735"
                  style={{
                    backgroundColor: "#F9FAFB",
                    marginBottom: "12px",
                    padding: "12px",
                    borderRadius: "4px",
                  }}
                />
                <p className={`${styles.para5} mb-0`}>Call Us</p>
                <p className={`${styles.para3} pt-1`}>+1 (510) 857-9196</p>
                <div className="row justify-content-center">
                  <div className="col-12 col-md-12 col-xl-12 pt-4 pt-xl-3">
                    <a
                      href="tel:+15108579196"
                      className={`${styles.btn1}`}
                      style={{
                        textDecoration: "none",
                        display: "inline-block",
                        alignContent: "center",
                      }}
                    >
                      Start Call
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            {/* Card 3 - Updated Book Appointment Card */}
            <div className="col-12 col-md-4">
              <div
                className="p-4 h-100"
                style={{
                  border: "1px solid #E2E4E9",
                  boxShadow: "0px 4px 6px -1px #14181F1A",
                }}
              >
                <Calendar
                  size={50}
                  color="#F71735"
                  style={{
                    backgroundColor: "#F9FAFB",
                    marginBottom: "12px",
                    padding: "12px",
                    borderRadius: "4px",
                  }}
                />
                <p className={`${styles.para5} mb-0`}>Book an Appointment</p>
                <p className={`${styles.para3} pt-1`}>
                  Schedule a call with our team
                </p>
                <div className="row justify-content-center">
                  <div className="col-12 col-md-12 col-xl-12 pt-4 pt-xl-3">
                    <button
                      className={`${styles.btn1}`}
                      onClick={() => setIsBookingOpen(true)}
                    >
                      Schedule Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Send Us a Message */}
      <div className="container-fluid" style={{ backgroundColor: "#ffffffff" }}>
        <div className="container pt-md-5 pt-2 mx-auto" data-aos="fade-up">
          <div className="row mb-1 justify-content-center">
            <div className="col-12 col-lg-6 py-2 ps-sm-0 ps-4">
              <h2 className={`${styles.subheading2} mb-0`}>
                Send Us a Message
              </h2>
              <p className={`${styles.paragraph4} pt-3`}>
                Fill out the form below and we'll respond as soon as possible
              </p>
            </div>
          </div>

          <div className="row gy-4 py-1 justify-content-center">
            {/* Card 1 */}
            <div className="col-12 col-md-8">
              <div
                className="p-4 h-100"
                style={{
                  backgroundColor: "#ffffffff",
                  border: "1px solid #E2E4E9",
                  boxShadow: "0px 4px 6px -1px #14181F1A",
                }}
              >
                <form
                  onSubmit={formik.handleSubmit}
                  id="contactform"
                  autoComplete="off"
                >
                  <div className="row d-flex justify-content-evenly">
                    <div className="col-12 col-md-6 col-xl-6 px-3">
                      <div className="form_group">
                        <label htmlFor="firstname" className="form-label">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                          aria-label="First name"
                          name="firstname"
                          autoComplete="off"
                          value={formik.values.firstname}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                      </div>
                      {formik.errors.firstname && formik.touched.firstname && (
                        <p className="errors pt-2 mb-0">
                          {formik.errors.firstname}
                        </p>
                      )}
                    </div>
                    <div className="col-12 col-md-6 col-xl-6 px-3">
                      <div className="form_group">
                        <label htmlFor="lastname" className="form-label">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                          name="lastname"
                          autoComplete="off"
                          value={formik.values.lastname}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                      </div>
                      {formik.errors.lastname && formik.touched.lastname && (
                        <p className="errors pt-2 mb-0">
                          {formik.errors.lastname}
                        </p>
                      )}
                    </div>
                    <div className="col-12 col-md-6 col-xl-6 px-3">
                      <div className="form_group">
                        <label htmlFor="emailaddress" className="form-label">
                          Email Address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email Address"
                          autoComplete="off"
                          name="emailaddress"
                          value={formik.values.emailaddress}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                      </div>
                      {formik.errors.emailaddress &&
                        formik.touched.emailaddress && (
                          <p className="errors pt-2 mb-0">
                            {formik.errors.emailaddress}
                          </p>
                        )}
                    </div>
                    <div className="col-12 col-md-6 col-xl-6 px-3">
                      <div className="form_group">
                        <label htmlFor="phonenumber" className="form-label">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="Phone No"
                          autoComplete="off"
                          name="phonenumber"
                          value={formik.values.phonenumber}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                      </div>
                      {formik.errors.phonenumber &&
                        formik.touched.phonenumber && (
                          <p className="errors pt-2 mb-0">
                            {formik.errors.phonenumber}
                          </p>
                        )}
                    </div>
                    <div className="col-12 col-md-12 col-xl-12 px-3">
                      <div className="form_group">
                        <label htmlFor="message" className="form-label">
                          Message
                        </label>
                        <textarea
                          type="text"
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          name="message"
                          placeholder="Tell us more about your project or inquiry..."
                          autoComplete="off"
                          value={formik.values.message}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          rows="3"
                          style={{ resize: "none" }}
                        ></textarea>
                      </div>
                      {formik.errors.message && formik.touched.message && (
                        <p className="errors pt-2 mb-0">
                          {formik.errors.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-12 col-md-12 col-xl-12 pt-4 pt-xl-3">
                      <button
                        className={`${styles.btn1} `}
                        type="submit"
                        htef="#"
                      >
                        Let's Connect
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid" style={{ backgroundColor: "#ffffffff" }}>
        <div className="container pt-md-5 pt-2 mx-auto" data-aos="fade-up">
          <div className="row gy-4 py-5">
            {/* Card 1 */}
            <div className="col-12 col-md-6">
              {/* Google Map - Dallas Location */}
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <iframe
                  title="Dallas Location"
                  src="https://www.google.com/maps?q=8105+Rasor+Blvd,+Plano,+TX,+Dallas,+USA&z=12&output=embed"
                  width="100%"
                  height="320"
                  style={{ border: "1px solid black", borderRadius: "8px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                <iframe
                  title="Bengaluru Location"
                  src="https://www.google.com/maps?q=17,+19th+H+Main,+1st+Block,+Rajajinagar,+Bangalore,+Karnataka,+India+560010&z=12&output=embed"
                  width="100%"
                  height="320"
                  style={{
                    border: "1px solid black",
                    borderRadius: "8px",
                    marginTop: "16px",
                  }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Visit Us */}
            <div className="col-12 col-md-6">
              <div className="h-100" style={{ backgroundColor: "#ffffffff" }}>
                <p className={`${styles.para5} mb-0`}>
                  Where Innovation Happens - Visit Our Offices
                </p>
                <p className={`${styles.para3} pt-3`}>
                  Drop by for a coffee and let's discuss how we can work
                  together.
                </p>

                {/* card1 */}
                <div className="col-12 col-md-12">
                  <div
                    className="p-3 h-100 d-flex align-items-start"
                    style={{
                      backgroundColor: "#F9FAFB",
                      border: "1px solid #E2E4E9",
                      gap: "16px",
                    }}
                  >
                    <MapPin
                      size={40}
                      color="#594DE6"
                      style={{
                        backgroundColor: "#594DE61A",
                        padding: "10px",
                        borderRadius: "6px",
                        marginTop: "10px",
                        flexShrink: 0,
                      }}
                    />
                    <div className="d-flex flex-column">
                      <p className={`${styles.para8} mb-1`}>
                        Headquarters – USA
                      </p>
                      <p className={`${styles.paragraph6} mb-0`}>
                        8105 Rasor Blvd, Plano, TX, Dallas
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-12 mt-3">
                  <div
                    className="p-3 h-100 d-flex align-items-start"
                    style={{
                      backgroundColor: "#F9FAFB",
                      border: "1px solid #E2E4E9",
                      gap: "16px",
                    }}
                  >
                    <MapPin
                      size={40}
                      color="#594DE6"
                      style={{
                        backgroundColor: "#594DE61A",
                        padding: "10px",
                        borderRadius: "6px",
                        marginTop: "10px",
                        flexShrink: 0,
                      }}
                    />
                    <div className="d-flex flex-column">
                      <p className={`${styles.para8} mb-1`}>India Office</p>
                      <p className={`${styles.paragraph6} mb-0`}>
                        17, 19th H Main, 1st Block, Rajajinagar, Bangalore –
                        560010, Karnataka, India.
                      </p>
                    </div>
                  </div>
                </div>

                {/* card2 */}
                <div className="col-12 col-md-12 mt-3">
                  <div
                    className="p-3 h-100 d-flex align-items-start"
                    style={{
                      backgroundColor: "#F9FAFB",
                      border: "1px solid #E2E4E9",
                      gap: "16px",
                    }}
                  >
                    <Clock
                      size={40}
                      color="#B152E0"
                      style={{
                        backgroundColor: "#B152E01A",
                        padding: "10px",
                        marginTop: "10px",
                        borderRadius: "6px",
                        flexShrink: 0,
                      }}
                    />
                    <div className="d-flex flex-column">
                      <p className={`${styles.para8} mb-1`}>Business Hours</p>
                      <p className={`${styles.paragraph6} mb-0`}>
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday: 10:00 AM - 4:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                {/* card3 */}
                <div className="col-12 col-md-12 mt-3">
                  <div
                    className="p-3 h-100 d-flex align-items-start"
                    style={{
                      backgroundColor: "#F9FAFB",
                      border: "1px solid #E2E4E9",
                      gap: "16px",
                    }}
                  >
                    <Mail
                      size={40}
                      color="#33CC80"
                      style={{
                        backgroundColor: "#33CC801A",
                        padding: "10px",
                        marginTop: "10px",
                        borderRadius: "6px",
                        flexShrink: 0,
                      }}
                    />
                    <div className="d-flex flex-column">
                      <p className={`${styles.para8} mb-1`}>Email & Phone</p>
                      <p className={`${styles.paragraph6} mb-0`}>
                        connect@i11labs.com
                        <br />
                        +1 (510) 857-9196
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="d-none d-lg-block py-5" data-aos="fade-up">
        <div
          className={`${styles.bgimage} container-fluid py-5 `}
          style={{
            backgroundImage: "url('/images/i11fleet/Edge-bg.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <p className={`${styles.bgtext2} text-center text-black mt-5`}>
            Follow Us
          </p>
          <p className={`${styles.para3} text-center text-black mb-5`}>
            Stay connected and get the latest updates
          </p>
          <div className="col-12 col-md-12 mt-3 d-flex justify-content-center gap-3">
            <Link
              href="https://www.linkedin.com/company/www.i11labs.com/posts/?feedView=all"
              target="_blank"
            >
              <Image
                src="/images/home/new/Linkedin.png"
                alt="Linkedin"
                title="Linkedin"
                className="img-fluid"
                width={150}
                height={50}
              />
            </Link>

            <Link href="https://x.com/i11labs" target="_blank">
              <Image
                src="/images/home/Twitter.png"
                alt="Twitter"
                title="Twitter"
                className="img-fluid"
                width={140}
                height={39}
              />
            </Link>

            <Link
              href="https://www.instagram.com/i11labs_team?igsh=MW52djRxNHRjZ2lmcw=="
              target="_blank"
            >
              <Image
                src="/images/home/Instagram.png"
                alt="Instagram"
                title="Instagram"
                className="img-fluid"
                width={150}
                height={80}
              />
            </Link>
          </div>
        </div>
      </main>

      {/* <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-lg-4 col-md-5 col-12 p-5" id="bgcolorsection">
            <div className="bgcolorposition pt-5 pt-md-0">
              <div className={`${styles.vr}`}>
                <h2 className={`${styles.heading} ps-4 mb-0`}>Reach Us</h2>
              </div>
              <div className="pt-5 pt-md-3">
                <p className={`${styles.para} mb-0`}>
                  <Link
                    style={{ textDecoration: "none", color: "#191E23" }}
                    href="tel: (915) 235-9076"
                    rel="noreferrer"
                    target="_blank"
                  >
                    (915) 235-9076{" "}
                  </Link>
                </p>
                <p className={`${styles.para} mb-0`}>
                  <Link
                    style={{ textDecoration: "none", color: "#191E23" }}
                    href="mailto: connect@i11labs.com"
                    rel="noreferrer"
                    target="_blank"
                  >
                    connect@i11labs.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div
            className="offset-lg-2 col-lg-6 col-md-7 col-12 p-lg-5 pt-5 pt-md-0"
            id="contactpad"
          >
            <div className={`${styles.vr}`}>
              <h2 className={`${styles.heading} ps-4 mb-0`}>Write To Us</h2>
              <p className={`${styles.subheading} ps-4 mb-0`}>
                We would love to hear from you!
              </p>
            </div>
            <div className="row">
              <div className="col">
                <form
                  onSubmit={formik.handleSubmit}
                  id="contactform"
                  autoComplete="off"
                >
                  <div className="row">
                    <div className="col-12 col-md-6 col-xl-5">
                      <div className="form_group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                          aria-label="First name"
                          name="firstname"
                          autoComplete="off"
                          value={formik.values.firstname}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                      </div>
                      {formik.errors.firstname && formik.touched.firstname && (
                        <p className="errors pt-2 mb-0">
                          {formik.errors.firstname}
                        </p>
                      )}
                    </div>
                    <div className="col-12 col-md-6 col-xl-5">
                      <div className="form_group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                          name="lastname"
                          autoComplete="off"
                          value={formik.values.lastname}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                      </div>
                      {formik.errors.lastname && formik.touched.lastname && (
                        <p className="errors pt-2 mb-0">
                          {formik.errors.lastname}
                        </p>
                      )}
                    </div>
                    <div className="col-12 col-md-6 col-xl-5">
                      <div className="form_group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email Address"
                          autoComplete="off"
                          name="emailaddress"
                          value={formik.values.emailaddress}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                      </div>
                      {formik.errors.emailaddress &&
                        formik.touched.emailaddress && (
                          <p className="errors pt-2 mb-0">
                            {formik.errors.emailaddress}
                          </p>
                        )}
                    </div>
                    <div className="col-12 col-md-6 col-xl-5">
                      <div className="form_group">
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="Phone No"
                          autoComplete="off"
                          name="phonenumber"
                          value={formik.values.phonenumber}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                      </div>
                      {formik.errors.phonenumber &&
                        formik.touched.phonenumber && (
                          <p className="errors pt-2 mb-0">
                            {formik.errors.phonenumber}
                          </p>
                        )}
                    </div>
                    <div className="col-12 col-md-12 col-xl-10">
                      <div className="form_group">
                        <textarea
                          type="text"
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          name="message"
                          placeholder="Your Message"
                          autoComplete="off"
                          value={formik.values.message}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          rows="3"
                          style={{ resize: "none" }}
                        ></textarea>
                      </div>
                      {formik.errors.message && formik.touched.message && (
                        <p className="errors pt-2 mb-0">
                          {formik.errors.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-12 col-xl-10 pt-4 pt-xl-5">
                      <button
                        className={`${styles.btn} `}
                        type="submit"
                        htef="#"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <BookingSidebar
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
};
export default Contact;
