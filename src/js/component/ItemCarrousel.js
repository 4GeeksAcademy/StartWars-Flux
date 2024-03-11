import React from "react"
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import { MdOutlineStar } from "react-icons/md";

const ItemCarrousel = (props)=>{



    return(
        <div className="bg-white me-2 rounded-3" style={{height:"100%", width:"220px"}}>
            <div className="bg-danger" style={{height: "60%"}}></div>
            <p className="text-black">{props.name}</p>							
            <span><MdOutlineStar/></span>					
        </div>
    )

}

export default ItemCarrousel