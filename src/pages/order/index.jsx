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
import Seat from "../../Components/seat/Seat";


function Index() {

   const dispatch = useDispatch()
   const router = useRouter();

   const booking = useSelector((state) => state.auth.payment)

   const [seat, setSeat] = useState([])
   const [seat_id, setSeat_id] = useState([])
   const [nameseat, setNameseat] = useState([])
   const [sold, setSold] = useState([])
   const [limit, setLimit] = useState(7);
   const [selected, setSelected] = useState(true)
   const [totalPayment, setTotalPayment] = useState(0)
   
   useEffect(() => {
      axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/booking/seat?schedule=${booking.schedule_id}&time=${booking.time}`)
      .then((res) => setSold(res.data))
      .catch((err) => console.log(err))
   }, [])

   useEffect(() => {
      axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/booking/allseat`)
      .then((res) => {
         setSeat_id(res.data.data)
      })
   }, [])








   // const valueSeat = (e) => {
   //    setSeat([...seat, [e.target.value]]), 
   //    setSelected(!selected)
   // };

   const checkSeat = (e) => {
      const arr = seat
      const index = arr.indexOf(e.target.value);
      if (index > -1) {
        arr.splice(index, 1); 
      } else {
        arr.push(e.target.value);
      }
      setSeat(arr)
      setTotalPayment(arr.length*booking.price)
    };
   console.log(typeof(seat))
   console.log(seat)
   // console.log(totalPayment)

   
   const costing = (price) => {
      return (
         "IDR " +
         parseFloat(price)
            .toFixed()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
      );
   };

   const goPayment = () => {
      const seats = seat.map((e)=> (
        e = {
         "seat_id": parseInt(e)
        } 
      ))
      console.log(seats)
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
            seat: seats,
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
               <section className="col-md-8 col-sm-12">
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
                                 <div className="d-flex flex-column align-items-center">

                                    <div className={`d-flex gap-5 flex-row align-items-center justify-content-center ${styles.chair}`}>
                                       <div className="">
                                          {seat_id.map((e,index) => index < 7 && 
                                          (
                                             <Seat 
                                             key={e.id}
                                             id={e.id}
                                             seat={e.seat.slice(1,3)}
                                             handleArr={checkSeat}
                                             // Untuk styling disini (INGET KITA NGERJAIN RAME-RAME GK KETEMU (05-12-2022))
                                             // styling={(selected) ? styles.chair1 : styles.chair_selected1}
                                             // selected={selected}
                                             // chair={styles.chair1}
                                             // select={styles.chair_selected1}
                                             // id_selected={e.id}
                                             // id_chair={e.id}
                                             />
                                          ))}
                                       </div>
                                       <div className="">
                                          {seat_id.map((e,index) => index >= 7 && index < 14 && 
                                          (
                                             <Seat 
                                             key={e.id}
                                             id={e.id}
                                             seat={e.seat.slice(1,3)}
                                             handleArr={checkSeat}
                                             />
                                          ))}
                                       </div>
                                    </div>

                                    {/* kursi B */}
                                    <div className={`d-flex gap-5 flex-row align-items-center justify-content-center ${styles.chair}`}>
                                       <div className="">
                                          {seat_id.map((e,index) => index >= 14 && index < 21 && 
                                          (
                                             <Seat 
                                             key={e.id}
                                             id={e.id}
                                             seat={e.seat.slice(1,3)}
                                             handleArr={checkSeat}
                                             />
                                          ))}
                                       </div>

                                       <div className="">
                                          {seat_id.map((e,index) => index >= 21 && index < 28 && 
                                          (
                                             <Seat 
                                             key={e.id}
                                             id={e.id}
                                             seat={e.seat.slice(1,3)}
                                             handleArr={checkSeat}
                                             />
                                          ))}
                                       </div>
                                    </div>


                                    {/* kursi C */}
                                    <div className={`d-flex gap-5 flex-row align-items-center justify-content-center ${styles.chair}`}>
                                       <div className="">
                                          {seat_id.map((e,index) => index >= 28 && index < 35 && 
                                          (
                                             <Seat 
                                             key={e.id}
                                             id={e.id}
                                             seat={e.seat.slice(1,3)}
                                             handleArr={checkSeat}
                                             />
                                          ))}
                                       </div>

                                       <div className="">
                                          {seat_id.map((e,index) => index >= 35 && index < 42 && 
                                          (
                                             <Seat 
                                             key={e.id}
                                             id={e.id}
                                             seat={e.seat.slice(1,3)}
                                             handleArr={checkSeat}
                                             />
                                          ))}
                                       </div>
                                    </div>

                                    {/* kursi D */}
                                    <div className={`d-flex gap-5 flex-row align-items-center justify-content-center ${styles.chair}`}>
                                       <div className="">
                                          {seat_id.map((e,index) => index >= 42 && index < 49 && 
                                          (
                                             <Seat 
                                             key={e.id}
                                             id={e.id}
                                             seat={e.seat.slice(1,3)}
                                             handleArr={checkSeat}
                                             />
                                          ))}
                                       </div>

                                       <div className="">
                                          {seat_id.map((e,index) => index >= 49 && index < 56 && 
                                          (
                                             <Seat 
                                             key={e.id}
                                             id={e.id}
                                             seat={e.seat.slice(1,3)}
                                             handleArr={checkSeat}
                                             />
                                          ))}
                                       </div>
                                    </div>


                                    {/* kursi F */}
                                    <div className={`d-flex gap-5 flex-row align-items-center justify-content-center ${styles.chair}`}>
                                       <div className="">
                                          {seat_id.map((e,index) => index >= 56 && index < 63 && 
                                          (
                                             <Seat 
                                             key={e.id}
                                             id={e.id}
                                             seat={e.seat.slice(1,3)}
                                             handleArr={checkSeat}
                                             />
                                          ))}
                                       </div>

                                       <div className="">
                                          {seat_id.map((e,index) => index >= 63 && index < 70 && 
                                          (
                                             <Seat 
                                             key={e.id}
                                             id={e.id}
                                             seat={e.seat.slice(1,3)}
                                             handleArr={checkSeat}
                                             />
                                          ))}
                                       </div>
                                    </div>

                                    {/* kursi F */}
                                    <div className={`d-flex gap-5 flex-row align-items-center justify-content-center ${styles.chair}`}>
                                       <div className="">
                                          {seat_id.map((e,index) => index >= 70 && index < 77 && 
                                          (
                                             <Seat 
                                             key={e.id}
                                             id={e.id}
                                             seat={e.seat.slice(1,3)}
                                             handleArr={checkSeat}
                                             />
                                          ))}
                                       </div>

                                       <div className="">
                                          {seat_id.map((e,index) => index >= 77 && index < 84 && 
                                          (
                                             <Seat 
                                             key={e.id}
                                             id={e.id}
                                             seat={e.seat.slice(1,3)}
                                             handleArr={checkSeat}
                                             />
                                          ))}
                                       </div>
                                    </div>


                                    {/* kursi G */}
                                    <div className={`d-flex gap-5 flex-row align-items-center justify-content-center ${styles.chair}`}>
                                       <div className="">
                                          {seat_id.map((e,index) => index >= 84 && index < 91 && 
                                          (
                                             <Seat 
                                             key={e.id}
                                             id={e.id}
                                             seat={e.seat.slice(1,3)}
                                             handleArr={checkSeat}
                                             />
                                          ))}
                                       </div>

                                       <div className="">
                                          {seat_id.map((e,index) => index >= 91 && index < 98 && 
                                          (
                                             <Seat 
                                             key={e.id}
                                             id={e.id}
                                             seat={e.seat.slice(1,3)}
                                             handleArr={checkSeat}
                                             />
                                          ))}
                                       </div>
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
                              {booking.date}
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
                        <p className={styles.total_payment}>{costing(totalPayment)}</p>
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
