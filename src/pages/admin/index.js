import React from "react";

import css from "../../styles/Admin.module.css";
import Navbar from "../../Components/Navbar/Navbar";

function Admin() {
  return (
    <>
    <Navbar/>
      <div className={`container-fluid ${css.background_color}`}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-7 col-md-12 col-sm-12'>
              <p className={css.title_content}>Movie Descriptions</p>
              <div className=''>
               asdasda 
              </div>
            </div>
            <div className='col-lg-5 col-md-12 col-sm-12'>
              <p className={css.title_content}>Premiere Location</p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Admin;
