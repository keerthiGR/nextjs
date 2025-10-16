"use client";
import React from "react";
import Image from "next/image";
import styles from "../../app/page.module.css";
import styles1 from "../../app/service-offerings/styles.module.css";
import Style from "./page.module.css";
import duration from "../../public/images/serviceofferings/duration.png";
import teamsize from "../../public/images/serviceofferings/team size.png";
import AIIntegration from "../../public/images/serviceofferings/AI Integration@2x.webp";
import AIIntegrationmob from "../../public/images/serviceofferings/AI Integration-1@2x.webp";
import AppModernization from "../../public/images/serviceofferings/Application Modernization@2x.webp";
import AppModernizationmob from "../../public/images/serviceofferings/Application Modernization-1@2x.webp";
import Strategy from "../../public/images/serviceofferings/Technology Consultation@2x.webp";
import Strategymob from "../../public/images/serviceofferings/Technology Consultation@2x.png";
import CustomSoftware from "../../public/images/serviceofferings/Custom Software Development@2x.webp";
import CustomSoftwaremob from "../../public/images/serviceofferings/Custom Software Development-1@2x.webp";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  AudioWaveform,
  BellRing,
  BookOpen,
  DollarSign,
  MonitorSpeaker,
  MoveRight,
  Network,
  Power,
  Signature,
  Truck,
} from "lucide-react";
import TestimonialCard from "../Testimonial-card/page.js";

