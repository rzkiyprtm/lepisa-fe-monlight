import React from 'react'

import css from "../../styles/History.module.css"
import CardProfile from '../../Components/CardProfile/CardProfile'
import Header from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

function History() {
  return (
    <>

      <Header />

      <div className={`container-fluid ${css.background}`}>

        <div className="row">
          {/* Content left */}
          <CardProfile />

          {/* content right */}
          <div className="col-lg-8 col-md-12 col-sm-12 ">
          <div className={css.background_right_white}>
              {/* css atas belom di kasih style nanti lanjut disini codingan nya */}
          </div>

          </div>
        </div>
      </div>

      <Footer />

    </>
  )
}

export default History