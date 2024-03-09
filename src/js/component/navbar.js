import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import { FaGithub } from "react-icons/fa";
import "../../styles/nav.css"
import "../../styles/global.css"

export const Navbar = () => {
	const {store, actions} = useContext(Context)

	return (
		<nav className="navbar navbar-light mb-3 py-5 navbar-edit border-gradient">
			<Link to="https://github.com/4GeeksAcademy/StartWars-Flux" className="d-flex justify-content-center">
				<FaGithub className="fs-3"/></Link>
			<Link to="/" className="d-flex justify-content-center">
				<img src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" width={"150px"}/>
			</Link>
			<div className="ml-auto">
				<div className="dropdown d-flex justify-content-center">
					<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites: <span>{store.favorites.length}</span>
					</button>
					
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						{store.favorites.length === 0 && <li key={0}><div className="dropdown-item">No favorites</div></li>}
						{
						store.favorites.map((item) => {
							return (
								<li key={item.uid} className="d-flex justify-content-between" style={{width:"250px"}}>
									<span className="dropdown-item">{item.name}</span>
									<span className="dropdown-item" onClick={() => actions.deleteFavorite(item.uid)}>🗑️</span>
								</li>
							)
						})
						}
					</ul>
				</div>
			</div>
		</nav>
	);
};
