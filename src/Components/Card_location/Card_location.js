import Image from "next/image";
import React from "react";
import css from "./Card_location.module.css";
// import ebu from "../../assets/admin/ebu.png";
// import hiflix from "../../assets/admin/hiflix.png";
// import cinemaone from "../../assets/admin/cineone21.png";

function Card_location(props) {
   return (
      <>
         <div className={css.partner}>
            <button
               className={css.btn_location}
               value={props.values}
               onClick={(e) => {
                  console.log(e.target.value);
               }}
            >
               {/* <Image src={props.images} alt="partner" width={90} height={30} /> */}
            </button>
         </div>
      </>
   );
}

export default Card_location;
