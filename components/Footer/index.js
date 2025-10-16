'use client'
import React from "react";
import style from "./footer.module.css"
import Link from "next/link";
import Image from "next/image";
import footerlogo from "../../public/images/home/new/i11 labs logo.webp";

export default function Footer() {

  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <>
      {/* Large Device */}
      <div className={`${style.footerbg} container-fluid`}>
        <div className="row">
          <div className="col pt-5">
            <div className="container">
              <div className="row mb-3">
                <div className="col-lg-1 col-12">
                  <Link href="/"><Image src={footerlogo} className="img-fluid" alt="i11labs" title="i11labs" /></Link>
                </div>
                <div className="col-lg-11 col-12 ps-lg-5 pt-lg-0 pt-5">
                  <div className="row">
                    <div className="col-xl-2 col-lg-3 col-md-6 col-12">
                      <div className={`${style.footerheading}`}>General</div>
                      <div className={`${style.footercontent} pt-3`}><Link href="/" className={`${style.commonlink}`}>Home</Link></div>
                      <div className={`${style.footercontent} pt-3`}><Link href="/our-dna" className={`${style.commonlink}`}>Our DNA</Link></div>
                      <div className={`${style.footercontent} pt-3`}><Link href="/contact" className={`${style.commonlink}`}>Let&apos;s connect</Link></div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-12 pt-4 pt-md-0">
                    <div className={`${style.footerheading}`}><Link href="/products" style={{textDecoration:"none", color:"#191E23"}}>Products</Link></div>
                      <div className={`${style.footercontent} pt-3`}><Link href="/i11fleet" className={`${style.commonlink}`} ><span style={{ color: "#F71735" }}>i</span>11Fleet</Link></div>
                      <div className={`${style.footercontent} pt-3`}><Link href="/feeds-to-leads" className={`${style.commonlink}`} >FeedsToLeads</Link></div>
                      <div className={`${style.footercontent} pt-3`}><Link href="/dti-dumptruckit" className={`${style.commonlink}`}>DumpTruckIt</Link></div>
                      {/* <div className={`${style.footercontent} pt-3`}><Link href="/know-whereabouts-of-crew" className={`${style.commonlink}`}>KWC – Know Whereabout of Crew</Link></div> */}
                    </div>
                    <div className="col-xl-7 col-lg-6 col-12 pt-4 pt-lg-0">
                      <div className="row">
                      <div className={`${style.footerheading}`}><Link href="/service-offerings" style={{textDecoration:"none", color:"#191E23"}}>Service Offerings</Link></div>
                        <div className="col-lg-6">
                          <div className={`${style.footercontent} pt-3`}><Link href="/ai-integration-development/" className={`${style.commonlink}`}>AI Integration and Development</Link></div>
                          <div className={`${style.footercontent} pt-3`}><Link href="/custom-software-development-integration/" className={`${style.commonlink}`} >Custom Software Development and Integration</Link></div>
                        </div>
                        <div className="col-lg-6">
                          <div className={`${style.footercontent} pt-3`}><Link href="/application-modernization/" className={`${style.commonlink}`}>Application Modernization</Link></div>
                          <div className={`${style.footercontent} pt-3`}><Link href="/technology-consultation-strategy/" className={`${style.commonlink}`} >Technology Consultation and Strategy</Link></div>
                        </div>
                      </div>
                    </div>
                  </div>  

                </div>
              </div>
              <div className="row">
              <hr className={`${style.hrclass} my-4`} />
                <div className="col d-md-block d-none">
                  <span className={`${style.footercontent} `}><Link href="/privacy-policy" className={`${style.commonlink}`}>Privacy Policy</Link></span>
                  <span className={`${style.footercontent} mx-3`}><Link href="/terms-and-conditions" className={`${style.commonlink}`}>Terms & Conditions</Link></span>
                </div>
                <div className="col d-md-none d-block mb-3">
                  <div className={`${style.footercontent} mb-2`}><Link href="/privacy-policy" className={`${style.commonlink}`}>Privacy Policy</Link></div>
                  <div className={`${style.footercontent} `}><Link href="/terms-and-conditions" className={`${style.commonlink}`}>Terms & Conditions</Link></div>
                </div>
                <div className="col-md-6 col-12">
                  <div className={`${style.footercontent} text-sm-end pb-4`}>© 2024 <span style={{color:"#F71735"}}>i</span>11 Labs.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
