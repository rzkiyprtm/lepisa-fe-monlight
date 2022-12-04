import React from 'react'
import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"
import Image from 'next/image'
import Link from 'next/link'

import styles from "../../styles/PaymentPage.module.css"

import gpay from "../../assets/payment_image/gpay.png"
import visa from "../../assets/payment_image/visa.png"
import gopay from "../../assets/payment_image/gopay.png"
import paypal from "../../assets/payment_image/paypal.png"
import dana from "../../assets/payment_image/dana.png"
import bca from "../../assets/payment_image/bca.png"
import bri from "../../assets/payment_image/bri.png"
import ovo from "../../assets/payment_image/ovo.png"
import warn from "../../assets/payment_image/warn.png"
import withAuth from '../../Components/privateElement/withAuth'

function paymentPage() {
  return (
    <>
      <Navbar/>
      <div className={styles["main-content"]}>
        <div className={styles["left-content-container"]}>
          <div className="payment-info">
            <p className={styles['payment-title']}>Payment Info</p>
            <div className={styles["payment-detail"]}>

            <div className={styles["container-payment"]}>
            <div className="date-time">
              <label htmlFor="datetime">Date & Time</label>
              <input type="text" placeholder='Tuesday, 07 July 2020 at 02:00pm' />
            </div>
            <hr className={styles['list-hr']} />
            <div className={styles["movie-title"]}>
              <label htmlFor="movietitle">Movie Title</label>
              <input type="text" placeholder='Spider-Man: Putra Parker' />
            </div>
            <hr className={styles['list-hr']} />
            <div className={styles["cinema-name"]}>
              <label htmlFor="cinemaname">Cinema Name</label>
              <input type="text" placeholder='CineOne Pratamax' />
            </div>
            <hr className={styles['list-hr']} />
            <div className={styles["number-ticket"]}>
              <label htmlFor="numofticket">Number of Tickets</label>
              <input type="text" placeholder='3 pieces' />
            </div>
            <hr className={styles['list-hr']} />
            <div className={styles["payment"]}>
              <label htmlFor="totalpayment">TotalPayment</label>
              <input type="text" placeholder='$30' />
            </div>
            </div>

            </div>
          </div>

        <div className={styles["choose-payment"]}>
          <p className={styles['payment-choose-title']}>Choose a Payment Method</p>
          <div className={styles["payment-method"]}>

            <div className={styles["payment-list-one"]}>

            <div className={styles["button-box"]}>
              <div className={styles["google-pay"]}>
                <Image alt='gpay' src={gpay}/>
              </div>
            </div>
            <div className={styles["button-box"]}>
              <div className={styles["visa"]}>
                <Image alt='gpay' src={visa}/>
              </div>
            </div>
            <div className={styles["button-box"]}>
              <div className={styles["gopay"]}>
                <Image alt='gpay' src={gopay}/>
              </div>
            </div>
            <div className={styles["button-box"]}>
              <div className={styles["paypal"]}>
                <Image alt='gpay' src={paypal}/>
              </div>
            </div>
            
            </div>

            <div className={styles["payment-list-two"]}>

            <div className={styles["button-box"]}>
              <div className={styles["dana"]}>
                <Image alt='gpay' src={dana}/>
              </div>
            </div>
            <div className={styles["button-box"]}>
              <div className={styles["bca"]}>
                <Image alt='gpay' src={bca}/>
              </div>
            </div>
            <div className={styles["button-box"]}>
              <div className={styles["bri"]}>
                <Image alt='gpay' src={bri}/>
              </div>
            </div>
            <div className={styles["button-box"]}>
              <div className={styles["ovo"]}>
                <Image alt='gpay' src={ovo}/>
              </div>
            </div>

            </div>

            <div className={styles['box_or']}>
              <div className={styles.rule}></div>
                <p>or</p>
               <div className={styles.rule}></div>
            </div>

            <div className={styles["cash-term"]}>
              <p>Pay via cash. {" "} <a href='#'>See How It Works</a></p>
            </div>

          </div>
        </div>

        <div className={styles["btn-box"]}>

        <div className={styles["btn-prev"]}>
        <button>Previous step</button>
        </div>
        <div className={styles["btn-pay"]}>
          <button>Pay your order</button>
        </div>

        </div>
        </div>

        <div className={styles["right-content-container"]}>
          <div className={styles["personal-info"]}>
            <p className={styles['personal-info-title']}>Personal Info</p>
            <div className={styles["personal-info-box"]}>
              <div className={styles["personal-info-container"]}>
              <div className={styles["name"]}>
                <label htmlFor="name">Full Name</label>
                <input type="text" placeholder='Putra Parker' />
              </div>
              <div className="email">
                <label htmlFor="email">Email</label>
                <input type="text" placeholder='pratamabusiness@gmail.com' />
              </div>
              <div className="phone">
                <label htmlFor="phone">Phone Number</label>
                <input type="text" placeholder='08888800088' />
              </div>
              <div className={styles["warn-notification"]}>
              <div className={styles["warn-box"]}>
                <Image alt='warn' src={warn}/>
                <p>Fill your data correctly.</p>
              </div>
              </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer/>
    </>
  )
}

export default withAuth(paymentPage)