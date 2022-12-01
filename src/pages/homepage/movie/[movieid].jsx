import React from "react";
import Image from "next/image";
// assets
import img_movie from "../../../assets/homepage/img_moviedetail.png";
import styles from "../../../styles/MovieDetail.module.css";
// components
import Footer from "../../../Components/Footer/Footer";
import Navbar from "../../../Components/Navbar/Navbar";
import Showtimes from "../../../Components/ShowtimesCard/ShowtimesCard";
function Movie() {
   return (
      <>
         <Navbar />
         <main className={styles.movie__bar}>
            <section className="row">
               <section className="col-md-12 col-lg-4">
                  <section className={styles.content__left}>
                     <Image
                        className={styles.movie_image}
                        src={img_movie}
                        alt="movie image"
                     />
                  </section>
               </section>
               <section
                  className={`${styles.content__right} col-md-12 col-lg-8`}
               >
                  <section>
                     <h1 className={styles.title}>Spider-Man: Homecoming</h1>
                     <p className={styles.category}>
                        Adventure, Action, Sci-Fi
                     </p>
                  </section>
                  <section>
                     <p className={styles.release}>Release date</p>
                     <p className={styles.title_down}>June 28, 2017</p>
                  </section>
                  <section>
                     <p className={styles.release}>Duration</p>
                     <p className={styles.title_down}>2 hours 13 minutes </p>
                  </section>
                  <section>
                     <p className={styles.release}>Directed by</p>
                     <p className={styles.title_down}>Jon Watss</p>
                  </section>
                  <section>
                     <p className={styles.release}>Casts</p>
                     <p className={styles.title_down}>
                        Tom Holland, Michael Keaton, Robert Downey Jr., ...
                     </p>
                  </section>
               </section>
            </section>
            <section>
               <h2 className={styles.sipnosis}>Synopsis</h2>
               <p className={styles.desc}>
                  Thrilled by his experience with the Avengers, Peter returns
                  home, where he lives with his Aunt May, under the watchful eye
                  of his new mentor Tony Stark, Peter tries to fall back into
                  his normal daily routine - distracted by thoughts of proving
                  himself to be more than just your friendly neighborhood
                  Spider-Man - but when the Vulture emerges as a new villain,
                  everything that Peter holds most important will be threatened.
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
