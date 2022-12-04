import React, { useState } from "react";
import Image from "next/image";
import styles from "../ShowtimesCard/ShowtimesCard.module.css";
function ShowtimesCard(props) {

   const [time, setTime] = useState("")

   const valueTime = (e) => {setTime(e.target.value), console.log(e.target.value)}

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
                  <button className={styles.time} value={props.time[0]} onClick={valueTime}>{props.time[0]}</button>
                  <button className={styles.time} value={props.time[1]} onClick={valueTime}>{props.time[1]}</button>
                  <button className={styles.time} value={props.time[2]} onClick={valueTime}>{props.time[2]}</button>
                  <button className={styles.time} value={props.time[3]} onClick={valueTime}>{props.time[3]}</button>
                  <button className={styles.time} value={props.time[4]} onClick={valueTime}>{props.time[4]}</button>
                  <button className={styles.time} value={props.time[5]} onClick={valueTime}>{props.time[5]}</button>
                  <button className={styles.time} value={props.time[7]} onClick={valueTime}>{props.time[6]}</button>
                  <button className={styles.time} value={props.time[8]} onClick={valueTime}>{props.time[7]}</button>
                  <button className={styles.time} value={props.time[9]} onClick={valueTime}>{props.time[8]}</button>
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
