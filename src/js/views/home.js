import React, { useState } from "react";
import { useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import {Link} from "react-router-dom"
import ItemCarrousel from "../component/ItemCarrousel.js";
import SlideShow from "../component/slideshow.js"

import SearchBar from "../component/searchBar.js";

import "../../styles/home.css";

export const Home = () => {

	const {store, actions} = useContext(Context)

	useEffect(()=>{
		actions.loadSomeData("people")
		actions.loadSomeData("starships")
		actions.loadSomeData("vehicles")
		actions.loadSomeData("planets")
		actions.loadSomeData("species")
	}, [])

	console.log(store.people)

	const mapItem = (item, type) =>{
		const itemMapped = item.map((item, index)=>{
			return <ItemCarrousel type={type} key={index} name={item.name} id={item.uid}/>
		})
		return itemMapped
	}


	return(
		<>	
		<div>
			<h1 className="ps-5 fs-4">BROWSER DATABANK //</h1>
			<hr/>
		</div>
		<div className="grid-for-search px-5">
			<SearchBar/>
			<div className="wide-padding">
				<SlideShow typeOfData={"characters"}>
					{!store.carouselSwitcher.characters ? mapItem(store.people,"characters") : mapItem(store.charCarrousel, "characters")}
				</SlideShow>

				<SlideShow typeOfData={"starships"}>
					{!store.carouselSwitcher.starships ? mapItem(store.starships,"starships") : mapItem(store.starshipsCarrousel, "starships")}
				</SlideShow>

				<SlideShow typeOfData={"vehicles"}>
					{!store.carouselSwitcher.vehicles ? mapItem(store.vehicles,"vehicles") : mapItem(store.vehiclesCarrousel, "vehicles")}
				</SlideShow>

				<SlideShow typeOfData={"planets"}>
					{!store.carouselSwitcher.planets ? mapItem(store.planets,"planets") : mapItem(store.planetsCarrousel, "planets")}
				</SlideShow>

				<SlideShow typeOfData={"species"}>
					{!store.carouselSwitcher.species ? mapItem(store.species,"species") : mapItem(store.speciesCarrousel, "species")}
				</SlideShow>
			</div>
			<div>

			</div>
		</div>
		</>
	
	) 
};









// const people = store.people.map(char => 
	// 	<div key={char.uid} className="pe-2">
	// 		{/* <img src={`https://starwars-visualguide.com/assets/img/people/${char.uid}.jpg`} className="card-img-top" alt="..." style={{maxWidth:"250px", maxHeight:"300px"}}/> */}
	// 		<div className="card-body">
	// 			<h5 className="card-title">{char.name}</h5>
	// 			<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
	// 			<Link to={`character/${char.uid}`} className="btn btn-primary">Go somewhere</Link>
	// 			<button className="btn btn-warning" onClick={() => actions.addFavorite(char.uid)}>Favorite</button>
	// 		</div>
	// 	</div>
	// )
