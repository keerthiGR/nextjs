import styles from "../privacy-policy/styles.module.css";
import Link from "next/link";

export const metadata = {
    title: "Terms & Conditions - i11Labs",
    description: "Read the terms and conditions for using i11Labs website and services. Understand the rules and guidelines for accessing and utilizing our resources.",
    ogTitle: "Terms & Conditions - i11Labs",
    url: "https://i11labs.com/terms-and-conditions",
    ogDescription: "Read the terms and conditions for using i11Labs website and services. Understand the rules and guidelines for accessing and utilizing our resources.",
    ogUrl: "https://i11labs.com/terms-and-conditions",
    ogType: "website",
    ogLocale: "en_US",
};

export default function TermsandCondition() {
    return (
        <>
            <div className="container py-4 py-md-5 px-4 ">
                <div className="row mt-5">
                    <div className="col mt-5">
                        <p className={`${styles.heading} text-center mb-0`}>TERMS AND CONDITIONS</p>
                    </div>
                </div>
                <div className="container">
                    <div className="row mt-4 justify-content-center">
                        <div className="col-lg-8 col-md-10 col-11">
                            <p className={`${styles.content} mb-0`}>Welcome to <span style={{color:"#F71735"}}>i</span>11Labs (&quot;us,&quot; &quot;we,&quot; or &quot;our&quot;). By accessing or using our website www.i11labs.com (the &quot;Site&quot;) and our services, you agree to comply with and be bound by the following Terms and Conditions.</p>

                            <p className={`${styles.subheading} mt-5 mb-0`}>Acceptance of Terms</p>
                            <p className={`${styles.content} mb-0`}>By accessing or using our Site, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our Site.</p>

                            <p className={`${styles.subheading} mt-5 mb-0`}>Changes to Terms </p>
                            <p className={`${styles.content} mb-0`}>We reserve the right to modify these Terms and Conditions at any time. We will notify you of any changes by posting the new Terms on this page. Your continued use of the Site after any modifications signifies your acceptance of the new terms.</p>

                            <p className={`${styles.subheading} mt-5 mb-0`}>Intellectual Property Rights</p>
                            <p className={`${styles.content} mb-0`}> The content and materials on the Site, including but not limited to text, graphics, logos, and images, are the intellectual property of <span style={{color:"#F71735"}}>i</span>11Labs and are protected by copyright and trademark laws. You may not reproduce, distribute, or create derivative works from any content without our prior written consent.</p>

                            <p className={`${styles.subheading} mt-5 mb-0`}>Limitation of Liability</p>
                            <p className={`${styles.content} mb-0`}>To the fullest extent permitted by law, <span style={{color:"#F71735"}}>i</span>11Labs shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from your access to or use of, or inability to access or use the Site.  </p>

                            <p className={`${styles.subheading} mt-5 mb-0`}>Disputes</p>
                            <p className={`${styles.content} mb-0`}>Any dispute related in any way to your use of this app shall be arbitrated by state or federal court and you consent to exclusive jurisdiction and venue of such courts. <br /><br />If you have any questions about these Terms and Conditions, please <Link href="/contact" className={`${styles.linkcontent}`}>contact us.</Link></p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}