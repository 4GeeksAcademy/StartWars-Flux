import React from "react";
import { useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import {Link} from "react-router-dom"
import "../../styles/home.css";

export const Home = () => {

	const {store, actions} = useContext(Context)

	useEffect(()=>{
		actions.loadSomeData()
	}, [])

	const characters = store.characters.map(char => 
		<div key={char.uid} className="card col-3">
			<img src={`https://starwars-visualguide.com/assets/img/characters/${char.uid}.jpg`} className="card-img-top" alt="..."/>
			<div className="card-body">
				<h5 className="card-title">{char.name}</h5>
				<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				<Link to={`character/${char.uid}`} className="btn btn-primary">Go somewhere</Link>
				<button className="btn btn-warning" onClick={() => actions.addFavorite(char.uid)}>Favorite</button>
			</div>
		</div>
	)

	return(
		<div className="text-center d-flex flex-column">
			<h1>StarWars Characters</h1>
			<div className="scroll d-flex justify-content-center mx-auto" style={{maxWidth:"90vw"}}>
				{characters}
			</div>
		</div>
	) 
};
