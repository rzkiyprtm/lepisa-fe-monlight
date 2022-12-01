import React from "react";
import Image from "next/image";
import styles from "../ShowtimesCard/ShowtimesCard.module.css";
import ebv from "../../assets/movie/ebv.id.png";
function ShowtimesCard() {
   return (
      <>
         <section className={`${styles.showtimes__bar} col-md-4`}>
            <section className={`${styles.titles__bar} row`}>
               <section className="col-md-6">
                  <section className={styles.card_show}>
                     <Image className={styles.image_show} src={ebv} alt="ebv" />
                  </section>
               </section>
               <section className="col-md-6">
                  <section className={styles.title_bar}>
                     <h3 className={styles.title}>Ebv.id</h3>
                     <p className={styles.location}>
                        Whatever street No.12, South Purwokerto
                     </p>
                  </section>
               </section>
            </section>
            <section className={styles.content__bar}>
               <section className={styles.times}>
                  <p className={styles.time}>08:30am</p>
                  <p className={styles.time}>08:30am</p>
                  <p className={styles.time}>08:30am</p>
                  <p className={styles.time}>08:30am</p>
                  <p className={styles.time}>08:30am</p>
                  <p className={styles.time}>08:30am</p>
                  <p className={styles.time}>08:30am</p>
               </section>
               <section className={styles.price}>
                  <p className={styles.price_title}>Price</p>
                  <p className={styles.price_seat}>$10.00/seat</p>
               </section>
               <section className={styles.btn_bar}>
                  <div className={styles.btn_booknow}>Book now</div>
                  <div className={styles.btn_add}>Add to cart</div>
               </section>
            </section>
         </section>
      </>
   );
}

export default ShowtimesCard;
