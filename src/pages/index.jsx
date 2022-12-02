import React, { useState } from "react";
import Image from "next/image";
// assets
import styles from "../styles/Homepage.module.css";
import img_full from "../assets/homepage/image_full.png";

// component
import CardHome from "../Components/CardHome/index";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Slider from "react-slick";
function index() {
   const settings = {
      // dots: true,
      infinite: true,
      // autoplay: true,
      // autoplaySpeed: 2000,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 4,
               slidesToScroll: 4,
               infinite: true,
            },
         },
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 3,
               infinite: true,
            },
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               initialSlide: 2,
            },
         },
         {
            breakpoint: 568,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
            },
         },
      ],
   };
   const Month = {
      // dots: true,
      infinite: true,
      // autoplay: true,
      // autoplaySpeed: 2000,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 7,
      responsive: [
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 4,
               slidesToScroll: 4,
               infinite: true,
            },
         },
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 3,
               infinite: true,
            },
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               initialSlide: 2,
            },
         },
         {
            breakpoint: 568,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
            },
         },
      ],
   };
   return (
      <>
         <Navbar />
         <main className={`${styles.home_bar} `}>
            <section className={`${styles.first__content} row`}>
               <section
                  className={`${styles.content__left} col-sm-12 col-12 col-md-6`}
               >
                  <div>
                     <p className={styles.slogan}>
                        Nearest Cinema, Newest Movie,
                     </p>
                     <h1 className={styles.findnow}>Find out now!</h1>
                  </div>
               </section>
               <section
                  className={`${styles.content__right} col-sm-12 col-12 col-md-6`}
               >
                  <section className={`${styles.content__bar}`}>
                     <section className={styles.left_img}>
                        <Image
                           className={styles.img__bar}
                           src={img_full}
                           alt={"img_jumbotron"}
                        />
                     </section>
                     <section className={styles.center_img}>
                        <Image
                           className={styles.img__bar}
                           src={img_full}
                           alt={"img_jumbotron"}
                        />
                     </section>
                     <section className={styles.right_img}>
                        <Image
                           className={styles.img__bar}
                           src={img_full}
                           alt={"img_jumbotron"}
                        />
                     </section>
                  </section>
               </section>
            </section>
            {/* showing */}
            <section className={styles.show__bar}>
               <section className={`${styles.showing_nav}`}>
                  <div>
                     <h2 className={styles.show__title}>Now Showing</h2>
                     <div className={styles.line}></div>
                  </div>
                  <p className={styles.view_all}>view all</p>
               </section>
               <section className={styles.card__bar}>
                  <Slider {...settings}>
                     <CardHome />
                     <CardHome />
                     <CardHome />
                     <CardHome />
                     <CardHome />
                     <CardHome />
                     <CardHome />
                     <CardHome />
                     <CardHome />
                     <CardHome />
                     <CardHome />
                  </Slider>
               </section>
            </section>

            {/* Upcoming Movies */}
            <section>
               <section className={`${styles.showing_nav}`}>
                  <div>
                     <h2 className={styles.up__title}>Upcoming Movies</h2>
                  </div>
                  <p className={styles.view_all}>view all</p>
               </section>
               <section className={styles.month__bar}>
                  <Slider {...Month}>
                     <div className={styles.month_content}>
                        <div className={styles.btn_month}>January</div>
                     </div>
                     <div className={styles.month_content}>
                        <div className={styles.btn_month}>Februari</div>
                     </div>
                     <div className={styles.month_content}>
                        <div className={styles.btn_month}>Maret</div>
                     </div>
                     <div className={styles.month_content}>
                        <div className={styles.btn_month}>April</div>
                     </div>
                     <div className={styles.month_content}>
                        <div className={styles.btn_month}>Mei</div>
                     </div>
                     <div className={styles.month_content}>
                        <div className={styles.btn_month}>Juni</div>
                     </div>
                     <div className={styles.month_content}>
                        <div className={styles.btn_month}>Juli</div>
                     </div>
                     <div className={styles.month_content}>
                        <div className={styles.btn_month}>Agustus</div>
                     </div>
                     <div className={styles.month_content}>
                        <div className={styles.btn_month}>September</div>
                     </div>
                     <div className={styles.month_content}>
                        <div className={styles.btn_month}>Oktober</div>
                     </div>
                     <div className={styles.month_content}>
                        <div className={styles.btn_month}>November</div>
                     </div>
                     <div className={styles.month_content}>
                        <div className={styles.btn_month}>Desember</div>
                     </div>
                  </Slider>
               </section>

               {/* card Upcoming */}
               <section className={styles.card__bar}>
                  <Slider {...settings}>
                     <CardHome variant="d-none" />
                     <CardHome variant="d-none" />
                     <CardHome variant="d-none" />
                     <CardHome variant="d-none" />
                     <CardHome variant="d-none" />
                     <CardHome variant="d-none" />
                     <CardHome variant="d-none" />
                     <CardHome variant="d-none" />
                     <CardHome variant="d-none" />
                     <CardHome variant="d-none" />
                     <CardHome variant="d-none" />
                  </Slider>
               </section>
            </section>

            <section className={styles.form__bar}>
               <section className={styles.title_join}>
                  <p className={styles.titles}>
                     Be the vanguard of the Moviegoers
                  </p>
                  <h3 className={styles.movies}>Moviegoers</h3>
               </section>
               <section className={styles.form_join}>
                  <input
                     className={styles.input_bar}
                     type="text"
                     placeholder="Type your email"
                  />
                  <div className={styles.btn_join}>Join now</div>
               </section>
               <p className={styles.desc}>
                  By joining you as a Tickitz member, we will always send you
                  the latest updates via email .
               </p>
            </section>
         </main>
         <Footer />
      </>
   );
}

export default index;
