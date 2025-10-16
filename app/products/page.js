"use client";
import { useRef, useEffect, useState } from "react";
import styles from "../page.module.css";
import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bnrimage from "../../public/images/home/new/i11fleetbnr.jpg";
import Bnrimage1 from "../../public/images/home/new/feeds to leads hero bnr@2x.png";
// import Bnrimage2 from "../../public/images/home/new/know whereabouts crew hero bnr@2x.webp";
import Bnrimage2 from "../../public/images/home/new/dtibnr.jpg";
import Bnrimage3 from "../../public/images/home/new/how we serve you hero bnr@2x.webp";
import MobBnrimage from "../../public/images/home/new/i11fleetbnr@2x.jpg";
import MobBnrimage1 from "../../public/images/home/new/feeds to leads m@2x.png";
import MobBnrimage2 from "../../public/images/home/new/dump truck it@2x.webp";
import MobBnrimage3 from "../../public/images/home/new/service offerings@2x.webp";
import DTI from "../../public/images/home/new/DumpTruckIt1.png";
import FTL from "../../public/images/home/new/feedsToLeads.png";
import i11 from "../../public/images/home/new/i11fleet.png";
import React, { createRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
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

          // const element3 = document.getElementById('carousel4')
          // if (element3.classList.contains("carousalSliderRight")) {
          //   element3.classList.remove("carousalSliderRight");
          // }
          // element3.classList.add("carousalSliderleft");
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

    // const element3 = document.getElementById('carousel4');
    // if (element3.classList.contains("carousalSliderRight")) {
    //   element3.classList.remove("carousalSliderRight");
    // }
    // element3.classList.add("carousalSliderleft");
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
    // const element3 = document.getElementById('carousel4')
    // if (element3.classList.contains("carousalSliderleft")) {
    //   element3.classList.remove("carousalSliderleft");
    // }
    // element3.classList.add("carousalSliderRight");
    setCheckLoader(false);
  };

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);

  useEffect(() => {
    const carouselElement = document.getElementById("carouselExampleFade");
    if (carouselElement) {
      new bootstrap.Carousel(carouselElement, {
        interval: 3000,
      });
    }
  }, []);

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
                {/* <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button> */}
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
                        src={Bnrimage}
                        className="img-fluid"
                        loading="eager"
                        alt="i11Fleet Banner"
                        title="i11Fleet"
                      />
                    </div>
                    <div
                      className="carousel-caption p-5 carousalSliderleft"
                      id="carousel1"
                    >
                      <div className="leftborder">
                        <h2 className={`${styles.carouselheading} mx-3`}>
                          <span style={{ color: "#F71735" }}>i</span>11Fleet
                        </h2>
                      </div>
                      <div className="pt-xl-5 pt-lg-3">
                        <p className={`${styles.paragraph}`}>
                          Managing fleets is complex. Drivers, brokers, clients,
                          deliveries - it all needs to work together. That’s
                          where <span style={{ color: "#F71735" }}>i</span>11Fleet comes in.
                        </p>
                      </div>
                      <div className="pt-3">
                        <button className="viewall2 ps-0">
                          <Link href="/i11fleet" className="viewallvoiletlink2">
                            Know More
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="card d-none d-md-block d-lg-none">
                    <Image
                      src={Bnrimage}
                      className="img-fluid"
                      loading="eager"
                      alt="i11Fleet Banner"
                      title="i11Fleet"
                    />
                    <div
                      className="card-body"
                      style={{ backgroundColor: "#191E23" }}
                    >
                      <div className="mx-md-5 mx-sm-3 pt-3">
                        <div className="leftborder">
                          <h2 className={`${styles.carouselheading} mx-3`}>
                            <span style={{ color: "#F71735" }}>i</span>11Fleet
                          </h2>
                        </div>
                        <div className="pt-3">
                          <p className={`${styles.paragraph}`}>
                            Managing fleets is complex. Drivers, brokers,
                            clients, deliveries - it all needs to work together.
                            That’s where <span style={{ color: "#F71735" }}>i</span>11Fleet comes in.
                          </p>
                        </div>
                        <div className="pt-3">
                          <button className="viewall2 ps-0">
                            <Link
                              href="/i11fleet"
                              className="viewallvoiletlink2"
                            >
                              Know More
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card d-block d-md-none">
                    <Image
                      src={MobBnrimage}
                      className="img-fluid"
                      loading="eager"
                      alt="i11Fleet Banner"
                      title="i11Fleet"
                    />
                    <div
                      className="card-body"
                      style={{ backgroundColor: "#191E23" }}
                    >
                      <div className="mx-md-5 mx-sm-3 pt-3">
                        <div className="leftborder">
                          <h2 className={`${styles.carouselheading} mx-3`}>
                            <span style={{ color: "#F71735" }}>i</span>11Fleet
                          </h2>
                        </div>
                        <div className="pt-3">
                          <p className={`${styles.paragraph}`}>
                            Managing fleets is complex. Drivers, brokers,
                            clients, deliveries - it all needs to work together.
                            That’s where <span style={{ color: "#F71735" }}>i</span>11Fleet comes in.
                          </p>
                        </div>
                        <div className="pt-3">
                          <button className="viewall2 ps-0">
                            <Link
                              href="/i11fleet"
                              className="viewallvoiletlink2"
                            >
                              Know More
                            </Link>
                          </button>
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
                        src={Bnrimage1}
                        className="img-fluid"
                        loading="eager"
                        alt="FTL Banner"
                        title="Feeds To Leads"
                      />
                    </div>
                    <div
                      className="carousel-caption1 p-5 carousalSliderleft"
                      id="carousel2"
                    >
                      <div className="leftborder">
                        <h1 className={`${styles.carouselheading} mx-3`}>
                          FeedsToLeads
                        </h1>
                      </div>
                      <div className="pt-xl-5 pt-lg-3">
                        <p className={`${styles.paragraph}`}>
                          Less chasing, more closing — that’s the promise of
                          FeedsToLeads.
                        </p>
                      </div>
                      <div className="pt-3">
                        <button className="viewall2 ps-0">
                          <Link
                            href="/feeds-to-leads"
                            className="viewallvoiletlink2"
                          >
                            Know More
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="card d-none d-md-block d-lg-none">
                    <Image
                      src={Bnrimage1}
                      className="img-fluid"
                      loading="eager"
                      alt="FTL Banner"
                      title="Feeds To Leads"
                    />
                    <div
                      className="card-body"
                      style={{ backgroundColor: "#191E23" }}
                    >
                      <div className="mx-md-5 mx-sm-3 pt-3">
                        <div className="leftborder">
                          <h1 className={`${styles.carouselheading} mx-3`}>
                            FeedsToLeads
                          </h1>
                        </div>
                        <div className="pt-3">
                          <p className={`${styles.paragraph}`}>
                            Less chasing, more closing — that’s the promise of
                            FeedsToLeads.
                          </p>
                        </div>
                        <div className="pt-3">
                          <button className="viewall2 ps-0">
                            <Link
                              href="/feeds-to-leads"
                              className="viewallvoiletlink2"
                            >
                              Know More
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card d-block d-md-none">
                    <Image
                      src={MobBnrimage1}
                      className="img-fluid w-100"
                      loading="eager"
                      alt="FTL Banner"
                      title="Feeds To Leads"
                    />
                    <div
                      className="card-body"
                      style={{ backgroundColor: "#191E23" }}
                    >
                      <div className="mx-md-5 mx-sm-3 pt-3">
                        <div className="leftborder">
                          <h1 className={`${styles.carouselheading} mx-3`}>
                            FeedsToLeads
                          </h1>
                        </div>
                        <div className="pt-3">
                          <p className={`${styles.paragraph}`}>
                            Less chasing, more closing — that’s the promise of
                            FeedsToLeads.
                          </p>
                        </div>
                        <div className="pt-3">
                          <button className="viewall2 ps-0">
                            <Link
                              href="/feeds-to-leads"
                              className="viewallvoiletlink2"
                            >
                              Know More
                            </Link>
                          </button>
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
                        src={Bnrimage2}
                        className="img-fluid"
                        loading="eager"
                        alt="DTI Banner"
                        title="DumpTruckIt"
                      />
                    </div>
                    <div
                      className="carousel-caption2 p-5 carousalSliderleft"
                      id="carousel3"
                    >
                      <div className="leftborder">
                        <h1 className={`${styles.carouselheading} mx-3`}>
                          DumpTruckIt
                        </h1>
                      </div>
                      <div className="pt-xl-5 pt-lg-3">
                        <p className={`${styles.paragraph}`}>
                          Meet the mobile app built specifically for dump truck
                          businesses
                        </p>
                      </div>
                      <div className="pt-3">
                        <button className="viewall2 ps-0">
                          <Link
                            href="/dti-dumptruckit"
                            className="viewallvoiletlink2"
                          >
                            Know More
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="card d-none d-md-block d-lg-none">
                    <Image
                      src={Bnrimage2}
                      className="img-fluid"
                      loading="eager"
                      alt="DTI Banner"
                      title="DumpTruckIt"
                    />
                    <div
                      className="card-body"
                      style={{ backgroundColor: "#191E23" }}
                    >
                      <div className="mx-md-5 mx-sm-3 pt-3">
                        <div className="leftborder">
                          <h1 className={`${styles.carouselheading} mx-3`}>
                            DumpTruckIt
                          </h1>
                        </div>
                        <div className="pt-3">
                          <p className={`${styles.paragraph}`}>
                            Meet the mobile app built specifically for dump
                            truck businesses
                          </p>
                        </div>
                        <div className="pt-3">
                          <button className="viewall2 ps-0">
                            <Link
                              href="/dti-dumptruckit"
                              className="viewallvoiletlink2"
                            >
                              Know More
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card d-block d-md-none">
                    <Image
                      src={MobBnrimage2}
                      className="img-fluid w-100"
                      loading="eager"
                      alt="DTI Banner"
                      title="DumpTruckIt"
                    />
                    <div
                      className="card-body"
                      style={{ backgroundColor: "#191E23" }}
                    >
                      <div className="mx-md-5 mx-sm-3 pt-3">
                        <div className="leftborder">
                          <h1 className={`${styles.carouselheading} mx-3`}>
                            DumpTruckIt
                          </h1>
                        </div>
                        <div className="pt-3">
                          <p className={`${styles.paragraph}`}>
                            Meet the mobile app built specifically for dump
                            truck businesses
                          </p>
                        </div>
                        <div className="pt-3">
                          <button className="viewall2 ps-0">
                            <Link
                              href="/dti-dumptruckit"
                              className="viewallvoiletlink2"
                            >
                              Know More
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="carousel-item">
                  <div className="d-none d-lg-block">
                    <div className="Hideimage" style={{ backgroundColor: "#FFFFFF" }}>
                      <Image src={Bnrimage2} className="img-fluid" loading="eager" alt="KWC Banner" title='Know Whereabouts of Crew' />
                    </div>
                    <div className="carousel-caption2 p-5 carousalSliderleft" id="carousel3">
                      <div className="leftborder">
                        <h1 className={`${styles.carouselheading} mx-3`}>KWC</h1>
                        <p className={`${styles.smallheading} mx-3`}><b>K</b>now <b>W</b>hereabouts of<b> C</b>rew</p>
                      </div>
                      <div className="pt-xl-5 pt-lg-3">
                        <p className={`${styles.paragraph}`}>Monitor Your Crew's Whereabouts in Real Time</p>
                      </div>
                      <div className="pt-3"><button className="viewall2 ps-0"><Link href="/know-whereabouts-of-crew" className="viewallvoiletlink2">Know More</Link></button></div>
                    </div>
                  </div>

                  <div className="card d-none d-md-block d-lg-none">
                    <Image src={Bnrimage2} className="img-fluid" loading="eager" alt="KWC Banner" title='Know Whereabouts of Crew' />
                    <div className="card-body" style={{ backgroundColor: "#191E23" }}>
                      <div className="mx-md-5 mx-sm-3 pt-3">
                        <div className="leftborder">
                          <h1 className={`${styles.carouselheading} mx-3`}>KWC</h1>
                          <p className={`${styles.smallheading} mx-3`}><b>K</b>now <b>W</b>hereabouts of<b> C</b>rew</p>
                        </div>
                        <div className="pt-3">
                          <p className={`${styles.paragraph}`}>Monitor Your Crew's Whereabouts in Real Time</p>
                        </div>
                        <div className="pt-3"><button className="viewall2 ps-0"><Link href="/know-whereabouts-of-crew" className="viewallvoiletlink2">Know More</Link></button></div>
                      </div>
                    </div>
                  </div>

                  <div className="card d-block d-md-none">
                    <Image src={MobBnrimage2} className="img-fluid w-100" loading="eager" alt="KWC Banner" title='Know Whereabouts of Crew' />
                    <div className="card-body" style={{ backgroundColor: "#191E23" }}>
                      <div className="mx-md-5 mx-sm-3 pt-3">
                        <div className="leftborder">
                          <h1 className={`${styles.carouselheading} mx-3`}>KWC</h1>
                          <p className={`${styles.smallheading} mx-3`}><b>K</b>now <b>W</b>hereabouts of<b> C</b>rew</p>
                        </div>
                        <div className="pt-3">
                          <p className={`${styles.paragraph}`}>Monitor Your Crew's Whereabouts in Real Time</p>
                        </div>
                        <div className="pt-3"><button className="viewall2 ps-0"><Link href="/know-whereabouts-of-crew" className="viewallvoiletlink2">Know More</Link></button></div>
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* <div className="carousel-item">

                  <div className="d-none d-lg-block">
                    <div className="Hideimage" style={{ backgroundColor: "#FFFFFF" }}>
                      <Image src={Bnrimage3} className="img-fluid" loading="eager" alt="Our Service Banner" title='Service Offerings' />
                    </div>
                    <div className="carousel-caption3 p-5 carousalSliderleft" id="carousel4">
                      <div className="leftborder">
                        <h1 className={`${styles.carouselheading} mx-3`}>SERVICE</h1>
                        <h1 className={`${styles.carouselheading} mx-3`}>OFFERINGS</h1>
                      </div>
                      <div className="pt-xl-5 pt-lg-3">
                        <p className={`${styles.paragraph}`}>Your vision, <br />our execution.</p>
                      </div>
                      <div className="pt-3"><button className="viewall2 ps-0"><Link href="/service-offerings" className="viewallvoiletlink2">Know More</Link></button></div>
                    </div>

                  </div>

                  <div className="card d-none d-md-block d-lg-none">
                    <Image src={Bnrimage3} className="img-fluid" loading="eager" alt="Our Service Banner" title='Service Offerings' />
                    <div className="card-body" style={{ backgroundColor: "#191E23" }}>
                      <div className="mx-md-5 mx-sm-3 pt-3">
                        <div className="leftborder pt-1">
                          <h1 className={`${styles.carouselheading} mx-3`}>SERVICE</h1>
                          <h1 className={`${styles.carouselheading} mx-3`}>OFFERINGS</h1>
                        </div>
                        <div className="pt-3">
                          <p className={`${styles.paragraph}`}>Your vision, <br /> our execution.</p>
                        </div>
                        <div className="pt-3"><button className="viewall2 ps-0"><Link href="/service-offerings" className="viewallvoiletlink2">Know More</Link></button></div>
                      </div>
                    </div>
                  </div>

                  <div className="card d-block d-md-none">
                    <Image src={MobBnrimage3} className="img-fluid w-100" loading="eager" alt="Our Service Banner" title='Service Offerings' />
                    <div className="card-body" style={{ backgroundColor: "#191E23" }}>
                      <div className="mx-md-5 mx-sm-3 pt-3">
                        <div className="leftborder pt-1">
                          <h1 className={`${styles.carouselheading} mx-3`}>SERVICE</h1>
                          <h1 className={`${styles.carouselheading} mx-3`}>OFFERINGS</h1>
                        </div>
                        <div className="pt-3">
                          <p className={`${styles.paragraph}`}>Your vision,<br /> our execution.</p>
                        </div>
                        <div className="pt-3"><button className="viewall2 ps-0"><Link href="/service-offerings" className="viewallvoiletlink2">Know More</Link></button></div>
                      </div>
                    </div>
                  </div>
                </div> */}
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

      <div className="container pt-md-5 pt-2 mx-auto" data-aos="fade-up">
        <div className="row">
          <div className="col-12 col-lg-6 py-2 ">
            <div className={`${styles.vr}`}>
              <h2 className={`${styles.heading} ps-4 mb-0`}>What We</h2>
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
                <p className={`${styles.para1}`}><span style={{ color: "#F71735" }}>i</span>11Fleet</p>
                <p className={`${styles.para3}`}>
                  Managing fleets is complex. Drivers, brokers, clients,
                  deliveries - it all needs to work together. That’s where
                  <span style={{ color: "#F71735" }}>i</span>11Fleet comes in.
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
                  <p className={`${styles.para1}`}><span style={{ color: "#F71735" }}>i</span>11Fleet</p>
                  <p className={`${styles.para3}`}>
                    Managing fleets is complex. Drivers, brokers, clients,
                    deliveries—it all needs to work together. That’s where
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
                    Less chasing, more closing — that’s the promise of Feeds To
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
    </>
  );
}
