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

  const [email, setEmail] = useState("")
  const [change, setChange] = useState(false)

  const valueEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleSendEmail = () => {
    axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/forgot-password`, {
      email
    })
    .then((res) => {
      toast.success(res.data.status),
      setChange(true)
    })
    .catch((err) => toast.error(err.response.data.status))
  }
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState("fa-solid fa-eye-slash");
  const [type_, setType_] = useState("password");
  const [icon_, setIcon_] = useState("fa-solid fa-eye-slash");
  const [password, setPassword] = useState ("")
  const [confirm, setConfirm] = useState ("")
  const [otp, setOTP] = useState ("")

  const valueOTP = (e) => {
    if (e.target.value.length === 0) setOTP("");
    if (/[0-9]{1,12}/g.test(e.target.value[e.target.value.length - 1])) setOTP(e.target.value);
    // console.log(e.target.value)
  };


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
        verify_changepwd: otp,
        new_password : password,
        confirm_password : confirm
      })
      .then(() => {
        toast.success("Reset password success")
        setTimeout(() => {
          router.push("/login")
        }, 2000);
      })
      .catch((err) => toast.error(err.response.data.status))
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
              <p className={`${css.circle_} rounded-circle`}>2</p>
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
          <div className={css.input_email}>
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
          <button className={css.register} onClick={handleSendEmail}>Active Now</button>
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
          <p className={` text-center ${css.reset_Passwod}`}>Reset Password</p>
        </div>
        {/* Input */}
        <div className={css.input_email}>
          <label htmlFor="">Code OTP</label>
          <input 
            type="text"
            name="" 
            id=""
            value={otp}
            onChange={valueOTP}
            />
        </div>
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

export default Resetpassword