import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'


import css from "../../styles/Login.module.css"
import title from "../../assets/auth_image/title.png";
import google from "../../assets/auth_image/google.png"
import facebook from "../../assets/auth_image/facebook.png"
import title_purple from "../../assets/auth_image/title_phone.png"

// import toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import Cookies from 'js-cookie';
import authActions from '../../redux/actions/auth';
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router';

function Login() {

  const dispatch = useDispatch();
  const router = useRouter();

  const [type, setType] = useState("password");
  const [icon, setIcon] = useState("fa-solid fa-eye-slash");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState ("")
  const [boxcolor, setBoxcolor] = useState(true)
  const [boxpending, setBoxpending] = useState(true)
  const [boxcolor_, setBoxcolor_] = useState(true)
  const [boxpending_, setBoxpending_] = useState(true)
  

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



  const valueEmail = (e) => {
    setEmail(e.target.value)
    setBoxcolor(false), 
    setBoxpending(true)
  }

  const valuePassword = (e) => {
    setPassword(e.target.value)
    setBoxcolor_(false), 
    setBoxpending_(true)
  }




  const handleLogin = () => {
    if(!email && !password) return (
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
    axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, { email : email, password : password})
    .then((res) => {
      console.log(res.data.data),
      Cookies.set("id", res.data.data.id)
      Cookies.set("role", res.data.data.role)
      Cookies.set("token", res.data.data.token)
      toast.success("Success Login")
      return dispatch(authActions.userThunk(res.data.data.token, () => {
        setTimeout(() => {
          if (res.data.data.role === "admin") {
            return router.replace("/admin");
          } else {
            return router.replace("/");
          }
        }, 2000);
      }))
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
          <div className={(boxcolor) ? css.input_email : (boxpending) ? css.input_email_blue : css.input_email_red}>
            <label htmlFor=''>Email</label>
            <input
              type='text'
              name=''
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
                id=''
                onChange={valuePassword}
                placeholder='Write your email'
              />
              <i className={icon} onClick={handleToggle}></i>
            </div>
          </div>
        <div className={css.button_register}>
          <button className={email === "" || password === "" ? css.register : css.register_blue} onClick={handleLogin}>Sign In</button>
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

export default Login