import React, { useState } from "react";

import css from "../../styles/Admin.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

import movie from "../../assets/admin/add image.png";
import Cardlocation from "../../Components/Card_location/Card_location";
import Image from "next/image";
import Spline from "../../Components/Chart/Spline";
import ebu from "../../assets/admin/ebu.png";
import hiflix from "../../assets/admin/hiflix.png";
import cinemaone from "../../assets/admin/cineone21.png";
import withAuth from "../../Components/privateElement/withAuth";
import { useRef } from "react";

function Admin() {
   // button show time ongoing to implementasi style
   const [showInput, setShowInput] = useState(false);
   const cgvImage =
      "https://res.cloudinary.com/dmfg85qqo/image/upload/v1669875640/lepisa/CGV_Cinemas_inuavo.png";
   const xxiImage =
      "https://res.cloudinary.com/dmfg85qqo/image/upload/v1669876345/lepisa/Cinema-xxi-2012_t4taui.png";
   const cinepolisImage =
      "https://res.cloudinary.com/dmfg85qqo/image/upload/v1670147266/lepisa/c-logo-cinepolis-b_rc9qaj.jpg";
   const handleShowInput = () => {
      setShowInput(!false);
      // console.log("click");
   };

   const [cgv, setCgv] = useState("");
   const [xxi, setXxi] = useState("");
   const [cinepolis, setCinepolis] = useState("");

   const handleJakarta = () => {
      setCgv(1), setXxi(2), setCinepolis(3);
   };
   const handleBandung = () => {
      setCgv(4), setXxi(5), setCinepolis(6);
   };
   const handleSemarang = () => {
      setCgv(7), setXxi(8), setCinepolis(9);
   };
   const handlePalembang = () => {
      setCgv(10), setXxi(11), setCinepolis(12);
   };
   const handleBanjar = () => {
      setCgv(13), setXxi(14), setCinepolis(15);
   };

   const [image, setImage] = useState("");
   const [display, setDisplay] = useState(movie);
   const [btnsave, setBtnsave] = useState(false);
   const [movieName, setMovieName] = useState("");
   const [category, setCategory] = useState("");
   const [age, setAge] = useState("");
   const [dates, setDates] = useState("");
   const [hour, setHour] = useState("");
   const [minute, setMinute] = useState("");
   const [director, setDirector] = useState("");
   const [cast, setCast] = useState("");
   const [synopsis, setSynopsis] = useState("");
   const [location, setLocation] = useState("");
   const [showtimes, setShowtimes] = useState("");
   const [time, setTime] = useState("");
   const handleSaveShow = () => {
      setBtnsave(true);
   };

   const inputImage = (event) => {
      if (event.target.files && event.target.files[0]) {
         setDisplay(URL.createObjectURL(event.target.files[0]));
         setImage(event.target.files[0]);
      }
   };
   const handleMoviename = (e) => {
      setMovieName(e.target.value);
      console.log(movieName);
   };
   const handleCategory = (e) => {
      setCategory(e.target.value);
      console.log(e.target.value);
   };
   const handleAge = (e) => {
      setAge(e.target.value);
      console.log(e.target.value);
   };
   const handleDates = (e) => {
      setDates(e.target.value);
      console.log(e.target.value);
   };
   const handleHour = (e) => {
      setHour(e.target.value);
      console.log(e.target.value);
   };
   const handleMinute = (e) => {
      setMinute(e.target.value);
      console.log(e.target.value);
   };
   const handleDirector = (e) => {
      setDirector(e.target.value);
      console.log(e.target.value);
   };
   const handleCast = (e) => {
      setCast(e.target.value);
      console.log(e.target.value);
   };
   const handleSynopsis = (e) => {
      setSynopsis(e.target.value);
      console.log(e.target.value);
   };
   const showTimes = (e) => {
      setShowtimes(e.target.value);
      console.log(e.target.value);
   };
   const valueTime = (e) => {
      setTime([...time, [e.target.value]]);
   };
   console.log(time);
   const handleLocation = (e) => {
      if (e.target.value === "Jakarta") {
         handleJakarta();
      }
      if (e.target.value === "Bandung") {
         handleBandung();
      }
      if (e.target.value === "Semarang") {
         handleSemarang();
      }
      if (e.target.value === "Palembang") {
         handlePalembang();
      }
      if (e.target.value === "Banjarbaru") {
         handleBanjar();
      }
   };
   // console.log(cgv);
   // console.log(xxi);
   // console.log(cinepolis);
   // console.log(location);
   return (
      <>
         <Navbar />
         <div className={`container-fluid ${css.background_color}`}>
            <div className={css.bungkus}>
               <div className={`row ${css.main_container}`}>
                  {/* content left */}
                  <div className="col-lg-7 col-md-12 col-sm-12">
                     <p className={css.title_content}>Movie Descriptions</p>
                     <div className={css.container_left}>
                        {/* image movie */}
                        <div className={css.content_create_movie}>
                           <div className={css.border_movie}>
                              <label htmlFor="image">
                                 <Image
                                    className={css.images}
                                    src={display}
                                    alt="Movie"
                                    width={150}
                                    height={250}
                                 />
                              </label>
                              <input
                                 type="file"
                                 name=""
                                 id="image"
                                 onChange={inputImage}
                                 className="d-none"
                              />
                           </div>
                           {/* inputan movie */}
                           <div className={css.input_detail}>
                              <div className={css.movie}>
                                 <p>Movie Name</p>
                                 <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Input title movie"
                                    value={movieName}
                                    onChange={handleMoviename}
                                 />
                              </div>
                              <div className={css.category_content}>
                                 <div className={css.category}>
                                    <p>Category</p>
                                    <select
                                       name=""
                                       id=""
                                       onChange={handleCategory}
                                    >
                                       <option value="0" selected></option>
                                       <option value="1">Sci-fi</option>
                                       <option value="2">Fantasy</option>
                                       <option value="3">Action</option>
                                       <option value="4">Horror</option>
                                       <option value="5">Romance</option>
                                       <option value="9">Drama</option>
                                       <option value="10">Comedy</option>
                                    </select>
                                 </div>
                                 <div className={css.category_1}>
                                    <p>Age</p>
                                    <select name="" id="" onChange={handleAge}>
                                       <option value="0" selected></option>
                                       <option value="1">P2+</option>
                                       <option value="2">A6+</option>
                                       <option value="3">R13+</option>
                                       <option value="4">D17+</option>
                                       <option value="5">D21+</option>
                                    </select>
                                 </div>
                              </div>
                              {/* realeased */}
                              <div className={css.box_released}>
                                 <div className={css.realease}>
                                    <p>Release</p>
                                    <input
                                       type="date"
                                       name=""
                                       id=""
                                       onChange={handleDates}
                                    />
                                 </div>
                                 <div className={css.duration}>
                                    <p>Duration</p>
                                    <div className={css.number_duration}>
                                       <input
                                          type="number"
                                          name=""
                                          id=""
                                          onChange={handleHour}
                                       />
                                       <input
                                          type="number"
                                          name=""
                                          id=""
                                          onChange={handleMinute}
                                       />
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="">
                           <div className={css.director_cast}>
                              <div className={css.director}>
                                 <p>Director</p>
                                 <input type="text" onChange={handleDirector} />
                              </div>
                              <div className={css.cast}>
                                 <p>Casts</p>
                                 <input type="text" onChange={handleCast} />
                              </div>
                           </div>
                        </div>

                        <div className={css.synopsis}>
                           <p>Synopsis</p>
                           <textarea
                              name=""
                              id=""
                              rows="3"
                              onChange={handleSynopsis}
                           ></textarea>
                        </div>
                        <button className="btn btn-success d-flex justify-content-center align-items-center text-center">
                           Save
                        </button>
                     </div>
                  </div>

                  {/* content right */}
                  <div className="col-lg-4 col-md-12 col-sm-12">
                     <div className="d-flex flex-column">
                        <div className="">
                           <p className={css.title_content}>
                              Premiere Location
                           </p>
                           <div className={css.content_right}>
                              {/* location */}
                              <div className={css.location}>
                                 <select onChange={handleLocation}>
                                    <option value="" selected>
                                       Location
                                    </option>
                                    <option onClick={handleJakarta}>
                                       Jakarta
                                    </option>
                                    <option onClick={handleBandung}>
                                       Bandung
                                    </option>
                                    <option onClick={handleSemarang}>
                                       Semarang
                                    </option>
                                    <option onClick={handlePalembang}>
                                       Palembang
                                    </option>
                                    <option onClick={handleBanjar}>
                                       Banjarbaru
                                    </option>
                                 </select>
                              </div>
                              {/* card bioskop */}
                              <div className="">
                                 <div className="d-flex flex-row flex-wrap justify-content-center gap-4 my-5">
                                    {/* <Cardlocation values={cgv} />
                                    <Cardlocation values={xxi} />
                                    <Cardlocation values={cinepolis} /> */}
                                    <button
                                       className={css.btn_location}
                                       value={cgv}
                                       onClick={(e) => {
                                          console.log(e.target.value);
                                       }}
                                    >
                                       CGV
                                    </button>
                                    <button
                                       className={css.btn_location}
                                       value={xxi}
                                       onClick={(e) => {
                                          console.log(e.target.value);
                                       }}
                                    >
                                       xxi
                                    </button>
                                    <button
                                       className={css.btn_location}
                                       value={cinepolis}
                                       onClick={(e) => {
                                          console.log(e.target.value);
                                       }}
                                    >
                                       cinepolis
                                    </button>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="mt-4">
                           <p className={css.title_content}>Showtimes</p>
                           <div className={css.content_right}>
                              {/* location */}
                              <div onClick={handleShowInput}>
                                 {showInput ? (
                                    <input
                                       className={css.input_date}
                                       type="date"
                                       onChange={showTimes}
                                    />
                                 ) : (
                                    <section
                                       className={` ${css.backgorund_date}`}
                                    >
                                       <div
                                          className={`d-flex flex-row align-items-center ${css.date}`}
                                       >
                                          <i className="fa-solid fa-calendar-days"></i>
                                          {/* <p className={css.set_date}>Set a date</p> */}
                                       </div>
                                       <i className="fa-solid fa-sort-down"></i>
                                    </section>
                                 )}
                              </div>
                              <div className={`${css.time}`}>
                                 <div className={css.button_time}>
                                    <button value="10.00" onClick={valueTime}>
                                       10:00
                                    </button>
                                    <button value="11.00" onClick={valueTime}>
                                       11:00
                                    </button>
                                    <button value="12.00" onClick={valueTime}>
                                       12:00
                                    </button>
                                    <button value="13.00" onClick={valueTime}>
                                       13:00
                                    </button>
                                 </div>
                                 <div className={css.button_time}>
                                    <button value="14.00" onClick={valueTime}>
                                       14:00
                                    </button>
                                    <button value="15.00" onClick={valueTime}>
                                       15:00
                                    </button>
                                    <button value="16.00" onClick={valueTime}>
                                       16:00
                                    </button>
                                    <button value="17.00" onClick={valueTime}>
                                       17:00
                                    </button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="">
                  <div className={css.title_chart}>
                     <p>Sales Charts</p>
                  </div>
                  <div className={css.bar_chart}>
                     <p>Based on Movie</p>
                     <p>Based on Location</p>
                  </div>
               </div>
               <section>
                  <section className={css.chart_bar}>
                     <Spline />
                     <Spline />
                     <Spline />
                     <Spline />
                     <Spline />
                     <Spline />
                     <Spline />
                  </section>
               </section>
               {/* CHART */}

               <div className={css.view}>
                  <div className={css.rules1}></div>
                  <p className={css.view_more}>View More</p>
                  <div className={css.rules2}></div>
               </div>
            </div>
         </div>

         <Footer />
      </>
   );
}

export default withAuth(Admin);
