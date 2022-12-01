import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import title from "../../assets/auth_image/title.png";
import google from "../../assets/auth_image/google.png"
import facebook from "../../assets/auth_image/facebook.png"
import title_purple from "../../assets/auth_image/title_phone.png"

import css from "../../styles/Register.module.css";

function Register() {
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
              <p className={css.desc_circle}>Fill your additional details</p>
            </div>
            <div className={css.rules_grid}>
              <div className={css.rules}></div>
            </div>
            <div className={css.options_}>
              <p className={`${css.circle_} rounded-circle`}>2</p>
              <p className={css.desc_circle_}>Activate your account</p>
            </div>
            <div className={css.rules_grid}>
              <div className={css.rules}></div>
            </div>
            <div className={css.options_}>
              <p className={`${css.circle_} rounded-circle`}>3</p>
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
        <div className={css.check}>
          <input type="checkbox" name="" id="" />
          <p>I agree to terms & conditions</p>
        </div>
        <div className={css.button_register}>
          <button className={css.register}>Join for free now</button>
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
    </>
  );
}

export default Register;
