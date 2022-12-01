import Image from 'next/image'
import React from 'react'


import title_purple from "../../assets/auth_image/title_phone.png"
import title from "../../assets/auth_image/title.png"
import css from "../../styles/Resetpassword.module.css"

function Resetpassword() {
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
              placeholder='Write your email'
            />
          </div>
        <div className={css.button_register}>
          <button className={css.register}>Active Now</button>
        </div>
        
    


      </div>

      </div>
    </>
  )
}

export default Resetpassword