import Image from "next/image"
import Link from "next/link"
import styles from "./styles.module.css";
import styles1 from "../../components/ai-intagrate&devolop-content/styles.module.css";
import metadatas from "../../public/images/metadata/metadata.webp";

export const metadata = {
    title: "Meta Data Driven Applications - Dynamic Solutions by i11Labs",
    description: "Discover the power of metadata with i11Labs. Our meta data driven applications enhance flexibility, scalability, and data management for your business.",
    ogTitle: "Meta Data Driven Applications - Dynamic Solutions by i11Labs",
    url: "https://i11labs.com/meta-data-driven-applications",
    ogDescription: "Discover the power of metadata with i11Labs. Our meta data driven applications enhance flexibility, scalability, and data management for your business.",
    ogUrl: "https://i11labs.com/meta-data-driven-applications",
    ogType: "website",
    ogLocale: "en_US",
  };


export default function SoftwareDevelopment() {
    
    const datamanagement = [
        {
            img: "/images/metadata/1.webp",
            title: "Comprehensive Assessment",
            para: "We begin with a thorough assessment of your existing data landscape and application architecture. This includes identifying key data sources, data models, and business requirements to understand how metadata can best be leveraged.",
        },
        {
            img: "/images/metadata/2.webp",
            title: "Metadata Strategy Development",
            para: "Based on the assessment, we develop a tailored metadata strategy that aligns with your business goals. This strategy outlines the structure, governance, and management of metadata within your organization.",
        },
        {
            img: "/images/metadata/3.webp",
            title: "Metadata Repository Implementation",
            para: "We implement a centralized metadata repository that serves as the backbone for your meta data driven applications. This repository stores and manages all metadata, ensuring consistency and accessibility.",
        },
        {
            img: "/images/metadata/4.webp",
            title: "Application Development",
            para: "Using the metadata repository, we build or refactor applications to be metadata-driven. This involves designing the application logic to interpret and act upon metadata, enabling dynamic and flexible behavior.",
        },
    ];
    return (
        <>

{/* Banner image */}
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col p-0'>

                        <div className="bg-meta d-none d-sm-block">
                        <h1 className={`${styles.banner_text} mt-5 mb-0`}>Meta Data Driven Applications </h1>
                        </div>
                        <div className="bg-meta-mb d-block d-sm-none">
                            <h1 className={`${styles.banner_text} mt-5 mb-0`}>Meta Data Driven  </h1>
                            <h1 className={`${styles.banner_text} `}> Applications</h1>
                            
                        </div>
                    </div>
                </div>
            </div>


            {/* application and it's purpose */}
            <div className="container-fluid px-3" style={{ backgroundColor: "#F0F4F7" }}>
                <div className="container py-3 ">
                    <div className="row justify-content-center py-md-4 py-2">
                        <div className={`${styles.vr}`}>
                            <h2 className={`${styles.heading} ps-4 mb-0`}>Meta Data Driven</h2>
                            <h2 className={`${styles.heading} ps-4`}>Applications & Its Purpose</h2>
                        </div>
                    </div>
                </div>
                <div className="container pb-md-5 pb-2 mx-auto" data-aos="fade-up">
                    <div className="row">
                        <div className="col-12 col-lg-6 py-2 ">
                            {/* <div > */}
                                <Image src={metadatas} alt="Metadata" title="metadata" width={519} height={441} className="img-fluid" />
                            {/* </div> */}
                        </div>
                        <div className="col-12 col-lg-6 py-2 pt-md-3 pt-2 pt-lg-0">
                            <p className={`${styles.para} `}>
                            Meta Data Driven Applications are software applications that leverage metadata—data about data—to drive their behavior and functionality.
                            </p>
                            <span className={`${styles.para2} pt-md-4 pt-2 px-0`}>
                            Metadata provides a layer of abstraction that allows for greater flexibility and adaptability in how applications process and present data. This approach separates the data model from the application logic, enabling more dynamic and scalable solutions. You need Meta data driven applications for:
                            <ul>
                                <li>Flexibility and Agility</li>
                                <li>Improved Data Management</li>
                                <li>Enhanced Consistency</li>
                                <li>Scalability</li>
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
                                <h2 className={`${styles.heading} ps-4 mb-0`}>Transform Your</h2>
                                <h2 className={`${styles.heading} ps-4`}>Data Management</h2>
                            </div>
                            <p className={`${styles.stage_mini}`}>
                               <span style={{color:"#F71735"}}>i</span>11 Approach to Meta Data Driven Applications</p>
                        </div>
                        <div className="col-12 col-lg-6 py-2">
                            <p className={`${styles.para2} pt-md-4 pt-2`}>
                            At i11Labs, we leverage the power of metadata to create dynamic, scalable applications tailored to your business needs. Our comprehensive approach ensures enhanced data management, improved flexibility, and seamless integration, driving innovation and efficiency within your organization.</p>
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
              Contact us today to discover how our Meta Data Driven Applications can enhance your data management capabilities, improve flexibility, and drive innovation in your organization.
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