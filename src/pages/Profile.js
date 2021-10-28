import React from 'react'
import exploreStyle from "../style/explore.module.css"
import style from "../style/profile.module.css"
import { Link } from 'react-router-dom'
import {BsAt, BsPlus, BsUpload} from 'react-icons/bs'
import {   AiOutlineInstagram, AiOutlineSetting, AiOutlineTwitter } from 'react-icons/ai'
export default function Profile() {
    return (
        <>
        <div className={style.profileContainer}>
<div className={exploreStyle.header}>
    <div className={`${style.head} text-right mb-0`}>
    <Link to="/home">
        <img src="/images/arrow.png"  className={ exploreStyle.arrow_icon} alt=""></img>

    </Link>
    <div className={style.actionBtn} >
    <BsAt/>
    <BsUpload/>
    <AiOutlineSetting/>
</div>
    </div>
   
</div>
<img src="/images/user-img.jpg" alt="" className={style.profile_image}></img>
<h4>Rafe Qazi</h4>
<p>@cleverqazi</p>
<div className={style.follow}>
    <p><span>0</span>followers </p>
    <p><span>51</span>following</p>
</div>
<button>Add a bio</button>
<div className="mb-4">
<button className="mb-0">
<AiOutlineTwitter/>Add Twitter
</button>
<button className="mb-0">
<AiOutlineInstagram/>Add Twitter
</button>
</div>
<div className={style.nominated}>
<img src="/images/user-img.jpg" alt=""></img>
<div><p>Joined 14-July-2021</p>
<p>Nominated by <span>Anton Alarcon</span></p>
</div>

</div>
<p>Member of</p>
<button className={style.addMemberBtn}>
    <BsPlus/>
</button>
        </div>
        </>
    )
}
