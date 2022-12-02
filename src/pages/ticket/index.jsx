import React, { useState } from "react";
// components
import Image from "next/image";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
// styles
import styles from "../../styles/Ticket.module.css";
import icon_ticket from "../../assets/movie/icon_ticket.png";
// import QRCode from "react-qr-code";
import QRCode from "qrcode.react";

function Index() {
   const [qrCodeText, setQRCodeText] = useState("www.google.com");
   // download QR code
   const downloadQRCode = () => {
      let data = document.getElementById("qrCodeEl");
      console.log(data);
      const qrCodeURL = data
         .toDataURL("image/png")
         .replace("image/png", "image/octet-stream");
      console.log(qrCodeURL);
      let aEl = document.createElement("a");
      aEl.href = qrCodeURL;
      aEl.download = "QR_Code.png";
      document.body.appendChild(aEl);
      aEl.click();
      document.body.removeChild(aEl);
   };

   return (
      <>
         <Navbar />
         <main className={styles.background}>
            <section className={styles.ticket__content}>
               <h1 className={styles.title}>Proof of Payment</h1>

               <section className={styles.ticket}>
                  <section className={`${styles.ticket__bar} row`}>
                     <section
                        className={`${styles.ticket__left} col-12 col-sm-12 col-md-7 col-lg-8`}
                     >
                        <section className={styles.head_left}>
                           <section className={styles.image_container}>
                              <Image
                                 className={styles.icon_ticket}
                                 src={icon_ticket}
                                 alt="icon_ticket"
                              />
                           </section>
                           <p className={styles.admit}>Admit One</p>
                        </section>

                        <section className={styles.content_left}>
                           <section>
                              <p className={styles.label}>Movie</p>
                              <h4>Spider-Man: Homecoming</h4>
                           </section>
                           <section className={styles.data_one}>
                              <section>
                                 <p className={styles.label}>date</p>
                                 <h4 className={styles.label_down}>07 July</h4>
                              </section>
                              <section>
                                 <p className={styles.label}>Time</p>
                                 <h4 className={styles.label_down}>02:00pm</h4>
                              </section>
                              <section>
                                 <p className={styles.label}>Category</p>
                                 <h4 className={styles.label_down}>PG-13</h4>
                              </section>
                           </section>
                           <section className={styles.data_one}>
                              <section>
                                 <p className={styles.label}>Count</p>
                                 <h4 className={styles.label_down}>3 pieces</h4>
                              </section>
                              <section>
                                 <p className={styles.label}>Seats</p>
                                 <h4 className={`${styles.label_down} `}>
                                    C4, C5, C6
                                 </h4>
                              </section>
                              <section>
                                 <p className={`${styles.label}`}>Price</p>
                                 <h4
                                    className={`${styles.label_down} ${styles.price}`}
                                 >
                                    $30.00
                                 </h4>
                              </section>
                           </section>
                        </section>
                     </section>
                     <section
                        className={`${styles.ticket__right} col-12 col-sm-12 col-md-5 col-lg-4`}
                     >
                        <section className={styles.head_right}>
                           <div className={styles.circletop}></div>
                           <div className={styles.circledown}></div>
                           <section
                              className={`${styles.image_container} ${styles.img_right}`}
                           >
                              <Image
                                 className={styles.icon_ticket}
                                 src={icon_ticket}
                                 alt="icon_ticket"
                              />
                           </section>
                        </section>

                        <section className={styles.content_right}>
                           <QRCode
                              size={250}
                              height="auto"
                              id="qrCodeEl"
                              style={{
                                 maxWidth: "100%",
                                 width: "100%",
                              }}
                              value={qrCodeText}
                              viewBox={`0 0 256 256`}
                           />
                           <div className={styles.circleleft}></div>
                           <div className={styles.circleright}></div>
                        </section>
                     </section>
                  </section>
               </section>

               <div className={styles.btn_downprint}>
                  <div className={styles.download} onClick={downloadQRCode}>
                     <i className="fa-solid fa-download"></i>
                     <p className="ps-5">Download</p>
                  </div>
                  <div className={styles.print}>
                     <i className="fa-solid fa-print"></i>
                     <p className="ps-5">Print</p>
                  </div>
               </div>
            </section>
         </main>
         <Footer />
      </>
   );
}

export default Index;
