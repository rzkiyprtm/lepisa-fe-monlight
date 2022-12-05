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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Movie() {
   const router = useRouter();
   const { movieid } = router.query;
   // console.log(id);
   const [body, setBody] = useState([]);
   const [schedule, setSchedule] = useState([]);
   const [showmore, setShowmore] = useState(6);
   const [showview, setShowview] = useState("d-flex");
   const role = Cookies.get("role");

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
      if (!router.isReady) return;
      // console.log(id);
      axios
         .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/movie/${movieid}`)
         .then((res) => {
            setBody(res.data.data);
            // console.log(res.data.data);
         })
         .catch((err) => console.log(err));
   }, [router.isReady]);

   useEffect(() => {
      if (!router.isReady) return;
      axios
         .get(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/movie/schedule/${movieid}`
         )
         .then((res) => {
            setSchedule(res.data.data);
            // console.log(res.data.data);
            // setTimes(res.data.data[0].time);
         })
         .catch((err) => console.log(err));
   }, [router.isReady]);

   // state add schedule
   const [date, setDate] = useState("");
   const [price, setPrice] = useState("");
   const [time, setTime] = useState([]);
   const [cinemax, setCinemax] = useState("");

   // get value add schedule
   const valueDate = (e) => {
      setDate(e.target.value), console.log(e.target.value);
   };
   const valueCinema = (e) => {
      setCinemax(e.target.value), console.log(e.target.value);
   };
   const valuePrice = (e) => {
      setPrice(e.target.value), console.log(e.target.value);
   };
   const valueTime = (e) => {
      setTime([...time, [e.target.value]]), console.log(time);
   };

   const [add, setAdd] = useState("");

   const addSchedule = () => {
      const id = router.query.movieid;
      axios
         .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/movie/add/schedule`, {
            movie: id,
            location: cinemax,
            date: date,
            price: price,
            time: time,
         })
         .then((res) => {
            toast.success("Success add schedule");
            console.log(res.data);
            setAdd(res.data.msg);
            setDate("");
            setCinemax("");
            setPrice("");
            setTime("");
         })
         .catch((err) => {
            console.log(err);
         });
   };

   const handleCancel = () => {
      setDate("");
      setCinemax("");
      setPrice("");
      setTime("");
   };
   const costing = (price) => {
      return (
         "IDR " +
         parseFloat(price)
            .toFixed()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
      );
   };

   useEffect(() => {
      if (!router.isReady) return;
      axios
         .get(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/movie/schedule/${movieid}`
         )
         .then((res) => {
            setSchedule(res.data.data);
            // console.log(res.data.data);
            // setTimes(res.data.data[0].time);
         })
         .catch((err) => console.log(err));
   }, [add]);

   
   // tampilan movie detail dengan role admin ada inputan nya
   if (role === "admin")
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

               {/* inputan admin */}
               <div className="">
                  <div className={`row ${styles.content_container_admin}`}>
                     <div
                        className={`col-lg-6 col-md-12 col-md-12 ${styles.container_input_admin}`}
                     >
                        <p className={styles.add_schedule}>Schedule</p>
                        <div className={styles.input_box}>
                           <hr />
                           <div className={styles.date_flex}>
                              <p>
                                 Set a date <span>:</span>{" "}
                              </p>
                              <input
                                 type="date"
                                 name=""
                                 id=""
                                 value={date}
                                 onChange={valueDate}
                              />
                           </div>

                           <div className={styles.cinema_flex}>
                              <p>
                                 Cinema <span>:</span>{" "}
                              </p>
                              <div className={styles.image_cinema}>
                                 <button value="1" onClick={valueCinema}>
                                    CGV Cinemas
                                 </button>
                                 <button value="2" onClick={valueCinema}>
                                    Cinema XXI
                                 </button>
                                 <button value="3" onClick={valueCinema}>
                                    Cinepolis
                                 </button>
                              </div>
                           </div>

                           <div className={styles.time_flex}>
                              <p>
                                 Time <span>:</span>{" "}
                              </p>
                              <div className={styles.time}>
                                 <div className={styles.time_button}>
                                    <button value="'10:00'" onClick={valueTime}>
                                       10:00
                                    </button>
                                    <button value="'11:00'" onClick={valueTime}>
                                       11:00
                                    </button>
                                    <button value="'12:00'" onClick={valueTime}>
                                       12:00
                                    </button>
                                    <button value="'13:00'" onClick={valueTime}>
                                       13:00
                                    </button>
                                 </div>
                                 <div className={styles.time_button}>
                                    <button value="'14:00'" onClick={valueTime}>
                                       14:00
                                    </button>
                                    <button value="'15:00'" onClick={valueTime}>
                                       15:00
                                    </button>
                                    <button value="'16:00'" onClick={valueTime}>
                                       16:00
                                    </button>
                                    <button value="'17:00'" onClick={valueTime}>
                                       17:00
                                    </button>
                                 </div>
                              </div>
                           </div>

                           <div className={styles.price_flex}>
                              <p>
                                 Price <span>:</span>{" "}
                              </p>
                              <input
                                 type="text"
                                 name=""
                                 id=""
                                 value={price}
                                 onChange={valuePrice}
                              />
                           </div>

                           <hr />
                           <div className={styles.save_change}>
                              <button
                                 className={styles.save}
                                 onClick={addSchedule}
                              >
                                 Save Change
                              </button>
                              <button
                                 className={styles.cancel}
                                 onClick={handleCancel}
                              >
                                 cancel
                              </button>
                           </div>
                        </div>
                     </div>
                     <div className={`col-lg-5 col-md-12 col-md-12`}>
                        <div className="d-flex flex-row align-items-center justify-content-center">
                           <div
                              className={`d-flex flex-column align-items-center justify-content-center ${styles.title_admin_input}`}
                           >
                              <p className={styles.title_1}>Add Schedule</p>
                              <p className={styles.title_2}>
                                 please fill in if you want to add a movie
                                 showing schedule for each city and set the
                                 showtimes
                              </p>
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
                              id={e.id}
                              tittle={e.tittle}
                              date={e.date}
                              image={e.image}
                              price={e.price}
                              address={e.address_name}
                              name={e.name}
                              time={e.time}
                           />
                        ))
                     )}
                  </section>
               </section>
            </main>
            <Footer />
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
                        <p className={styles.title_down}>{`${body.day} ${
                           month[body.month - 1]
                        } ${body.year}
                        `}</p>
                     </section>
                     <section>
                        <p className={styles.release}>Duration</p>
                        <p className={styles.title_down}>
                           {body.duration_hour} hours {body.duration_minute}
                           minutes
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
                     schedule.map(
                        (e, index) =>
                           index < showmore && (
                              <Showtimes
                                 key={index}
                                 id={e.id}
                                 tittle={e.tittle}
                                 date={e.date}
                                 image={e.image}
                                 price={e.price}
                                 address={e.address_name}
                                 name={e.name}
                                 time={e.time}
                              />
                           )
                     )
                  )}
               </section>
            </section>
            {/* pagination */}
            <section className={`${styles.showmore} ${showview}`}>
               <div className={styles.lines}></div>
               <p
                  className={styles.viewmore}
                  onClick={() => {
                     setShowmore(9999);
                     setShowview("d-none");
                  }}
               >
                  view more
               </p>
               <div className={styles.lines}></div>
            </section>
         </main>
         <Footer />
      </>
   );
}

export default Movie;
