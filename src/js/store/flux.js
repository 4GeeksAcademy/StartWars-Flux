const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters:[],
			favorites:[],
			charCarrousel:[],
		},
		actions: {
			loadSomeData: async () => {
				const res = await fetch("https://www.swapi.tech/api/people/")
				const data = await res.json()
				const newData = data.results.slice(0,8)
				const store = getStore()

				newData.forEach((char,index)=>{
					if(index  <= 3) setStore({characters: [...store.characters, char]})
					else setStore({charCarrousel: [...store.charCarrousel, char]})
				})
				console.log(store.characters)
				console.log(store.charCarrousel)
				// console.log(store.characters)
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
