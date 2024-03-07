import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";


export const Navbar = () => {
	const {store, actions} = useContext(Context)

	return (
		<nav className="navbar navbar-light bg-light mb-3 container">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars</span>
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
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
