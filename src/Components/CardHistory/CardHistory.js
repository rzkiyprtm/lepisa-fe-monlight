import Image from "next/image";
import React from "react";

import image_cinema from "../../assets/admin/cineone21.png"
import css from "./CardHistory.module.css"

function CardHistory(props) {
  return (
    <>
      <div className={css.content_background}>
        <div className={css.title_name}>
          <div className={css.title_bioskop}>
            <p className={css.time_bioskop}>
              {`${props.days},${props.day},${props.month},${props.year}`}
            </p>
            <p className={css.name_film}>
            {props.tittle}
            </p>
          </div>
          <div className={css.image}>
            <Image
              src={props.image}
              alt='Partner'
              width={100}
              height={30}
            />
          </div>
        </div>
        <div className=''>
          <hr />
        </div>
        <div className={css.card_status}>
          <button
            className={css.ticket_active_green}
          >
            Ticket in active
          </button>
          <div className={css.show_detail}>
            <p>Show Details</p>
            <i className='fa-solid fa-chevron-down'></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardHistory;
