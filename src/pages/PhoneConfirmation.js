import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import PhoneInput from "react-phone-number-input"
import style from "../style/phoneConfirm.module.css"

export default function PhoneConfirmation  ()  {
    const[value,setValue]=useState()
    return (
       
        <div className={style.phoneConfirmation}>
         
          <Link excate to="/" className={style.backBtn}>
              <img src="/images/arrow.png" />
          </Link>
    
            <h1>Enter your Phone number</h1>
            <PhoneInput international defaultCountry="US" value={value} onChange={setValue}/>
            <p>By entering your number,you"re greeing to our <br></br><span>Terms of Service and Privacy Policy.</span>    <br></br>  Thanks!</p>
            <Link excate to="/code_confirm"  className="primaryBtn d-flex align-items-center">
            Next <img src="/images/nextArrowIcon.svg" style={{marginLeft:"4px"}}/>
            </Link>
        </div>
    )
}

