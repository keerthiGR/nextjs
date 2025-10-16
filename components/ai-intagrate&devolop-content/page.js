
"use client";
import { useState } from "react";
import Image from "next/image"
import Link from "next/link"
import styles from "./styles.module.css"
import integrate from "../../public/images/AI/unsplash.png"
import arrow from "../../public/images/AI/right.svg"

export default function Aritificial() {
  const [show, setShow] = useState(1);

  const Service = [
    {
      img: "/images/AI/1.png",
      title: "Strategic Assessment",
      para: "We initiate by aligning with your business goals, evaluating your data ecosystem, infrastructure readiness, and risk factors. This phase sets the foundation for a tailored strategy that aligns with your unique objectives and constraints.",
    },
    {
      img: "/images/AI/2.png",
      title: "Transforming Potential into Reality",
      para: "Our comprehensive approach empowers your enterprise to leverage the transformative power of generative AI responsibly and effectively. By partnering with i11Labs, you gain access to cutting-edge AI strategies that are ethical, sustainable, and perfectly aligned with your business objectives.",
    },
    {
      img: "/images/AI/3.png",
      title: "Enablement Strategy Components",
      para: "",
    },
  ]
  const faqs = [
    {
      id: "One",
      head: "Strategic Use Case Identification",
      cont1: "Perform a systematic evaluation of potential use cases, considering factors like complexity, data governance, and expected ROI.  ",
      cont2: "Focus on aligning initiatives with revenue enhancement, operational efficiency, and natural adoption within your organizational capabilities.",
    },
    {
      id: "Three",
      head: "Data Optimization",
      cont1: "Assess and enhance your data's readiness, focusing on diversity, relevance, and privacy considerations.  ",
      cont2: "Utilize advanced techniques for data enrichment, ensuring your AI models are fed with quality inputs. ",
    },
    {
      id: "Four",
      head: "Seamless Technical Integration",
      cont1:"Guarantee interoperability with your current systems, tailored for optimal performance and scalability. ",
      cont2: "Design solutions mindful of global and regional operational requirements. ",
    },
    {
      id: "Five",
      head: "Ethical AI Framework",
      cont1: "Establish comprehensive protocols for data privacy, security, and ethical AI use, mitigating risks associated with bias and compliance. ",
      cont2: "Ensure alignment with both industry norms and your core values. ",

    },
    {
      id: "Six",
      head: "Iterative Enhancement and Monitoring",
      cont1: "Engage in continuous evaluation and refinement of AI models to keep pace with the evolving AI landscape.  ",
      cont2: "Implement performance tracking mechanisms for sustained excellence and adaptability. ",

    },


  ];
  const handleClick = (id) => {
    console.log("handle");
    setShow((prev) => (prev === id ? 0 : id));
  };


  return (
    <>
      {/* carousel */}
      <div className='container-fluid'>
        <div className='row'>
          <div className='col p-0'>
            {/* <Image src={DNA} className='img-fluid w-100' alt='our DNA' title='our DNA' /> */}
            <div className="bg-ai d-none d-sm-block">
              <h1 className={`${styles.banner_text} mt-5`}>AI Integration and Development</h1>
            </div>
            <div className="bg-ai-mb d-block d-sm-none">
              <h1 className={`${styles.banner_text} mt-5`}>AI Integration and Development</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid px-3" style={{ backgroundColor: "#F0F4F7" }}>
        <div className="container pt-md-5 pt-2 mx-auto" data-aos="fade-up">
          <div className="row">
            <div className="col-12 col-md-6 py-2 ">
              <div className={`${styles.vr}`}>
                <h2 className={`${styles.heading} ps-4 mb-0`}>Overview On</h2>
                <h2 className={`${styles.heading} ps-4`}>Generative AI</h2>
              </div>
            </div>
            <div className="col-12 col-md-6 py-2">
              <p className={`${styles.para} pt-md-4 pt-2`}>
                Architecting Your Enterprise's Path to Responsible Generative AI Innovation
              </p>
            </div>
          </div>



        </div>
      </div>
     


      <div className="container-fluid px-3" style={{ backgroundColor: "#F0F4F7" }}>
        <div className="container py-md-5 py-2 mx-auto" data-aos="fade-up">
          <div className="row">
            <div className="col-12 col-md-6 py-2 ">
              <div >
                <Image src={integrate} alt="AI integration and integration" title="AI integration and integration" className="img-fluid" />

              </div>
            </div>
            <div className="col-12 col-md-6 py-2 pt-md-3 pt-2 pt-lg-0">
              <p className={`${styles.para2} `}>
                In an era where generative AI is redefining the boundaries of innovation, enterprises stand at the cusp of transformation. This revolution offers
                unprecedented opportunities to enhance customer engagement, streamline operations, and foster innovation. Yet,
                navigating this frontier demands more than technology; it requires a mindful strategy that aligns with ethical
                standards, privacy, and governance.
              </p>
              <p className={`${styles.para2} pt-md-4 pt-2`}>
                At  <span style={{ color: "#F71735" }}>i</span>11Labs, we specialize in guiding organizations through the intricacies of
                generative AI adoption, ensuring a seamless, ethical, and strategic integration. Our Generative AI Technology
                Enablement services are meticulously designed to mesh with your existing frameworks while championing the highest
                ethics and privacy standards.
              </p>
            </div>
          </div>



        </div>
      </div>

      <div className="container-fluid px-3">
        <div className="container pt-lg-5 pt-2 mx-auto" data-aos="fade-up">
          <div className="row">
            <div className="col-12 col-md-4  pt-3 pt-md-5 ">
              <div className={`${styles.vr}`}>
                <h2 className={`${styles.heading} ps-4 mb-0`}>Our</h2>
                <h2 className={`${styles.heading} ps-4`}>Approach</h2>
              </div>
              <div >

              </div>
            </div>
            <div className="col-12 col-lg-8 px-3 pt-3 pt-md-5 pb-5" >
              {Service.map((item, index) => (
                <div className="mt-3 mt-md-5" key={index} >
                  <Image src={item.img} alt="our approach" title="our approach" width={96} height={96}  />
                  <p className={`${styles.para}  pt-2`}>
                    {item.title}
                  </p>
                  <p className={`${styles.para2}  `}>
                    {item.para}
                  </p>
                  <hr className="mt-3" style={{ opacity: "1", color: "#C1D1E0" }} />
                </div>
              ))}


           
                <div
                  className="accordion"

                >
                  {faqs?.map((item) => (
                    <div className={`${styles.accitem}`} key={item.id}>
                      <div className="accordion-header px-0" id={item.id}>
                        <button
                          className={`${styles.accbutton} accordion-button ${show === item.id ? "" : "collapsed"
                            }`}
                          type="button"
                          onClick={() => handleClick(item.id)}
                        >
                          <h2 className={`${styles.msg} `}>{item.head}</h2>
                        </button>
                      </div>
                      <div
                        id={`collapse${item.id}`}
                        className={`accordion-collapse collapse ${show === item.id ? "show" : ""
                          }`}
                        aria-labelledby={item.id}
                        data-bs-parent="#accordionExample"
                      >
                        <ul>
                          <li className={`${styles.para2} accordion-body`}>
                            {item.cont1}
                          </li>
                          <li className={`${styles.para2} accordion-body`}>
                            {item.cont2}
                          </li>
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
      </div>

{/*Let's Connect section */}
      <div className={`${styles.connect} container-fluid px-3 py-md-5 py-4`} >
        <div className="container " data-aos="fade-up">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 pt-2  text-center">

              <h2 className={`${styles.para} `}>Embark on a journey of innovation and responsibility with <span style={{ color: "#F71735" }}>i</span>11Labs.</h2>

            </div>
            </div>
            <div className="row justify-content-center pb-3">
            <div className="col-12 col-md-10  col-lg-8 text-center">
              <p className={`${styles.para2} py-3 `}>
                Contact us today to explore how we can tailor our Generative AI Technology Enablement services to your enterprise's unique pathway towards AI-driven transformation.
              </p>
              <div className="" data-bs-dismiss="offcanvas">
                <Link href="/contact/">
              <button className={`${styles.commonbtn}`} type="submit" >Let&apos;s Connect</button>
              </Link>
              </div>
            
            </div>



          </div>

        </div>
      </div>


    </>
  );
}
