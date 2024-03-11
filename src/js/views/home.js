import React, { useState } from "react";
import { useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import {Link} from "react-router-dom"
import ItemCarrousel from "../component/ItemCarrousel.js";


import SearchBar from "../component/searchBar.js";

import "../../styles/home.css";

export const Home = () => {

	const {store, actions} = useContext(Context)
	const [charCarrousel, setCharCarrousel] = useState(false)

	useEffect(()=>{
		actions.loadSomeData()
	}, [])

	console.log(store.characters)

	const mapForChars = store.characters.map((char,index)=>{
		return <ItemCarrousel key={index} name={char.name}/>
	})

	const charsIncarrousel = store.charCarrousel.map((char,index)=>{
		return <ItemCarrousel key={index} name={char.name}/>
	})

	return(
		<>	
		<div>
			<h1 className="ps-2 fs-4">BROWSER DATABANK //</h1>
			<hr/>
		</div>
		<div className="grid-for-search px-2">
			<SearchBar/>
			<div>
				<h2 className="fs-4 ps-5">Characters</h2>
				<div className="slideshow-container">
					<div className="h-100 d-flex justify-content-evenly">
						{!charCarrousel ? mapForChars : charsIncarrousel}
					</div>

					<p className="prev text-decoration-none" onClick={()=> setCharCarrousel(false)}>&#10094;</p>
  					<p className="next text-decoration-none" onClick={()=> setCharCarrousel(true)}>&#10095;</p>
					{/* {characters} */}
				</div>
			</div>
		</div>
		</>
	
	) 
};









// const characters = store.characters.map(char => 
	// 	<div key={char.uid} className="pe-2">
	// 		{/* <img src={`https://starwars-visualguide.com/assets/img/characters/${char.uid}.jpg`} className="card-img-top" alt="..." style={{maxWidth:"250px", maxHeight:"300px"}}/> */}
	// 		<div className="card-body">
	// 			<h5 className="card-title">{char.name}</h5>
	// 			<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
	// 			<Link to={`character/${char.uid}`} className="btn btn-primary">Go somewhere</Link>
	// 			<button className="btn btn-warning" onClick={() => actions.addFavorite(char.uid)}>Favorite</button>
	// 		</div>
	// 	</div>
	// )
