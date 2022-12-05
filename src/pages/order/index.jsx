import React, { useEffect, useState } from "react";
// components
import Image from "next/image";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import styles from "../../styles/Order.module.css";

// import icon_cinema from "../../assets/movie/ebv.id.png";
import withAuth from "../../Components/privateElement/withAuth";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import authActions from "../../redux/actions/auth";
import { useRouter } from "next/router";


function Index() {

   const dispatch = useDispatch()
   const router = useRouter();

   const booking = useSelector((state) => state.auth.payment);
   const getYear = (booking.date).slice(0,4)
   const getMonth = (booking.date).slice(5,7)
   const getDay = (booking.date).slice(8,10)

   const [seat, setSeat] = useState([])
   const [sold, setSold] = useState([])
   const [selected1, setSelected1] = useState(true)
   const [selected2, setSelected2] = useState(true)

   useEffect(() => {
      axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/booking/seat?schedule=${booking.schedule_id}&time=${booking.time}`)
      .then((res) => setSold(res.data))
      .catch((err) => console.log(err))
   }, [])



   // let chair = [
   //    "A1","A2","A3",
   //    "A4",
   //    "A5",
   //    "A6",
   //    "A7",
   //    "A8",
   //    "A9",
   //    "A10",
   //    "A11",
   //    "A12",
   //    "A13",
   //    "A14",
   // ];





   const valueSeat = (e) => {
      setSeat([...seat, [e.target.value]]), 
      setSelected1(!selected1)
   };
   const valueSeat1 = (e) => {
      setSeat([...seat, [e.target.value]]), 
      setSelected2(!selected2)
      
   };
   console.log(seat)

   
   const costing = (price) => {
      return (
         "IDR " +
         parseFloat(price)
            .toFixed()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
      );
   };

   const goPayment = () => {
      return dispatch(authActions.bookingThunk({
            schedule_id: booking.schedule_id,
            tittle: booking.tittle,
            price: booking.price,
            time: booking.time,
            date: booking.date,
            total_payment: seat.length*booking.price,
            cinema_image: booking.cinema_image,
            cinema_name: booking.cinema_name,
            total_ticket: seat.length,
            seat: seat,
      },
      () => {
         router.push("/payment")
      }
      ))
   }





   return (
      <>
         <Navbar />
         <main className={styles.bg}>
            <section className="row">
               <section className="col-md-8">
                  <section className={styles.order__bar}>
                     <h2 className={styles.movie_select}>Movie Selected</h2>
                     <section className={styles.change_}>
                        <h4>{booking.tittle}</h4>
                        <div className={styles.btn_change}>Change movie</div>
                     </section>
                  </section>
                  {/* tempat duduk */}
                  <section>

                     <h2 className={styles.choose_seat}>Choose Your Seat</h2>
                     <div className={styles.background_seat}>
                        <div className={styles.screen}>
                           <p className={styles.tittle_screen}>Screen</p>
                           <div className={styles.sreen_bioskop}></div>
                        </div>
                        <div className={styles.container_box}>
                           <div className="d-flex flex-row">
                              <div className={`d-flex flex-column align-items-center ${styles.number_chair}`}>
                                 <p className="mt-2">A</p>
                                 <p className="mt-2">B</p>
                                 <p className="mt-2">C</p>
                                 <p className="mt-2">D</p>
                                 <p className="mt-2">E</p>
                                 <p className="mt-2">F</p>
                                 <p className="mt-2">G</p>
                              </div>
                              <div className="d-flex flex-row justify-content-center gap-5">
                                 <div className="d-flex flex-row align-items-center justify-content-center">
                                    <div className={`d-flex flex-column align-items-center justify-content-center ${styles.chair}`}>
                                       <button value="1" onClick={valueSeat} className={(selected1) ? `${styles.chair1}` : `${styles.chair_selected}`}></button>
                                       <button value="15" onClick={valueSeat1} className={(selected2) ? `${styles.chair2}` : `${styles.chair_selected1}`}></button>
                                       <button value="29" onClick={valueSeat} className={styles.chair3}></button>
                                       <button value="43" onClick={valueSeat} className={styles.chair4}></button>
                                       <button value="57" onClick={valueSeat} className={styles.chair5}></button>
                                       <button value="71" onClick={valueSeat} className={styles.chair6}></button>
                                       <button value="85" onClick={valueSeat} className={styles.chair6}></button>
                                       <p className="mt-3">1</p>
                                    </div>
                                    <div className="d-flex flex-column align-items-center justify-content-center">
                                       <button value="2" onClick={valueSeat} className={styles.chair7}></button>
                                       <button value="16" onClick={valueSeat} className={styles.chair8}></button>
                                       <button value="30" onClick={valueSeat} className={styles.chair9}></button>
                                       <button value="44" onClick={valueSeat} className={styles.chair9}></button>
                                       <button value="58" onClick={valueSeat} className={styles.chair10}></button>
                                       <button value="72" onClick={valueSeat} className={styles.chair11}></button>
                                       <button value="86" onClick={valueSeat} className={styles.chair12}></button>
                                       <p className="mt-3">2</p>
                                    </div>
                                    <div className="d-flex flex-column align-items-center justify-content-center">
                                       <button value="3" onClick={valueSeat} className={styles.chair13}></button>
                                       <button value="17" onClick={valueSeat} className={styles.chair14}></button>
                                       <button value="31" onClick={valueSeat} className={styles.chair14}></button>
                                       <button value="45" onClick={valueSeat} className={styles.chair14}></button>
                                       <button value="59" onClick={valueSeat} className={styles.chair15}></button>
                                       <button value="73" onClick={valueSeat} className={styles.chair16}></button>
                                       <button value="87" onClick={valueSeat} className={styles.chair17}></button>
                                       <p className="mt-3">3</p>
                                    </div>
                                    <div className="d-flex flex-column align-items-center justify-content-center">
                                       <button value="4" onClick={valueSeat} className={styles.chair19}></button>
                                       <button value="18" onClick={valueSeat} className={styles.chair20}></button>
                                       <button value="32" onClick={valueSeat} className={styles.chair20}></button>
                                       <button value="46" onClick={valueSeat} className={styles.chair21}></button>
                                       <button value="60" onClick={valueSeat} className={styles.chair22}></button>
                                       <button value="74" onClick={valueSeat} className={styles.chair23}></button>
                                       <button value="88" onClick={valueSeat} className={styles.chair24}></button>
                                       <p className="mt-3">4</p>
                                    </div>
                                    <div className="d-flex flex-column align-items-center justify-content-center">
                                       <button value="5" onClick={valueSeat} className={styles.chair25}></button>
                                       <button value="19" onClick={valueSeat} className={styles.chair26}></button>
                                       <button value="33" onClick={valueSeat} className={styles.chair27}></button>
                                       <button value="47" onClick={valueSeat} className={styles.chair28}></button>
                                       <button value="61" onClick={valueSeat} className={styles.chair28}></button>
                                       <button value="75" onClick={valueSeat} className={styles.chair29}></button>
                                       <button value="89" onClick={valueSeat} className={styles.chair30}></button>
                                       <p className="mt-3">5</p>
                                    </div>
                                    <div className="d-flex flex-column align-items-center justify-content-center">
                                       <button value="6" onClick={valueSeat} className={styles.chair31}></button>
                                       <button value="20" onClick={valueSeat} className={styles.chair32}></button>
                                       <button value="34" onClick={valueSeat} className={styles.chair32}></button>
                                       <button value="48" onClick={valueSeat} className={styles.chair33}></button>
                                       <button value="62" onClick={valueSeat} className={styles.chair34}></button>
                                       <button value="76" onClick={valueSeat} className={styles.chair35}></button>
                                       <button value="90" onClick={valueSeat} className={styles.chair36}></button>
                                       <p className="mt-3">6</p>
                                    </div>
                                    <div className="d-flex flex-column align-items-center justify-content-center">
                                       <button value="7" onClick={valueSeat} className={styles.chair37}></button>
                                       <button value="21" onClick={valueSeat} className={styles.chair38}></button>
                                       <button value="35" onClick={valueSeat} className={styles.chair39}></button>
                                       <button value="49" onClick={valueSeat} className={styles.chair39}></button>
                                       <button value="63" onClick={valueSeat} className={styles.chair40}></button>
                                       <button value="77" onClick={valueSeat} className={styles.chair41}></button>
                                       <button value="91" onClick={valueSeat} className={styles.chair42}></button>
                                       <p className="mt-3">7</p>
                                    </div>
                                 </div>
                                 
                                 


                                 <div className="d-flex flex-row align-items-center justify-content-center">
                                    <div className={`d-flex flex-column align-items-center justify-content-center ${styles.chair}`}>
                                       <button value="8" onClick={valueSeat} className={(sold[0]) ? styles.chair2 : styles.chair_sold}></button>
                                       <button value="22" onClick={valueSeat} className={styles.chair2}></button>
                                       <button value="36" onClick={valueSeat} className={styles.chair3}></button>
                                       <button value="50" onClick={valueSeat} className={styles.chair3}></button>
                                       <button value="64" onClick={valueSeat} className={styles.chair4}></button>
                                       <button value="78" onClick={valueSeat} className={styles.chair5}></button>
                                       <button value="92" onClick={valueSeat} className={styles.chair6}></button>
                                       <p className="mt-3">8</p>
                                    </div>
                                    <div className="d-flex flex-column align-items-center justify-content-center">
                                       <button value="9" onClick={valueSeat} className={styles.chair7}></button>
                                       <button value="23" onClick={valueSeat} className={styles.chair8}></button>
                                       <button value="37" onClick={valueSeat} className={styles.chair9}></button>
                                       <button value="51" onClick={valueSeat} className={styles.chair9}></button>
                                       <button value="65" onClick={valueSeat} className={styles.chair10}></button>
                                       <button value="79" onClick={valueSeat} className={styles.chair11}></button>
                                       <button value="93" onClick={valueSeat} className={styles.chair12}></button>
                                       <p className="mt-3">9</p>
                                    </div>
                                    <div className="d-flex flex-column align-items-center justify-content-center">
                                       <button value="10" onClick={valueSeat} className={styles.chair13}></button>
                                       <button value="24" onClick={valueSeat} className={styles.chair14}></button>
                                       <button value="38" onClick={valueSeat} className={styles.chair15}></button>
                                       <button value="52" onClick={valueSeat} className={styles.chair15}></button>
                                       <button value="66" onClick={valueSeat} className={styles.chair16}></button>
                                       <button value="80" onClick={valueSeat} className={styles.chair17}></button>
                                       <button value="94" onClick={valueSeat} className={styles.chair18}></button>
                                       <p className="mt-3">10</p>
                                    </div>
                                    <div className="d-flex flex-column align-items-center justify-content-center">
                                       <button value="11" onClick={valueSeat} className={styles.chair19}></button>
                                       <button value="25" onClick={valueSeat} className={styles.chair20}></button>
                                       <button value="39" onClick={valueSeat} className={styles.chair21}></button>
                                       <button value="53" onClick={valueSeat} className={styles.chair21}></button>
                                       <button value="67" onClick={valueSeat} className={styles.chair22}></button>
                                       <button value="81" onClick={valueSeat} className={styles.chair23}></button>
                                       <button value="95" onClick={valueSeat} className={styles.chair24}></button>
                                       <p className="mt-3">11</p>
                                    </div>
                                    <div className="d-flex flex-column align-items-center justify-content-center">
                                       <button value="12" onClick={valueSeat} className={styles.chair25}></button>
                                       <button value="26" onClick={valueSeat} className={styles.chair26}></button>
                                       <button value="40" onClick={valueSeat} className={styles.chair27}></button>
                                       <button value="54" onClick={valueSeat} className={styles.chair27}></button>
                                       <button value="68" onClick={valueSeat} className={styles.chair28}></button>
                                       <button value="82" onClick={valueSeat} className={styles.chair29}></button>
                                       <button value="96" onClick={valueSeat} className={styles.chair30}></button>
                                       <p className="mt-3">12</p>
                                    </div>
                                    <div className="d-flex flex-column align-items-center justify-content-center">
                                       <button value="13" onClick={valueSeat} className={styles.chair31}></button>
                                       <button value="27" onClick={valueSeat} className={styles.chair32}></button>
                                       <button value="41" onClick={valueSeat} className={styles.chair33}></button>
                                       <button value="55" onClick={valueSeat} className={styles.chair33}></button>
                                       <button value="69" onClick={valueSeat} className={styles.chair34}></button>
                                       <button value="83" onClick={valueSeat} className={styles.chair36}></button>
                                       <button value="97" onClick={valueSeat} className={styles.chair36}></button>
                                       <p className="mt-3">13</p>
                                    </div>
                                    <div className="d-flex flex-column align-items-center justify-content-center">
                                       <button value="14" onClick={valueSeat} className={styles.chair37}></button>
                                       <button value="28" onClick={valueSeat} className={styles.chair38}></button>
                                       <button value="42" onClick={valueSeat} className={styles.chair39}></button>
                                       <button value="56" onClick={valueSeat} className={styles.chair39}></button>
                                       <button value="70" onClick={valueSeat} className={styles.chair40}></button>
                                       <button value="84" onClick={valueSeat} className={styles.chair41}></button>
                                       <button value="98" onClick={valueSeat} className={styles.chair42}></button>
                                       <p className="mt-3">14</p>
                                    </div>
                                 </div>


                              </div>
                           </div>
                        </div>

                        <div className={styles.content_avail_box}>
                           <div className="">
                              <p className={styles.seating_key}>Seating key</p>
                           </div>
                           
                           <div className="d-flex flex-column align-items-start mt-2">
                              <div className="d-flex flex-row align-items-center">
                                 <p className={styles.box_avail}></p>
                                 <p className={styles.avail}>Available</p>
                              </div>
                              <div className="d-flex flex-row align-items-center mt-2">
                                 <p className={styles.box_selected}></p>
                                 <p className={styles.selected}>Selected</p>
                              </div>
                              <div className="d-flex flex-row align-items-center mt-2">
                                 <p className={styles.box_sold}></p>
                                 <p className={styles.sold}>Sold</p>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className={styles.button_checkout}>
                        <div className="d-flex flex-row justify-content-between">
                           <button className={styles.change_movie}>Change your movie</button>
                           <button className={styles.checkout_now} onClick={goPayment}>Checkout now</button>
                        </div>
                     </div>

                  </section>
                  {/* akhir tempat duduk */}
               </section>
               <section className="col-md-4">
                  <section className={styles.order__bar}>
                     <h2 className={styles.order_info}>Order Info</h2>
                  </section>

                  <section className={styles.oder__content}>
                     <section className={styles.icon_cinema_bar}>
                        <Image
                           className={styles.icon_cinema}
                           src={booking.cinema_image}
                           alt="icon_cinema"
                           width={1000}
                           height={50}
                        />
                     </section>
                     <h4 className={styles.title_cinema}>{booking.cinema_name}</h4>
                     <section className={styles.order__desc}>
                        <section className={styles.content__desc}>
                           <p className={styles.label_order}>Movie selected</p>
                           <p className={styles.label_order_right}>
                              {booking.tittle}
                           </p>
                        </section>
                        <section className={styles.content__desc}>
                           <p className={styles.label_order}>
                              {/* Tuesday, 07 July 2020 */}
                              {`${getDay} - ${getMonth} - ${getYear}`}
                           </p>
                           <p className={styles.label_order_right}>{booking.time}</p>
                        </section>
                        <section className={styles.content__desc}>
                           <p className={styles.label_order}>
                              One ticket price
                           </p>
                           <p className={styles.label_order_right}>{costing(booking.price)}</p>
                        </section>
                        <section className={styles.content_bottom}>
                           <p className={styles.label_order}>Seat choosed</p>
                           <p className={styles.label_order_right}>
                              {seat}
                           </p>
                        </section>
                     </section>
                     <section className={styles.content_bottom}>
                        <p className={styles.label_payment}>Seat choosed</p>
                        <p className={styles.total_payment}>{costing((seat.length)*booking.price)}</p>
                     </section>
                  </section>
               </section>
            </section>
         </main>
         <Footer />
      </>
   );
}

export default withAuth(Index);
