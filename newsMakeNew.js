const openEventAdd = () => {
	let addBox = document.querySelector("#blur__page")
	close = document.querySelector('#close__box').addEventListener('click', closeBox);
	addBox.classList.toggle("hide")
}

const addTask = document.querySelector('#event__add').addEventListener('click', openEventAdd);

const closeBox = () => {
    let addBox = document.querySelector('#blur__page');
    addBox.classList.toggle('hide');
}

const clearFields = () => {
    let name = document.querySelector('#eventName'),
		rating = document.querySelector('#eventRating'),
		date = document.querySelector('#eventDate'),
		location = document.querySelector('#eventLocation'),
		description = document.querySelector('#eventDescription'),
		witnesses = document.querySelector('#eventWitnesses'),
		victims = document.querySelector('#eventVictims'),
		law = document.querySelector('#eventLaw');


    name.value = "";
	rating.value = "";
	date.value = "";
	location.value = "";
	description.value = "";
	witnesses.value = "";
	victims.value = "";
	law.value = "";
}

const createEvent = () => {
    let name = document.querySelector('#eventName').value,
		rating = document.querySelector('#eventRating').value,
		date = document.querySelector('#eventDate').value,
		location = document.querySelector('#eventLocation').value,
		description = document.querySelector('#eventDescription').value,
		witnesses = document.querySelector('#eventWitnesses').value,
		victims = document.querySelector('#eventVictims').value,
		law = document.querySelector('#eventLaw').value;

		
		let witArr = []
		let vicArr = []

		if(witnesses.length == 0){
			witArr.push("No witnesses for this event.")
		}else{
			witArr = witnesses.split(", ")
		}

		if(victims.length == 0){
			vicArr.push("No victims for this event.")
		}else{
			vicArr = victims.split(", ")
		}

		law += " responded to the incident."

	clearFields();
	newEvent(name, rating, date, location, witArr, vicArr, law, description)
	saveNews()
	closeBox()
	window.location.reload()
    
}


const createNewEvent = document.querySelector('#createEvent').addEventListener('click', createEvent)
