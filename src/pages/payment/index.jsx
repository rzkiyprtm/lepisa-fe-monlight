import React, { useState } from 'react'
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
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Cookies from 'js-cookie'

function Payment() {

    const router = useRouter()

    const booking = useSelector((state) => state.auth.payment)
    const profile = useSelector((state) => state.auth.profile)

    const [show, setShow] = useState(false);
    const [va, setVa] = useState("")
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    const costing = (price) => {
      return (
         "IDR " +
         parseFloat(price)
            .toFixed()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
      );
   };

  //  useEffect(() => {
      
  //  }, [])

  const payment = () => {
    axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/booking/create-booking`,{
      seat_item: booking.seat,
      schedule_id: booking.schedule_id,
      total_ticket: booking.total_ticket,
      time: booking.time,
      total_payment: booking.total_payment,
      full_name: `${profile.firstname} ${profile.lastname}`,
      email: profile.email,
      phone_number: profile.email,
      payment_method_id: 1
    }, {
      headers: {
        "x-access-token" : Cookies.get("token")
      },
    })
    .then((res) => {
      // router.push(`https://simulator.sandbox.midtrans.com/bca/va/index`),
      setVa(res.data.result.midtrans.va_numbers.va_number)
      setShow(true)
    })
    .catch((err) => console.log(err))
  }

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
              <input type="text" value={(booking.date).slice(0,10)} />
            </div>
            <hr className={styles['list-hr']} />
            <div className={styles["movie-title"]}>
              <label htmlFor="movietitle">Movie Title</label>
              <input type="text" value={booking.tittle} />
            </div>
            <hr className={styles['list-hr']} />
            <div className={styles["cinema-name"]}>
              <label htmlFor="cinemaname">Cinema Name</label>
              <input type="text" value={booking.cinema_name} />
            </div>
            <hr className={styles['list-hr']} />
            <div className={styles["number-ticket"]}>
              <label htmlFor="numofticket">Number of Tickets</label>
              <input type="text" value={`${booking.total_ticket} pieces`} />
            </div>
            <hr className={styles['list-hr']} />
            <div className={styles["payment"]}>
              <label htmlFor="totalpayment">Total Payment</label>
              <input type="text" value={costing(booking.total_payment)} />
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
          <button onClick={payment}>Pay your order</button>
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
                <input type="text" value={`${profile.firstname} ${profile.lastname}`} />
              </div>
              <div className="email">
                <label htmlFor="email">Email</label>
                <input type="text" value={profile.email} />
              </div>
              <div className="phone">
                <label htmlFor="phone">Phone Number</label>
                <input type="text" value={profile.phone_number} />
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

      {/* modal logout */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>LEPISA MOVIES</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to logout?</Modal.Body>
        <Modal.Footer>
          <Button variant="success">
            To Payment Mitrans
          </Button>
        </Modal.Footer>
      </Modal>
      <Footer />
    </>
  )
}

export default withAuth(Payment)