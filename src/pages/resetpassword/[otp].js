import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

// import toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import css from "../../styles/Reset.module.css"
import title from "../../assets/auth_image/title.png";
import google from "../../assets/auth_image/google.png"
import facebook from "../../assets/auth_image/facebook.png"
import title_purple from "../../assets/auth_image/title_phone.png"
import axios from 'axios';
import Router from 'next/router';

function Reset() {

  const [type, setType] = useState("password");
  const [icon, setIcon] = useState("fa-solid fa-eye-slash");
  const [type_, setType_] = useState("password");
  const [icon_, setIcon_] = useState("fa-solid fa-eye-slash");
  const [password, setPassword] = useState ("")
  const [confirm, setConfirm] = useState ("")

    // handleToggle => Show Password
    const handleToggle1 = () => {
      if (type === "password") {
        setIcon("fa-regular fa-eye");
        setType("text");
      } else {
        setIcon("fa-solid fa-eye-slash");
        setType("password");
      }
    };

    const handleToggle2 = () => {
      if (type_ === "password") {
        setIcon_("fa-regular fa-eye");
        setType_("text");
      } else {
        setIcon_("fa-solid fa-eye-slash");
        setType_("password");
      }
    };

  
    const valuePassword = (e) => {
      setPassword(e.target.value)
    }
    const valueConfirm = (e) => {
      setConfirm(e.target.value)
    }

    const handleReset = () => {
      axios.patch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/reset-password`, {
        verify_changepwd: Router.query.otp,
        new_password : password,
        confirm_password : confirm
      })
      .then(() => {
        toast.success("Reset password success")
        setTimeout(() => {
          Router.push("/login")
        }, 2000);
      })
      .catch((err) => toast.error(err.response.data.status))
    }



  return (
    <>
    <div className={css.container_inti}>
        {/* content left */}
        <div className={css.content_left}>
          <div className={css.box_tix}>
            <Image src={title} alt='title' width={550} height={200} />
            <p className={css.title_1}>wait, watch, wow!</p>
          </div>
        </div>

        {/* content right */}
        <div className={css.content_right}>
          <Image src={title_purple} alt='title' width={170} height={70} className={css.title_in_phone}/>
          <p className={css.title_sign_up}>Reset Password</p>
          <div className="">
            <p className={` text-center ${css.sign_in}`}>Reset Password</p>
            <p className={css.sign_in_desc}></p>
          </div>
          {/* Input */}
          <div className={css.input_password}>
            <label htmlFor=''>New Password</label>
            <div className={css.password_box}>
              <input
                type={type}
                name=''
                id=''
                onChange={valuePassword}
                placeholder='Write your email'
              />
              <i className={icon} onClick={handleToggle1}></i>
            </div>
          </div>
          <div className={css.input_password}>
            <label htmlFor=''>Confirm Password</label>
            <div className={css.password_box}>
              <input
                type={type_}
                name=''
                id=''
                onChange={valueConfirm}
                placeholder='Write your email'
              />
              <i className={icon_} onClick={handleToggle2}></i>
            </div>
          </div>
        <div className={css.button_register}>
          <button className={css.register} onClick={handleReset}>Reset now</button>
        </div>


      </div>

      </div>
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
  )
}

export default Reset