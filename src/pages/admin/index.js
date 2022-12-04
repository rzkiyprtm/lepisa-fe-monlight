import React, { useState } from "react";

import css from "../../styles/Admin.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

import movie from "../../assets/admin/movie_image.png";
import Cardlocation from "../../Components/Card_location/Card_location";
import Image from "next/image";
import Spline from "../../Components/Chart/Spline";

import withAuth from "../../Components/privateElement/withAuth";

function Admin() {
   // button show time ongoing to implementasi style
   const [showInput, setShowInput] = useState(false);

   const handleShowInput = () => {
      setShowInput(!false);
      // console.log("click");
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
                              <Image
                                 src={movie}
                                 alt="Movie"
                                 width={150}
                                 height={250}
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
                                 />
                              </div>
                              <div className={css.category_content}>
                                 <div className={css.category}>
                                    <p>Category</p>
                                    <select name="" id="">
                                       <option value="" selected></option>
                                       <option value="">Action</option>
                                       <option value="">Adventure</option>
                                       <option value="">Sci-Fi</option>
                                       <option value="">Horror</option>
                                    </select>
                                 </div>
                                 <div className={css.category_1}>
                                    <p>Age</p>
                                    <select name="" id="">
                                       <option value="" selected></option>
                                       <option value="">2+</option>
                                       <option value="">6+</option>
                                       <option value="">13+</option>
                                       <option value="">17+</option>
                                       <option value="">21+</option>
                                    </select>
                                 </div>
                              </div>
                              {/* realeased */}
                              <div className={css.box_released}>
                                 <div className={css.realease}>
                                    <p>Release</p>
                                    <input type="date" name="" id="" />
                                 </div>
                                 <div className={css.duration}>
                                    <p>Duration</p>
                                    <div className={css.number_duration}>
                                       <input type="number" name="" id="" />
                                       <input type="number" name="" id="" />
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="">
                           <div className={css.director_cast}>
                              <div className={css.director}>
                                 <p>Director</p>
                                 <input type="text" />
                              </div>
                              <div className={css.cast}>
                                 <p>Casts</p>
                                 <input type="text" />
                              </div>
                           </div>
                        </div>

                        <div className={css.synopsis}>
                           <p>Synopsis</p>
                           <textarea name="" id="" rows="3"></textarea>
                        </div>
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
                                 <select name="" id="">
                                    <option value="" selected>
                                       Location
                                    </option>
                                    <option value="">Purwokerto</option>
                                    <option value="">Jakarta</option>
                                    <option value="">Bandung</option>
                                    <option value="">Semarang</option>
                                 </select>
                              </div>
                              {/* card bioskop */}
                              <div className="">
                                 <div className="d-flex flex-row flex-wrap justify-content-center gap-4 my-5">
                                    <Cardlocation />
                                    <Cardlocation />
                                    <Cardlocation />
                                    <Cardlocation />
                                    <Cardlocation />
                                    <Cardlocation />
                                    <Cardlocation />
                                    <Cardlocation />
                                    <Cardlocation />
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
                                    <button>08:00</button>
                                    <button>09:00</button>
                                    <button>10:00</button>
                                    <button>11:00</button>
                                 </div>
                                 <div className={css.button_time}>
                                    <button>12:00</button>
                                    <button>13:00</button>
                                    <button>14:00</button>
                                    <button>15:00</button>
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
