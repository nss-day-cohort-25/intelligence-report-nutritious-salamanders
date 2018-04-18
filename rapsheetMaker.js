const rapMaker = JSON.parse(localStorage.getItem("Rap_Database"))

const rapData2 = document.querySelector("#rapcontent")

const cityDomBuilder = (data) => {

    let row = document.createElement("div")
    row.className = "rapsheet_row"

rapMaker.rapsheet.forEach(
    (currentRapsheet, i) => {
            if(i !== 0 && row.childNodes.length  !== 0 )
                rapData2.appendChild(row)
                row = document.createElement("span")
                row.className = "rapsheet__row"

           
                    const rapSection = document.createElement("div")
                    rapSection.className = "rap_with_border"

                    const header = document.createElement("h1")
                    header.classList = "rapsheet_title"
                    header.textContent = currentRapsheet.title
                    rapSection.appendChild(header)

                    const content = document.createElement("h4")
                    content.classList = "rapsheet_content"
                    content.textContent = currentRapsheet.value
                    rapSection.appendChild(content)

                row.appendChild(rapSection)
            

    });

}

cityDomBuilder()