export default function ServiceOfferings() {
  const Logistics = [
    {
      imgurl: "/images/serviceofferings/automate.png",
      desc: (
        <text>
          Automated manual ticketing, <b>saving 40% of processing time</b> and
          reducing errors.
        </text>
      ),
      verticalborder: "verticalcolor",
      horizontalborder: "horizontalcolor",
    },
    {
      imgurl: "/images/serviceofferings/tracking.png",
      desc: (
        <text>
          Enhanced <b>real-time tracking,</b> improving operational precision
          and driver monitoring.
        </text>
      ),
      verticalborder: "verticalcolor",
      horizontalborder: "horizontalcolor",
    },
    {
      imgurl: "/images/serviceofferings/analytics.png",
      desc: "Provided comprehensive analytics, identifying optimization opportunities and supporting growth.",
      verticalborder: "",
      horizontalborder: "horizontalcolor",
    },
  ];
  const AI = [
    {
      icon: (
        <Truck
          size={48}
          strokeWidth={2}
          style={{ backgroundColor: "#ffffff", padding: "12px", color: "red" }}
        />
      ),
      desc: (
        <text>
          <b>Smart Load Matching:</b>
          <br></br>
          AI pairs loads with the best carriers automatically.
        </text>
      ),
      verticalborder: "verticalcolor",
      horizontalborder: "horizontalcolor",
    },
    {
      icon: (
        <DollarSign
          size={48}
          strokeWidth={2}
          style={{ backgroundColor: "#ffffff", padding: "12px", color: "red" }}
        />
      ),
      desc: (
        <text>
          <b>Predictive Pricing:</b>
          <br></br>
          Suggests optimal freight rates using AI insights.
        </text>
      ),
      verticalborder: "verticalcolor",
      horizontalborder: "horizontalcolor",
    },
    {
      icon: (
        <AudioWaveform
          size={48}
          strokeWidth={2}
          style={{ backgroundColor: "#ffffff", padding: "12px", color: "red" }}
        />
      ),
      desc: (
        <text>
          <b>Real-Time Tracking:</b>
          <br></br>
          Live shipment tracking with AI route optimization.
        </text>
      ),
      verticalborder: "",
      horizontalborder: "horizontalcolor",
    },
  ];

  const signature = [
    {
      icon: (
        <Signature
          size={48}
          strokeWidth={2}
          style={{ backgroundColor: "#ffffff", padding: "12px", color: "red" }}
        />
      ),
      desc: (
        <text>
          <b>Secure Signing:</b>
          <br></br>
          Legally binding signatures with end-to-end encryption.
        </text>
      ),
      verticalborder: "verticalcolor",
      horizontalborder: "horizontalcolor",
    },
    {
      icon: (
        <MonitorSpeaker
          size={48}
          strokeWidth={2}
          style={{ backgroundColor: "#ffffff", padding: "12px", color: "red" }}
        />
      ),
      desc: (
        <text>
          <b>Multi-Device Access:</b>
          <br></br>
          Sign documents anytime, anywhere, on any device.
        </text>
      ),
      verticalborder: " ",
      horizontalborder: "horizontalcolor",
    },
    {
      icon: (
        <BellRing
          size={48}
          strokeWidth={2}
          style={{ backgroundColor: "#ffffff", padding: "12px", color: "red" }}
        />
      ),
      desc: (
        <text>
          <b>Real-Time Notifications:</b>
          <br></br>
          Get instant updates when documents are signed or pending.
        </text>
      ),
      verticalborder: " ",
      horizontalborder: "horizontalcolor",
    },
  ];

  const dfw = [
    {
      icon: (
        <Power
          size={48}
          strokeWidth={2}
          style={{ backgroundColor: "#ffffff", padding: "12px", color: "red" }}
        />
      ),
      desc: (
        <text>
          <b>Empowerment-Focused Interface:</b>
          <br></br>
          Designed to inspire and support women in tech.
        </text>
      ),
      verticalborder: "verticalcolor",
      horizontalborder: "horizontalcolor",
    },
    {
      icon: (
        <Network
          size={48}
          strokeWidth={2}
          style={{ backgroundColor: "#ffffff", padding: "12px", color: "red" }}
        />
      ),
      desc: (
        <text>
          <b>Mentorship & Networking:</b>
          <br></br>
          Connects members with mentors, peers, and industry leaders.
        </text>
      ),
      verticalborder: "verticalcolor",
      horizontalborder: "horizontalcolor",
    },
    {
      icon: (
        <BookOpen
          size={48}
          strokeWidth={2}
          style={{ backgroundColor: "#ffffff", padding: "12px", color: "red" }}
        />
      ),
      desc: (
        <text>
          <b>Skill-Building Programs:</b>
          <br></br>
          Easy access to STEM workshops, certifications, and resources.
        </text>
      ),
      verticalborder: "",
      horizontalborder: "horizontalcolor",
    },
  ];

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, width: "58px", right: "-50px", top: "20%" }}
        onClick={onClick}
      >
        {" "}
        <Image
          src="/images/serviceofferings/right.png"
          width={48}
          height={48}
          className="img-fluid arrow"
          title="Next"
          alt="Next arrow"
        />
      </div>
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, width: "58px", left: "-50px", top: "20%" }}
        onClick={onClick}
      >
        <Image
          src="/images/serviceofferings/left.png"
          width={48}
          height={48}
          className="img-fluid arrow"
          title="Prev"
          alt="Prev arrow"
        />
      </div>
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const carouselElement = document.getElementById("carouselExampleFade");
    if (carouselElement) {
      new bootstrap.Carousel(carouselElement, {
        interval: 3000,
      });
    }
  }, []);

  const [checkLoader, setCheckLoader] = useState(false);
  useEffect(() => {
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (checkLoader === false) {
      document
        .getElementById("carouselExampleFade")
        .addEventListener("slide.bs.carousel", function () {
          const element = document.getElementById("carousel1");
          if (element) {
            if (element.classList.contains("carousalSliderRight")) {
              element.classList.remove("carousalSliderRight");
            }
            element.classList.add("carousalSliderleft");
          } else {
            console.error("Element with ID 'carousel1' not found.");
          }

          const element1 = document.getElementById("carousel2");
          if (element1.classList.contains("carousalSliderRight")) {
            element1.classList.remove("carousalSliderRight");
          }
          element1.classList.add("carousalSliderleft");

          const element2 = document.getElementById("carousel3");
          if (element2.classList.contains("carousalSliderRight")) {
            element2.classList.remove("carousalSliderRight");
          }
          element2.classList.add("carousalSliderleft");

          const element3 = document.getElementById("carousel4");
          if (element3.classList.contains("carousalSliderRight")) {
            element3.classList.remove("carousalSliderRight");
          }
          element3.classList.add("carousalSliderleft");

          const element4 = document.getElementById("carousel5");
          if (element4.classList.contains("carousalSliderRight")) {
            element4.classList.remove("carousalSliderRight");
          }
          element4.classList.add("carousalSliderleft");

          const element5 = document.getElementById("carousel6");
          if (element5.classList.contains("carousalSliderRight")) {
            element5.classList.remove("carousalSliderRight");
          }
          element5.classList.add("carousalSliderleft");
        });
    }
  };

  const handleclickRight = () => {
    setCheckLoader(true);
    const element = document.getElementById("carousel1");
    if (element.classList.contains("carousalSliderRight")) {
      element.classList.remove("carousalSliderRight");
    }
    element.classList.add("carousalSliderleft");

    const element1 = document.getElementById("carousel2");
    if (element1.classList.contains("carousalSliderRight")) {
      element1.classList.remove("carousalSliderRight");
    }
    element1.classList.add("carousalSliderleft");

    const element2 = document.getElementById("carousel3");
    if (element2.classList.contains("carousalSliderRight")) {
      element2.classList.remove("carousalSliderRight");
    }
    element.classList.add("carousalSliderleft");

    const element3 = document.getElementById("carousel4");
    if (element3.classList.contains("carousalSliderRight")) {
      element3.classList.remove("carousalSliderRight");
    }
    element3.classList.add("carousalSliderleft");

    const element4 = document.getElementById("carousel5");
    if (element4.classList.contains("carousalSliderRight")) {
      element4.classList.remove("carousalSliderRight");
    }
    element4.classList.add("carousalSliderleft");

    const element5 = document.getElementById("carousel6");
    if (element5.classList.contains("carousalSliderRight")) {
      element5.classList.remove("carousalSliderRight");
    }
    element5.classList.add("carousalSliderleft");
    setCheckLoader(false);
  };

  const handleclickLeft = () => {
    setCheckLoader(true);
    const element = document.getElementById("carousel1");
    if (element.classList.contains("carousalSliderleft")) {
      element.classList.remove("carousalSliderleft");
    }
    element.classList.add("carousalSliderRight");

    const element1 = document.getElementById("carousel2");
    if (element1.classList.contains("carousalSliderleft")) {
      element1.classList.remove("carousalSliderleft");
    }
    element1.classList.add("carousalSliderRight");

    const element2 = document.getElementById("carousel3");
    if (element2.classList.contains("carousalSliderleft")) {
      element2.classList.remove("carousalSliderleft");
    }
    element2.classList.add("carousalSliderRight");

    const element3 = document.getElementById("carousel4");
    if (element3.classList.contains("carousalSliderleft")) {
      element3.classList.remove("carousalSliderleft");
    }
    element3.classList.add("carousalSliderRight");

    const element4 = document.getElementById("carousel5");
    if (element4.classList.contains("carousalSliderleft")) {
      element4.classList.remove("carousalSliderleft");
    }
    element4.classList.add("carousalSliderRight");

    const element5 = document.getElementById("carousel6");
    if (element5.classList.contains("carousalSliderleft")) {
      element5.classList.remove("carousalSliderleft");
    }
    element5.classList.add("carousalSliderRight");
    setCheckLoader(false);
  };

  return (
    <>
      {/* carousel */}
      <div className="container-fluid">
        <div className="row">
          <div className="col p-0">
            <div
              id="carouselExampleFade"
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
              data-bs-interval="3000"
              data-bs-pause="false"
            >
              <div
                className={`${styles.mobilehideindicator} carousel-indicators`}
              >
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="3"
                  aria-label="Slide 4"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="4"
                  aria-label="Slide 5"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="5"
                  aria-label="Slide 6"
                ></button>
              </div>

              <div
                className="carousel-inner"
                id="carouselbodysection"
                style={{ backgroundColor: "#191E23", height: "max-contant" }}
              >
                <div className="carousel-item active">
                  <div className="d-none d-lg-block">
                    <div
                      className="Hideimage"
                      style={{ backgroundColor: "#FFFFFF" }}
                    >
                      <Image
                        src={AIIntegration}
                        className="img-fluid"
                        loading="eager"
                        alt="AI Integration and Development"
                        title="AI Integration and Development"
                      />
                    </div>
                    <div
                      className="carousel-captions p-5 carousalSliderleft"
                      id="carousel1"
                    >
                      <div className="leftborder">
                        <h1 className={`${Style.banner_text} mx-4`}>
                          AI Integration and Development
                        </h1>
                      </div>
                    </div>
                  </div>

                  <div className="card d-none d-md-block d-lg-none">
                    <Image
                      src={AIIntegration}
                      className="img-fluid"
                      loading="eager"
                      alt="AI Integration and Development"
                      title="AI Integration and Development"
                    />
                    <div
                      className="card-bodys"
                      style={{ backgroundColor: "#191E23" }}
                    >
                      <div className="mx-md-5 mx-sm-3 pt-3">
                        <div className="leftborder mx-2">
                          <h1 className={`${Style.banner_text} mx-4`}>
                            AI Integration and Development
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card d-block d-md-none">
                    <Image
                      src={AIIntegrationmob}
                      className="img-fluid"
                      loading="eager"
                      alt="AI Integration and Development"
                      title="AI Integration and Development"
                    />
                    <div
                      className="card-bodys"
                      style={{ backgroundColor: "#191E23" }}
                    >
                      <div className="mx-md-5 mx-sm-3 pt-3">
                        <div className="leftborder mx-2">
                          <h1 className={`${Style.banner_text} mx-4`}>
                            AI Integration and Development
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="d-none d-lg-block">
                    <div
                      className="Hideimage"
                      style={{ backgroundColor: "#FFFFFF" }}
                    >
                      <Image
                        src={AppModernization}
                        className="img-fluid"
                        loading="eager"
                        alt="Application Modernization"
                        title="Application Modernization"
                      />
                    </div>
                    <div
                      className="carousel-captions1 p-5 carousalSliderleft"
                      id="carousel2"
                    >
                      <div className="leftborder">
                        <h1 className={`${Style.banner_text} mx-4`}>
                          Application Modernization
                        </h1>
                      </div>
                    </div>
                  </div>

                  <div className="card d-none d-md-block d-lg-none">
                    <Image
                      src={AppModernization}
                      className="img-fluid"
                      loading="eager"
                      alt="Application Modernization"
                      title="Application Modernization"
                    />
                    <div
                      className="card-bodys"
                      style={{ backgroundColor: "#191E23" }}
                    >
                      <div className="mx-md-5 mx-sm-3 pt-3">
                        <div className="leftborder mx-2">
                          <h1 className={`${Style.banner_text} mx-4`}>
                            Application Modernization
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card d-block d-md-none">
                    <Image
                      src={AppModernizationmob}
                      className="img-fluid w-100"
                      loading="eager"
                      alt="Application Modernization"
                      title="Application Modernization"
                    />
                    <div
                      className="card-bodys"
                      style={{ backgroundColor: "#191E23" }}
                    >
                      <div className="mx-md-5 mx-sm-3 pt-3">
                        <div className="leftborder mx-2">
                          <h1 className={`${Style.banner_text} mx-4`}>
                            Application Modernization
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="d-none d-lg-block">
                    <div
                      className="Hideimage"
                      style={{ backgroundColor: "#FFFFFF" }}
                    >
                      <Image
                        src={Strategy}
                        className="img-fluid"
                        loading="eager"
                        alt="Technology Consultation and Strategy"
                        title="Technology Consultation and Strategy"
                      />
                    </div>
                    <div
                      className="carousel-captions4 p-5 carousalSliderleft"
                      id="carousel5"
                    >
                      <div className="leftborder">
                        <h1 className={`${Style.banner_text} mx-4`}>
                          Technology Consultation and Strategy
                        </h1>
                      </div>
                    </div>
                  </div>

                  <div className="card d-none d-md-block d-lg-none">
                    <Image
                      src={Strategy}
                      className="img-fluid"
                      loading="eager"
                      alt="Technology Consultation and Strategy"
                      title="Technology Consultation and Strategy"
                    />
                    <div
                      className="card-bodys"
                      style={{ backgroundColor: "#191E23" }}
                    >
                      <div className="mx-md-5 mx-sm-3 pt-3">
                        <div className="leftborder pt-1 mx-2">
                          <h1 className={`${Style.banner_text} mx-4`}>
                            {" "}
                            Technology Consultation and Strategy
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card d-block d-md-none">
                    <Image
                      src={Strategymob}
                      className="img-fluid w-100"
                      loading="eager"
                      alt="Technology Consultation and Strategy"
                      title="Technology Consultation and Strategy"
                    />
                    <div
                      className="card-bodys"
                      style={{ backgroundColor: "#191E23" }}
                    >
                      <div className="mx-md-5 mx-sm-3 pt-3">
                        <div className="leftborder pt-1 mx-2">
                          <h1 className={`${Style.banner_text} mx-4`}>
                            {" "}
                            Technology Consultation and Strategy
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="d-none d-lg-block">
                    <div
                      className="Hideimage"
                      style={{ backgroundColor: "#FFFFFF" }}
                    >
                      <Image
                        src={CustomSoftware}
                        className="img-fluid"
                        loading="eager"
                        alt="Custom Software Development"
                        title="Custom Software Development"
                      />
                    </div>
                    <div
                      className="carousel-captions5 p-5 carousalSliderleft"
                      id="carousel6"
                    >
                      <div className="leftborder">
                        <h1 className={`${Style.banner_text} mx-4`}>
                          Custom Software Development and Integration
                        </h1>
                      </div>
                    </div>
                  </div>

                  <div className="card d-none d-md-block d-lg-none">
                    <Image
                      src={CustomSoftware}
                      className="img-fluid"
                      loading="eager"
                      alt="Custom Software Development"
                      title="Custom Software Development"
                    />
                    <div
                      className="card-bodys"
                      style={{ backgroundColor: "#191E23" }}
                    >
                      <div className="mx-md-5 mx-sm-3 pt-3">
                        <div className="leftborder pt-1 mx-2">
                          <h1 className={`${Style.banner_text} mx-4`}>
                            Custom Software Development and Integration
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card d-block d-md-none">
                    <Image
                      src={CustomSoftwaremob}
                      className="img-fluid w-100"
                      loading="eager"
                      alt="Custom Software Development"
                      title="Custom Software Development"
                    />
                    <div
                      className="card-bodys"
                      style={{ backgroundColor: "#191E23" }}
                    >
                      <div className="mx-md-5 mx-sm-3 pt-3">
                        <div className="leftborder pt-1 mx-2">
                          <h1 className={`${Style.banner_text} mx-4`}>
                            Custom Software Development and Integration
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="prev"
                onClick={() => {
                  handleclickLeft();
                }}
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="next"
                onClick={() => {
                  handleclickRight();
                }}
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Service Offering */}
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "#F0F4F7" }}
      >
        <div className="container d-lg-block d-none py-4">
          <div className={`${styles.vr}`} data-aos="fade-up">
            <h2 className={`${styles.heading} ps-4`}>Service Offerings</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12 pt-5" data-aos="fade-up">
              <Link
                href="/ai-integration-development/"
                className="text-decoration-none"
              >
                <div className="cards">
                  <Image
                    src="/images/home/ai integration and development.webp"
                    alt="AI Integration and Development"
                    className="img-fluid"
                    height={469}
                    width={378}
                    title="AI Integration and Development"
                  />
                  <div className="intro">
                    <h3 className="text-h2 pt-xl-4 pt-0">
                      AI Integration and Development
                    </h3>
                    <hr className="redline mx-2" />
                    <p className="text-p1 mx-2">
                      Custom AI solutions to enhance productivity,
                      decision-making, and customer engagement.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-md-6 col-12 pt-5" data-aos="fade-up">
              <Link
                href="/application-modernization/"
                className="text-decoration-none"
              >
                <div className="cards">
                  <Image
                    src="/images/home/application modernization.webp"
                    alt="Application Modernization"
                    className="img-fluid"
                    height={469}
                    width={378}
                    title="Application Modernization"
                  />
                  <div className="intro">
                    <h3 className="text-h2 pt-xl-4 pt-0">
                      Application Modernization
                    </h3>
                    <hr className="redline mx-2" />
                    <p className="text-p1 mx-2">
                      Upgrade applications to meet current technological
                      standards and demands.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-md-6 col-12 pt-5" data-aos="fade-up">
              <Link
                href="/technology-consultation-strategy"
                className="text-decoration-none"
              >
                <div className="cards">
                  <Image
                    src="/images/home/technology consultation.webp"
                    alt="Technology Consultation and Strategy"
                    className="img-fluid"
                    height={469}
                    width={378}
                    title="Technology Consultation and Strategy"
                  />
                  <div className="intro">
                    <h3 className="text-h2 pt-xl-4 pt-0">
                      Technology Consultation and Strategy
                    </h3>
                    <hr className="redline mx-2" />
                    <p className="text-p1 mx-2">
                      Strategic guidance for leveraging cutting-edge
                      technologies for business growth.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-md-6 col-12 pt-5" data-aos="fade-up">
              <Link
                href="/custom-software-development-integration/"
                className="text-decoration-none"
              >
                <div className="cards">
                  <Image
                    src="/images/home/custom software development.webp"
                    alt="Custom Software Development"
                    className="img-fluid"
                    height={469}
                    width={378}
                    title="Custom Software Development"
                  />
                  <div className="intro">
                    <h3 className="text-h2 pt-0">
                      Custom Software Development and Integration
                    </h3>
                    <hr className="redline mx-2" />
                    <p className="text-p1 mx-2">
                      Innovative software development and seamless technology
                      integration.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="container d-lg-none d-block py-3 py-md-5">
          <div className={`${styles.vr}`} data-aos="fade-up">
            <h2 className={`${styles.heading} ps-4`}>Service Offerings</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12 pt-5" data-aos="fade-up">
              <Link
                href="/ai-integration-development/"
                className="text-decoration-none"
              >
                <div className="cards">
                  <Image
                    src="/images/home/ai integration and development.webp"
                    alt="AI Integration and Development"
                    className="img-fluid"
                    height={469}
                    width={378}
                    title="AI Integration and Development"
                  />
                  <div className="intro">
                    <h3 className="text-h2 pt-xl-4 pt-0">
                      AI Integration and Development
                    </h3>
                    <hr className="redline mx-2" />
                    <p className="text-p1 mx-2">
                      Custom AI solutions to enhance productivity,
                      decision-making, and customer engagement.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-md-6 col-12 pt-5" data-aos="fade-up">
              <Link
                href="/application-modernization/"
                className="text-decoration-none"
              >
                <div className="cards">
                  <Image
                    src="/images/home/application modernization.webp"
                    alt="Application Modernization"
                    className="img-fluid"
                    height={469}
                    width={378}
                    title="Application Modernization"
                  />
                  <div className="intro">
                    <h3 className="text-h2 pt-xl-4 pt-0">
                      Application Modernization
                    </h3>
                    <hr className="redline mx-2" />
                    <p className="text-p1 mx-2">
                      Upgrade applications to meet current technological
                      standards and demands.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-md-6 col-12 pt-5" data-aos="fade-up">
              <Link
                href="/technology-consultation-strategy"
                className="text-decoration-none"
              >
                <div className="cards">
                  <Image
                    src="/images/home/technology consultation.webp"
                    alt="Technology Consultation and Strategy"
                    className="img-fluid"
                    height={469}
                    width={378}
                    title="Technology Consultation and Strategy"
                  />
                  <div className="intro">
                    <h3 className="text-h2 pt-xl-4 pt-0">
                      Technology Consultation and Strategy
                    </h3>
                    <hr className="redline mx-2" />
                    <p className="text-p1 mx-2">
                      Strategic guidance for leveraging cutting-edge
                      technologies for business growth.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-md-6 col-12 pt-5" data-aos="fade-up">
              <Link
                href="/custom-software-development-integration/"
                className="text-decoration-none"
              >
                <div className="cards">
                  <Image
                    src="/images/home/custom software development.webp"
                    alt="Custom Software Development"
                    className="img-fluid"
                    height={469}
                    width={378}
                    title="Custom Software Development"
                  />
                  <div className="intro">
                    <h3 className="text-h2 pt-0">
                      Custom Software Development and Integration
                    </h3>
                    <hr className="redline mx-2" />
                    <p className="text-p1 mx-2">
                      Innovative software development and seamless technology
                      integration.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div id="bank"></div>
      </div>

      {/* AI, Digital sign and Digital Revamping of DFWATW*/}
      <div className="container-fluid py-5 mb-5 mb-md-0">
        <div className="container pt-md-4 pt-2 mx-auto" data-aos="fade-up">
          <div className="row">
            <div className="col-12 py-2 ">
              <div className={`${styles.vr}`}>
                <h2 className={`${styles.heading1} ps-3 mb-0`}>
                  Here’s what we’ve been up to!
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* AI Powered Load Board */}
        <div
          className="container mt-4 py-4 mx-auto"
          data-aos="fade-up"
          style={{ backgroundColor: "#F0F4F7" }}
        >
          <div className="row mx-auto">
            <div className=" col-lg-4 col-12 ps-3 mx-auto">
              <div className={`${styles1.subheadbold} mb-0 pt-2`}>
                CUSTOM SOFTWARE DEVELOPMENT AND INTEGRATION
              </div>
              <div className={`${styles1.headbold} pt-2 mb-0`}>
                AI Powered Load Board
              </div>
              <div className={`${styles1.miniheadbold} pt-4 mb-0`}>
                PROJECT DURATION
              </div>
              <Image
                src={duration}
                className="img-fluid"
                width={18}
                height={18}
              />
              <span className={`${styles1.para} mb-0 ps-2`}>4 months</span>
              <div className={`${styles1.miniheadbold} pt-4 mb-0`}>
                TEAM SIZE
              </div>
              <Image
                src={teamsize}
                className="img-fluid"
                width={18}
                height={18}
              />
              <span className={`${styles1.para} mb-0 ps-2`}>7 members</span>
            </div>
            <div className="col-lg-8 col-12">
              <div className="row py-3 justify-content-center">
                {AI?.map((item, index) => (
                  <>
                    <div
                      key={index}
                      className="col-12 col-lg-4"
                      id={item.verticalborder}
                    >
                      <div className="h-100 mx-xl-3 pt-lg-0">
                        <div className="pt-3 mb-2">{item.icon}</div>
                        <p className={`${styles1.para} mb-md-3`}>{item.desc}</p>
                        <div id={item.horizontalborder}></div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
              <p
                className={`${styles1.para} mb-0 ps-xl-3`}
                style={{ textDecoration: "underline" }}
              >
                “Move smarter, deliver faster, and let AI drive your logistics.”
              </p>
            </div>
          </div>
        </div>
        {/* APPLICATION MODERNIZATION */}
        <div
          className="container mt-4 py-4 mx-auto"
          data-aos="fade-up"
          style={{ backgroundColor: "#F0F4F7" }}
        >
          <div className="row mx-auto">
            <div className=" col-lg-4 col-12 ps-3 mx-auto">
              <div className={`${styles1.subheadbold} mb-0 pt-2`}>
                APPLICATION MODERNIZATION
              </div>
              <div className={`${styles1.headbold} pt-2 mb-0`}>
                Digital Signature Platform
              </div>
              <div className={`${styles1.miniheadbold} pt-4 mb-0`}>
                PROJECT DURATION
              </div>
              <Image
                src={duration}
                className="img-fluid"
                width={18}
                height={18}
              />
              <span className={`${styles1.para} mb-0 ps-2`}>24 months</span>
              <div className={`${styles1.miniheadbold} pt-4 mb-0`}>
                TEAM SIZE
              </div>
              <Image
                src={teamsize}
                className="img-fluid"
                width={18}
                height={18}
              />
              <span className={`${styles1.para} mb-0 ps-2`}>25 members</span>
            </div>
            <div className="col-lg-8 col-12">
              <div className="row py-3 justify-content-center">
                {signature?.map((item, index) => (
                  <>
                    <div
                      key={index}
                      className="col-12 col-lg-4 "
                      id={item.verticalborder}
                    >
                      <div className="h-100 mx-xl-3 pt-lg-0">
                        <div className="pt-3 mb-2">{item.icon}</div>
                        <p className={`${styles1.para} mb-md-3`}>{item.desc}</p>
                        <div id={item.horizontalborder}></div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
              <p
                className={`${styles1.para} mb-0 ps-xl-3`}
                style={{ textDecoration: "underline" }}
              >
                “Sign with confidence, speed, and security — anytime, anywhere.”
              </p>
            </div>
          </div>
        </div>

        {/* DFW ATW */}
        <div
          className="container mt-4 py-4 mx-auto"
          data-aos="fade-up"
          style={{ backgroundColor: "#F0F4F7" }}
        >
          <div className="row mx-auto">
            <div className=" col-lg-4 col-12 ps-3 mx-auto">
              <div className={`${styles1.subheadbold} mb-0 pt-2`}>
                CUSTOM SOFTWARE DEVELOPMENT AND INTEGRATION
              </div>
              <div className={`${styles1.headbold} pt-2 mb-0`}>
                Digital Revamping of DFWATW
              </div>
              <div className={`${styles1.miniheadbold} pt-4 mb-0`}>
                PROJECT DURATION
              </div>
              <Image
                src={duration}
                className="img-fluid"
                width={18}
                height={18}
              />
              <span className={`${styles1.para} mb-0 ps-2`}>4 months</span>
              <div className={`${styles1.miniheadbold} pt-4 mb-0`}>
                TEAM SIZE
              </div>
              <Image
                src={teamsize}
                className="img-fluid"
                width={18}
                height={18}
              />
              <span className={`${styles1.para} mb-0 ps-2`}>7 members</span>
            </div>
            <div className="col-lg-8 col-12">
              <div className="row py-3 justify-content-center">
                {dfw?.map((item, index) => (
                  <>
                    <div
                      key={index}
                      className="col-12 col-lg-4 "
                      id={item.verticalborder}
                    >
                      <div className="h-100 mx-xl-3 pt-lg-0">
                        <div className="pt-3 mb-2">{item.icon}</div>
                        <p className={`${styles1.para} mb-md-3`}>{item.desc}</p>
                        <div id={item.horizontalborder}></div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
              <p
                className={`${styles1.para} mb-0 ps-xl-3`}
                style={{ textDecoration: "underline" }}
              >
                “Move smarter, deliver faster, and let AI drive your logistics.”
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* add here testimonial sliding cards, write a code for that  */}
      {/* <div className="container-fluid pt-5 mb-5 mb-md-0">
        <div className="container pt-md-4 pt-2 mx-auto" data-aos="fade-up">
          <div className="col-12 py-2">
            <div className={`${styles.vr}`}>
              <h2 className={`${styles.heading1} ps-3 mb-0`}>
                Voices Behind the Results
              </h2>
            </div>
            <TestimonialCard />
          </div>
        </div>
      </div> */}

      {/* Cards */}
      <div className="container d-lg-block d-none py-4">
        <div className={`${styles.vr}`} data-aos="fade-up">
          <h2 className={`${styles.heading} ps-4`}>
            Technology Should Make Life Easier, But Too Often It Doesn’t.
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12 pt-5" data-aos="fade-up">
            <Link
              href="/ai-integration-development/"
              className="text-decoration-none"
            >
              <div className="cards">
                <Image
                  src="/images/home/tech-card1.jpg"
                  alt="AI Integration and Development"
                  className="img-fluid"
                  height={469}
                  width={378}
                  title="AI Integration and Development"
                />
                <div className="intro">
                  <h3 className="text-h3 pt-xl-4 pt-0">
                    Projects spiral out of control, running late and over
                    budget.
                  </h3>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-6 col-12 pt-5" data-aos="fade-up">
            <Link
              href="/application-modernization/"
              className="text-decoration-none"
            >
              <div className="cards">
                <Image
                  src="/images/home/tech-card2.jpg"
                  alt="Application Modernization"
                  className="img-fluid"
                  height={469}
                  width={378}
                  title="Application Modernization"
                />
                <div className="intro">
                  <h3 className="text-h3 pt-xl-4 pt-0">
                    Deliverables are overpromised and underdelivered.
                  </h3>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-6 col-12 pt-5" data-aos="fade-up">
            <Link
              href="/technology-consultation-strategy"
              className="text-decoration-none"
            >
              <div className="cards">
                <Image
                  src="/images/home/tech-card3.jpg"
                  alt="Technology Consultation and Strategy"
                  className="img-fluid"
                  height={469}
                  width={378}
                  title="Technology Consultation and Strategy"
                />
                <div className="intro">
                  <h3 className="text-h3 pt-xl-4 pt-0">
                    Talent is mismatched, onboarding is painful, and teams feel
                    handicapped.
                  </h3>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-6 col-12 pt-5" data-aos="fade-up">
            <Link
              href="/custom-software-development-integration/"
              className="text-decoration-none"
            >
              <div className="cards">
                <Image
                  src="/images/home/tech-card4.jpg"
                  alt="Custom Software Development"
                  className="img-fluid"
                  height={469}
                  width={378}
                  title="Custom Software Development"
                />
                <div className="intro">
                  <h3 className="text-h3 pt-0">
                    Businesses are left juggling multiple partners, processes,
                    and tools — and nothing really fits together.
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="container d-lg-none d-block py-4">
        <div className={`${styles.vr}`} data-aos="fade-up">
          <h2 className={`${styles.heading} ps-4`}>
            Technology Should Make Life Easier, But Too Often It Doesn’t.
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12 pt-5" data-aos="fade-up">
            <Link
              href="/ai-integration-development/"
              className="text-decoration-none"
            >
              <div className="cards">
                <Image
                  src="/images/home/tech-card1.jpg"
                  alt="AI Integration and Development"
                  className="img-fluid"
                  height={469}
                  width={378}
                  title="AI Integration and Development"
                />
                <div className="intro">
                  <h3 className="text-h3 pt-xl-4 pt-0">
                    Projects spiral out of control, running late and over
                    budget.
                  </h3>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-6 col-12 pt-5" data-aos="fade-up">
            <Link
              href="/application-modernization/"
              className="text-decoration-none"
            >
              <div className="cards">
                <Image
                  src="/images/home/tech-card2.jpg"
                  alt="Application Modernization"
                  className="img-fluid"
                  height={469}
                  width={378}
                  title="Application Modernization"
                />
                <div className="intro">
                  <h3 className="text-h3 pt-xl-4 pt-0">
                    Deliverables are overpromised and underdelivered.
                  </h3>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-6 col-12 pt-5" data-aos="fade-up">
            <Link
              href="/technology-consultation-strategy"
              className="text-decoration-none"
            >
              <div className="cards">
                <Image
                  src="/images/home/tech-card3.jpg"
                  alt="Technology Consultation and Strategy"
                  className="img-fluid"
                  height={469}
                  width={378}
                  title="Technology Consultation and Strategy"
                />
                <div className="intro">
                  <h3 className="text-h3 pt-xl-4 pt-0">
                    Talent is mismatched, onboarding is painful, and teams feel
                    handicapped.
                  </h3>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-6 col-12 pt-5" data-aos="fade-up">
            <Link
              href="/custom-software-development-integration/"
              className="text-decoration-none"
            >
              <div className="cards">
                <Image
                  src="/images/home/tech-card4.jpg"
                  alt="Custom Software Development"
                  className="img-fluid"
                  height={469}
                  width={378}
                  title="Custom Software Development"
                />
                <div className="intro">
                  <h3 className="text-h3 pt-0">
                    Businesses are left juggling multiple partners, processes,
                    and tools — and nothing really fits together.
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="d-none d-lg-block pt-5" data-aos="fade-up">
        <p className={`${styles.para3} text-center mb-5`}>
          <MoveRight
            size={30}
            color="#F71735"
            style={{ backgroundColor: "#ffffff", margin: "12px" }}
          />
          At i11Labs, We Take Complete Accountability and Execute Without
          Compromising Quality, Innovation and Creativity
        </p>
      </div>

      {/* mobile screen */}
      <div className="d-block d-lg-none p-3" data-aos="fade-up">
        <p className={`${styles.para3} text-center mb-5`}>
          <MoveRight
            size={24}
            color="#F71735"
            style={{ backgroundColor: "#ffffff", margin: "12px 0px" }}
          />
          At i11Labs, We Take Complete Accountability and Execute Without
          Compromising Quality, Innovation and Creativity
        </p>
      </div>
    </>
  );
}
