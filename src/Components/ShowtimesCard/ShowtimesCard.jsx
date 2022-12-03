import React from "react";
import Image from "next/image";
import styles from "../ShowtimesCard/ShowtimesCard.module.css";
function ShowtimesCard(props) {
   return (
      <>
         <section className={`${styles.showtimes__bar} col-md-4`}>
            <section className={`${styles.titles__bar} row`}>
               <section className="col-md-6">
                  <section className={styles.card_show}>
                     <Image
                        className={styles.image_show}
                        src={props.image}
                        alt={props.name}
                        height={60}
                        width={147}
                     />
                  </section>
               </section>
               <section className="col-md-6">
                  <section className={styles.title_bar}>
                     <h3 className={styles.title}>{props.name}</h3>
                     <p className={styles.location}>{props.address}</p>
                  </section>
               </section>
            </section>
            <section className={styles.content__bar}>
               <section className={styles.times}>
                  <p className={styles.time}>{props.time[0]}</p>
                  <p className={styles.time}>{props.time[1]}</p>
                  <p className={styles.time}>{props.time[2]}</p>
                  <p className={styles.time}>{props.time[3]}</p>
                  <p className={styles.time}>{props.time[4]}</p>
                  <p className={styles.time}>{props.time[5]}</p>
                  <p className={styles.time}>{props.time[6]}</p>
                  <p className={styles.time}>{props.time[7]}</p>
                  <p className={styles.time}>{props.time[8]}</p>
               </section>
               <section className={styles.price}>
                  <p className={styles.price_title}>Price</p>
                  <p className={styles.price_seat}>{props.price}/seat</p>
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
