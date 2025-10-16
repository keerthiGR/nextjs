import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";
import schedule from "../../public/images/kwc/schedule.png";
import track from "../../public/images/kwc/track.png";
import routes from "../../public/images/kwc/routes.png";
import kwcscreenshot from "../../public/images/kwc/kwc screenshot.png";
import data from "../../public/images/kwc/data.png";
import insights from "../../public/images/kwc/insights.png";
import email1 from "../../public/images/kwc/email.png";

export const metadata = {
  title: "Know Whereabouts of Crew - Real-Time Crew Tracking Solutions by i11Labs",
  description: "Ensure safety and efficiency with Know Whereabouts of Crew by i11Labs. Get real-time tracking and monitoring solutions for your crew's whereabouts.",
  ogTitle: "Know Whereabouts of Crew - Real-Time Crew Tracking Solutions by i11Labs",
  url: "https://i11labs.com/Know-Whereabouts-of-Crew",
  ogDescription: "Ensure safety and efficiency with Know Whereabouts of Crew by i11Labs. Get real-time tracking and monitoring solutions for your crew's whereabouts.",
  ogUrl: "https://i11labs.com/Know-Whereabouts-of-Crew",
  ogType: "website",
  ogLocale: "en_US",
};


export default function KWC() {
  return (
    <>

      <div className='container-fluid'>
        <div className='row'>
          <div className='col p-0'>
            <div className="bg-kwc d-none d-sm-block">
              <h1 className={`${styles.banner_text} mt-5`}>KWC</h1>
            </div>
            <div className="bg-kwc-mb d-block d-sm-none">
              <h1 className={`${styles.banner_text} mt-5`}>KWC</h1>
            </div>
          </div>
        </div>
      </div>

      {/* lead generator */}
      <div className="container pt-md-5 pt-2 mx-auto" data-aos="fade-up">
        <div className="row">
          <div className="col-12 col-lg-6 py-2 ">
            <div className={`${styles.vr}`}>
              <h2 className={`${styles.heading} ps-4 mb-0`}>Know Where Abouts</h2>
              <h2 className={`${styles.heading} ps-4`}>Of Your Crew</h2>
            </div>
          </div>
          <div className="col-12 col-lg-6 py-2 pt-md-3 pt-2 pt-lg-0">
            <p className={`${styles.stage_mini} px-0 pt-md-4 pt-2 col-xl-10`}>
            Monitor Your Crew's Whereabouts in Real Time
            </p>

          </div>
        </div>
      </div>

      <div className='container pt-lg-5 pt-3 d-lg-block d-none'>
        <div className='row' data-aos="fade-up">
          <div className='col-lg-4 col-md-6 col-12 h-100'>
            <div className="text-center" style={{ borderRight: "1px solid  #C1D1E0" }}>
              <Image src={schedule} width={128} height={128} className="img-fluid" alt="tracking" />
              <p className={`${styles.logodesc} pt-3`}>Scheduling</p>
              <p className={`${styles.para3} text-center`}>Determine what needs to be<br /> delivered where and when.</p>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-12 h-100'>
            <div className="text-center" style={{ borderRight: "1px solid  #C1D1E0" }}>
              <Image src={track} width={128} height={128} className="img-fluid" alt="manage" />
              <p className={`${styles.logodesc} pt-3`}>Tracking</p>
              <p className={`${styles.para3} text-center`}>Monitor Realtime location<br /> tracking and status of deliveries.</p>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 col-12 h-100'>
            <div className="text-center" >
              <Image src={routes} width={128} height={128} className="img-fluid" alt="registration" />
              <p className={`${styles.logodesc} pt-3`}>Optimizing Routes</p>
              <p className={`${styles.para3} text-center`}>Facilitates shuffling of routes<br /> based on Realtime status.</p>
            </div>
          </div>


        </div>
      </div>

      <div className='container pt-lg-5 pt-4 d-block d-lg-none' data-aos="fade-up">
        <div className='row'>
          <div className='d-flex' style={{ overflowX: 'scroll', scrollbarWidth: 'none' }}>

            <div className='col-lg-4 col-md-5 col-8 text-center me-3'>
              <Image src={schedule} className='pt-4' alt="tracking" />
              <p className={`${styles.logodesc} pt-3`}>Scheduling</p>
              <p className={`${styles.para3} text-center`}>Determine what needs to be delivered where and when.</p>
            </div>

            <div className='col-lg-4 col-md-5 col-8 text-center me-3'>
              <Image src={track} className='pt-4' alt='FeedsToLeads' title='email' />
              <p className={`${styles.logodesc} pt-3`}>Tracking</p>
              <p className={`${styles.para3} text-center`}>Monitor Realtime location tracking and status of deliveries.</p>
            </div>

            <div className='col-lg-4 col-md-5 col-8  text-center me-3'>
              <Image src={routes} className='pt-4' alt='FeedsToLeads' title='schedule' />
              <p className={`${styles.logodesc} pt-3`}>Optimizing Routes</p>
              <p className={`${styles.para3} text-center`}>Facilitates shuffling of routes based on Realtime status.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tab image */}
      <div className={`${styles.bgdti} container-fluid`} data-aos="fade-up">
        <div className="container">
          <div className="mt-3 mt-md-3 text-center">
            <Image src={kwcscreenshot} width={754} height={616} className="img-fluid" alt="FTL Screenshot" />
          </div>
        </div>
      </div>

      {/* Generator */}
      <div className="container-fluid pt-3 mt-0 pb-4 gx-0" style={{ background: "#F0F4F7" }} >
        <div className="container gx-0">
          <div className="row justify-content-center m-4 ">
            <div className="col-lg-4 col-md-6 col-12">

              <div className="grid-item1">
                <div className="box p-4 h-100">
                  <Image src={data} width={96} height={96} alt="data" title="data" className="img-fluid" />
                  <p className={`${styles.stage_steps} pt-3`}>In App Notification</p>
                  <p className={`${styles.paradesc} `}>Personalization, pop banners.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="grid-item1">
                <div className="box p-4 h-100">
                  <Image src={insights} width={96} height={96} alt="insights" title="insights" className="img-fluid" />
                  <p className={`${styles.stage_steps} pt-3`}>Geofencing</p>
                  <p className={`${styles.paradesc}`}>Real time alerts & customizable messages.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="grid-item1">
                <div className="box p-4 h-100">
                  <Image src={email1} width={96} height={96} alt="email" title="email" className="img-fluid" />
                  <p className={`${styles.stage_steps} pt-3`}>Analytics</p>
                  <p className={`${styles.paradesc} `}>Performance of delivery team, customers satisfaction rating & history of order.</p>
                </div>
              </div>
            </div>
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