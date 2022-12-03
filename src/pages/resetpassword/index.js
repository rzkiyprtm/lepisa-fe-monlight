import Image from 'next/image'
import React, { useState } from 'react'

// import toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import title_purple from "../../assets/auth_image/title_phone.png"
import title from "../../assets/auth_image/title.png"
import css from "../../styles/Resetpassword.module.css"
import axios from 'axios';
import { useRouter } from 'next/router';

function Resetpassword() {

  const router = useRouter();

  // Page verify email
  const [email, setEmail] = useState("")
  const [change, setChange] = useState(false)
  const [boxcolor, setBoxcolor] = useState(true)
  const [boxpending, setBoxpending] = useState(true)
  const [btncolor, setBtncolor] = useState(true)

  const valueEmail = (e) => {
    setEmail(e.target.value)
    setBoxcolor(false), 
    setBoxpending(true)
  }

  const handleSendEmail = () => {
    if(!email) return (
      toast.error("Input email if you wan't to reset password"),
      setBoxcolor(false), 
      setBoxpending(false)
    )
    axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/forgot-password`, {
      email
    })
    .then((res) => {
      toast.success(res.data.status),
      setBtncolor(false),
      setTimeout(() => {
        setChange(true)
      }, 2000)
    })
    .catch((err) => {
      toast.error(err.response.data.status),
      setBoxcolor(false), 
      setBoxpending(false)
    })
  }





  // Page Reset Password
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState("fa-solid fa-eye-slash");
  const [type_, setType_] = useState("password");
  const [icon_, setIcon_] = useState("fa-solid fa-eye-slash");
  const [password, setPassword] = useState ("")
  const [confirm, setConfirm] = useState ("")
  const [otp, setOTP] = useState ("")
  const [boxcolor_, setBoxcolor_] = useState(true)
  const [boxpending_, setBoxpending_] = useState(true)
  const [boxcolor__, setBoxcolor__] = useState(true)
  const [boxpending__, setBoxpending__] = useState(true)
  const [boxcolor___, setBoxcolor___] = useState(true)
  const [boxpending___, setBoxpending___] = useState(true)
  const [btncolor_, setBtncolor_] = useState(true)




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

    const valueOTP = (e) => {
      setBoxcolor_(false), 
      setBoxpending_(true)
      if (e.target.value.length === 0) setOTP("");
      if (/[0-9]{1,12}/g.test(e.target.value[e.target.value.length - 1])) setOTP(e.target.value);
    };
  
    const valuePassword = (e) => {
      setPassword(e.target.value)
      setBoxcolor__(false), 
      setBoxpending__(true)
    }
    const valueConfirm = (e) => {
      setConfirm(e.target.value)
      setBoxcolor___(false), 
      setBoxpending___(true)
    }

    const handleReset = () => {
      if (!otp && !password && !confirm) return (
        toast.error("input data must be fulfilled"),
        setBoxcolor_(false), 
        setBoxpending_(false),
        setBoxcolor__(false), 
        setBoxpending__(false),
        setBoxcolor___(false), 
        setBoxpending___(false)
      )
      if(!confirm && !password) return (
        toast.error("Please input new password and then confirm password"),
        setBoxcolor_(false), 
        setBoxpending_(true),
        setBoxcolor__(false), 
        setBoxpending__(false),
        setBoxcolor___(false), 
        setBoxpending___(false)
      )
      if(!otp && !confirm) return (
        toast.error("Please input new password and then confirm password"),
        setBoxcolor_(false), 
        setBoxpending_(true),
        setBoxcolor__(false), 
        setBoxpending__(false),
        setBoxcolor___(false), 
        setBoxpending___(true)
      )
      if(!otp && !password) return (
        toast.error("Please Confirm password and OTP"),
        setBoxcolor_(false), 
        setBoxpending_(false),
        setBoxcolor__(false), 
        setBoxpending__(false),
        setBoxcolor___(false), 
        setBoxpending___(true)
      )
      if(!otp) return (
        toast.error("Please input code otp to verfy reset password"),
        setBoxcolor_(false), 
        setBoxpending_(false),
        setBoxcolor__(false), 
        setBoxpending__(true),
        setBoxcolor___(false), 
        setBoxpending___(true)
      )
      if(!password) return (
        toast.error("input new password"),
        setBoxcolor_(false), 
        setBoxpending_(true),
        setBoxcolor__(false), 
        setBoxpending__(false),
        setBoxcolor___(false), 
        setBoxpending___(true)
      )
      if(!confirm) return (
        toast.error("input confirm password"),
        setBoxcolor_(false), 
        setBoxpending_(true),
        setBoxcolor__(false), 
        setBoxpending__(true),
        setBoxcolor___(false), 
        setBoxpending___(false)
      )

      axios.patch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/reset-password`, {
        verify_changepwd: otp,
        new_password : password,
        confirm_password : confirm
      })
      .then(() => {
        toast.success("Reset password success"),
        setBtncolor_(false)
        setTimeout(() => {
          router.push("/login")
        }, 2000);
      })
      .catch((err) => {
        toast.error(err.response.data.status),
        setBoxcolor_(false), 
        setBoxpending_(false),
        setBoxcolor__(false), 
        setBoxpending__(false),
        setBoxcolor___(false), 
        setBoxpending___(false)
      })
    }

  if(!change)
  return (
    <>
    <div className={css.container_inti}>
        {/* content left */}
        <div className={css.content_left}>
          <Image src={title} alt='title' width={220} height={70} />
          <p className={css.title_1}>Lets reset your password</p>
          <p className={css.title_2}>To be able to use your account again, please<br />complete the following steps.</p>
          {/* step */}
          <div className={css.step}>
            <div className={css.options}>
              <p className={`${css.circle} rounded-circle`}>1</p>
              <p className={css.desc_circle}>Fill your complete email</p>
            </div>
            <div className={css.rules_grid}>
              <div className={css.rules}></div>
            </div>
            <div className={css.options_}>
              <p className={(btncolor) ? `${css.circle_} rounded-circle` : `${css.circle} rounded-circle`}>2</p>
              <p className={css.desc_circle_}>Activate your email</p>
            </div>
            <div className={css.rules_grid}>
              <div className={css.rules}></div>
            </div>
            <div className={css.options_}>
              <p className={`${css.circle_} rounded-circle`}>3</p>
              <p className={css.desc_circle_}>Enter your new password</p>
            </div>
            <div className={css.rules_grid}>
              <div className={css.rules}></div>
            </div>
            <div className={css.options_}>
              <p className={`${css.circle_} rounded-circle`}>4</p>
              <p className={css.desc_circle_}>Done</p>
            </div>
          </div>
        </div>

        {/* content right */}
        <div className={css.content_right}>
          <Image src={title_purple} alt='title' width={170} height={70} className={css.title_in_phone}/>
          <p className={css.title_sign_up}>Forgot password</p>
          <p className={css.desc_title_right_phone}>we`ll send a link to your email shortly</p>
          <div className="">
            <p className={css.title_right}>Fill your complete email</p>
            <p className={css.desc_title_right}>we`ll send a link to your email shortly</p>
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
        <div className={css.button_register}>
          <button className={email === "" ? css.register : css.register_blue} onClick={handleSendEmail}>Active Now</button>
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

if(change)
return (
  <>
  <div className={css.container_inti}>
      {/* content left */}
      <div className={css.content_left}>
      <Image src={title} alt='title' width={220} height={70} />
          <p className={css.title_1}>Lets reset your password</p>
          <p className={css.title_2}>To be able to use your account again, please<br />complete the following steps.</p>
          {/* step */}
          <div className={css.step}>
            <div className={css.options}>
              <p className={`${css.circle} rounded-circle`}>1</p>
              <p className={css.desc_circle}>Fill your complete email</p>
            </div>
            <div className={css.rules_grid}>
              <div className={css.rules}></div>
            </div>
            <div className={css.options_}>
              <p className={`${css.circle} rounded-circle`}>2</p>
              <p className={css.desc_circle_}>Activate your email</p>
            </div>
            <div className={css.rules_grid}>
              <div className={css.rules}></div>
            </div>
            <div className={css.options_}>
              <p className={`${css.circle} rounded-circle`}>3</p>
              <p className={css.desc_circle_}>Enter your new password</p>
            </div>
            <div className={css.rules_grid}>
              <div className={css.rules}></div>
            </div>
            <div className={css.options_}>
              <p className={(btncolor_) ? `${css.circle_} rounded-circle` : `${css.circle} rounded-circle`}>4</p>
              <p className={css.desc_circle_}>Done</p>
            </div>
          </div>
      </div>

      {/* content right */}
      <div className={css.content_right}>
        <Image src={title_purple} alt='title' width={170} height={70} className={css.title_in_phone}/>
        <p className={css.title_sign_up}>Reset Password</p>
        <div className="">
          <p className={` text-center ${css.reset_Passwod}`}>Reset Password</p>
        </div>
        {/* Input */}
        <div className={(boxcolor_) ? css.input_email : (boxpending_) ? css.input_email_blue : css.input_email_red}>
          <label htmlFor="">Code OTP</label>
          <input 
            type="text"
            name="" 
            id=""
            value={otp}
            onChange={valueOTP}
            placeholder="Input code OTP in your email"
            />
        </div>
        <div className={css.input_password}>
          <label htmlFor=''>New Password</label>
          <div className={(boxcolor__) ? css.password_box : (boxpending__) ? css.password_box_blue : css.password_box_red}>
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
          <div className={(boxcolor___) ? css.password_box : (boxpending___) ? css.password_box_blue : css.password_box_red}>
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
        <button className={otp === "" || password === "" || confirm === "" ? css.register : css.register_blue} onClick={handleReset}>Reset now</button>
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

export default Resetpassword