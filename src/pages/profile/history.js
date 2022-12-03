import React from 'react'

import css from "../../styles/History.module.css"
import CardProfile from '../../Components/CardProfile/CardProfile'
import Header from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import image_cinema from "../../assets/admin/cineone21.png"
import { useRouter } from 'next/router'
import Image from 'next/image'
import CardHistory from '../../Components/CardHistory/CardHistory'

function History() {

  const router = useRouter()


  // Link
  const toProfile = () => (router.push("/profile"))


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
              <p className={css.acc} onClick={toProfile}>Account Settings</p>
              <p className={css.history}>Order History</p>
            </div>

            <CardHistory />
            <CardHistory />

          </div>
        </div>
      </div>

      <Footer />

    </>
  )
}

export default History