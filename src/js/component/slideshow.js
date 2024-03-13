import React from "react"
import { useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";

const ItemCarrousel = ({children, typeOfData})=>{

    const {store, actions} = useContext(Context)

    return(
        <>
        <div className="mb-3">
            <h2 className="fs-4 ps-5 mb-3 text-center pe-5">{typeOfData.toUpperCase()}</h2>
            <div className="slideshow-container">
                <div className="h-100 d-flex justify-content-evenly">
                    {children}
                </div>
                <p className="prev text-decoration-none" onClick={()=> actions.switcher(typeOfData, false)}>&#10094;</p>
                <p className="next text-decoration-none" onClick={()=> actions.switcher(typeOfData, true)}>&#10095;</p>
            </div>
        </div>
        {/* <div className="mb-3 ps-5">
            <span className="dot" style={{background: !store.carouselSwitcher.starships ? "red" : "#bbb"}} onClick={()=> actions.switcher(typeOfData, false)}></span>
            <span className="dot" style={{background: !store.carouselSwitcher.starships ? "#bbb" : "red"}} onClick={()=> actions.switcher(typeOfData, true)}></span>
        </div> */}
        </>
    )

}

export default ItemCarrousel