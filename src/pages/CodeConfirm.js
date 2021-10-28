import React from 'react'
import style from "../style/phoneConfirm.module.css"
import { Link } from 'react-router-dom'

export default function CodeConfirm  ()  {
    return (
        <div className={style.phoneConfirmation}>
        <Link excate to="/get_username" className={style.backBtn}>
<img src="/images/arrow.png" alt=""/>
        </Link>
            <div className="text-center"> 
            <h1 style={{"width":"100%","maxWidth":"200px","marginBottom":"1em"}}>
                Enter the code we just texted you
            </h1>
            <input type="text"
            style={{
width:"100%",
border:"none",
textAlign:"center",
outline:"none"


            }}/>
            <p className="mt-2">Didn't recive it? <span>Tap to resend</span></p>
            </div>
            <Link excate to="/allow_notification" className="primaryBtn d-flex align-items-center">
Next <img src="/images/nextArrowIcon.svg" style={{marginLeft:"4px"}} />
        </Link>
        </div>
    )
}
