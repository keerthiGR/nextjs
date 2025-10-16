"use client";
import { useRef, useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import Right from "../public/images/home/right.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DTI from "../public/images/home/new/DumpTruckIt1.png";
import FTL from "../public/images/home/new/feedsToLeads.png";
import i11 from "../public/images/home/new/i11fleet.png";
import React, { createRef, Suspense } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import link from "../public/images/home/link.webp";
import linkedin from "../public/images/home/linkedin.webp";
import { Quote } from "lucide-react";

export default function Home() {
  const customSlider2 = createRef();

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />
  };

  const Power = [
    {
      img: "/images/home/DTI.webp",
      title1: "DTI",
      title2: (
        <text>
          <b>D</b>ump<b>T</b>ruck<b>I</b>t
        </text>
      ),
      title3:
        "The ultimate product with seamless and non-clunky interface for dump truck operations.",
      position1: "order-first",
      position2: "order-last",
    },
    {
      img: "/images/home/FTL.webp",
      title1: "FTL",
      title2: (
        <text>
          <b>F</b>eeds <b>T</b>o <b>L</b>eads
        </text>
      ),
      title3:
        "Automate lead generation with AI for targeted prospect identification and improved sales efficiency.",
      position1: "order-last",
      position2: "order-first",
      class: "wrap",
    },

    {
      img: "/images/home/KWC.webp",
      title1: "KWC",
      title2: (
        <text>
          <b>K</b>now <b>W</b>hereabouts of <b>C</b>rew
        </text>
      ),
      title3: "Efficient delivery routes to facilitate optimized scheduling",
      position1: "order-first",
      position2: "order-last",
    },
  ];

  const items = [
    {
      title: "Biju Nair",
      description: "EVP & President",
      img: "/images/home/new/Biju Nair mob.webp",
      mail: "www.bijunair.me",
      url: "/our-dna#biju",
      url2: "https://www.linkedin.com/in/bijunair2000",
    },
    {
      title: "Gertrude Van Horn",
      description: "CIO & Technology Executive",
      img: "/images/home/new/gertrude-van-horn mob.webp",
      mail: "www.gertrudevanhorn.com",
      url: "/our-dna#gvh",
      url2: "https://www.linkedin.com/in/gertrudevanhorn",
    },
  ];

  const service = [
    { link: "/service-offerings#logistic", content: "Logistics", Image: Right },
    { link: "/service-offerings#retail", content: "Retail", Image: Right },
    { link: "/service-offerings#bank", content: "Banking", Image: Right },
    {
      link: "/service-offerings#bank",
      content: "Finance & Securities",
      Image: Right,
    },
  ];
  const Howweserveyou = [
    {
      imgurl: "/images/home/new/product oriented delivery.webp",
      title: "Vision to Product",
      desc: "Some clients walk in with a bold idea but no blueprint. We take that vision, shape it, and deliver a finished product end-to-end.",
      verticalborder: "verticalcolor",
      flag: true,
    },
    {
      imgurl: "/images/home/new/end to end.webp",
      title: "POD Teams",
      desc: "Some already have the roadmap but need the right talent. Our POD teams slot in seamlessly, becoming an extension of your in-house staff.",
      verticalborder: "verticalcolor",
      flag: true,
    },
    {
      imgurl: "/images/home/new/tag team.webp",
      title: "Hybrid Model",
      desc: "Others want the best of both worlds. Hybrid gives you the flexibility to balance speed, cost, and scale — without compromise.",
      verticalborder: "",
      flag: false,
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);

  function Loading() {
    return <h2>🌀 Loading...</h2>;
  }

  const [showFirstLine, setShowFirstLine] = useState(false);
  const [showSecondLine, setShowSecondLine] = useState(false);

  useEffect(() => {
    const isSmallDevice = window.matchMedia("(max-width: 500px)").matches;

    const timers = [
      setTimeout(() => setShowFirstLine(true), isSmallDevice ? 0 : 0),
      setTimeout(() => setShowSecondLine(true), isSmallDevice ? 0 : 3000),
    ];

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col p-0">
            <div className={`${styles.homevideo1}`}>
              <Suspense fallback={<Loading />}>
                <video
                  className={`${styles.video1}`}
                  playsInline
                  autoPlay
                  muted
                  loop
                  preload="auto"
                >
                  <source src="/images/home/Home-video2.mp4" type="video/mp4" />
                </video>
              </Suspense>
              <div className="container">
                <div className={`${styles.homeContent1} ps-2 ps-md-0`}>
                  <div className={`${styles.vr}`}>
                    {showFirstLine && (
                      <h1
                        className={`${styles.carouselheading} ${styles.typewriter} mb-0 mx-3`}
                      >
                        We Turn Ideas into Products
                      </h1>
                    )}
                    <h1
                      className={`${styles.carouselheading} ${styles.typewriters} mx-3 pt-2 pt-md-0 d-none d-md-block`}
                      style={{
                        visibility: showSecondLine ? "visible" : "hidden",
                      }}
                    >
                      We Build Expert IT Teams that Deliver
                    </h1>
                    <h1
                      className={`${styles.carouselheading} mx-3 pt-2 pt-md-0 d-block d-md-none`}
                      data-aos="fade-up"
                    >
                      We Build Expert IT Teams that Deliver
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Powered by intelligence */}
      <div
        className="container-fluid py-3 py-md-5 py-xl-0"
        style={{
          background:
            "transparent linear-gradient(0deg, #F0F4F7 0%, #F0F4F700 100%) 0% 0% no-repeat padding-box",
        }}
        data-aos="fade-up"
      >
        <div className="text-center">
          <h1 className={`${styles.head} mb-0`}>
            Powered by <span style={{ color: "#F71735" }}>i</span>ntelligence
          </h1>
        </div>
      </div>

      <div className="container pt-md-5 pt-2 mx-auto" data-aos="fade-up">
        <div className="row">
          <div className="col-12 col-lg-6 py-2 ">
            <div className={`${styles.vr}`}>
              <h2 className={`${styles.heading} ps-4 mb-0`}>What We </h2>
              <h2 className={`${styles.heading} ps-4`}>Have Built</h2>
              <p className={`${styles.subheading} ps-4 mb-0`}>Our Products</p>
            </div>
          </div>
          <div className="col-12 col-lg-5 py-2 pt-md-3 pt-2 pt-lg-0">
            <p className={`${styles.para} pt-md-4 pt-2`}>
              We are your partner who listens, steps into shoes of the end user
              and then builds tech that actually works in the real world.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-lg-5 py-3 d-lg-block d-none">
        <div className="row align-items-stretch" data-aos="fade-up">
          <div className="col-lg-4 col-md-6 col-12">
            <div
              className="d-flex flex-column h-100"
              style={{ borderRight: "1px solid #C1D1E0", padding: "1.25rem" }}
            >
              <div>
                <p className={`${styles.para1}`}>
                  <span style={{ color: "#F71735" }}>i</span>11Fleet
                </p>
                <p className={`${styles.para3}`}>
                  Managing fleets is complex. Drivers, brokers, clients,
                  deliveries - it all needs to work together. That’s where
                  i11Fleet comes in.
                </p>
              </div>

              <div className="mt-auto pt-3">
                <button className="viewall ps-0">
                  <Link href="/i11fleet" className="viewallvoiletlink">
                    Know More
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div
              className="d-flex flex-column h-100"
              style={{ borderRight: "1px solid #C1D1E0", padding: "1.25rem" }}
            >
              <div>
                <p className={`${styles.para1}`}>FeedsToLeads</p>
                <p className={`${styles.para3}`}>
                  Less chasing, more closing - that’s the promise of Feeds To
                  Leads.
                </p>
              </div>
              <div className="mt-auto pt-3">
                <button className="viewall ps-0">
                  <Link href="/feeds-to-leads" className="viewallvoiletlink">
                    Know More
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div
              className="d-flex flex-column h-100"
              style={{ borderRight: "1px solid #C1D1E0", padding: "1.25rem" }}
            >
              <div>
                <p className={`${styles.para1}`}>DumpTruckIt</p>
                <p className={`${styles.para3}`}>
                  Meet the mobile app built specifically for dump truck
                  businesses.
                </p>
              </div>
              <div className="mt-auto pt-3">
                <button className="viewall ps-0">
                  <Link href="/dti-dumptruckit" className="viewallvoiletlink">
                    Know More
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row py-lg-5 py-3" data-aos="fade-up">
          <div className="col-lg-4 col-md-6 col-12 text-end">
            <Link href="/i11fleet">
              <Image
                src={i11}
                className="img-fluid"
                width={338}
                height={328}
                alt="i11Fleet"
                title="i11Fleet"
              />
            </Link>
          </div>

          <div className="col-lg-4 col-md-6 col-12 text-end">
            <Link href="/feeds-to-leads">
              <Image
                src={FTL}
                className="img-fluid"
                width={328}
                height={318}
                alt="Feeds To Leads"
                title="Feeds To Leads"
              />
            </Link>
          </div>

          <div className="col-lg-4 col-md-6 col-12 text-end">
            <Link href="/dti-dumptruckit">
              <Image
                src={DTI}
                className="img-fluid"
                width={258}
                height={248}
                alt="DumpTruckIt"
                title="DumpTruckIt"
              />
            </Link>
          </div>

          {/* <div className='col-lg-4 col-md-6 col-12 text-end'>
            <Link href="/know-whereabouts-of-crew">
              <Image src={KWC} className='img-fluid' width={278} height={268} alt='Know Whereabouts of Crew' title='Know Whereabouts of Crew' />
            </Link>
          </div> */}
        </div>
      </div>

      <div
        className="container py-lg-5 py-4 d-block d-lg-none"
        data-aos="fade-up"
      >
        <div className="row">
          <div
            className="d-flex"
            style={{ overflowX: "scroll", scrollbarWidth: "none" }}
          >
            <div className="col-lg-4 col-md-6 col-11 h-100 me-3">
              <div className="card">
                <div className="card-bodyies">
                  <p className={`${styles.para1}`}>
                    <span style={{ color: "#F71735" }}>i</span>11Fleet
                  </p>
                  <p className={`${styles.para3}`}>
                    Managing fleets is complex. Drivers, brokers, clients,
                    deliveries - it all needs to work together. That’s where
                    <span style={{ color: "#F71735" }}>i</span>11Fleet comes in.
                  </p>
                  <div className="pt-md-2 pt-2">
                    <button className="viewall ps-0">
                      <Link href="/i11fleet" className="viewallvoiletlink">
                        Know More
                      </Link>
                    </button>
                  </div>
                </div>
                <Link href="/i11fleet">
                  <Image
                    src={i11}
                    className="pt-md-5 pt-4"
                    width={308}
                    height={218}
                    alt="i11Fleet"
                    title="i11Fleet"
                  />
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-11 h-100 me-3">
              <div className="card">
                <div className="card-bodyies">
                  <p className={`${styles.para1}`}>FeedsToLeads</p>
                  <p className={`${styles.para3}`}>
                    Less chasing, more closing - that’s the promise of Feeds To
                    Leads.
                  </p>
                  <div className="pt-md-2 pt-2">
                    <button className="viewall ps-0">
                      <Link
                        href="/feeds-to-leads"
                        className="viewallvoiletlink"
                      >
                        Know More
                      </Link>
                    </button>
                  </div>
                </div>
                <Link href="/feeds-to-leads">
                  <Image
                    src={FTL}
                    className="pt-md-5 pt-4"
                    width={278}
                    height={188}
                    alt="Feeds To Leads"
                    title="Feeds To Leads"
                  />
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-11 h-100 me-3">
              <div className="card">
                <div className="card-bodyies">
                  <p className={`${styles.para1}`}>DumpTruckIt</p>
                  <p className={`${styles.para3}`}>
                    Meet the mobile app built specifically for dump truck
                    businesses
                  </p>
                  <div className="pt-md-2 pt-2">
                    <button className="viewall ps-0">
                      <Link
                        href="/dti-dumptruckit"
                        className="viewallvoiletlink"
                      >
                        Know More
                      </Link>
                    </button>
                  </div>
                </div>
                <Link href="/dti-dumptruckit">
                  <Image
                    src={DTI}
                    className="pt-md-5 pt-4"
                    width={248}
                    height={208}
                    alt="DumpTruckIt"
                    title="DumpTruckIt"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* OUR SERVICE OFFERING */}
      <div className={`${styles.desktopbg} container-fluid py-3`}>
        <div className="container py-md-5 py-4 mx-auto" data-aos="fade-up">
          <div className="row">
            <div className="col-12 col-lg-5 py-2 ">
              <div className={`${styles.vr}`}>
                <h2 className={`${styles.heading} ps-4`}>
                  What We Can Do For You
                </h2>
              </div>
              <p className={`${styles.para} py-md-4 py-2 mb-2 mb-md-auto`}>
                We are the team you call when off-the-shelf doesn’t cut it. We
                come with a strong background in building products and
                professional services so not only we can build products we can
                also build technology teams for you.
              </p>
              {/* <div className="pt-3"><button className="viewall ps-0"><Link href="/service-offerings" className="viewallvoiletlink">Know More</Link></button></div> */}
            </div>

            <div className="col-lg-6 col-md-10 col-9 py-2 pt-4 pt-lg-0">
              {service.map((item, index) => (
                <div
                  className="col-12 col-md-10 col-xl-9 mx-lg-auto"
                  key={index}
                >
                  <Link href={item.link} className="text-decoration-none">
                    <div
                      className={`${styles.movingleft} row py-2 px-4 py-md-3`}
                    >
                      <div>
                        <div className="col-10">
                          <p
                            className={`${styles.subheading} mb-0 mb-md-5`}
                            id={`${styles.mobilemedia}`}
                          >
                            {item.content}
                          </p>
                        </div>

                        <Image
                          src={item.Image}
                          className={`${styles.arrow} col-1 img-fluid float-end pt-md-2`}
                          width="24px"
                          height="24px"
                          alt=""
                        />
                      </div>
                    </div>
                  </Link>
                  <hr
                    className="mt-lg-5 mt-md-4 mt-5"
                    style={{ opacity: "1", color: "#C1D1E0" }}
                  />
                </div>
              ))}
            </div>

            <div className="col-lg-1 col-md-2 col-3 pt-3">
              <Link
                href="/service-offerings"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="text-center"
                  style={{ border: "1px solid #191E23" }}
                >
                  <p className={`${styles.subheading} text-center pt-3`}>I</p>
                  <p className={`${styles.subheading} text-center`}>N</p>
                  <p className={`${styles.subheading} text-center`}>D</p>
                  <p className={`${styles.subheading} text-center`}>U</p>
                  <p className={`${styles.subheading} text-center`}>S</p>
                  <p className={`${styles.subheading} text-center`}>T</p>
                  <p className={`${styles.subheading} text-center`}>R</p>
                  <p className={`${styles.subheading} text-center`}>I</p>
                  <p className={`${styles.subheading} text-center`}>E</p>
                  <p className={`${styles.subheading} text-center`}>S</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

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

        <div className="container d-lg-none d-block py-4">
          <div className={`${styles.vr}`} data-aos="fade-up">
            <h2 className={`${styles.heading} ps-4`}>Service Offerings</h2>
          </div>
          <div className="row">
            {/* <div className='d-flex' style={{ overflowX: 'scroll', scrollbarWidth: 'none' }}> */}
            <div className="col-12 col-sm-6 col-lg-3 pt-5" data-aos="fade-up">
              <Link
                href="/ai-integration-development/"
                className="text-decoration-none"
              >
                <div className="cards">
                  <Image
                    src="/images/home/ai integration and development.webp"
                    alt="AI Integration and Development"
                    className="img-fluid w-100"
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
            <div className="col-12 col-sm-6 col-lg-3 pt-5" data-aos="fade-up">
              <Link
                href="/application-modernization/"
                className="text-decoration-none"
              >
                <div className="cards">
                  <Image
                    src="/images/home/application modernization.webp"
                    alt="Application Modernization"
                    className="img-fluid w-100"
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
                    className="img-fluid w-100"
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
                    className="img-fluid w-100"
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
      </div>

      {/* HOW WE SERVE YOU */}
      <div className="container-fluid py-md-3 py-1">
        <div className="container py-md-3 py-2 mx-auto" data-aos="fade-up">
          <div className="row">
            <div className="col-12 col-lg-5 py-2 ">
              <div className={`${styles.vr}`}>
                <h2 className={`${styles.heading} ps-4 mb-0`}>Your Vision,</h2>
                <h2 className={`${styles.heading} ps-4`}>Our Execution</h2>
                <p className={`${styles.subheading} ps-4 mb-0`}>
                  How We Serve You
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-5 py-2 mx-lg-5 pt-md-3 pt-2 pt-lg-0">
              <p className={`${styles.para} pt-md-4 pt-2`}>
                We deliver customized solutions that align with your business
                process and goals.
              </p>
              <div className="pt-3">
                <button className="viewall ps-0">
                  <Link href="/how-we-serve-you" className="viewallvoiletlink">
                    Know More
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="container-fluid justify-content-center"
          data-aos="fade-up"
        >
          <div className="row pt-2 pt-lg-3 mb-lg-3">
            <div className="col">
              <div className="container py-md-5">
                <div className="row text-center gx-0">
                  {Howweserveyou?.map((item, index) => (
                    <>
                      <div
                        key={index}
                        className="col-12 col-lg-4 col-md-6 py-xl-5"
                        id={item.verticalborder}
                      >
                        <div className="h-100 mx-xl-4 mx-md-3 pt-lg-0 pt-md-3">
                          <Image
                            loading="lazy"
                            src={item.imgurl}
                            alt={item.title}
                            width={128}
                            height={128}
                            className="img-fluid"
                          />
                          <p
                            className={`${styles.imghead} mb-0 mt-3 py-xl-3 text-center`}
                          >
                            {item.title}
                          </p>
                          <p
                            className={`${styles.imgdesc} text-center pt-xl-1 text-center mb-2 mb-md-auto`}
                          >
                            {item.desc}
                          </p>
                        </div>
                      </div>
                      {item.flag && (
                        <hr
                          className="d-md-none d-block"
                          style={{ opacity: "1", color: "#C1D1E0" }}
                        ></hr>
                      )}
                    </>
                  ))}
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
            backgroundImage: "url('/images/home/quote bg.webp')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
            height: "20rem",
          }}
        >
          {/* <p className={`${styles.bgtext2} text-center mt-5`}>
            "IDEAS ARE EASY, <br />
            EXECUTION IS EVERYTHING."
          </p>
          <p className={`${styles.para3} text-center text-white mb-5`}>
            {" "}
            - John Doerr{" "}
          </p> */}
        </div>
      </main>

      {/* mobile screen */}
      <main className="d-block d-lg-none py-3" data-aos="fade-up">
        <div
          className={`${styles.bgimage} container-fluid py-5 `}
          style={{
            backgroundImage: "url('/images/home/quote bg-sm.webp')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
            height: "13rem",
          }}
        >
          {/* <p className={`${styles.bgtext2} text-center  mt-5`}>
            {" "}
            "IDEAS ARE EASY, <br />
            EXECUTION IS EVERYTHING."
          </p>
          <p className={`${styles.para3} text-center text-white mb-5`}>
            {" "}
            - John Doerr{" "}
          </p> */}
        </div>
      </main>
    </>
  );
}
