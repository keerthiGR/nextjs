import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";
import manage from "../../public/images/dti/manage.webp";
import registration from "../../public/images/dti/registration.webp";
import tracking from "../../public/images/dti/tracking.webp";
import dtiscreenshot from "../../public/images/dti/dtiscreenshot.webp";
import { Suspense } from "react";
// import workorders from "../../public/images/dti/Work Orders Management.webp";

export const metadata = {
  title: "DumpTruckIt - Efficient Logistics Management Solutions by i11Labs",
  description: "Streamline your logistics operations with DumpTruckIt by i11Labs. Discover user-friendly solutions for efficient logistics management and operational excellence.",
  ogTitle: "DumpTruckIt - Efficient Logistics Management Solutions by i11Labs",
  url: "https://i11labs.com/dti-dumptruckit",
  ogDescription: "Streamline your logistics operations with DumpTruckIt by i11Labs. Discover user-friendly solutions for efficient logistics management and operational excellence.",
  ogUrl: "https://i11labs.com/dti-dumptruckit",
  ogType: "website",
  ogLocale: "en_US",
};

export default function DTI() {
  const solution = [
    {
      imgurl: "/images/dti/Tickets Management.webp",
      title: "Ticketing Workflow Automation",
      desc: "DumpTruckIt automates the entire manual ticketing process, saving you valuable time and reducing human errors.",
    },
    {
      imgurl: "/images/dti/Trackingcard.webp",
      title: "Real-Time Driver and Delivery Tracking",
      desc: "Monitor your drivers and deliveries in real-time with precision tracking. DTI provides the visibility you need to assess driver performance.",
    },
    {
      imgurl: "/images/dti/communication.webp",
      title: "Seamless Communication",
      desc: "Facilitates smooth communication between drivers and dispatchers with built-in messaging and calling feature.",
    },
    {
      imgurl: "/images/dti/reports.webp",
      title: "Reporting and Dashboard",
      desc: "Instant overview of day-to-day operations. Custom reports on key metrics for effective budget planning decision making & identifying back-office blind spots.",
    },
    {
      imgurl: "/images/dti/data.webp",
      title: "Unlock the Power of Historical Data",
      desc: "DumpTruckIt stores comprehensive data, enabling you to identify opportunities for optimization and business expansion.",
    },
    {
      imgurl: "/images/dti/invoice.webp",
      title: "Invoicing and Expense Tracking",
      desc: "Automation of invoices & provides break down of expenses for each job site/shift/trucks/drivers.",
    },

  ]


  function Loading() {
    return <h2>🌀 Loading...</h2>;
  }
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col p-0'>
            <div className={`${styles.homevideo}`}>
              {/* <video className={`${styles.video}`} playsInline autoPlay muted loop>
                <source src="/images/dti/DTI.webm" type="video/webm" />
              </video> */}
              <Suspense fallback={<Loading />}>
                <video className={`${styles.video}`} playsInline autoPlay muted loop>
                  <source src="/images/dti/DTI 1280x720-3.mp4" type="video/mp4" />
                </video>
              </Suspense>
              <div className="container">
                <div className={`${styles.homeContent} ps-2 ps-md-0`}>
                  <h1 className={`${styles.banner_text} mt-5`}>DumpTruckIt</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* logistic solution */}
      <div className="container pt-md-5 pt-2 mx-auto" data-aos="fade-up">
        <div className="row">
          <div className="col-12 col-lg-6 py-2 ">
            <div className={`${styles.vr}`}>
              <h2 className={`${styles.heading} ps-4 mb-0`}>DumpTruckIt - Your </h2>
              <h2 className={`${styles.heading} ps-4`}>Logistics Solution </h2>
            </div>
          </div>
          <div className="col-12 col-lg-6 py-2 pt-md-3 pt-2 pt-lg-0">
            <p className={`${styles.stage_mini} px-0 pt-md-4 pt-2 col-xl-11`}>
            Seamless Fleet Management- Powered by AI
            </p>
            <p className={`${styles.paradesc}`}>
              With this application, you gain access to a centralized platform for real-time operations visibility, scalability, customization, and robust analytics.
            </p>
          </div>
        </div>
      </div>

      <div className='container pt-lg-5 pt-3 d-lg-block d-none'>
        <div className='row' data-aos="fade-up">
          <div className='col-lg-4 col-md-6 col-12 h-100'>
            <div className="text-center" style={{ borderRight: "1px solid  #C1D1E0" }}>
              <Image src={manage} width={128} height={128} className="img-fluid" alt="manage" />
              <p className={`${styles.logodesc} pt-3`}>Efficiently manage <br />work orders & tickets</p>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 col-12 h-100'>
            <div className="text-center" style={{ borderRight: "1px solid  #C1D1E0" }}>
              <Image src={registration} width={128} height={128} className="img-fluid" alt="registration" />
              <p className={`${styles.logodesc} pt-3`}>Seamless registration <br />for drivers and clients</p>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 col-12 h-100'>
            <div className="text-center" >
              <Image src={tracking} width={128} height={128} className="img-fluid" alt="tracking" />
              <p className={`${styles.logodesc} pt-3`}>Track your delivery<br /> progress in real time</p>
            </div>
          </div>


        </div>


      </div>

      <div className='container pt-lg-5 pt-4 d-block d-lg-none' data-aos="fade-up">
        <div className='row'>
          <div className='d-flex' style={{ overflowX: 'scroll', scrollbarWidth: 'none' }}>

            <div className='col-lg-4 col-md-5 col-8 text-center me-3'>
              <Image src={manage} className='pt-4 img-fluid' width={128} height={128} alt='DumpTruckIt' title='manage' />
              <p className={`${styles.logodesc} pt-3`}>Efficiently manage <br />work orders & tickets</p>
            </div>

            <div className='col-lg-4 col-md-5 col-8 text-center me-3'>
              <Image src={registration} className='pt-4 img-fluid' width={128} height={128} alt='DumpTruckIt' title='registration' />
              <p className={`${styles.logodesc} pt-3`}>Seamless registration <br />for drivers and clients</p>
            </div>

            <div className='col-lg-4 col-md-5 col-8  text-center me-3'>
              <Image src={tracking} className='pt-4 img-fluid' width={128} height={128} alt='DumpTruckIt' title='tracking' />
              <p className={`${styles.logodesc} pt-3`}>Track your delivery<br /> progress in real time</p>
            </div>


          </div>
        </div>

      </div>

      {/* mobile image */}
      <div className={`${styles.bgdti} container-fluid`} data-aos="fade-up">
        <div className="container">
          <div className="mt-3 mt-md-3 text-center">
            <Image src={dtiscreenshot} width={931} height={670} className="img-fluid" alt="DTI Screenshot" />
          </div>

        </div>
      </div>


      {/* reports */}
      <div className="container-fluid pt-3 mt-0 pb-4 gx-0" style={{ background: "#F0F4F7" }} >
        <div className="container gx-0">
          <div className="row justify-content-center m-4 ">
            {solution?.map((item, index) => (
              <div className="col-md-6 col-xl-4 col-12" key={index}>
                <div className={`${styles.card1} mt-4`}>
                  <Image src={item.imgurl} width={378} height={275} className="img-fluid w-100" alt="Avatar" />
                  <div className={`${styles.container1} p-md-4 p-3`}>
                    <h4 className={`${styles.stage_steps}`} >{item.title}</h4>
                    <p className={`${styles.paradesc}`}>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* letsconnect */}
      <div className="containter-fluid my-5" data-aos="fade-up">
        <div className={`${styles.connect} p-4`}>Have a product to build or a project to kickstart?<br /> We&apos;ve got you covered.</div>
        <div className="text-center">
          <Link href="/contact" className="">
            <button className={`${styles.connectbtn} `}>LET&apos;S CONNECT</button> </Link>
        </div>
      </div>

    </>
  );
}