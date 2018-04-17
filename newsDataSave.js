

function saveNews(){
	try{
		newsData = currentNewsData
		status = true;
	}catch(err){

	}

	if(status){
		const stringifiedDatabase = JSON.stringify(newsData)
		localStorage.setItem("newsDatabase", stringifiedDatabase)
		console.log("news Database saved")
	}else{
		makeNews()
		console.log("news database doesn't exist, creating new News database")
	}

}

// saveNews()