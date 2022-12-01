import React from "react";
import { useState} from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/navbar_image/tickit.png";
import avatar from "../../assets/navbar_image/gue.jpg";
import Image from "next/image";
import Router from "next/router";

function Header() {
  const [state, setState] = useState("");
  const text = state.text;
 
  function slide() {
    setState((state) => ({
      text:
        state.text === `${styles["slide-bar"]}`
          ? ""
          : `${styles["slide-bar"]}`,
    }));
  }

  return (
    <main>
    <nav className={styles.navbar}>
      <div className={styles["left-bar"]}>
        <div className={styles.logo}>
          <div>
            <Image src={logo} alt='logo' width={100} height={30} />
          </div>
          <ol className={text}>
            <li> Movies </li>
            <li> Cinemas </li>
            <li> Buy Ticket </li>
          </ol>
        </div>
      </div>

      {/* {isLogin ? ( */}
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
          <form>
          <div class={styles.searchBox} >
            <input
              class={styles.searchTxt}
              type='text'
              placeholder='let search something'/>
            <a className={styles.searchBtn} href=''>
              <i class='fas fa-search'></i>
            </a>
          </div>
          </form>
            <div className={styles.profile}>
              <Image
                src={avatar}
                alt='profile'
                width={45}
                height={45}
                objectFit="cover"
                style={{ borderRadius: "10px" }}
              />
            </div>
        </section>
      {/* ) : (
        <section className={text}>
          <div className={styles["right-bar"]}>
            <div className={styles.input}>
              <button className={styles["btn-sign"]} type='submit'>
                Sign up
              </button>
            </div>
          </div>
        </section>
      )} */}
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
