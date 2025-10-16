import Image from "next/image"
import Link from "next/link"
import styles from "../../app/meta-data-driven-applications/styles.module.css";
import styles1 from "../../components/ai-intagrate&devolop-content/styles.module.css";
import tech from "../../public/images/technology/cloud.webp";

export const metadata = {
    title: "Technology Consultation and Strategy Services by i11Labs",
    description: "Strategic technology consultation and planning by i11Labs. Align your IT initiatives with business goals and drive digital transformation with expert guidance.",
    ogTitle: "Technology Consultation and Strategy Services by i11Labs",
    url: "https://i11labs.com/technology-consultation-strategy",
    ogDescription: "Strategic technology consultation and planning by i11Labs. Align your IT initiatives with business goals and drive digital transformation with expert guidance.",
    ogUrl: "https://i11labs.com/technology-consultation-strategy",
    ogType: "website",
    ogLocale: "en_US",
  };

export default function Technology() {
    
    const datamanagement = [
        {
            img: "/images/technology/1.webp",
            title: "Expert Guidance",
            para: "Our experienced consultants provide expert guidance on a wide range of technology areas, including digital transformation, cloud computing, data management, cybersecurity, and emerging technologies.",
        },
        {
            img: "/images/technology/2.webp",
            title: "Implementation Support",
            para: "We assist with the implementation of your technology strategy, ensuring that projects are executed efficiently and effectively. Our team provides support throughout the process to ensure seamless integration and minimal disruption.",
        },
        {
            img: "/images/technology/3.webp",
            title: "Continuous Improvement",
            para: "Technology is constantly evolving, and so are your business needs. We provide ongoing support and continuously refine your technology strategy to adapt to changing requirements and advancements in technology.",
        },
        {
            img: "/images/technology/4.webp",
            title: "Focus on Innovation",
            para: "We help you stay ahead of the curve by identifying and implementing innovative technologies and practices that drive growth and competitive advantage.",
        },
    ];
    return (
        <>

{/* Banner image */}
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col p-0'>

                        <div className="bg-tech d-none d-sm-block">
                        <h1 className={`${styles.banner_text} mt-5 mb-0`}>Technology Consultation</h1>
                        <h1 className={`${styles.banner_text} `}>and Strategy</h1>
                        </div>
                        <div className="bg-tech-mb d-block d-sm-none">
                            <h1 className={`${styles.banner_text} mt-5 mb-0`}>Technology Consultation </h1>
                            <h1 className={`${styles.banner_text} `}>and Strategy</h1>
                            
                        </div>
                    </div>
                </div>
            </div>


            {/* application and it's purpose */}
            <div className="container-fluid px-3" style={{ backgroundColor: "#F0F4F7" }}>
                <div className="container py-3 ">
                    <div className="row justify-content-center py-md-4 py-2">
                        <div className={`${styles.vr}`}>
                            <h2 className={`${styles.heading} ps-4 mb-0`}>Tailored Technology</h2>
                            <h2 className={`${styles.heading} ps-4`}>Strategies For Business Success</h2>
                        </div>
                    </div>
                </div>
                <div className="container pb-md-5 pb-2 mx-auto" data-aos="fade-up">
                    <div className="row">
                        <div className="col-12 col-lg-6 py-2 ">
                                <Image src={tech} alt="Metadata" title="metadata" width={519} height={441} className="img-fluid" />
                        </div>
                        <div className="col-12 col-lg-6 py-2 pt-md-3 pt-2 pt-lg-0">
                            <span className={`${styles.para2} pt-md-4 pt-2 px-0`}>
                            Technology Consultation and Strategy involve providing expert guidance and strategic planning to help businesses leverage technology effectively. This service encompasses analyzing current IT landscapes, identifying opportunities for improvement, and developing comprehensive technology roadmaps to achieve business goals. It covers areas such as digital transformation, IT infrastructure, software development, data management, and emerging technologies.
                            <ul>
                                <li>Align Technology with Business Goals</li>
                                <li>Optimize IT Investments</li>
                                <li>Stay Competitive</li>
                                <li>Enhance Efficiency</li>
                                <li>Mitigate Risks</li>
                                </ul>   
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Data management */}
            <div className="container-fluid px-3 pb-5">
                <div className="container pt-md-5 pt-2 mx-auto" data-aos="fade-up">
                    <div className="row pt-3">
                        <div className="col-12 col-lg-6 col-xl-5 py-2 ">
                            <div className={`${styles.vr}`}>
                                <h2 className={`${styles.heading} ps-4 mb-0`}>Expert IT</h2>
                                <h2 className={`${styles.heading} ps-4`}>Consultation</h2>
                            </div>
                            <p className={`${styles.stage_mini}`}>
                               <span style={{color:"#F71735"}}>i</span>11 Approach to Technology Consultation and Strategy</p>
                        </div>
                        <div className="col-12 col-lg-6 py-2">
                            <p className={`${styles.para2} pt-md-4 pt-2`}>
                            At <span style={{color:"#F71735"}}>i</span>11Labs, we provide tailored technology consultation and strategic planning to align your IT initiatives with your business goals. Our approach includes a comprehensive assessment, strategic roadmap development, expert guidance, seamless implementation, and continuous improvement, ensuring your organization stays competitive and innovative in a rapidly evolving digital landscape.</p>
                        </div>
                    </div>
                    <div className="row pb-3"  >
                        {datamanagement.map((item, index) => (
                            <div className="col-12 col-md-6 mt-4">
                                <div className="h-100" key={index}>
                                    <div className="p-4 h-100" style={{ backgroundColor: "#F0F4F7" }} >
                                        <Image src={item.img} alt="serve" title="serve" width={96} height={96} />
                                        <p className={`${styles.stage_steps} pt-3`}>{item.title}</p>
                                        <p className={`${styles.para2}`}>{item.para}</p>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
                    

            {/*Let's Connect section */}
                      <div className={`${styles1.connect} container-fluid px-3 py-md-5 py-4`} >
        <div className="container " data-aos="fade-up">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 pt-2  text-center">

              <h2 className={`${styles1.para} `}>Embark on a journey of innovation and responsibility with <span style={{ color: "#F71735" }}>i</span>11Labs.</h2>

            </div>
            </div>
            <div className="row justify-content-center pb-3">
            <div className="col-12 col-md-10  col-lg-8 text-center">
              <p className={`${styles1.para2} py-3 `}>
              Contact us today to explore how our Technology Consultation and Strategy services can help your organization harness the power of technology and achieve your business objectives.
              </p>
              <div className="" data-bs-dismiss="offcanvas">
                <Link href="/contact">
              <button className={`${styles1.commonbtn}`} type="submit" >Let&apos;s Connect</button>
              </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

            </>
            );
}