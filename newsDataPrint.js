

const newsPrint = () =>{
	currentNewsData.events.forEach(currentEvent => {

		const card = document.createElement("section")
		card.classList = "card event"

		headline.textContent = currentEvent.headline
		topline.appendChild(headline)

		const rating = document.createElement("span")
		rating.classList = "rating"
		rating.textContent = currentEvent.rating
		topline.appendChild(rating)

		card.appendChild(topline)

		const date = document.createElement("p")
		date.textContent = currentEvent.date
		card.appendChild(date)

		const location = document.createElement("p")
		location.textContent = currentEvent.location
		card.appendChild(location)

		const desc = document.createElement("p")
		desc.textContent = currentEvent.description
		card.appendChild(desc)

		const victim = document.createElement("p")
		victim.textContent = "Victims: "
		currentEvent.victims.forEach(iter => {
			console.log(iter)
			victim.textContent += (iter + ", ")
			
		})		
		card.appendChild(victim)

		const witness = document.createElement("p")
		witness.textContent = "Witnesses: "
		currentEvent.witnesses.forEach(iter => {
			witness.textContent += (iter + ", ")
			
		})		
		card.appendChild(witness)

		const law = document.createElement("p")
		law.textContent = currentEvent.law
		card.appendChild(law)

		fragment.appendChild(card)
	})

	newsRef.appendChild(fragment)
	
}

// newsBuilder()