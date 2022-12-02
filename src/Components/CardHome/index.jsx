import React, { useState } from "react";
import Image from "next/image";
import card_image from "../../assets/homepage/img_cardhome.png";
import styles from "./CardHome.module.css";
import { useRouter } from "next/router";
function Index(props) {
   // const [variant, setVariant] = useState("coming");
   const router = useRouter();

   const toMoviedetail = () => router.push(`/movie/${props.id}`);

   return (
      <>
         <section className={styles.card__bar}>
            <section className={styles.card_container}>
               <Image
                  src={props.image}
                  className={styles.card_image}
                  alt="card_img"
                  width={160}
                  height={244}
               />
            </section>
            <section className={`${styles.detail_bar} ${styles.hide}`}>
               <h4 className={styles.title}>{props.tittle}</h4>
               <p className={styles.category}>{props.category}</p>
               <div className={styles.detail} onClick={toMoviedetail}>
                  Details
               </div>
               <div className={`${styles.books} ${props.variant}`}>
                  Book now
               </div>
            </section>
         </section>
      </>
   );
}

export default Index;
