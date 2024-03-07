const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters:[],
			favorites:[]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: async () => {
				const res = await fetch("https://www.swapi.tech/api/people/")
				const data = await res.json()
				setStore({characters: data.results})
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			addFavorite: (index) => {
				console.log(index)
				
				const store = getStore();
				const favorite = store.characters.find((char) => {
					return char.uid === index
				})
				const alreadyFavorite = store.favorites.find((element) => {
					return favorite === element
				})
				
				if(!alreadyFavorite){
					setStore({favorites: [...store.favorites, favorite]})
				}
			},
			deleteFavorite: (index) => {
				
				const store = getStore();
				const newFavorites = store.favorites.filter((char) => {
					return char.uid !== index
				})
				setStore({favorites: newFavorites})
			}

		}
	};
};

export default getState;
