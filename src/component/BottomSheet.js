import React from 'react'
import SwipeableBottomSheet from "react-swipeable-bottom-sheet"
import style from "../style/bottomSheet.module.css"
import StartRoom from './bottom_sheet/StartRoom'
import NewRoom from './bottom_sheet/NewRoom'
export default function BottomSheet  (props) {
    return (
       <SwipeableBottomSheet
       open ={props.sheetVisible}
       onChange={()=>{
           props.setSheetVisible(!props.sheetVisible)
           props.setItemsVisible(true)
       }}
       fullScreen={props.sheetTitle=="room detail"?true:false}>
       <div className={style.BottomSheetConatiner} style={{backgroundColor:props.sheetTitle=="profile"?"transparent":""}}>
       {props.sheetTitle=="new room"?(
        <NewRoom 
       cardDetail={props.cardDetail} 
       setSheetVisible={(item)=>{
    props.setSheetVisible(item);
    props.setItemsVisible(true)
}}/>): props.sheetTitle=="start room" ?(<StartRoom 
setSheetCreateRoom={props.setSheetCreateRoom}
 setSheetVisible={(item)=>
{
    props.setSheetVisible(item);
    props.setItemsVisible(true)
}}/>):(<h1>hi</h1>)}

       </div>

       </SwipeableBottomSheet>
    )
}
