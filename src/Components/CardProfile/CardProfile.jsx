import Image from "next/image";
import React from "react";

import css from "./CardProfile.module.css"

import imageuser from "../../assets/profile/user.png"
import star from "../../assets/profile/star.png"

function CardProfile() {
  return (
    <>
      <div className='col-lg-4 col-md-12 col-sm-12 '>
        <div className={css.background_left}>
          <div className={css.info}>
            <p className=''>INFO</p>
            <i className='fa-solid fa-ellipsis'></i>
          </div>
          <div className={css.image_user}>
            <Image
              src={imageuser}
              width={150}
              height={150}
              className='rounded-circle'
              />
            <label htmlFor='image'>
              Edit image
            </label>
            <input
              type='file'
              name=''
              id='image'
              className='d-none'
            />
            <p className={css.name}>
              Jonas El Reduigues
            </p>
            <p className={css.username_1}>
              Movieries
            </p>
          </div>
          <div className={css.rule}></div>
          <div className={css.title_loyal}>
            <p>Loyalty Points</p>
          </div>
          <div className={css.loyal}>
            <div className={css.card_loyal}>
              <p>Moviegoers</p>
              <Image
                src={star}
                alt='star'
                width={100}
                height={100}
              />
            </div>
            <p>
              320 <span>point</span>
            </p>
          </div>
          <div className={css.point}>
            <p>180 points become a master</p>
          </div>
          <div className={css.border_box}>
            <div
              className={css.border_content}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardProfile;
