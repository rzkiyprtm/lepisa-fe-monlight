import axios from 'axios';
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

import css from "../../styles/Auth.module.css"

function Otp() {
  const router = useRouter();

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/verify/${router.query.otp}`)
    .then(console.log("Activasi berhasil"))
    .catch((err) => console.log(err))
  }, [])
  console.log(router.query.otp)

  const toLogin = () => router.push("/login")
  
  return (
    <>
      <div className={`container-fluid ${css.container}`}>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <p className={css.verify}>Verifiy Account</p>
            <p className={`${css.success} text-success`}>Success</p>
            <button className={css.login} onClick={toLogin}>Klik here to login</button>
        </div>
      </div>
    </>
  )
}

export default Otp