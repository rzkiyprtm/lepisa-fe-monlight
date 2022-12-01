import React from "react";

import css from "../../styles/Admin.module.css";
import Navbar from "../../Components/Navbar/Navbar";

import movie from "../../assets/admin/movie_image.png"
import Image from "next/image";

function Admin() {
  return (
    <>
    <Navbar/>
      <div className={`container-fluid ${css.background_color}`}>
        <div className={css.bungkus}>
          <div className='row'>
            {/* content left */}
            <div className='col-lg-8 col-md-12 col-sm-12'>
              <p className={css.title_content}>Movie Descriptions</p>
              <div className={css.container_left}>
                {/* image movie */}
               <div className={css.content_create_movie}>
                  <div className={css.border_movie}>
                    <Image src={movie} alt="Movie" width={150} height={250} />
                  </div>
                  {/* inputan movie */}
                  <div className={css.input_detail}>
                    <div className={css.movie}>
                      <p>Movie Name</p>
                      <input type="text" name="" id="" placeholder="Input title movie" />
                    </div>
                    <div className={css.category}>
                      <p>Category</p>
                      <select name="" id="" >
                        <option value="" selected>--- Input Category ---</option>
                        <option value="">Action</option>
                        <option value="">Adventure</option>
                        <option value="">Sci-Fi</option>
                      </select>
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
            <div className='col-lg-4 col-md-12 col-sm-12'>
              <p className={css.title_content}>Premiere Location</p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Admin;
