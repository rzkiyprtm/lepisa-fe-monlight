import React, { useState, useRef, useEffect } from "react";
// components
import Image from "next/image";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
// styles
import styles from "../../styles/Ticket.module.css";
import icon_ticket from "../../assets/movie/icon_ticket.png";
// import QRCode from "react-qr-code";
import QRCode from "qrcode.react";
import { useReactToPrint } from "react-to-print";
import withAuth from "../../Components/privateElement/withAuth";
import axios from "axios";
import { useRouter } from "next/router";
function Index() {
   const [qrCodeText, setQRCodeText] = useState("");
   const [showPrint, setShowPrint] = useState("d-block");
   const router = useRouter();
   const { id } = router.query;
   // download QR code
   const downloadQRCode = () => {
      let data = document.getElementById("qrCodeEl");
      console.log(data);
      const qrCodeURL = data
         .toDataURL("image/png")
         .replace("image/png", "image/octet-stream");
      console.log(qrCodeURL);
      let aEl = document.createElement("a");
      aEl.href = qrCodeURL;
      aEl.download = "QR_Code.png";
      document.body.appendChild(aEl);
      aEl.click();
      document.body.removeChild(aEl);
   };
   const componentRef = useRef();
   const handlePrint = useReactToPrint({
      content: () => componentRef.current,
   });

   const costing = (price) => {
      return (
         "IDR " +
         parseFloat(price)
            .toFixed()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
      );
   };
   let month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
   ];
   const [ticket, setTicket] = useState([]);
   const [seat, setSeat] = useState([]);
   useEffect(() => {
      if (!router.isReady) return;
      // console.log(router.query);
      // codes using router.query
      
      axios
         .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/booking/ticket/${id}`)
         .then((res) => {
            console.log(res.data)
            setQRCodeText(`https://lepisa-fe.vercel.app/ticket/${id}`);
            // console.log(`https://lepisa-fe.vercel.app/ticket/${id}`);
            setTicket(res.data.data[0]);
            setSeat(res.data.data);
            // console.log(res.data);
         })
         .catch((err) => {
            console.log(err);
         });
   }, [router.isReady]);

   return (
      <>
         <Navbar />
         <main className={styles.background}>
            <section className={styles.ticket__content}>
               <h1 className={styles.title}>Proof of Payment</h1>

               <section className={styles.ticket} ref={componentRef}>
                  <section className={`${styles.ticket__bar} row`}>
                     <section
                        className={`${styles.ticket__left} col-12 col-sm-12 col-md-7 col-lg-8`}
                     >
                        <section className={styles.head_left}>
                           <section className={styles.image_container}>
                              <Image
                                 className={styles.icon_ticket}
                                 src={icon_ticket}
                                 alt="icon_ticket"
                              />
                           </section>
                           <p className={styles.admit}>Admit One</p>
                        </section>

                        <section className={styles.content_left}>
                           <section>
                              <p className={styles.label}>Movie</p>
                              <h4>{ticket.tittle}</h4>
                           </section>
                           <section className={styles.data_one}>
                              <section>
                                 <p className={styles.label}>date</p>
                                 <h4 className={styles.label_down}>
                                    {`${ticket.day} ${
                                       month[ticket.month - 1]
                                    } ${ticket.year}
                        `}
                                 </h4>
                              </section>
                              <section>
                                 <p className={styles.label}>Time</p>
                                 <h4 className={styles.label_down}>
                                    {ticket.time}
                                 </h4>
                              </section>
                              <section>
                                 <p className={styles.label}>Category</p>
                                 <h4 className={styles.label_down}>
                                    {ticket.age}
                                 </h4>
                              </section>
                           </section>
                           <section className={styles.data_one}>
                              <section>
                                 <p className={styles.label}>Count</p>
                                 <h4 className={styles.label_down}>
                                    {ticket.total_ticket} pieces
                                 </h4>
                              </section>
                              <section>
                                 <p className={styles.label}>Seats</p>
                                 <h4 className={`${styles.label_down} `}>
                                    {seat.map((e) => {
                                       return `${e.seat}  `;
                                    })}
                                 </h4>
                              </section>
                              <section>
                                 <p className={`${styles.label}`}>Price</p>
                                 <h4
                                    className={`${styles.label_down} ${styles.price}`}
                                 >
                                    {costing(ticket.price)}
                                 </h4>
                              </section>
                           </section>
                        </section>
                     </section>
                     <section
                        className={`${styles.ticket__right} col-12 col-sm-12 col-md-5 col-lg-4`}
                     >
                        <section className={styles.head_right}>
                           <div className={styles.circletop}></div>
                           <div className={styles.circledown}></div>
                           <section
                              className={`${styles.image_container} ${styles.img_right}`}
                           >
                              <Image
                                 className={styles.icon_ticket}
                                 src={icon_ticket}
                                 alt="icon_ticket"
                              />
                           </section>
                        </section>

                        <section className={styles.content_right}>
                           <QRCode
                              size={250}
                              height="auto"
                              id="qrCodeEl"
                              style={{
                                 maxWidth: "100%",
                                 width: "100%",
                              }}
                              value={qrCodeText}
                              viewBox={`0 0 256 256`}
                           />
                           <div className={styles.circleleft}></div>
                           <div className={styles.circleright}></div>
                        </section>
                     </section>
                  </section>
               </section>

               <div className={styles.btn_downprint}>
                  <div
                     className={`${styles.download} `}
                     onClick={downloadQRCode}
                  >
                     <i className="fa-solid fa-download"></i>
                     <p className="ps-5">Download</p>
                  </div>
                  <div className={`${styles.print} `} onClick={handlePrint}>
                     <i className="fa-solid fa-print"></i>
                     <p className="ps-5">Print</p>
                  </div>
               </div>
            </section>
         </main>
         <Footer />
      </>
   );
}

export default withAuth(Index);
