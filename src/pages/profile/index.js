import React, { useState } from 'react'

import css from "../../styles/Profile.module.css"

import Header from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import image_user from "../../assets/profile/user.png"
import star from "../../assets/profile/star.png"

import Image from 'next/image'


function Profile() {

  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(
    "fa-solid fa-eye-slash",
  );
  const [type_, setType_] = useState("password");
  const [icon_, setIcon_] = useState(
    "fa-solid fa-eye-slash",
  );

  // handleToggle => Show Password
  const handleToggle = () => {
    if (type === "password") {
      setIcon("fa-regular fa-eye");
      setType("text");
    } else {
      setIcon("fa-solid fa-eye-slash");
      setType("password");
    }
  };
  // handleToggle => Show Password
  const handleToggle_ = () => {
    if (type_ === "password") {
      setIcon_("fa-regular fa-eye");
      setType_("text");
    } else {
      setIcon_("fa-solid fa-eye-slash");
      setType_("password");
    }
  };


  return (
    <>
      <Header />

      <div className={`container-fluid ${css.background}`}>

        <div className="row">
          {/* Content left */}
          <div className="col-lg-4 col-md-12 col-sm-12 ">
            <div className={css.background_left}>
              <div className={css.info}>
                <p className="">INFO</p>
                <i className="fa-solid fa-ellipsis"></i>
              </div>
              <div className={css.image_user}>
                <Image htmlFor="image" src={image_user} width={150} height={150} className="rounded-circle" />
                <label htmlFor="image">Edit image</label>
                <input type="file" name="" id="image" className='d-none' />
                <p className={css.name}>Jonas El Reduigues</p>
                <p className={css.username_1}>Movieries</p>
              </div>
              <div className={css.rule}></div>
              <div className={css.title_loyal}>
                <p>Loyalty Points</p>
              </div>
              <div className={css.loyal}>
                  <div className={css.card_loyal}>
                    <p>Moviegoers</p>
                    <Image src={star} alt="star" width={100} height={100} />
                  </div>
                  <p>320 <span>point</span></p>
              </div>
              <div className={css.point}>
                <p>180 points become a master</p>
              </div>
              <div className={css.border_box}>
                <div className={css.border_content}></div>
              </div>
            
            </div>
          </div>

          {/* content right */}
          <div className="col-lg-8 col-md-12 col-sm-12 ">
            <div className={css.bar_profile_right}>
              <p className={css.acc}>Account Settings</p>
              <p className={css.history}>Order History</p>
            </div>

            <div className={css.background_input_acc}>
              <p className={css.title_information}>Details Information</p>
              <hr />
              <div className={css.edit_acc}>
                <div className={css.username}>
                  <label htmlFor="">Firstname</label>
                  <input type="text" />
                </div>
                <div className={css.username}>
                  <label htmlFor="">Lastname</label>
                  <input type="text" />
                </div>
              </div>
              <div className={css.edit_acc}>
                <div className={css.username}>
                  <label htmlFor="">Email</label>
                  <input type="text" />
                </div>
                <div className={css.username}>
                  <label htmlFor="">Phone number</label>
                  <div className={css.phone_number}>
                    <p>+62</p>
                    <input type="tel" name="" id="" />
                  </div>
                </div>
              </div>
            </div>

            {/* new password */}
            <div className={css.background_input_acc_1}>
              <p className={css.title_information}>Account and Privacy</p>
              <hr />
              <div className={css.edit_acc}>
                <div className={css.username}>
                  <label htmlFor="">New Password</label>
                  <div className={css.password}>
                    <input type={type} />
                    <i className={icon} onClick={handleToggle}></i>
                  </div>
                </div>
                <div className={css.username}>
                  <label htmlFor="">New Password</label>
                  <div className={css.password}>
                    <input type={type_} />
                    <i className={icon_} onClick={handleToggle_}></i>
                  </div>
                </div>              
              </div>
            </div>


            <div className={css.submit_button}>
              <button className={css.update}>Update changes</button>
              <button className={css.logout}>Logout</button>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Profile