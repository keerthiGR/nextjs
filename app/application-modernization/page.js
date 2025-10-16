import styles from "../page.module.css";
import styles1 from "../../components/ai-intagrate&devolop-content/styles.module.css";
import Image from "next/image";
import Link from "next/link"
import purpose from "../../public/images/AppModernization/pexels-pixabay-221185.webp";

export const metadata = {
  title: "Application Modernization Services by i11Labs",
  description: "Update and transform your existing applications with i11Labs. Our application modernization services align with business needs and enhance technological performance.",
  ogTitle: "Application Modernization Services by i11Labs",
  url: "https://i11labs.com/application-modernization",
  ogDescription: "Update and transform your existing applications with i11Labs. Our application modernization services align with business needs and enhance technological performance.",
  ogUrl: "https://i11labs.com/application-modernization",
  ogType: "website",
  ogLocale: "en_US",
};


export default function ApplicationModernization() {

  const stage = [
    {
      imgurl: "/images/AppModernization/1.webp",
      title: "Planning",
      desc: "Execute Product Vision and StrategThis first step requires organizations to think carefully about their app modernization goals and define their strategy before any action is taken. This is the time to discover and assess existing apps and environments in preparation for change.",
    },
    {
      imgurl: "/images/AppModernization/2.webp",
      title: "Execution",
      desc: <text>During this step, organizations build new skills and begin modernizing their apps iteratively. An iterative application modernization strategy gives organizations the flexibility to change their modernization scope or strategy as needed.<br/><br/> By using containers and a container orchestration platform like Kubernetes or OpenShift to deploy your applications, and by adopting DevOps best practices, like CI/CD, you can take the first step toward modernization and deliver applications more frequently, with greater ease than before. Further, when you refactor by breaking monolithic apps into smaller deployable units and ultimately microservices, you can update separate parts of your app; and, when you use CI/CD, you can roll back updates to running versions in case of issues.</text>,
    },
    {
      imgurl:"/images/AppModernization/3.webp",
       title: "Operations",
       desc : "Application modernization is not a one-and-done deal. Once organizations move to a cloud-first approach, they can use cloud platform services and tools to help secure, govern, manage, and optimize their apps."
    }
  ]
    return (
        <>

      <div className='container-fluid'>
        <div className='row'>
          <div className='col p-0'>
            <div className="bg-app d-none d-sm-block">
              <h1 className={`${styles.banner_text1} mt-5`}>Application Modernization</h1>
            </div>
            <div className="bg-app-mb d-block d-sm-none">
              <h1 className={`${styles.banner_text1} mt-5`}>Application Modernization</h1> 
            </div>
          </div>
        </div>
      </div>

      {/* purpose */}
      <div className="container-fluid pb-5" style={{ backgroundColor: "#F0F4F7" }}>
        <div className="container pt-md-5 pt-2 mx-auto" data-aos="fade-up">
          <div className="row">
            <div className="col-12  py-2 ">
                <div className={`${styles.vr}`}>
                  <h2 className={`${styles.heading1} ps-3 mb-0`}>Application Modernization</h2>
                  <h2 className={`${styles.heading1} ps-3`}>& Its Purpose</h2>
                </div>
            </div>
              <div className="col-12  col-lg-5 col-xl-6 py-2 pt-md-4 pt-2">
                  <Image src={purpose} className="img-fluid" width={519} height={441}/>
              </div>
              <div className="col-12 col-lg-7 col-xl-6 py-2 pt-md-4 pt-2">
              <p className={`${styles.para_head}`}> Application Modernization is the process of updating an organization&apos;s existing applications to cloud first approach. It could be public cloud or private cloud or hybrid cloud environment.</p>
              <p className={`${styles.paradesc} pt-2`}>  The goal is to align with business needs, enhance organizational and technological performance, improve customer and employee experiences, and accelerate time to market for new offerings and updates. Adoption of modern technology languages and patterns like containerization, microservices architecture will enable your organization to be more agile to the needs of customers and employees.</p>            
              </div>
            </div>
            </div>
            </div>
{/* stages */}
            <div className="container-fluid" >
            <div className="container pt-md-5 pt-2 mx-auto" data-aos="fade-up">
          <div className="row">
            <div className="col-12 col-lg-6 py-2 ">
              <div className={`${styles.vr}`}>
                <h2 className={`${styles.heading1} ps-3 mb-0`}>Modernization</h2>
                <h2 className={`${styles.heading1} ps-3`}>Stages</h2>
                </div>
                <p className={`${styles.stage_mini}`}>
                  <span style={{color:"#F71735"}}>i</span>11 Approach towards modernization
              </p>
              
            </div>
            <div className="col-12 col-lg-6 py-2 pt-md-3 pt-2 pt-lg-0">
              <p className={`${styles.para3} pt-md-4 pt-2`}>
              Modernization of systems can be done in incremental fashion or in stages of modernization. Application features will be identified as business functionality items, and each feature will be modernized based on the priority of the organization. During the transition period there will be bridge being built between legacy and modern application for a seamless customer or employee experience.
              </p>
            </div>
          </div>
           </div>
           <div className="container pt-md-3 pt-2 mx-auto pb-5" data-aos="fade-up">
           {stage.map((item, index) => (
            <div className="col-12 col-lg-9 mx-lg-auto mt-2" key={index}>
              <Image src={item.imgurl} className="img-fluid mt-2" width={96} height={96}/>
              <div className={`${styles.stage_steps} pt-4`}>{item.title}</div>
              <div className={`${styles.paradesc} py-2`}>{item.desc}</div>
              <hr></hr>

               </div>
              ))}
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
              Contact us today to explore how we can tailor our Application Modernization services to align with your enterprise's unique needs and drive digital transformation.
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
