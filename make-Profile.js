


const docRef = document.querySelector("#side__profile")
const frag = document.createDocumentFragment()


const img = document.createElement("img")
img.classList = "side__profile__img"
img.src = "img/gracelyn.png"
frag.appendChild(img)

const name = document.createElement("h2")
name.textContent = "Gracelyn O'Donnel"
frag.appendChild(name)

const nationality = document.createElement("p")
nationality.textContent = "Nation of Origin: Ireland"
frag.appendChild(nationality)

const age = document.createElement("p")
age.textContent = "Age: 41"
frag.appendChild(age)
docRef.appendChild(frag)
