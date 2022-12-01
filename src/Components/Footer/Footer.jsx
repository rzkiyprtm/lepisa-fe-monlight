import React from 'react'
import Image from 'next/image'

import styles from "./Footer.module.css"

import logo from "../../assets/auth_image/title_phone.png"
import sponsor1 from "../../assets/footer_image/vector.png"
import sponsor2 from "../../assets/footer_image/vector-1.png"
import sponsor3 from "../../assets/footer_image/vector-2.png"


function Footer() {
  return (
    <>
      <div className={styles["main-footer"]}>
        <div className={styles["footer-content"]}>

          <div className={styles["footer-one"]}>
            <div className="logo">
              <Image
                alt='logo'
                src={logo}
                width={155}
                height={65}
              />
            </div>
            <div className={styles["text-one"]}>
              <p>Stop waiting in line. Buy tickets conveniently, watch movies quietly.</p>
            </div>
          </div>

          <div className={styles["footer-two"]}>
          <h5>Explore</h5>
            <ul>
              <li>Cinemas</li>
              <li>Movies List</li>
              <li>My Ticket</li>
              <li>Notification</li>
            </ul>
          </div>

          <div className={styles["footer-three"]}>
          <h5>Our Sponsor</h5>
            <ul>
             <li><Image
                alt='sponsor'
                src={sponsor1}
                width={105}
                height={45}
                objectFit="cover"
              /></li> 
              <li><Image
                alt='sponsor'
                src={sponsor2}
                width={195}
                height={45}
                objectFit="cover"
              /></li>
              <li><Image
                alt='sponsor'
                src={sponsor3}
                width={90}
                height={35}
                objectFit="cover"
              /></li>
            </ul>
          </div>

          <div className={styles["footer-four"]}>
            <h5>Follow us</h5>
            <ul>
              <li><i className="fa-brands fa-facebook fa-2xl"></i>{" "}Tickitz Cinema id</li>
              <li><i className="fa-brands fa-instagram fa-2xl"></i>{" "}tickitz.id</li>
              <li><i className="fa-brands fa-twitter fa-2xl"></i>{" "}tickitz.id</li>
              <li><i className="fa-brands fa-youtube fa-2xl"></i>{" "}Tickitz Cinema id</li>
            </ul>
          </div>

        </div>
      </div>
    </>
  )
}

export default  Footer