import React, { useState } from "react";
import Image from "next/image";
import card_image from "../../assets/homepage/img_cardhome.png";
import styles from "./CardHome.module.css";
function Index(props) {
   // const [variant, setVariant] = useState("coming");
   return (
      <>
         <section className={styles.card__bar}>
            <section className={styles.card_container}>
               <Image
                  src={card_image}
                  className={styles.card_image}
                  alt="card_img"
               />
            </section>
            <section className={`${styles.detail_bar} ${styles.hide}`}>
               <h4 className={styles.title}>Spider-Man: Homecoming</h4>
               <p className={styles.category}>Acion, Adventure, Sci-FI</p>
               <div className={styles.detail}>Details</div>
               <div className={`${styles.books} ${props.variant}`}>
                  Book now
               </div>
            </section>
         </section>
      </>
   );
}

export default Index;
