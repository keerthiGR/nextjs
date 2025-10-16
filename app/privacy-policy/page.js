import styles from "./styles.module.css";
import Link from "next/link";

export const metadata = {
    title: "Privacy Policy - i11Labs",
    description: "Review the privacy policy of i11Labs. Understand how we collect, use, and protect your personal information in compliance with legal standards.",
    ogTitle: "Privacy Policy - i11Labs",
    url: "https://i11labs.com/privacy-policy",
    ogDescription: "Review the privacy policy of i11Labs. Understand how we collect, use, and protect your personal information in compliance with legal standards.",
    ogUrl: "https://i11labs.com/privacy-policy",
    ogType: "website",
    ogLocale: "en_US",
  };



export default function PrivacyPolicy() {
return(
    <>
    <div className="container py-4 py-md-5 px-4 ">
                <div className="row mt-5">
                    <div className="col mt-5">
                        <p className={`${styles.heading} text-center mb-0`}>Privacy Policy</p>
                        </div>
                        </div>
                        <div className="container">
                            <div className="row mt-4 justify-content-center">
                                <div className="col-lg-8 col-md-10 col-11">
                                    <p className={`${styles.content} mb-0`}>At <span style={{color:"#F71735"}}>i</span>11Labs (&quot;us,&quot; &quot;we,&quot; or &quot;our&quot;), we are committed to protecting your privacy and personal information. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of information that we receive from users of our website www.i11labs.com (the &quot;Site&quot;) and our services.</p>
                                    
                                    <p className={`${styles.subheading} mt-5 mb-0`}>Information We Collect</p>
                                    <p className={`${styles.content} mb-0`}> We may collect the following types of information: <br/><b>Personal Information:</b> Information that can identify you, such as your name, email address, phone number, and address when you register for an account or fill out a form on our Site. <br/><b>Non-Personal Information: </b>Information that does not identify you personally, such as browser type, IP address, and usage data collected through cookies and other tracking technologies. </p>
                                     
                                    <p className={`${styles.subheading} mt-5 mb-0`}>How We Use Your Information</p>
                                    <p className={`${styles.content} mb-0`}>We may use the information we collect for various purposes, including:
                                        <ul>
                                            <li>To provide, maintain, and improve our services.</li>
                                            <li>To notify you about changes to our services.</li>
                                            <li>To allow you to participate in interactive features when you choose to do so.</li>
                                            <li>To provide customer support and respond to inquiries.</li>
                                            <li>To gather analysis or valuable information so that we can improve our Site.</li>
                                            <li>To monitor the usage of our Site.</li>
                                            <li>To detect, prevent, and address technical issues.</li>
                                            
                                        </ul> 
                                    </p>

                                    <p className={`${styles.subheading} mt-5 mb-0`}>Disclosure of Your Information </p>
                                    <p className={`${styles.content} mb-0`}>We do not sell or rent your personal information to third parties. We may share your information in the following circumstances:
                                    <ul>
                                    <li> With service providers to monitor and analyze the use of our Site.</li>
                                    <li>For business transfers, such as mergers or acquisitions.</li>
                                    <li>With your consent or at your direction.</li>
                                    </ul>
                                    </p>

                                    <p className={`${styles.subheading} mt-5 mb-0`}>Security of Your Information </p>
                                    <p className={`${styles.content} mb-0`}>The security of your personal information is important to us, and we strive to implement and maintain reasonable, commercially acceptable security procedures and practices appropriate to the nature of the information we store to protect it from unauthorized access, destruction, use, modification, or disclosure.</p>

                                    <p className={`${styles.subheading} mt-5 mb-0`}>Your Data Protection Rights</p>
                                    <p className={`${styles.content} mb-0`}>Depending on your location, you may have the following data protection rights:
                                        <ul>
                                            <li>The right to access, update, or delete the information we have on you.</li>
                                            <li>The right to rectification.</li>
                                            <li>The right to object.</li>
                                            <li>The right to data portability.</li>
                                            <li>The right to withdraw consent.</li>
                                        </ul>
                                    </p>

                                    <p className={`${styles.subheading} mt-5 mb-0`}>Changes to This Privacy Policy </p>
                                    <p className={`${styles.content} mb-0`}>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. <br/><br/>If you have any questions about this Privacy Policy, please <Link href="/contact" className={`${styles.linkcontent}`}>contact us.</Link></p>
                        </div>
                        </div>
                        </div>
    </div>

    </>
);
}