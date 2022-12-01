import Image from 'next/image'
import React from 'react'
import css from "./Card_location.module.css"
import ebu from "../../assets/admin/ebu.png"
import hiflix from "../../assets/admin/hiflix.png"
import cinemaone from "../../assets/admin/cineone21.png"

function Card_location() {
  return (
    <>
      <div className={css.partner}>
        <Image src={ebu} alt="partner" width={90} height={30} />
      </div>
    </>
  )
}

export default Card_location