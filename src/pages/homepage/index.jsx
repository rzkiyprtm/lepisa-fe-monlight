import React from "react";
import Image from "next/image";
// assets
import styles from "../../styles/Homepage.module.css";
import img_spider from "../../assets/homepage/img_spiderman.png";

function index() {
   return (
      <>
         <main className="container">
            <section className="row">
               <section className={`${styles.content__left} col-md-6`}>
                  <div>
                     <p>Nearest Cinema, Newest Movie,</p>
                     <h1>Find out now!</h1>
                  </div>
               </section>
               <section className={`${styles.content__right} col-md-6`}>
                  <section>
                     <Image src={img_spider} alt={"img_jumbotron"} />
                  </section>
               </section>
            </section>
         </main>
      </>
   );
}

export default index;
