/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import Image from "next/image";
// assets
import styles from "../../../styles/Upcoming.module.css";
// import img_full from "../assets/homepage/image_full.png";

// component
import CardHome from "../../../Components/CardViewAll/index";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import Loader from "../../../Components/Loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function upcoming() {
  const [linkActive, setLinkActive] = useState("januari");
  const [showing, setShowing] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [month, setMonth] = useState(1);
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [subscribe, setSubscribe] = useState("");

  // get movie showing
  useEffect(() => {
     axios
        .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/movie`)
        .then((res) => {
           // console.log(res.data.data);
           setShowing(res.data.data);
           setImage1(res.data.data[0].image);
           setImage2(res.data.data[1].image);
           setImage3(res.data.data[2].image);
        })
        .catch((err) => {
           console.log(err);
        });
  }, []);

  useEffect(() => {
     axios
        .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/movie/film/${month}`)
        .then((res) => {
           console.log(res.data.data);
           setUpcoming(res.data.data);
        })
        .catch((err) => {
           console.log(err);
        });
  }, [month]);

  const handleUpcoming = () => {
     axios
        .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/movie/film/${month}`, {})
        .then((res) => {
           console.log(res.data.data);
           setUpcoming(res.data.data);
        })
        .catch((err) => {
           console.log(err);
        });
  };

  const handleSubs = () => {
     axios
        .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/subscribe/`, {
           email: subscribe,
        })
        .then((res) => {
           console.log(res);
           toast.success("Success Subscribe 😊");
        })
        .catch((err) => toast.error(err.response.data.msg));
  };
  return (
    <>
    <Navbar/>

      <section className={styles.show__bar}>
               <section className={`${styles.showing_nav}`}>
                  <div>
                     <h2 className={styles.show__title}>Now Showing</h2>
                     <div className={styles.line}></div>
                  </div>
               </section>
               <section className={styles.card__bar}>
                     {showing.length > 0 && showing ? (
                        showing.map((movie) => (
                           <CardHome
                              key={movie.id}
                              tittle={movie.tittle}
                              category={movie.name}
                              image={movie.image}
                              id={movie.id}
                           />
                        ))
                     ) : (
                        <Loader />
                     )}
               </section>
            </section>
    <Footer/>
    <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            closeOnClick={true}
            pauseOnHover={true}
            draggable={true}
            theme="light"
         />
    </>
  )
}
