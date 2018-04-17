function loadDatabase() {
	const databaseString = localStorage.getItem("newsDatabase")
	return JSON.parse(databaseString)
}

function loadNews(){
	
	
	try{
		currentNewsData = loadDatabase()
		if(currentNewsData == null){
			console.log("no data in news dataBase to load, creating from default")
			makeNews()
		}
		
	}catch(err){
		console.log("no news dataBase to load, creating from default")
		makeNews()
	}
	

}

// loadNews()