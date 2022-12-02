import React from 'react'

import css from "../../../styles/Auth.module.css"

function Verify() {
  return (
    <>
      <div className={`container-fluid ${css.container}`}>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <p className={css.verify}>Verifiy Account</p>
            <p className={`${css.success} text-success`}>Success</p>
        </div>
      </div>
    </>
  )
}

export default Verify