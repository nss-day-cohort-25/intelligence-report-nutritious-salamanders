
function makeNews(){
	currentNewsData = {}
	currentNewsData.events = []

	newEvent("Several inmates killed at South Carolina Prison", "77%" ,"04/16/2017" ,"Lee Correctional Institution, South Carolina" ,["Natalie Martins", "Kelcey Myers", "Alyce Padmore" ] ,["Quinn Richards", "Rachyl Hayes", "Roxie Terry", "Debby Byrd"] ,"South Carolina State Police Responded to the incidident", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis ligula ut neque tristique, sit amet aliquet felis ultrices. Donec eu vehicula massa. Sed scelerisque libero justo, sed malesuada tortor ornare vel. Fusce condimentum, purus a varius consequat, lorem neque sagittis lectus, quis suscipit augue velit sed est. Etiam id ex egestas, ultrices tellus non, laoreet ex. Maecenas tempor sit amet eros ac pharetra. Curabitur hendrerit in libero a tempus. Aenean quis orci orci. Cras cursus orci tortor, at venenatis orci semper quis. Aliquam ullamcorper elit ut metus commodo, vitae semper eros dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.")
	newEvent("College student found murdered and dismembered on South Carolina Campus", "63%", "02/26/2018", "University of South Carolina", ["Mariel Ayers"], ["Samara Andrewson", "Miles Shaw"], "Sout Carolina State Police responded to the incident", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis ligula ut neque tristique, sit amet aliquet felis ultrices. Donec eu vehicula massa. Sed scelerisque libero justo, sed malesuada tortor ornare vel. Fusce condimentum, purus a varius consequat, lorem neque sagittis lectus, quis suscipit augue velit sed est. Etiam id ex egestas, ultrices tellus non, laoreet ex. Maecenas tempor sit amet eros ac pharetra. Curabitur hendrerit in libero a tempus. Aenean quis orci orci. Cras cursus orci tortor, at venenatis orci semper quis. Aliquam ullamcorper elit ut metus commodo, vitae semper eros dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.")
	newEvent("Daycare worker allegedly built drug den in facility to smoke meth on the job", "84%", "07/07/2012", "Kilkenny, Ireland", ["No victims"],["Móirín Ward", "Catrina Mallon"], "The Garda Síochána responded to the concerns of witnesses but were unable to catch the suspect.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis ligula ut neque tristique, sit amet aliquet felis ultrices. Donec eu vehicula massa. Sed scelerisque libero justo, sed malesuada tortor ornare vel. Fusce condimentum, purus a varius consequat, lorem neque sagittis lectus, quis suscipit augue velit sed est. Etiam id ex egestas, ultrices tellus non, laoreet ex. Maecenas tempor sit amet eros ac pharetra. Curabitur hendrerit in libero a tempus. Aenean quis orci orci. Cras cursus orci tortor, at venenatis orci semper quis. Aliquam ullamcorper elit ut metus commodo, vitae semper eros dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.")
}

function newEvent(headline, rating, date, location, victims, witnesses, law, description){
	let event = Object.create({},{
		headline:{
			enumerable: true,
			value: headline
		},
		rating:{
			enumerable: true,
			value: rating
		},
		date:{
			enumerable: true,
			value: date
		},
		location:{
			enumerable: true,
			value: location
		},
		victims:{
			enumerable: true,
			value: victims
		},
		witnesses:{
			enumerable: true,
			value: witnesses
		},
		law:{
			enumerable: true,
			value: law
		},
		description:{
			enumerable: true,
			value: description
		}
	})

	currentNewsData.events.push(event)

}

