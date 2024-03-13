const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people:[],
			charCarrousel:[],

			starships:[],
			starshipsCarrousel:[],

			vehicles:[],
			vehiclesCarrousel:[],

			planets:[],
			planetsCarrousel:[],

			species:[],
			speciesCarrousel:[],

			favorites:[],

			carouselSwitcher:{
				characters: false,
				starships: false,
				vehicles: false,
				planets: false,
				species: false
			}

		},
		actions: {
			loadSomeData: async (search) => {
				const res = await fetch(`https://www.swapi.tech/api/${search}/`)
				const data = await res.json()
				const newData = data.results.slice(0,8)
				const store = getStore()

				newData.forEach((char,index)=>{
					if(search === "people"){
						if(index  <= 3) setStore({people: [...store.people, char]})
						else setStore({charCarrousel: [...store.charCarrousel, char]})
					}
					if(search === "starships"){
						if(index  <= 3) setStore({starships: [...store.starships, char]})
						else setStore({starshipsCarrousel: [...store.starshipsCarrousel, char]})
					}
					if(search === "vehicles"){
						if(index  <= 3) setStore({vehicles: [...store.vehicles, char]})
						else setStore({vehiclesCarrousel: [...store.vehiclesCarrousel, char]})
					}
					if(search === "planets"){
						if(index  <= 3) setStore({planets: [...store.planets, char]})
						else setStore({planetsCarrousel: [...store.planetsCarrousel, char]})
					}
					if(search === "species"){
						if(index  <= 3) setStore({species: [...store.species, char]})
						else setStore({speciesCarrousel: [...store.speciesCarrousel, char]})
					}
				})
			},

			deleteFavorite: (index) => {
				
				const store = getStore();
				const newFavorites = store.favorites.filter((char) => {
					return char.uid !== index
				})
				setStore({favorites: newFavorites})
			},

			switcher: (type, state) =>{
				const store = getStore()

				if(type == "characters") setStore({carouselSwitcher: {...store.carouselSwitcher, characters: state}})
				if(type == "starships") setStore({carouselSwitcher: {...store.carouselSwitcher, starships:state}})
				if(type == "vehicles") setStore({carouselSwitcher: {...store.carouselSwitcher, vehicles:state}})
				if(type == "planets") setStore({carouselSwitcher: {...store.carouselSwitcher, planets:state}})
				if(type == "species") setStore({carouselSwitcher: {...store.carouselSwitcher, species: state}})

				console.log(store.carouselSwitcher)
			},

			addFavorite: (index) => {
				console.log(index)
				
				const store = getStore();
				const favorite = store.people.find((char) => {
					return char.uid === index
				})
				const alreadyFavorite = store.favorites.find((element) => {
					return favorite === element
				})
				
				if(!alreadyFavorite){
					setStore({favorites: [...store.favorites, favorite]})
				}
			},
		}
	};
};

export default getState;
