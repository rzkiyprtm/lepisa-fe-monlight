import React from "react";
// components
import Image from "next/image";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import styles from "../../styles/Order.module.css";

import icon_cinema from "../../assets/movie/ebv.id.png";
function Index() {
   return (
      <>
         <Navbar />
         <main className={styles.bg}>
            <section className="row">
               <section className="col-md-8">
                  <section className={styles.order__bar}>
                     <h2 className={styles.movie_select}>Movie Selected</h2>
                     <section className={styles.change_}>
                        <h4>Spider-Man: Homecoming</h4>
                        <div className={styles.btn_change}>Change movie</div>
                     </section>
                  </section>
                  <section>
                     <h2 className={styles.choose_seat}>Choose Your Seat</h2>
                  </section>
               </section>
               <section className="col-md-4">
                  <section className={styles.order__bar}>
                     <h2 className={styles.order_info}>Order Info</h2>
                  </section>

                  <section className={styles.oder__content}>
                     <section className={styles.icon_cinema_bar}>
                        <Image
                           className={styles.icon_cinema}
                           src={icon_cinema}
                           alt="icon_cinema"
                        />
                     </section>
                     <h4 className={styles.title_cinema}>EBV.ID Cinema</h4>
                     <section className={styles.order__desc}>
                        <section className={styles.content__desc}>
                           <p className={styles.label_order}>Movie selected</p>
                           <p className={styles.label_order_right}>
                              Spider-Man: Homecoming
                           </p>
                        </section>
                        <section className={styles.content__desc}>
                           <p className={styles.label_order}>
                              Tuesday, 07 July 2020
                           </p>
                           <p className={styles.label_order_right}>02:00pm</p>
                        </section>
                        <section className={styles.content__desc}>
                           <p className={styles.label_order}>
                              One ticket price
                           </p>
                           <p className={styles.label_order_right}>$10</p>
                        </section>
                        <section className={styles.content_bottom}>
                           <p className={styles.label_order}>Seat choosed</p>
                           <p className={styles.label_order_right}>
                              C4, C5, C6
                           </p>
                        </section>
                     </section>
                     <section className={styles.content_bottom}>
                        <p className={styles.label_payment}>Seat choosed</p>
                        <p className={styles.total_payment}>$30</p>
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
