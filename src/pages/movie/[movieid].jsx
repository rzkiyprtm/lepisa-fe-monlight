import React, { useEffect, useState } from "react";
import Image from "next/image";
// assets
import img_movie from "../../assets/homepage/img_moviedetail.png";
import styles from "../../styles/MovieDetail.module.css";
// components
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Showtimes from "../../Components/ShowtimesCard/ShowtimesCard";
import axios from "axios";
import { useRouter } from "next/router";

function Movie() {
   const router = useRouter()

   const [body, setBody] = useState({})

   useEffect (() => {
      axios.get (`${process.env.NEXT_PUBLIC_BACKEND_URL}/movie/${router.query.movieid}`)
         .then((res) => setBody(res.data.data))
         .catch((err) => console.log(err) )
   },[router.query.movieid])

   return (
      <>
         <Navbar />
         <main className={styles.movie__bar}>
            <section className="row">
               <section className="col-md-12 col-lg-4">
                  <section className={styles.content__left}>
                     <Image
                        className={styles.movie_image}
                        src={body.image}
                        alt="movie image"
                        width={100}
                        height={100}
                     />
                  </section>
               </section>
               <section
                  className={`${styles.content__right} col-md-12 col-lg-8`}
               >
                  <section>
                     <h1 className={styles.title}>{body.tittle}</h1>
                     <p className={styles.category}>
                        {body.cast_name}
                     </p>
                  </section>
                  <section>
                     <p className={styles.release}>Release date</p>
                     <p className={styles.title_down}>
                        {/* {(body.release_date).slice(0,10)} */}
                     </p>
                  </section>
                  <section>
                     <p className={styles.release}>Duration</p>
                     <p className={styles.title_down}>{body.duration_hour} hours {body.duration_minute} minutes </p>
                  </section>
                  <section>
                     <p className={styles.release}>Directed by</p>
                     <p className={styles.title_down}>{body.director}</p>
                  </section>
                  <section>
                     <p className={styles.release}>Casts</p>
                     <p className={styles.title_down}>
                        {body.cast_name}
                     </p>
                  </section>
                  <section>
                     <p className={styles.release}>Category Age</p>
                     <p className={styles.title_down}>
                        {body.name}
                     </p>
                  </section>
               </section>
            </section>
            <section>
               <h2 className={styles.sipnosis}>Synopsis</h2>
               <p className={styles.desc}>
                  {body.synopsis}
               </p>
            </section>

            <section>
               <h2 className={styles.showtime}>Showtimes and Tickets</h2>
               <section className={`${styles.show_bar} row`}>
                  <section className="col-12 col-sm-12 col-md-6 d-flex justify-content-center justify-content-md-end">
                     <input type="date" className={styles.dates} />
                  </section>

                  <section className="col-12 col-sm-12 col-md-6 d-flex justify-content-center justify-content-md-start">
                     <select className={styles.select_location}>
                        <option selected>Location</option>
                        <option value="1">Puwekerto</option>
                        <option value="2">Jakarta</option>
                        <option value="3">Bandung</option>
                     </select>
                  </section>
               </section>
            </section>
            {/* card showtimes */}
            <section className={styles.card_showtimes}>
               <section className="row d-flex justify-content-center align-items-center gap-3">
                  <Showtimes />
                  <Showtimes />
                  <Showtimes />
                  <Showtimes />
                  <Showtimes />
                  <Showtimes />
               </section>
            </section>
            {/* pagination */}
            <section className={styles.pagination}>
               <div className={`${styles.btn_pagination} ${styles.selected}`}>
                  1
               </div>
               <div className={`${styles.btn_pagination} `}>2</div>
               <div className={`${styles.btn_pagination} `}>3</div>
               <div className={`${styles.btn_pagination} `}>4</div>
            </section>
         </main>
         <Footer />
      </>
   );
}

export default Movie;
