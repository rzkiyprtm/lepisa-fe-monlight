import React, { useEffect, useState } from "react";
import Image from "next/image";
// assets
import img_movie from "../../assets/homepage/img_moviedetail.png";
import styles from "../../styles/MovieDetail.module.css";
// components
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Showtimes from "../../Components/ShowtimesCard/ShowtimesCard";
import Loader from "../../Components/Loader/Loader";
import movie_image from "../../assets/admin/cineone21.png";
import axios from "axios";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

function Movie() {
   const router = useRouter();
   const id = router.query.movieid;
   // console.log(id);
   const [body, setBody] = useState([]);
   const [schedule, setSchedule] = useState([]);

   const role = Cookies.get("role")



   let month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
   ];

   useEffect(() => {
      const id = router.query.movieid;
      console.log(id);
      axios
         .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/movie/${id}`)
         .then((res) => {
            setBody(res.data.data);
            // console.log(res.data.data);
         })
         .catch((err) => console.log(err));
   }, []);

   useEffect(() => {
      const id = router.query.movieid;
      axios
         .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/movie/schedule/${id}`)
         .then((res) => {
            setSchedule(res.data.data);
            // console.log(res.data.data);
            // setTimes(res.data.data[0].time);
         })
         .catch((err) => console.log(err));
   }, []);

   const costing = (price) => {
      return (
         "IDR " +
         parseFloat(price)
            .toFixed()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
      );
   };


   // tampilan movie detail dengan role admin ada inputan nya
   if(role === "admin") return (
      <>
         <Navbar />
         <main className={styles.movie__bar}>
            <section className="row">
               <section className="col-md-12 col-lg-4">
                  <section className={styles.content__left}>
                     {body.image ? (
                        <Image
                           className={styles.movie_image}
                           src={body.image}
                           alt="movie image"
                           width={100}
                           height={100}
                        />
                     ) : (
                        <Loader />
                     )}
                  </section>
               </section>
               {body.image ? (
                  <section
                     className={`${styles.content__right} col-md-12 col-lg-8`}
                  >
                     <section>
                        <h1 className={styles.title}>{body.tittle}</h1>
                        <p className={styles.category}>{body.category}</p>
                     </section>
                     <section>
                        <p className={styles.release}>Release Date</p>
                        <p className={styles.title_down}>{`${body.day}, ${
                           month[body.month - 1]
                        }, ${body.year}
                        `}</p>
                     </section>
                     <section>
                        <p className={styles.release}>Duration</p>
                        <p className={styles.title_down}>
                           {body.duration_hour} hours {body.duration_minute}{" "}
                           minutes{" "}
                        </p>
                     </section>
                     <section>
                        <p className={styles.release}>Directed by</p>
                        <p className={styles.title_down}>{body.director}</p>
                     </section>
                     <section>
                        <p className={styles.release}>Casts</p>
                        <p className={styles.title_down}>{body.cast_name}</p>
                     </section>
                     <section>
                        <p className={styles.release}>Category Age</p>
                        <p className={styles.title_down}>{body.name}</p>
                     </section>
                  </section>
               ) : (
                  <Loader />
               )}
            </section>
            <section>
               <h2 className={styles.sipnosis}>Synopsis</h2>
               <p className={styles.desc}>{body.synopsis}</p>
            </section>

               {/* inputan admin */}
            <div className="">
               <div className={`row ${styles.content_container_admin}`}>
                  <div className={`col-lg-6 col-md-12 col-md-12 ${styles.container_input_admin}`}>
                     <p className={styles.add_schedule}>Schedule</p>
                     <div className={styles.input_box}>
                     <hr />
                        <div className={styles.location_flex}>
                           <p>Location <span>:</span> </p>
                           <select name="" id="">
                              <option value="">Jakarta</option>
                              <option value="">Semarang</option>
                              <option value="">Bandung</option>
                              <option value="">Solo</option>
                              <option value="">Yogyakarta</option>
                           </select>
                        </div>

                        <div className={styles.date_flex}>
                           <p>Set a date <span>:</span> </p>
                           <input type="date" name="" id="" />
                        </div>

                        <div className={styles.cinema_flex}>
                           <p>Cinema <span>:</span> </p>
                           <div className={styles.image_cinema}>
                              <button> <Image src={"https://res.cloudinary.com/dmfg85qqo/image/upload/v1669876345/lepisa/Cinema-xxi-2012_t4taui.png"} alt="cinema" width={120} height={40} /> </button>
                              <button> <Image src={"https://res.cloudinary.com/dmfg85qqo/image/upload/v1669875640/lepisa/CGV_Cinemas_inuavo.png"} alt="cinema" width={120} height={40} /> </button>
                              <button> <Image src={"https://res.cloudinary.com/dmfg85qqo/image/upload/v1670147266/lepisa/c-logo-cinepolis-b_rc9qaj.jpg"} alt="cinema" width={120} height={40} /> </button>
                           </div>
                        </div>

                        <div className={styles.time_flex}>
                           <p>Time <span>:</span> </p>
                           <div className={styles.time}>
                              <div className={styles.time_button}>
                                 <button>10:00</button>
                                 <button>11:00</button>
                                 <button>12:00</button>
                                 <button>13:00</button>
                              </div>
                              <div className={styles.time_button}>
                                 <button>14:00</button>
                                 <button>15:00</button>
                                 <button>16:00</button>
                                 <button>17:00</button>
                              </div>
                           </div>
                        </div>
                        <hr />
                        <div className={styles.save_change}>
                           <button className={styles.save}>Save Change</button>
                           <button className={styles.cancel}>cancel</button>
                        </div>
                     </div>
                  </div>
                  <div className={`col-lg-5 col-md-12 col-md-12`}>
                     <div className="d-flex flex-row align-items-center justify-content-center">
                        <div className={`d-flex flex-column align-items-center justify-content-center ${styles.title_admin_input}`}>
                           <p className={styles.title_1}>Add Schedule</p>
                           <p className={styles.title_2}>please fill in if you want to add a movie showing schedule for each city and set the showtimes</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

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
                  {schedule.length <= 0 ? (
                     <h1 className="text-center">
                        Ticket Currently Unavailable
                     </h1>
                  ) : (
                     schedule.map((e, index) => (
                        <Showtimes
                           key={index}
                           image={e.image}
                           price={costing(e.price)}
                           address={e.address_name}
                           name={e.name}
                           time={e.time}
                        />
                     ))
                  )}
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



   // Tampilan user gk ada inputan
   return (
      <>
         <Navbar />
         <main className={styles.movie__bar}>
            <section className="row">
               <section className="col-md-12 col-lg-4">
                  <section className={styles.content__left}>
                     {body.image ? (
                        <Image
                           className={styles.movie_image}
                           src={body.image}
                           alt="movie image"
                           width={100}
                           height={100}
                        />
                     ) : (
                        <Loader />
                     )}
                  </section>
               </section>
               {body.image ? (
                  <section
                     className={`${styles.content__right} col-md-12 col-lg-8`}
                  >
                     <section>
                        <h1 className={styles.title}>{body.tittle}</h1>
                        <p className={styles.category}>{body.category}</p>
                     </section>
                     <section>
                        <p className={styles.release}>Release Date</p>
                        <p className={styles.title_down}>{`${body.day}, ${
                           month[body.month - 1]
                        }, ${body.year}
                        `}</p>
                     </section>
                     <section>
                        <p className={styles.release}>Duration</p>
                        <p className={styles.title_down}>
                           {body.duration_hour} hours {body.duration_minute}{" "}
                           minutes{" "}
                        </p>
                     </section>
                     <section>
                        <p className={styles.release}>Directed by</p>
                        <p className={styles.title_down}>{body.director}</p>
                     </section>
                     <section>
                        <p className={styles.release}>Casts</p>
                        <p className={styles.title_down}>{body.cast_name}</p>
                     </section>
                     <section>
                        <p className={styles.release}>Category Age</p>
                        <p className={styles.title_down}>{body.name}</p>
                     </section>
                  </section>
               ) : (
                  <Loader />
               )}
            </section>
            <section>
               <h2 className={styles.sipnosis}>Synopsis</h2>
               <p className={styles.desc}>{body.synopsis}</p>
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
                  {schedule.length <= 0 ? (
                     <h1 className="text-center">
                        Ticket Currently Unavailable
                     </h1>
                  ) : (
                     schedule.map((e, index) => (
                        <Showtimes
                           key={index}
                           image={e.image}
                           price={costing(e.price)}
                           address={e.address_name}
                           name={e.name}
                           time={e.time}
                        />
                     ))
                  )}
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
