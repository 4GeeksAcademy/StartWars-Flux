import React from "react"
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";

const searchBar = ()=>{



    return(
        <div className="ps-3">
            <h2 className="text-muted">Browse</h2>
            <Link className="text-decoration-none" style={{color:"#e2e8f0"}}><p className="p-0 m-0">Characters</p></Link><br/>
            <Link className="text-decoration-none" style={{color:"#e2e8f0"}}><p className="p-0 m-0">Starships</p></Link><br/>
            <Link className="text-decoration-none" style={{color:"#e2e8f0"}}><p className="p-0 m-0">Vehicles</p></Link><br/>
            <Link className="text-decoration-none" style={{color:"#e2e8f0"}}><p className="p-0 m-0">Locations</p></Link><br/>
            <Link className="text-decoration-none" style={{color:"#e2e8f0"}}><p className="p-0 m-0">Films</p></Link><br/>
            <Link className="text-decoration-none" style={{color:"#e2e8f0"}}><p className="p-0 m-0">Species</p></Link><br/>
        </div>
    )

}

export default searchBar