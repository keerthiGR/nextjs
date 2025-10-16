import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";
import reports from "../../public/images/ftl/reports.webp";
import schedule from "../../public/images/ftl/schedule.webp";
import email from "../../public/images/ftl/email.webp";
import Ftlscreenshot from "../../public/images/ftl/FeedsToLeads.png";
import data from "../../public/images/ftl/data.webp";
import insights from "../../public/images/ftl/insights.webp";
import email1 from "../../public/images/ftl/email1.webp";

export const metadata = {
  title: "Feeds to Leads - AI-Powered Lead Generation by i11Labs",
  description: "Transform your data into actionable leads with Feeds to Leads by i11Labs. Leverage AI-driven solutions for efficient web scraping and automated news analysis.",
  ogTitle: "Feeds to Leads - AI-Powered Lead Generation by i11Labs",
  url: "https://i11labs.com/feeds-to-leads",
  ogDescription: "Transform your data into actionable leads with Feeds to Leads by i11Labs. Leverage AI-driven solutions for efficient web scraping and automated news analysis.",
  ogUrl: "https://i11labs.com/feeds-to-leads",
  ogType: "website",
  ogLocale: "en_US",
};


export default function FTL() {
    return (
        <>

      <div className='container-fluid'>
        <div className='row'>
          <div className='col p-0'>
            <div className="bg-ftl d-none d-sm-block">
              <h1 className={`${styles.banner_text} mt-5`}>FeedsToLeads</h1>
            </div>
            <div className="bg-ftl-mb d-block d-sm-none">
              <h1 className={`${styles.banner_text} mt-5`}>FeedsToLeads</h1>
            </div>
          </div>
        </div>
      </div>

       {/* lead generator */}
       <div className="container pt-md-5 pt-2 mx-auto" data-aos="fade-up">
        <div className="row">
          <div className="col-12 col-lg-6 py-2 ">
            <div className={`${styles.vr}`}>
              <h2 className={`${styles.heading} ps-4 mb-0`}>AI Based</h2>
              <h2 className={`${styles.heading} ps-4`}>Lead Generator</h2>
            </div>
          </div>
          <div className="col-12 col-lg-6 py-2 pt-md-3 pt-2 pt-lg-0">
            <p className={`${styles.stage_mini} px-0 pt-md-4 pt-2 col-xl-10`}>
            Effortless Lead Generation- AI for Smarter Prospecting
            </p>
            <p className={`${styles.paradesc}`}>
            Harness the power of AI for efficient web scraping and automated lead generation with our advanced application.
            </p>
          </div>
        </div>
      </div>

      <div className='container pt-lg-5 pt-3 d-lg-block d-none'>
        <div className='row' data-aos="fade-up">
          <div className='col-lg-4 col-md-6 col-12 h-100'>
            <div className="text-center" style={{ borderRight: "1px solid  #C1D1E0" }}>
              <Image src={reports} width={128} height={128} className="img-fluid" alt="manage"/>
              <p className={`${styles.logodesc} pt-3`}>Generating Reports at  <br/>Regular Intervals</p>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 col-12 h-100'>
            <div className="text-center" style={{ borderRight: "1px solid  #C1D1E0" }}>
              <Image src={email} width={128} height={128} className="img-fluid" alt="registration"/>
              <p className={`${styles.logodesc} pt-3`}>Email Templates <br/> for Consistency</p>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 col-12 h-100'>
            <div className="text-center" >
              <Image src={schedule} width={128} height={128} className="img-fluid" alt="tracking"/>
              <p className={`${styles.logodesc} pt-3`}>Automated Scheduling<br/> for Efficiency</p>
            </div>
          </div>
        </div>
      </div>

      <div className='container pt-lg-5 pt-4 d-block d-lg-none' data-aos="fade-up">
        <div className='row'>
          <div className='d-flex' style={{ overflowX: 'scroll', scrollbarWidth: 'none' }}>

            <div className='col-lg-4 col-md-5 col-8 text-center me-3'>
                 <Image src={reports} className='pt-4 ' alt='FeedsToLeads' title='reports' />
                 <p className={`${styles.logodesc} pt-3`}>Generating Reports   <br/> at Regular Intervals</p>
              </div>

              <div className='col-lg-4 col-md-5 col-8 text-center me-3'>
                 <Image src={email} className='pt-4' alt='FeedsToLeads' title='email' />
                 <p className={`${styles.logodesc} pt-3`}>Email Templates <br/> for Consistency</p>
              </div>

              <div className='col-lg-4 col-md-5 col-8  text-center me-3'>
                 <Image src={schedule} className='pt-4' alt='FeedsToLeads' title='schedule' />
                 <p className={`${styles.logodesc} pt-3`}>Automated Scheduling<br/> for Efficiency</p>
              </div>
          </div>
        </div>
      </div>

      {/* Tab image */}
      <div className={`${styles.bgdti} container-fluid`} data-aos="fade-up">
            <div className="container">
                <div className="mt-3 mt-md-3 text-center">
                <Image src={Ftlscreenshot} width={754} height={616} className="img-fluid" alt="FTL Screenshot"/>
                </div>          
           </div>
    </div>

    {/* Generator */}
    <div className="container-fluid pt-3 mt-0 pb-4 gx-0" style={{background:"#F0F4F7"}} > 
     <div className="container gx-0">
         <div className="row justify-content-center m-4 ">
            <div className="col-lg-4 col-md-6 col-12">
                
                <div className="grid-item1">
                  <div className="box p-4 h-100">
                    <Image src={data} width={96} height={96} alt="data" title="data" className="img-fluid" />
                    <p className={`${styles.stage_steps} pt-3`}>Automated Data Collection</p>
                    <p className={`${styles.paradesc } `}>Gather information from web pages on certain themes without the need for human participation.</p>
                  </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                <div className="grid-item1">
                  <div className="box p-4 h-100">
                    <Image src={insights} width={96} height={96} alt="insights" title="insights" className="img-fluid" />
                    <p className={`${styles.stage_steps} pt-3`}>Analysis and Insights</p>
                    <p className={`${styles.paradesc}`}>Analyse obtained data automatically to derive relevant insights from news stories and reports.</p>
                  </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                <div className="grid-item1">
                  <div className="box p-4 h-100">
                    <Image src={email1} width={96} height={96} alt="email" title="email" className="img-fluid" />
                    <p className={`${styles.stage_steps} pt-3`}>Scheduled Email Delivery</p>
                    <p className={`${styles.paradesc} `}>Reports are sent via email at a specified period.</p>
                  </div>
                  </div>
                </div>
         </div>
         </div>
         </div>


          {/* letsconnect */}
          <div className="containter-fluid my-5" data-aos="fade-up">
        <div className={`${styles.connect} p-4`}>Have a product to build or a project to kickstart?<br/> We&apos;ve got you covered.</div>
        <div className="text-center">
        <Link href="/contact" className=""> 
        <button className={`${styles.connectbtn} `}>LET&apos;S CONNECT</button> </Link>
     </div> 
</div>

    </>
  );
}