import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import title from "../../assets/auth_image/title.png";
import google from "../../assets/auth_image/google.png"
import facebook from "../../assets/auth_image/facebook.png"
import title_purple from "../../assets/auth_image/title_phone.png"

import css from "../../styles/Register.module.css";
import axios from "axios";

// import toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState("fa-solid fa-eye-slash");
  const [email, setEmail] = useState ("")
  const [password, setPassword] = useState ("")
  const [boxcolor, setBoxcolor] = useState(true)
  const [boxpending, setBoxpending] = useState(true)
  const [boxcolor_, setBoxcolor_] = useState(true)
  const [boxpending_, setBoxpending_] = useState(true)
  const [btncolor, setBtncolor] = useState(true)
  const [cek, setCek] = useState(false)
  
  const handleCek = () => {
    if(cek) return setCek(false)
    return setCek(true)
  }

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


  // valueEmail, valuePassword => get value
  const valueEmail = (e) => {
    setEmail(e.target.value), 
    setBoxcolor(false), 
    setBoxpending(true)
  }
  const valuePassword = (e) => {
    setPassword(e.target.value), 
    setBoxcolor_(false), 
    setBoxpending_(true)
  }



  // handleRegister => register
  const handleRegister = () => {
    if (!email && !password) return (
      toast.error("input data must be fulfilled"),
      setBoxcolor(false), 
      setBoxpending(false),
      setBoxcolor_(false), 
      setBoxpending_(false)
    )
    if(!password) return (
      toast.error("input your password"),
      setBoxcolor(false), 
      setBoxpending(true),
      setBoxcolor_(false), 
      setBoxpending_(false)
    )
    if(!email) return (
      toast.error("input your Email"),
      setBoxcolor(false), 
      setBoxpending(false),
      setBoxcolor_(false), 
      setBoxpending_(true)
    )

    if(!cek) return (
      toast.error("Please checklist i agree to terms & conditions"),
      setBoxcolor(false), 
      setBoxpending(true),
      setBoxcolor_(false), 
      setBoxpending_(true)
    )
    axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register/`, {
      email,
      password,
    })
    .then(() => {
      toast.success("Register Success"),
        setBtncolor(false)
    })
    .catch((err) => {
      toast.error(err.response.data.status),
      setBoxcolor(false), 
      setBoxpending(false)
      setBoxcolor_(false), 
      setBoxpending_(false)
    })
  }




  return (
    <>
      <div className={css.container_inti}>
        {/* content left */}
        <div className={css.content_left}>
          <Image src={title} alt='title' width={220} height={70} />
          <p className={css.title_1}>Lets build your account</p>
          <p className={css.title_2}>To be a loyal moviegoer and access allof features,<br /> your details are required.</p>
          {/* step */}
          <div className={css.step}>
            <div className={css.options}>
              <p className={`${css.circle} rounded-circle`}>1</p>
              <p className={css.desc_circle}>Please input data to registration</p>
            </div>
            <div className={css.rules_grid}>
              <div className={css.rules}></div>
            </div>
            <div className={css.options_}>
              <p className={(btncolor) ? `${css.circle_} rounded-circle` : `${css.circle} rounded-circle`}>2</p>
              <p className={css.desc_circle_}>Please check your email</p>
            </div>
            <div className={css.rules_grid}>
              <div className={css.rules}></div>
            </div>
            <div className={css.options_}>
              <p className={(btncolor) ? `${css.circle_} rounded-circle` : `${css.circle} rounded-circle`}>3</p>
              <p className={css.desc_circle_}>Done</p>
            </div>
          </div>
        </div>

        {/* content right */}
        <div className={css.content_right}>
          <Image src={title_purple} alt='title' width={170} height={70} className={css.title_in_phone}/>
          <p className={css.title_sign_up}>Sign Up</p>
          <div className={css.title_right}>
            <p>Fill your additional details</p>
          </div>
          {/* Input */}
          <div className={(boxcolor) ? css.input_email : (boxpending) ? css.input_email_blue : css.input_email_red}>
            <label htmlFor=''>Email</label>
            <input
              type='text'
              name=''
              value={email}
              id=''
              onChange={valueEmail}
              placeholder='Write your email'
            />
          </div>
          <div className={css.input_password}>
            <label htmlFor=''>Password</label>
            <div className={(boxcolor_) ? css.password_box : (boxpending_) ? css.password_box_blue : css.password_box_red}>
              <input
                type={type}
                name=''
                value={password}
                id=''
                onChange={valuePassword}
                placeholder='Write your email'
              />
              <i className={icon} onClick={handleToggle}></i>
            </div>
          </div>
        <div className={css.check}>
          <input type="checkbox" name="" id="" onClick={handleCek} />
          <p>I agree to terms & conditions</p>
        </div>
        <div className={css.button_register}>
          <button className={email === "" || password === "" ? css.register : css.register_blue} onClick={handleRegister}>Join for free now</button>
        </div>
        <div className={css.already}>
          <p>Do you already have an account? <Link href={"/login"}>Log in</Link></p>
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

export default Register;
