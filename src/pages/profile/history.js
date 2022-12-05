import React, { useEffect, useState } from "react";

import css from "../../styles/History.module.css"
import CardProfile from '../../Components/CardProfile/CardProfile'
import Header from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import image_cinema from "../../assets/admin/cineone21.png"
import { useRouter } from 'next/router'
import Image from 'next/image'
import CardHistory from '../../Components/CardHistory/CardHistory'
import withAuth from '../../Components/privateElement/withAuth'
import { getCookies } from "cookies-next";
import axios from 'axios'
import Loader from "../../Components/Loader/Loader";

function History() {

  const router = useRouter()
  const [data, setData] = useState([]);

useEffect(() => {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/booking/history`;
    const userInfo = getCookies("token");
    const token = userInfo.token;
    axios
      .get(url, { headers: { "x-access-token": token } })
      .then((res) => {
        console.log(res);
        setData(res.data.data);
        console.log("data : ", res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Link
  const toProfile = () => (router.push("/profile"))

  let days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

let month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];


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
            {data.length > 0 && data ? (
                  data.map((e) => (
                     <CardHistory
                    key={e.id}
                    tittle={e.tittle}
                    image={e.image}
                    id={e.id}
                    days={days[e.day - 5]}
                    day={e.day}
                    month={month[e.month - 1]}
                    year={e.year}
                    status={e.status_ticket}
                     />
                  ))
               ) : (
                  <Loader />
               )}
          </div>
        </div>
      </div>

      <Footer />

    </>
  )
}

export default withAuth(History)