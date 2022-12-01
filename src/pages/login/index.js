import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'


import css from "../../styles/Login.module.css"
import title from "../../assets/auth_image/title.png";
import google from "../../assets/auth_image/google.png"
import facebook from "../../assets/auth_image/facebook.png"
import title_purple from "../../assets/auth_image/title_phone.png"
import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"

function Login() {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(
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
  return (
    <>
    <Navbar/>
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
          <p className={css.title_sign_up}>Sign In</p>
          <div className="">
            <p className={css.sign_in}>Sign In</p>
            <p className={css.sign_in_desc}>Sign in with your data that you entered during your registration</p>
          </div>
          {/* Input */}
          <div className={css.input_email}>
            <label htmlFor=''>Email</label>
            <input
              type='text'
              name=''
              id=''
              placeholder='Write your email'
            />
          </div>
          <div className={css.input_password}>
            <label htmlFor=''>Password</label>
            <div className={css.password_box}>
              <input
                type={type}
                name=''
                id=''
                placeholder='Write your email'
              />
              <i className={icon} onClick={handleToggle}></i>
            </div>
          </div>
        <div className={css.button_register}>
          <button className={css.register}>Sign In</button>
        </div>
        <div className={css.already}>
          <p>Forgot your password? <Link href={"/resetpassword"}> Reset now</Link></p>
        </div>
      <div className={css.box_or}>
        <div className={css.rule}></div>
        <p>Or</p>
        <div className={css.rule}></div>
      </div>
      <div className={css.login_with}>
        <div className={css.with}>
          <Image src={google} alt="Google" width={30} height={30} />
          <p>Google</p>
        </div>
        <div className={css.with}>
          <Image src={facebook} alt="Facebook" width={30} height={30} />
          <p>Facebook</p>
        </div>
      </div>


      </div>

      </div>
      <Footer/>
    </>
    </>
  )
}

export default Login