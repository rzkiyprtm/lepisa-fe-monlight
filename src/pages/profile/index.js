import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { deleteCookie } from "cookies-next";


import css from "../../styles/Profile.module.css"

import Header from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import CardProfile from '../../Components/CardProfile/CardProfile.jsx'

import Image from 'next/image'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import authActions from '../../redux/actions/auth'


function Profile() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const dispatch = useDispatch()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(
    "fa-solid fa-eye-slash",
  );
  const [type_, setType_] = useState("password");
  const [icon_, setIcon_] = useState(
    "fa-solid fa-eye-slash",
  );


  // Link
  const toHistory = () => (router.push("/profile/history"))

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
  // handleToggle => Show Password
  const handleToggle_ = () => {
    if (type_ === "password") {
      setIcon_("fa-regular fa-eye");
      setType_("text");
    } else {
      setIcon_("fa-solid fa-eye-slash");
      setType_("password");
    }
  };

  // logout handler
  const userInfo = JSON.parse(localStorage["userInfo"] || "{}");
  // const toLogout = () => ;
  const logoutHandler = (e) => {
    e.preventDefault();
    toast.success("Logout Success !", {
      position: toast.POSITION.TOP_CENTER,
    });
    deleteCookie("token");
    deleteCookie("id");
    deleteCookie("role");
    dispatch(authActions.logoutThunk(userInfo.token));
    router.push("/login")
  }



  return (
    <>
      <Header />

      <div className={`container-fluid ${css.background}`}>

        <div className={`row ${css.main_container}`}>
          {/* Content left */}
          <CardProfile />

          {/* content right */}
          <div className="col-lg-7 col-md-12 col-sm-12 ">
            <div className={css.bar_profile_right}>
              <p className={css.acc}>Account Settings</p>
              <p className={css.history} onClick={toHistory}>Order History</p>
            </div>

            <div className={css.background_input_acc}>
              <p className={css.title_information}>Details Information</p>
              <hr />
              <div className={css.edit_acc}>
                <div className={css.username}>
                  <label htmlFor="">Firstname</label>
                  <input type="text" />
                </div>
                <div className={css.username}>
                  <label htmlFor="">Lastname</label>
                  <input type="text" />
                </div>
              </div>
              <div className={css.edit_acc}>
                <div className={css.username}>
                  <label htmlFor="">Email</label>
                  <input type="text" />
                </div>
                <div className={css.username}>
                  <label htmlFor="">Phone number</label>
                  <div className={css.phone_number}>
                    <p>+62</p>
                    <input type="tel" name="" id="" />
                  </div>
                </div>
              </div>
            </div>

            {/* new password */}
            <div className={css.background_input_acc_1}>
              <p className={css.title_information}>Account and Privacy</p>
              <hr />
              <div className={css.edit_acc}>
                <div className={css.username}>
                  <label htmlFor="">New Password</label>
                  <div className={css.password}>
                    <input type={type} />
                    <i className={icon} onClick={handleToggle}></i>
                  </div>
                </div>
                <div className={css.username}>
                  <label htmlFor="">New Password</label>
                  <div className={css.password}>
                    <input type={type_} />
                    <i className={icon_} onClick={handleToggle_}></i>
                  </div>
                </div>              
              </div>
            </div>


            <div className={css.submit_button}>
              <button className={css.update}>Update changes</button>
              <button className={css.logout} onClick={handleShow} >Logout</button>
            </div>

          </div>
        </div>
      </div>

      {/* modal logout */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>LEPISA MOVIES</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to logout?</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={logoutHandler}>
            Yes
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Footer />
    </>
  )
}

export default Profile