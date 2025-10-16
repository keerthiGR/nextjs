import Image from "next/image"
import Link from "next/link"
import styles from "../../app/meta-data-driven-applications/styles.module.css";
import styles1 from "../../components/ai-intagrate&devolop-content/styles.module.css";
import cloud from "../../public/images/cloud/cloud.webp";

export const metadata = {
    title: "Cloud Computing and Infrastructure Solutions by i11Labs",
    description: "Leverage cloud computing and infrastructure solutions by i11Labs. Enhance scalability, performance, and cost-efficiency with our tailored cloud strategies.",
    ogTitle: "Cloud Computing and Infrastructure Solutions by i11Labs",
    url: "https://i11labs.com/cloud-computing-infrastructure-solutions",
    ogDescription: "Leverage cloud computing and infrastructure solutions by i11Labs. Enhance scalability, performance, and cost-efficiency with our tailored cloud strategies.",
    ogUrl: "https://i11labs.com/cloud-computing-infrastructure-solutions",
    ogType: "website",
    ogLocale: "en_US",
};


export default function SoftwareDevelopment() {

    const datamanagement = [
        {
            img: "/images/cloud/1.webp",
            title: "Cloud Strategy Development",
            para: "We start with a detailed assessment of your current IT infrastructure and business objectives. We develop a customized cloud strategy that includes choosing the right cloud model (public, private, or hybrid) and defining the roadmap for migration and integration.",
        },
        {
            img: "/images/cloud/2.webp",
            title: "Seamless Migration",
            para: "We ensure a smooth transition to the cloud with minimal disruption to your operations. Our experts handle the migration process, from planning and execution to validation and optimization.",
        },
        {
            img: "/images/cloud/3.webp",
            title: "Infrastructure Optimization",
            para: "Post-migration, we continuously optimize your cloud infrastructure to ensure peak performance, cost efficiency, and scalability. We leverage advanced tools and techniques to monitor, manage, and improve your cloud environment.",
        },
        {
            img: "/images/cloud/4.webp",
            title: "Security and Compliance",
            para: "We prioritize the security and compliance of your cloud infrastructure. Our solutions incorporate industry best practices and advanced security measures to protect your data and applications.",
        },
    ];
    return (
        <>
            {/* Banner image */}
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col p-0'>

                        <div className="bg-cloud d-none d-sm-block">
                            <h1 className={`${styles.banner_text} mt-5 mb-0`}>Cloud Computing and </h1>
                            <h1 className={`${styles.banner_text} `}>Infrastructure Solutions </h1>
                        </div>
                        <div className="bg-cloud-mb d-block d-sm-none">
                            <h1 className={`${styles.banner_text} mt-5 mb-0`}>Cloud Computing </h1>
                            <h1 className={`${styles.banner_text} mb-0`}>and Infrastructure </h1>
                            <h1 className={`${styles.banner_text} `}> Solutions </h1>
                        </div>
                    </div>
                </div>
            </div>


            {/* application and it's purpose */}
            <div className="container-fluid px-3" style={{ backgroundColor: "#F0F4F7" }}>
                <div className="container py-3 ">
                    <div className="row justify-content-center py-md-4 py-2">
                        <div className={`${styles.vr}`}>
                            <h2 className={`${styles.heading} ps-4 mb-0`}>Cloud Computing And</h2>
                            <h2 className={`${styles.heading} ps-4`}>Infrastructure Solutions</h2>
                        </div>
                    </div>
                </div>
                <div className="container pb-md-5 pb-2 mx-auto" data-aos="fade-up">
                    <div className="row">
                        <div className="col-12 col-lg-6 py-2 ">
                            {/* <div > */}
                            <Image src={cloud} alt="Metadata" title="metadata" width={519} height={441} className="img-fluid" />
                            {/* </div> */}
                        </div>
                        <div className="col-12 col-lg-6 py-2 pt-md-3 pt-2 pt-lg-0">
                            {/* <p className={`${styles.para} `}>
                            Meta Data Driven Applications are software applications that leverage metadata—data about data—to drive their behavior and functionality.
                            </p> */}
                            <span className={`${styles.para2} pt-md-4 pt-2 px-0`}>
                                Cloud Computing and Infrastructure Solutions encompass a range of services that provide on-demand access to computing resources such as servers, storage, databases, networking, software, and more. These solutions enable businesses to scale and manage their IT infrastructure efficiently by leveraging cloud technologies, whether through public, private, or hybrid cloud environments.
                                <ul>
                                    <li>Scalability and Flexibility    </li>
                                    <li>Cost Efficiency</li>
                                    <li>Enhanced Performance</li>
                                    <li>Disaster Recovery and Security</li>
                                    <li>Innovation and Agility</li>
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
                                <h2 className={`${styles.heading} ps-4 mb-0`}>Harnessing The</h2>
                                <h2 className={`${styles.heading} ps-4`}>Power of Cloud</h2>
                            </div>
                            <p className={`${styles.stage_mini}`}>
                                <span style={{ color: "#F71735" }}>i</span>11 Approach to Cloud Computing and Infrastructure Solutions</p>
                        </div>
                        <div className="col-12 col-lg-6 py-2">
                            <p className={`${styles.para2} pt-md-4 pt-2`}>
                                Our comprehensive approach ensures a seamless transition to the cloud, tailored to your business needs. From strategic assessment and migration to continuous optimization and support, we prioritize security, performance, and cost efficiency to drive your digital transformation.</p>
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
                                Contact us today to explore how our Cloud Computing and Infrastructure Solutions can transform your IT operations and drive digital transformation in your organization.
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