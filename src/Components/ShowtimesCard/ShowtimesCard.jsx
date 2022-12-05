import React, { useState } from "react";
import Image from "next/image";
import styles from "../ShowtimesCard/ShowtimesCard.module.css";

import authActions from "../../redux/actions/auth";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ShowtimesCard(props) {

   const dispatch = useDispatch();
   const router = useRouter();

   const [time, setTime] = useState("")

   const valueTime = (e) => {setTime(e.target.value), console.log(e.target.value)}

   const handleBooking = () => {
      if(time === "") return toast.error("Please input time before book now")
      return dispatch(authActions.bookingThunk({
         schedule_id : props.id,
         tittle: props.tittle,
         price: props.price,
         time: time,
         date: props.date,
         cinema_image: props.image,
         cinema_name: props.name,
      },
      () => {
         router.push("/order");
      }
      ))
   }

   const costing = (price) => {
      return (
         "IDR " +
         parseFloat(price)
            .toFixed()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
      );
   };

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
                  <p className={styles.price_seat}>{costing(props.price)}/seat</p>
               </section>
               <section className={styles.btn_bar}>
                  <div className={styles.btn_booknow}>
                     <button onClick={handleBooking}>Book Now</button>
                     </div>
                  <div className={styles.btn_add}>Add to cart</div>
               </section>
            </section>
         </section>
         <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            closeOnClick={true}
            pauseOnHover={true}
            draggable={true}
            theme="light"
         />
      </>
   );
}

export default ShowtimesCard;
