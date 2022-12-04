import React from "react";
import { useState} from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/navbar_image/tickit.png";
import avatar from "../../assets/navbar_image/gue.jpg";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import { getCookies } from "cookies-next";
import { useSelector } from "react-redux";


function Header() {
  const [state, setState] = useState("");
  const router = useRouter()
  const text = state.text;
  const [linkActive, setLinkActive] = useState("");


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
                              nowshowing();
                           }}
                           style={{
                              color: linkActive === "comingsoon" ? "#5F2EEA" : "",
                           }}> Coming Soon </li>
            <li onClick={() => {
                              setLinkActive("");
                              upcoming();
                           }}
                           style={{
                              color: linkActive === "upcoming" ? "#5F2EEA" : "",
                           }}> Now Showing </li>
            <li> Buy Ticket </li>
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
    </main>
  );
}

export default Header;
