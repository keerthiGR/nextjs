
import Image from "next/image"
import Link from "next/link"
import styles from "./styles.module.css"
import integrate from "../../public/images/AI/unsplash.png"
import arrow from "../../public/images/AI/right.svg"

export const metadata = {
    title: "How We Serve You - i11Labs' Commitment to Client Success",
    description: "Learn how i11Labs serves its clients with tailored technology solutions and expert support. Discover our approach to ensuring your business success.",
    ogTitle: "How We Serve You - i11Labs' Commitment to Client Success",
  url: "https://i11labs.com/how-we-serve-you",
  ogDescription: "Learn how i11Labs serves its clients with tailored technology solutions and expert support. Discover our approach to ensuring your business success.",
  ogUrl: "https://i11labs.com/how-we-serve-you",
  ogType: "website",
  ogLocale: "en_US",
  };
  

export default function ServiceOfferings() {



    const Howweserveyou = [
        {
            imgurl: "/images/serve/productorienteddelivery.webp",
            title: "Product Oriented Delivery",
            desc: "Execute Product Vision and Strategy",
            verticalborder: "verticalcolor",
            flag: true
        },
        {
            imgurl: "/images/serve/endtoend.webp",
            title: "End to End",
            desc: "Deliverable based model",
            verticalborder: "verticalcolor",
            flag: true
        },
        {
            imgurl: "/images/serve/tagteam.webp",
            title: "Tag Team",
            desc: "Co-development team",
            verticalborder: "",
            flag: false
        },

    ];

    const Service = [
        {
            img: "/images/serve/1.webp",
            title: "Real-world Solutions",
            para: "We deliver practical solutions that address your specific challenges and opportunities. Our approach offers pragmatic strategies and actionable plans for tangible results in the shortest time frame.",
        },

        {
            img: "/images/serve/2.webp",
            title: "Client-Centric Approach",
            para: "We put you at the center of everything we do, building strong relationships based on trust, transparency, and open communication. Together, we develop tailor-made solutions to fit your unique requirements.",
        },

        {
            img: "/images/serve/3.webp",
            title: "Results-Oriented",
            para: "Our goal is to deliver results that drive business growth and success. Whether improving efficiency, increasing revenue, or enhancing customer satisfaction, we measure our success by the impact we create for you.",
        },

        {
            img: "/images/serve/4.webp",
            title: "Flexibility and Adaptability",
            para: "In a world of constant disruption, flexibility and adaptability are imperative. These qualities are our ethos, allowing us to thrive in unpredictable circumstances. We embrace feedback, iterate relentlessly, and remain agile in our pursuit of excellence, always striving to exceed expectations and deliver unparalleled value.",
        },


    ]


    return (
        <>

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col p-0'>

                        <div className="bg-serve d-none d-sm-block">
                            <h1 className={`${styles.banner_text} mt-5`}>How We Serve You</h1>
                        </div>
                        <div className="bg-serve-mb d-block d-sm-none">
                            <h1 className={`${styles.banner_text} mt-5`}>How We Serve You</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid justify-content-center" data-aos="fade-up">
                <div className="row justify-content-center py-4">
                    <div className="col-12  col-xl-7 pt-2  text-center">

                        <h2 className={`${styles.para} `}>
                            We are proud to identify ourselves as Execution Wizards…<br/> If you can think, we can deliver!
                        </h2>

                    </div>
                </div>
                <div className='row pt-2 pt-lg-3 mb-lg-3'>
                    <div className='col'>
                        <div className="container ">
                            <div className="row text-center py-4">
                                {Howweserveyou?.map((item, index) => (
                                    <>
                                        <div
                                            key={index}
                                            className="col-12 col-lg-4  col-md-6 py-xl-5 "
                                            id={item.verticalborder}>
                                            <div className="h-100 mx-xl-4 mx-md-3 pt-lg-0 pt-md-3" >
                                                <Image
                                                    loading="lazy"
                                                    src={item.imgurl}
                                                    alt={item.title}
                                                    width={128}
                                                    height={128}
                                                    className="img-fluid"
                                                />
                                                <p className={`${styles.para} mb-0 pt-3 text-center`}>{item.title}</p>
                                                <p className={`${styles.para2} text-center  text-center  mb-md-auto`}>{item.desc}</p>
                                            </div>
                                        </div>
                                        {item.flag && <hr className='d-md-none d-block' style={{ opacity: "1", color: "#C1D1E0" }}></hr>}
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <main className="d-none d-lg-block" data-aos="fade-up">
                <div className={`${styles.bgimage} container-fluid py-5 `}
                    style={{ backgroundImage: "url('/images/serve/quote bg.webp')", backgroundRepeat: "no-repeat", backgroundSize: "cover", }}     >
                    <div className="py-3 py-md-5 my-3 my-md-5">
                        <p className={`${styles.bgtext2} text-center  `}> 'VISION WITHOUT EXECUTION < br />IS JUST HALLUCINATION.'</p>
                        <p className={`${styles.para2} text-center text-white `}> - Thomas Edison</p>
                    </div>
                </div>
            </main>

            <main className="d-block d-lg-none" data-aos="fade-up">
                <div className={`${styles.bgimage} container-fluid py-5 `}
                    style={{ backgroundImage: "url('/images/serve/quote bg@2x mob.webp')", backgroundRepeat: "no-repeat", backgroundSize: "cover", }}     >
                    <div className="py-3 py-md-5 my-3 my-md-5">
                        <p className={`${styles.bgtext2} text-center  `}> 'VISION WITHOUT EXECUTION < br />IS JUST HALLUCINATION.'</p>
                        <p className={`${styles.para2} text-center text-white `}> - Thomas Edison</p>
                    </div>
                </div>
            </main>


            <div className="container-fluid px-3">
                <div className="container pt-md-5 pt-2 mx-auto" data-aos="fade-up">
                    <div className="row pt-3">
                        <div className="col-12 col-md-5 py-2 ">
                            <div className={`${styles.vr}`}>
                                <h2 className={`${styles.heading} ps-4 mb-0`}>Industry-Driven</h2>
                                <h2 className={`${styles.heading} ps-4`}>Expertise</h2>
                            </div>
                        </div>
                        <div className="col-12 col-md-7 py-2">
                            <p className={`${styles.para2} pt-md-4 pt-2`}>
                                Our team has years of experience across industries such as Finance, Banking, Construction, Retail, Logistics, Services, and Telecom. Here's how i11Labs brings your vision to life:
                            </p>
                        </div>
                    </div>

                    <div className="row py-3 py-md-5"  >
                        {Service.map((item, index) => (
                            <div className="col-12 col-md-6 mt-4">
                                <div className="h-100" key={index}   >
                                    <div className="p-4 h-100" style={{ backgroundColor: "#F0F4F7" }} >
                                        <Image src={item.img} alt="serve" title="serve" width={96} height={96} />
                                        <p className={`${styles.para}  pt-2`}>    {item.title} </p>
                                        <p className={`${styles.para2} `}>  {item.para}  </p>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>

        </>
    );
}
