import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";


import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const CharacterData = () => {
    const {id} = useParams()

    const [characterData, setCharacterData] = useState(null)

    const fetchSingleCharacterData = async () => {
        const response = await fetch(`https://www.swapi.tech/api/people/${id}`)
        const data = await response.json()
        setCharacterData(data.result)
        
    }

    useEffect(() => {
        fetchSingleCharacterData()
    },[])


    return(
        <div >
            <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}/>
            {characterData && 
                <div>
                    <h1>{characterData.properties.name}</h1>
                    <p>{characterData.description}</p>
                </div>
            }


        </div>
    )
}
