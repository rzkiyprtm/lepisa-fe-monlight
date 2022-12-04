import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
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
import Cookies from 'js-cookie';
import axios from "axios";

import withAuth from '../../Components/privateElement/withAuth';

function Profile() {
  const router = useRouter();
  const dispatch = useDispatch()

  // useSelector
  const profile = useSelector((state) => state.auth.profile)

  // state
  const [show, setShow] = useState(false);
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState("fa-solid fa-eye-slash");
  const [type_, setType_] = useState("password");
  const [icon_, setIcon_] = useState("fa-solid fa-eye-slash");
  const [type__, setType__] = useState("password");
  const [icon__, setIcon__] = useState("fa-solid fa-eye-slash");
  const [btnsave, setBtnsave] = useState(false);
  const [edit, setEdit] = useState(true);
  const [btnsave_, setBtnsave_] = useState(false);
  const [edit_, setEdit_] = useState(true);
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [phone, setPhone] = useState("");
  const [oldpass, setOldpass] = useState("");
  const [newpass, setNewpass] = useState("");
  const [confirmpass, setConfirmpass] = useState("");
      
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSaveShow = () => {setBtnsave(true), setEdit(false)};
  const handleCancel = () => {setBtnsave(false), setEdit(true)};
  const handleSaveShow_ = () => {setBtnsave_(true), setEdit_(false)};
  const handleCancel_ = () => {setBtnsave_(false), setEdit_(true)};


  // Link to
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

  // handleToggle => Show Password
  const handleToggle__ = () => {
    if (type__ === "password") {
      setIcon__("fa-regular fa-eye");
      setType__("text");
    } else {
      setIcon__("fa-solid fa-eye-slash");
      setType__("password");
    }
  };


  // Value target
  const valueFirstname = (e) => {setFirst(e.target.value)}
  const valueLastname = (e) => {setLast(e.target.value)}
  const valuePhone = (e) => {setPhone(e.target.value)}
  const valueOldpass = (e) => {setOldpass(e.target.value)}
  const valueNewpass = (e) => {setNewpass(e.target.value)}
  const valueConfirmpass = (e) => {setConfirmpass(e.target.value)}
 

  // Edit data profile
  const editProfile = () => {
    const getToken = Cookies.get("token");
    const formData = new FormData();
      if (first) formData.append("first_name", first);
      if (last) formData.append("last_name", last);
      if (phone) formData.append("phone_number", phone);
    axios
      .patch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/profile/update`, formData , {
        headers: {
          "x-access-token": getToken,
        },
      })
      .then(
        (res) => (
          toast.success(res.data.status),
          setEdit_(true),
          handleCancel(),
          dispatch(authActions.userThunk(getToken))
        )
      )
      .catch((err) => toast.error(err.response.data.status));
  };

  useEffect(() => {
    const getToken = Cookies.get("token");
    dispatch(authActions.userThunk(getToken));
  }, [dispatch]);


  // logout handler
  const logoutHandler = (e) => {
    e.preventDefault();
    const token = Cookies.get("token")
    deleteCookie("token");
    deleteCookie("id");
    deleteCookie("role");
    dispatch(authActions.logoutThunk(token, () => {
      toast.success("Logout Success !", {
        position: toast.POSITION.TOP_CENTER,
      });
      router.push("/login")
    }));
  }


  // handleReset => reset password
  const handleReset = () => {
    const getToken = Cookies.get("token");
    axios.patch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/password`, {
      old_password: oldpass,
      new_password: newpass,
      confirm_password: confirmpass 
    }, {
      headers: {
      "x-access-token": getToken,
    }})
    .then((res) => {
      setEdit(true),
      handleCancel_(),
      toast.success(res.data.status)
    })
    .catch((err) => toast.error(err.response.data.status));
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
              <div className={css.detail_informations}>
                <p className={css.title_information}>Details Information</p>
                <p className={btnsave ? "d-none" : `${css.edit_detail}`} onClick={handleSaveShow}>Edit</p>
                <div className={btnsave ? `${css.button_submit_detail}` : "d-none"}>
                    <button className={css.detail_save} onClick={editProfile}>Save Change</button>
                    <button className={css.detail_cancel} onClick={handleCancel}>Cancel</button>
                </div>
              </div>
              <hr />
              <div className={css.edit_acc}>
                <div className={css.username}>
                  <label htmlFor="">Firstname</label>
                  <input 
                    type="text"
                    name="first_name"
                    placeholder={profile.firstname}
                    disabled={edit}
                    onChange={valueFirstname}
                   />
                </div>
                <div className={css.username}>
                  <label htmlFor="">Lastname</label>
                  <input 
                    type="text"
                    name='last_name'
                    placeholder={profile.lastname}
                    disabled={edit}
                    onChange={valueLastname}
                   />
                </div>
              </div>
              <div className={css.edit_acc}>
                <div className={css.username}>
                  <label htmlFor="">Email</label>
                  <input 
                    type="text"
                    value={profile.email}
                    disabled
                   />
                </div>
                <div className={css.username}>
                  <label htmlFor="">Phone number</label>
                  <div className={css.phone_number}>
                    <p>+62</p>
                    <input 
                      type="tel"
                      id=""
                      name="phone_number"
                      placeholder={profile.phone_number}
                      disabled={edit}
                      onChange={valuePhone}
                     />
                  </div>
                </div>
              </div>
            </div>

            {/* new password */}
            <div className={css.background_input_acc_1}>
            <div className={css.detail_informations}>
                <p className={css.title_information}>Account and Privacy</p>
                <p className={btnsave_ ? "d-none" : `${css.edit_detail}`} onClick={handleSaveShow_}>Edit</p>
                <div className={btnsave_ ? `${css.button_submit_detail}` : "d-none"}>
                    <button className={css.detail_save} onClick={handleReset}>Save Change</button>
                    <button className={css.detail_cancel} onClick={handleCancel_}>Cancel</button>
                </div>
              </div>
              <hr />
              <div className={css.edit_acc}>
                <div className={css.username}>
                  <label htmlFor="">Old Password</label>
                  <div className={css.password}>
                    <input 
                      type={type}
                      disabled={edit_}
                      onChange={valueOldpass}
                    />
                    <i className={icon} onClick={handleToggle}></i>
                  </div>
                </div>
                <div className={css.username}>
                  <label htmlFor="">New Password</label>
                  <div className={css.password}>
                    <input 
                      type={type_}
                      disabled={edit_}
                      onChange={valueNewpass}
                    />
                    <i className={icon_} onClick={handleToggle_}></i>
                  </div>
                </div>              
                <div className={css.username}>
                  <label htmlFor="">Confirm Password</label>
                  <div className={css.password}>
                    <input 
                      type={type__}
                      disabled={edit_}
                      onChange={valueConfirmpass}
                    />
                    <i className={icon__} onClick={handleToggle__}></i>
                  </div>
                </div>              
              </div>
            </div>


            <div className="d-flex flex-row align-item-center justify-content-end mt-4">
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

export default withAuth(Profile)