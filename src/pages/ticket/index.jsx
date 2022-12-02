import React, { useState } from "react";
// components
import Image from "next/image";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
// styles
import styles from "../../styles/Ticket.module.css";
import icon_ticket from "../../assets/movie/icon_ticket.png";
import QRCode from "react-qr-code";
function Index() {
   const [valueCode, setValueCode] = useState("www.ticket.com");
   return (
      <>
         <Navbar />
         <main>
            <section className={styles.ticket__content}>
               <h1 className={styles.title}>Proof of Payment</h1>
               <section className={styles.ticket}>
                  <section className={`${styles.ticket__bar} row `}>
                     <section
                        className={`${styles.ticket__left} col-12 col-sm-12 col-md-6 col-lg-8`}
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
                        className={`${styles.ticket__right} col-12 col-sm-12 col-md-6 col-lg-4`}
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
                              style={{
                                 maxWidth: "100%",
                                 width: "100%",
                              }}
                              value={valueCode}
                              viewBox={`0 0 256 256`}
                           />
                           <div className={styles.circleleft}></div>
                           <div className={styles.circleright}></div>
                        </section>
                     </section>
                  </section>
               </section>
            </section>
         </main>
         <Footer />
      </>
   );
}

export default Index;
