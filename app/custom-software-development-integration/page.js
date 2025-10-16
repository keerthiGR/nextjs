
import Image from "next/image"
import Link from "next/link"
import styles from "./styles.module.css";
import styles1 from "../../components/ai-intagrate&devolop-content/styles.module.css";
import software from "../../public/images/software/develop.webp";

export const metadata = {
    title: "Custom Software Development and Integration by i11Labs",
    description: "Tailored software development and integration services by i11Labs. Delivering custom solutions to meet your unique business needs and drive growth.",
     ogTitle: "Custom Software Development and Integration by i11Labs",
    url: "https://i11labs.com/custom-software-development-integration",
    ogDescription: "ailored software development and integration services by i11Labs. Delivering custom solutions to meet your unique business needs and drive growth.",
    ogUrl: "https://i11labs.com/custom-software-development-integration",
    ogType: "website",
    ogLocale: "en_US",
  };

export default function SoftwareDevelopment() {



    const Develop = [

        {
            img: "/images/software/dev1.webp",
            title: "Uniquely tailored features and functions",
            para: <text>When a <span style={{ color: "#F71735" }}>i</span>11Labs creates a custom software product, that application is tailored specifically for the commissioning organization’s use.</text>,
        },

        {
            img: "/images/software/dev2.webp",
            title: "A solution only for your business",
            para: <text> <span style={{ color: "#F71735" }}>i</span>11Labs would design the software to work with the commissioning company&apos;s infrastructure, branding and implementation needs, and no other organization could access the application.</text>,
        },


    ];

    const Software = [
        {
            img: "/images/software/1.webp",
            title: "Ease of use",
            para: "Off-the-shelf applications serve large audiences with fundamentally similar needs. For example, Microsoft Word is an enormously popular word processing application with features, functionality and customization options that organizations of all sizes and scopes can use.",
        },

        {
            img: "/images/software/2.webp",
            title: "Easy access for purchasing or downloading",
            para: "Off-the-shelf software can be prepackaged and purchased , but it’s often downloadable from providers websites or available as a cloud subscription.",
        },


        {
            img: "/images/software/3.webp",
            title: "Customizability",
            para: "Popular commercial packages, such as Microsoft Office applications/Salesforce, have a degree of customizability to make the software work better for your team. ",
        },



    ]


    return (
        <>

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col p-0'>

                        <div className="bg-software d-none d-sm-block">
                        <h1 className={`${styles.banner_text} mt-5 mb-0`}>Custom Software Development </h1>
                        <h1 className={`${styles.banner_text} `}> and Integration</h1>
                        </div>
                        <div className="bg-software-mb d-block d-sm-none">
                            <h1 className={`${styles.banner_text} mt-5 mb-0`}>Custom Software Development </h1>
                            <h1 className={`${styles.banner_text} `}> and Integration</h1>
                            
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid px-3" style={{ backgroundColor: "#F0F4F7" }}>
                <div className="container py-3 ">
                    <div className="row justify-content-center py-4">
                        <div className={`${styles.vr}`}>
                            <h2 className={`${styles.heading} ps-4 mb-0`}>Custom Software</h2>
                            <h2 className={`${styles.heading} ps-4`}>Development & Its Purpose</h2>
                        </div>
                    </div>
                </div>
                <div className="container py-md-5 py-2 mx-auto" data-aos="fade-up">
                    <div className="row">
                        <div className="col-12 col-md-6 py-2 ">
                            <div >
                                <Image src={software} alt="software develop" title="sofware develop" className="img-fluid" />

                            </div>
                        </div>
                        <div className="col-12 col-md-6 py-2 pt-md-3 pt-2 pt-lg-0">
                            <p className={`${styles.para2} `}>
                                When organizations need applications with unique features and functionality, they turn to software developers to design and create
                                custom solutions.
                                Custom software addresses users’ specific needs more comprehensively than traditional off-the-shelf packages.


                            </p>
                            <p className={`${styles.para2} pt-md-4 pt-2`}>
                                While the idea of software tailored to your business sounds appealing, custom software development isn’t for everyone.
                                The process can be expensive and time-consuming, and it’s challenging to convey the scope of the functionality you need.
                            </p>
                            <p className={`${styles.para2} pt-md-4 pt-2`}>
                                We’ll look at custom software vs. off-the-shelf solutions and help you determine if custom software development
                                is something your business should pursue.
                            </p>
                        </div>
                    </div>



                </div>
            </div>



            <div className="container-fluid px-3">
                <div className="container pt-md-5 pt-2 mx-auto" data-aos="fade-up">
                    <div className="row pt-3">
                        <div className="col-12 col-md-5 py-2 ">
                            <div className={`${styles.vr}`}>
                                <h2 className={`${styles.heading} ps-4 mb-0`}>Off-The-Shelf</h2>
                                <h2 className={`${styles.heading} ps-4`}>Software</h2>
                            </div>
                        </div>
                        <div className="col-12 col-md-7 py-2">
                            <p className={`${styles.para2} pt-md-4 pt-2`}>
                                Packaged software applications are available for nearly every computing, business, productivity and communications task imaginable. These packages generally offer the following features.                            </p>
                        </div>
                    </div>

                    <div className="row pb-3"  >
                        {Software.map((item, index) => (
                            <div className="col-12 col-md-6 col-lg-4  mt-4">
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


            <div className="container-fluid px-3">
                <div className="container pt-md-5 pt-2 mx-auto" data-aos="fade-up">
                    <div className="row pt-3">
                        <div className="col-12 col-md-5 py-2 ">
                            <div className={`${styles.vr}`}>
                                <h2 className={`${styles.heading} ps-4 mb-0`}>Custom Software</h2>
                                <h2 className={`${styles.heading} ps-4`}>Software</h2>
                            </div>
                        </div>
                        <div className="col-12 col-md-7 py-2">
                            <p className={`${styles.para2} pt-md-4 pt-2`}>
                                Despite the variety of off-the-shelf software available, some organizations require specific capabilities that general
                                software can’t provide. If this is the case, they may turn to customized software development.
                                Here’s what custom software has to offer:
                            </p>  
                             </div>

                        <div className="row py-3 py-md-5"  >
                            {Develop.map((item, index) => (
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
              Contact us today to see how our Custom Software Development and Integration services can meet your specific needs and boost efficiency.
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
