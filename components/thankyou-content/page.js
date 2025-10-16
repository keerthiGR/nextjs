import React from "react";
import Image from "next/image";
import styles from "./thankyou-content.module.css";
import mainlogo from "../../public/registration-form/images/DTI Logo.png";
import successImg from "../../public/registration-form/images/Completed Task@2x.png";
const Thankyou = () => {
  return (
    <div>
      <div className={`${styles.body}`}>
      <div className={`${styles.containerFluid} pt-5`}>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="text-center">
                <div className="py-4">
                <Image
                  src={mainlogo}
                  alt="logo icon"
                  width={157}
                  height={133}
                />
                </div>
                <div className={`${styles.modalBox}`}><br />
                <div className="d-none d-lg-block"><br /><br /><br /></div>
                  <Image
                    src={successImg}
                    alt="completed task"
                    width={85}
                    height={120}
                  />
                  <div className="d-flex flex-column pt-3">
                    <span className={`${styles.modalSuccessHeading} `}>
                      Your registration is complete.
                    </span>
                    <span className={`${styles.modalSuccessFont}`}>
                      We will connect with you shortly.
                    </span>
                  </div>
                  <br />
                  <div className="d-none d-lg-block"><br /><br /><br /><br /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Thankyou;
