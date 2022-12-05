import React from "react";
import { useState} from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/navbar_image/tickit.png";
import avatar from "../../assets/navbar_image/gue.jpg";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import { getCookies, deleteCookie } from "cookies-next";
import { useSelector, useDispatch } from "react-redux";
import { toast } from 'react-toastify'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import authActions from '../../redux/actions/auth'
import Cookies from 'js-cookie';


function Header() {
  const dispatch = useDispatch()
  const [state, setState] = useState("");
  const router = useRouter()
  const text = state.text;
  const [linkActive, setLinkActive] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);


  // selector untuk ngubah foto profile
  const image = useSelector((state) => state.auth.profile.image)
 
  function slide() {
    setState((state) => ({
      text:
        state.text === `${styles["slide-bar"]}`
          ? ""
          : `${styles["slide-bar"]}`,
    }));
  }
  
  const userInfo = getCookies("token");
  const isLogin = userInfo.token;

  const userRole = getCookies("role")
  const isUser = userRole.role
 
  const dashboard = () => {
    router.push("/")
  }
  const signup = () => {
    router.push("/register")
  }
  const login = () => {
    router.push("/login")
  }
  const profile = () => {
    router.push("/profile")
  }
  const upcoming = () => {
    router.push("/movie/viewall/upcoming")
  }
  const nowshowing = () => {
    router.push("/movie/viewall/nowshowing")
  }
  const createmovie = () => {
    router.push("/admin")
  }

  // logout
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
  

  return (
    <main>
    <nav className={styles.navbar}>
      <div className={styles["left-bar"]}>
        <div className={styles.logo}>
          <div className={styles["tickit-logo"]}>
            <Image src={logo} alt='logo' width={100} height={30} onClick={dashboard} />
          </div>
          <ol className={text}>
            <li onClick={() => {
                              setLinkActive("");
                              upcoming();
                           }}
                           style={{
                              color: linkActive === "comingsoon" ? "#5F2EEA" : "",
                           }}> Coming Soon </li>
            <li onClick={() => {
                              setLinkActive("");
                              nowshowing();
                           }}
                           style={{
                              color: linkActive === "upcoming" ? "#5F2EEA" : "",
                           }}> Now Showing </li>
                           {isUser === "admin" ? (
                            <li onClick={createmovie}>Create Movie</li>
                           ) : (
            <li> Buy Ticket </li>
                           )}
          </ol>
        </div>
      </div>

        <section className={text}>
          <div className={styles["custom-select"]}>
  <select className={styles.option}>
    <option value="0">Location</option>
    <option value="1">Banjarbaru</option>
    <option value="2">Jakarta</option>
    <option value="3">Bandung</option>
    <option value="4">Surabaya</option>
    <option value="5">Malang</option>
  </select>
</div>
        <div className={styles["main-nav-container"]}>
          <form className={styles["navbar-box"]}>
          <div className={styles.searchBox} >
            <input
              className={styles.searchTxt}
              type='text'
              placeholder='let search something'/>
            <a className={styles.searchBtn} href=''>
              <i className='fas fa-search'></i>
            </a>
          </div>
          </form>
          {isLogin ? (
            <div className={styles["nav-responsive"]}>
            {isUser === "admin" ? (
              <div className={styles["btn-admin"]}>
              <button className={styles["btn-logout"]} onClick={handleShow}>Logout</button>
              </div>
            ) : (
            <div className={styles.profile} onClick={profile}>
              <Image
                src={(image === null) ? `${process.env.CLOUDINARY_LINK}` : image}
                alt='profile'
                width={40}
                height={40}
                objectFit="cover"
                style={{ borderRadius: "50%", cursor: "pointer" }}
              />
            </div>
            )}
            </div>
          ) : (
          <div className={styles["right-bar"]}>
            <div className={styles.input}>
            <button className={styles["btn-sign"]} type='submit' onClick={login} >
                Login
              </button>
              <button className={styles["btn-sign"]} type='submit' onClick={signup} >
                Sign up
              </button>
            </div>
          </div>
          )}
        </div>
        </section>
     
  
      <div
        className={styles["menu-toggle"]}
        onClick={slide}
      >
        <input type='checkbox' />
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>

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

    </main>
  );
  
}

export default Header;
