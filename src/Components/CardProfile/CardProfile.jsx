import Image from "next/image";
import React, { useEffect, useState } from "react";

import css from "./CardProfile.module.css";

import imageuser from "../../assets/profile/user.png";
import star from "../../assets/profile/star.png";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import authActions from "../../redux/actions/auth"


function CardProfile() {

  const dispatch = useDispatch()

  const profile = useSelector((state) => state.auth.profile)
  const [image, setImage] = useState("");
  const [display, setDisplay] = useState(profile.image);
  const [btnsave, setBtnsave] = useState(false);
  const [showprofile, setShowprofile] = useState(true)

    const handleSaveShow = () => {
      setBtnsave(true);
    };

    const handleShow = () => {setShowprofile(!showprofile)}
    
    // handleCancel => untuk cancel profile
    const handleCancel = () => {
      setDisplay(profile.image), setBtnsave(false);
    };


    // inputImage => preview image
    const inputImage = (event) => {
      if (event.target.files && event.target.files[0]) {
        setDisplay(URL.createObjectURL(event.target.files[0]));
        setImage(event.target.files[0]);
      }
    };


    const Editimage = () => {
      const getToken = Cookies.get("token");
      const formData = new FormData();
      if (image) formData.append("image", image);
      axios
        .patch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/profile/update`, formData, {
          headers: {
            "x-access-token": getToken,
          },
        })
        .then(
          (res) => (
            toast.success(res.data.status),
            dispatch(authActions.userThunk(getToken))
          )
        )
        .catch((err) => toast.error(err.response.data.status));
    };

    useEffect(() => {
      const getToken = Cookies.get("token");
      dispatch(authActions.userThunk(getToken));
    }, [dispatch]);


  return (
    <>
    <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                closeOnClick={true}
                pauseOnHover={true}
                draggable={true}
                theme="light"
            />
      <div className='col-lg-4 col-md-12 col-sm-12 '>
        <div className={css.background_left_top}>
          <div className={css.info}>
            <p className=''>INFO</p>
            <i className='fa-solid fa-ellipsis' onClick={handleShow}></i>
          </div>
        </div>

        {showprofile && (

        <div className={css.background_left}>
          <div className={css.image_user}>
            <Image
              src={(display === null) ? `${process.env.CLOUDINARY_LINK}` : display}
              alt='Image_Profile'
              width={150}
              height={150}
              className='rounded-circle'
              />
          
            <label htmlFor='image' className={btnsave ? "d-none" : `${css.profile_edit}`} onClick={handleSaveShow}>Edit image</label>
          
              <input
                type='file'
                name=''
                id='image'
                onChange={inputImage}
                className='d-none'
              />
            <div className={btnsave ? `${css.profile_button}` : "d-none"}>
              <button className={css.btn_save_profile} onClick={() => (Editimage(), setBtnsave(false))}>Save Profile</button>
              <button className={css.btn_cancel_profile} onClick={handleCancel}>Cancel</button>
            </div>
            <p className={css.name}>
              {(profile.firstname === null && profile.lastname === null) ? "Please input your data" : `${profile.firstname} ${profile.lastname}`}
            </p>
            <p className={css.username_1}>
            {(profile.point === null) ? "Beginner" : (profile.point <= 1000) ? "Beginner" : (profile.point <= 10000) ? "Expert" : "Master" }
            </p>
          </div>
      
          <div className={css.rule}></div>
          <div className={css.title_loyal}>
            <p>Loyalty Points</p>
          </div>
          <div className={css.card_content}>
          <div className={css.loyal}>
            <div className={css.card_loyal}>
              <p>{(profile.firstname === null) ? "Username" : `${profile.firstname}`}</p>
              <Image
                src={star}
                alt='star'
                width={100}
                height={100}
              />
            </div>
            <p>
              {(profile.point === null) ? "0" : profile.point} <span>point</span>
            </p>
          </div>
          </div>
          <div className={css.point}>
            <p>{(profile.point === null) ? "0 points become a master" : (profile.point >= 10000) ? "You are master !" : `${10000-profile.point} points become a master`} </p>
          </div>
          <div className={css.border_box}>
            <div className={css.border_content} 
            style={{width: `${(profile.point === null) ? 0 : (profile.point >= 10000) ? 100 : profile.point/100 }%`}}
            ></div>
          </div>
        </div>
        )}
      </div>
    </>
  );
}

export default CardProfile;
