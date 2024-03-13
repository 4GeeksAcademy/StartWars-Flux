import React from "react"
import { MdOutlineStar } from "react-icons/md";

const ItemCarrousel = ({name, type, id})=>{

    const namesArr = name.split(" ")


    return(
        <div className="char-card me-2 rounded-3" style={{height:"100%", width:"220px"}}>
            <img 
                src={`https://starwars-visualguide.com/assets/img/${type}/${id}.jpg`}
                className="w-100 rounded-top"
                style={{height: "70%", objectFit: "cover", objectPosition:"top"}}
                // alt={`Picture of character ${name}`} if i add this, layout brokes
            />
            <div className="px-2">
                {namesArr.length > 1 ?  
                    <h5 className="text-white fw-bold d-inline"> 
                        <p className="m-0">{namesArr[0]} </p>
                        <p className="m-0 second-name">{namesArr[1]} </p>
                        </h5> 
                    :
                    <h5 className="text-white fw-bold d-inline">{namesArr[0]}</h5> 
                }						
                <span className="star-wrapper"><MdOutlineStar className="fs-4 star-icon"/></span>					
            </div>
        </div>
    )

}

export default ItemCarrousel