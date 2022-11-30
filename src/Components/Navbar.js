import React from "react";
import { useState, useEffect } from "react";
import styles from "/home/pratama/lepisa-fe-puts/src/styles/Navbar.module.css";
import chat from "/home/pratama/lepisa-fe-monlight/src/assets/navbar_image/chat.png";
import avatar from "/home/pratama/lepisa-fe-monlight/src/assets/navbar_image/person.png";
import logo from "/home/pratama/lepisa-fe-monlight/src/assets/navbar_image/tickit.png";
import Image from "next/image";

function Navbar() {
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
              <Image
                alt='profile'
                src={logo}
                width={90}
                height={30}
                objectFit='cover'
              />
            </div>
          </div>
            <ol>
              <li>Movies</li>
              <li>Cinemas</li>
              <li>Buy Ticket</li>
            </ol>
        </div>

        <section>
          <form>
            <div class={styles.searchBox}>
              <input
                class={styles.searchTxt}
                type='text'
                placeholder='let search something'
              />
              <a
                class={styles.searchBtn}
                href='#'
              >
                <i class='fas fa-search'></i>
              </a>
            </div>
          </form>
          <div>
            <Image
              alt='profile'
              src={avatar}
              width={40}
              height={40}
              style={{ borderRadius: "10px" }}
              bjectFit='cover'
            />
          </div>
        </section>

        {/* kondisi belum login */}

        {/* <section className={text}>
          <div className={styles["right-bar"]}>
            <div className={styles.input}>
              <p>
                Login
              </p>
              <button>
                Sign up
              </button>
            </div>
          </div>
        </section> */}

        <div className={styles["menu-toggle"]}
        onClick={slide}>
          <input type='checkbox' />
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </main>
  );
}

export default Navbar;
