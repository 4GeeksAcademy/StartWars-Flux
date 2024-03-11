import React from "react"
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";

const searchBar = ()=>{



    return(
        <div className="ps-3">
            <p className="text-muted">Browse</p>
            <Link className="text-decoration-none" style={{color:"#e2e8f0"}}>Characters</Link><br/>
            <Link className="text-decoration-none" style={{color:"#e2e8f0"}}>Starships</Link><br/>
            <Link className="text-decoration-none" style={{color:"#e2e8f0"}}>Vehicles</Link><br/>
            <Link className="text-decoration-none" style={{color:"#e2e8f0"}}>Locations</Link><br/>
            <Link className="text-decoration-none" style={{color:"#e2e8f0"}}>Films</Link><br/>
            <Link className="text-decoration-none" style={{color:"#e2e8f0"}}>Species</Link><br/>
        </div>
    )

}

export default searchBar