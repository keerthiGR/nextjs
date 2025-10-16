import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Mail from "../../public/images/contact/mail.webp";
import styles from "../page.module.css";
import Link from "next/link";
import Image from "next/image"

export default function Contact() {
    return (
        <>
        <Header />
            <div className="thankyou container-fluid">
                <div className="row">
                    <div className="col">
                        <Image
                            src={Mail}
                            width={64}
                            height={64}
                            className="img-fluid"
                            alt="Mail"
                            title="Mail"
                        />
                        <p className={`${styles.para} pt-2 mb-0 text-center`}>We received your email.</p>
                        <p className={`${styles.para} `}>Our team will connect with you shortly.</p>
                        <Link href="/"><button className={`${styles.btn} `} type="submit" htef="#">Back to Home</button></Link>
                    </div>
                </div>
            </div>
        <Footer />
        </>
    )
}