import React from 'react'
import { Link } from 'react-router-dom'
import style from "../style/header.module.css"
export default function Header  ()  {
    return (
        <div>
            <div className={style.Header}>
<Link excate to="/explore">
<img src="/images/search.png" alt=""></img>

</Link>
<div className={style.nav_items}>
<Link excate to="#" >
    <img src="/images/invite.png">

    </img>
</Link>
<Link excate to="#" >
    <img src="/images/calendar.png">

    </img>
</Link>
<Link excate to="#" >
    <img src="/images/noti.png">

    </img>
</Link>
<Link excate to="/profile" >
    <img src="/images/b1.png">

    </img>
</Link>
</div>
            </div>
        </div>
    )
}
