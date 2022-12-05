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
import Cookies from "js-cookie";
import axios from "axios";
import { useRouter } from "next/router";

// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// modal
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Admin() {
   const router = useRouter();
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
   // modal
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const [linkActive, setLinkActive] = useState("");
   const [cgv, setCgv] = useState("");
   const [xxi, setXxi] = useState("");
   const [cinepolis, setCinepolis] = useState("");
   const handleCGV = () => {
      setiLocationID(cgv);
      setLinkActive("CGV");
   };
   const handleXXI = () => {
      setiLocationID(xxi);
      setLinkActive("XXI");
   };
   const handleCinepolis = () => {
      setiLocationID(cinepolis);
      setLinkActive("Cinepolis");
   };

   const costing = (price) => {
      return parseFloat(price)
         .toFixed()
         .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
   };
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
   const [hour, setHour] = useState("");
   const [minute, setMinute] = useState("");
   const [age, setAge] = useState("");
   const [director, setDirector] = useState("");
   const [dates, setDates] = useState("");
   const [cast, setCast] = useState("");
   const [synopsis, setSynopsis] = useState("");
   const [location, setLocation] = useState("");
   const [showtimes, setShowtimes] = useState("");
   const [time, setTime] = useState("");
   const [price, setPrice] = useState("");
   const [locationID, setiLocationID] = useState("");
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
      // console.log(movieName);
   };
   const handleCategory = (e) => {
      setCategory(e.target.value);
   };
   const handleAge = (e) => {
      setAge(e.target.value);
   };
   const handleDates = (e) => {
      setDates(e.target.value);
   };
   const handleHour = (e) => {
      setHour(e.target.value);
   };
   const handleMinute = (e) => {
      setMinute(e.target.value);
   };
   const handleDirector = (e) => {
      setDirector(e.target.value);
   };
   const handleCast = (e) => {
      setCast(e.target.value);
   };
   const handleSynopsis = (e) => {
      setSynopsis(e.target.value);
   };
   const showTimes = (e) => {
      setShowtimes(e.target.value);
   };
   const valueTime = (e) => {
      setTime([...time, [e.target.value]]);
   };
   const handlePrice = (e) => {
      setPrice(e.target.value);
   };
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
   console.log(time);
   const handleCreate = () => {
      // const getToken = Cookies.get("token");
      const formData = new FormData();
      if (image) formData.append("image", image);
      if (movieName) formData.append("tittle", movieName);
      if (category) formData.append("category", category);
      if (hour) formData.append("duration_hour", hour);
      if (minute) formData.append("duration_minute", minute);
      if (age) formData.append("category_age", age);
      if (director) formData.append("director", director);
      if (dates) formData.append("release_date", dates);
      if (cast) formData.append("synopsis", cast);
      if (synopsis) formData.append("cast", synopsis);
      if (locationID) formData.append("location", locationID);
      if (showtimes) formData.append("date", showtimes);
      if (price) formData.append("price", price);
      if (time) formData.append("time", time);

      axios
         .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/movie/add`, formData)
         .then(
            (res) => toast.success(res.data.msg),
            setTimeout(() => {
               router.push(`/movie/viewall/nowshowing`);
            }, 5000)
         )
         .catch((err) => console.log(err));
   };
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
                        <section className={css.save_bar}>
                           <button
                              className={css.btn_save}
                              onClick={handleShow}
                           >
                              Save
                           </button>
                        </section>
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
                                       onClick={handleCGV}
                                       style={{
                                          "background-color":
                                             linkActive === "CGV"
                                                ? "#52eb55"
                                                : "",
                                          color:
                                             linkActive === "CGV"
                                                ? "#000"
                                                : "#fff",
                                       }}
                                    >
                                       CGV
                                    </button>
                                    <button
                                       className={css.btn_location}
                                       value={xxi}
                                       onClick={handleXXI}
                                       style={{
                                          "background-color":
                                             linkActive === "XXI"
                                                ? "#52eb55"
                                                : "",
                                          color:
                                             linkActive === "XXI"
                                                ? "#000"
                                                : "#fff",
                                       }}
                                    >
                                       XXI
                                    </button>
                                    <button
                                       className={css.btn_location}
                                       value={cinepolis}
                                       onClick={handleCinepolis}
                                       style={{
                                          "background-color":
                                             linkActive === "Cinepolis"
                                                ? "#52eb55"
                                                : "",
                                          color:
                                             linkActive === "Cinepolis"
                                                ? "#000"
                                                : "#fff",
                                       }}
                                    >
                                       Cinepolis
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
                                 <section className="d-flex justify-content-start align-items-center w-100 mt-3">
                                    <section className="w-100 position-relative">
                                       <label htmlFor="price">Price :</label>
                                       <input
                                          id="price"
                                          type="number"
                                          className={css.input_price}
                                          value={price}
                                          onChange={handlePrice}
                                       />
                                       <p className={css.label_price}>IDR .</p>
                                    </section>
                                 </section>
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
         <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
               <Modal.Title>LEPISA MOVIES</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               please make sure this movie data is correct!
            </Modal.Body>
            <Modal.Footer>
               <Button variant="success" onClick={handleCreate}>
                  Yes
               </Button>
               <Button variant="secondary" onClick={handleClose}>
                  Cancel
               </Button>
            </Modal.Footer>
         </Modal>

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
}

export default withAuth(Admin);
