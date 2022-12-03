import React, { useState } from "react";
// components
import Image from "next/image";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import styles from "../../styles/Order.module.css";

import icon_cinema from "../../assets/movie/ebv.id.png";
function Index() {

   const [button, setButton] = useState([])

   // const valueButton = (e) => {
   //    setButton(...button, [e.target.value])
   //    // console.log(e.target.value)
   // }

   const valueButton = (e) =>{
      setButton([ ...button, e.target.value ])
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
                        <h4>Spider-Man: Homecoming</h4>
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
                                       <button value="1" onClick={valueButton} className={styles.chair1}></button>
                                       <button value="2" disabled onClick={valueButton} className={styles.chair2}></button>
                                       <button className={styles.chair3}></button>
                                       <button className={styles.chair4}></button>
                                       <button className={styles.chair5}></button>
                                       <button className={styles.chair6}></button>
                                       <button className={styles.chair6}></button>
                                       <p className="mt-3">1</p>
                                    </div>
                                    <div className="d-flex flex-column align-items-center justify-content-center">
                                       <button className={styles.chair7}></button>
                                       <button className={styles.chair8}></button>
                                       <button className={styles.chair9}></button>
                                       <button className={styles.chair9}></button>
                                       <button className={styles.chair10}></button>
                                       <button className={styles.chair11}></button>
                                       <button className={styles.chair12}></button>
                                       <p className="mt-3">2</p>
                                    </div>
                                    <div className="d-flex flex-column align-items-center justify-content-center">
                                       <button className={styles.chair13}></button>
                                       <button className={styles.chair14}></button>
                                       <button className={styles.chair14}></button>
                                       <button className={styles.chair14}></button>
                                       <button className={styles.chair15}></button>
                                       <button className={styles.chair16}></button>
                                       <button className={styles.chair17}></button>
                                       <p className="mt-3">3</p>
                                    </div>
                                    <div className="d-flex flex-column align-items-center justify-content-center">
                                       <button className={styles.chair19}></button>
                                       <button className={styles.chair20}></button>
                                       <button className={styles.chair20}></button>
                                       <button className={styles.chair21}></button>
                                       <button className={styles.chair22}></button>
                                       <button className={styles.chair23}></button>
                                       <button className={styles.chair24}></button>
                                       <p className="mt-3">4</p>
                                    </div>
                                    <div className="d-flex flex-column align-items-center justify-content-center">
                                       <button className={styles.chair25}></button>
                                       <button className={styles.chair26}></button>
                                       <button className={styles.chair27}></button>
                                       <button className={styles.chair28}></button>
                                       <button className={styles.chair28}></button>
                                       <button className={styles.chair29}></button>
                                       <button className={styles.chair30}></button>
                                       <p className="mt-3">5</p>
                                    </div>
                                    <div className="d-flex flex-column align-items-center justify-content-center">
                                       <button className={styles.chair31}></button>
                                       <button className={styles.chair32}></button>
                                       <button className={styles.chair32}></button>
                                       <button className={styles.chair33}></button>
                                       <button className={styles.chair34}></button>
                                       <button className={styles.chair35}></button>
                                       <button className={styles.chair36}></button>
                                       <p className="mt-3">6</p>
                                    </div>
                                    <div className="d-flex flex-column align-items-center justify-content-center">
                                       <button className={styles.chair37}></button>
                                       <button className={styles.chair38}></button>
                                       <button className={styles.chair39}></button>
                                       <button className={styles.chair39}></button>
                                       <button className={styles.chair40}></button>
                                       <button className={styles.chair41}></button>
                                       <button className={styles.chair42}></button>
                                       <p className="mt-3">7</p>
                                    </div>
                                 </div>
                                 
                                 


                                 <div className="d-flex flex-row align-items-center justify-content-center">
                                    <div className={`d-flex flex-column align-items-center justify-content-center ${styles.chair}`}>
                                       <button className={styles.chair1}></button>
                                       <button className={styles.chair2}></button>
                                       <button className={styles.chair3}></button>
                                       <button className={styles.chair3}></button>
                                       <button className={styles.chair4}></button>
                                       <button className={styles.chair5}></button>
                                       <button className={styles.chair6}></button>
                                       <p className="mt-3">8</p>
                                    </div>
                                    <div className="d-flex flex-column align-items-center justify-content-center">
                                       <button className={styles.chair7}></button>
                                       <button className={styles.chair8}></button>
                                       <button className={styles.chair9}></button>
                                       <button className={styles.chair9}></button>
                                       <button className={styles.chair10}></button>
                                       <button className={styles.chair11}></button>
                                       <button className={styles.chair12}></button>
                                       <p className="mt-3">9</p>
                                    </div>
                                    <div className="d-flex flex-column align-items-center justify-content-center">
                                       <button className={styles.chair13}></button>
                                       <button className={styles.chair14}></button>
                                       <button className={styles.chair15}></button>
                                       <button className={styles.chair15}></button>
                                       <button className={styles.chair16}></button>
                                       <button className={styles.chair17}></button>
                                       <button className={styles.chair18}></button>
                                       <p className="mt-3">10</p>
                                    </div>
                                    <div className="d-flex flex-column align-items-center justify-content-center">
                                       <button className={styles.chair19}></button>
                                       <button className={styles.chair20}></button>
                                       <button className={styles.chair21}></button>
                                       <button className={styles.chair21}></button>
                                       <button className={styles.chair22}></button>
                                       <button className={styles.chair23}></button>
                                       <button className={styles.chair24}></button>
                                       <p className="mt-3">11</p>
                                    </div>
                                    <div className="d-flex flex-column align-items-center justify-content-center">
                                       <button className={styles.chair25}></button>
                                       <button className={styles.chair26}></button>
                                       <button className={styles.chair27}></button>
                                       <button className={styles.chair27}></button>
                                       <button className={styles.chair28}></button>
                                       <button className={styles.chair29}></button>
                                       <button className={styles.chair30}></button>
                                       <p className="mt-3">12</p>
                                    </div>
                                    <div className="d-flex flex-column align-items-center justify-content-center">
                                       <button className={styles.chair31}></button>
                                       <button className={styles.chair32}></button>
                                       <button className={styles.chair33}></button>
                                       <button className={styles.chair33}></button>
                                       <button className={styles.chair34}></button>
                                       <button className={styles.chair35}></button>
                                       <button className={styles.chair36}></button>
                                       <p className="mt-3">13</p>
                                    </div>
                                    <div className="d-flex flex-column align-items-center justify-content-center">
                                       <button className={styles.chair37}></button>
                                       <button className={styles.chair38}></button>
                                       <button className={styles.chair39}></button>
                                       <button className={styles.chair39}></button>
                                       <button className={styles.chair40}></button>
                                       <button className={styles.chair41}></button>
                                       <button className={styles.chair42}></button>
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
                           <button className={styles.checkout_now}>Checkout now</button>
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
