const loadDatabase = (key) => {
    const databaseString = localStorage.getItem(key);
    let parsedData =  JSON.parse(databaseString) 
    return parsedData;
}

loadDatabase(`financialStmnts`);
// Targets id on finance.html
const bankAccounts = document.querySelector(`#bank--Accts`);
const blackmailedOfficials = document.querySelector(`#blackmailed--officials`)
const financeBus = document.querySelector(`#finance--bus`)
const frgmntbanks = document.createDocumentFragment();
const frgmntBusiness = document.createDocumentFragment();
const frgmntBlackmailed = document.createDocumentFragment();

const bankAccountCardBuilder = (accounts) => {
    
    financeDB.bankAccts.forEach(account => {
            
        const span = document.createElement(`span`)
        span.classList = `finance--Cards`
        const headerCreation = document.createElement(`h3`)
        headerCreation.textContent = `${account.name}`
        span.appendChild(headerCreation)

        const accountNumber = document.createElement(`p`)
        accountNumber.textContent = `Acct#: ${account.acct}`
        span.appendChild(accountNumber)


        const fundsAmount = document.createElement(`p`)
        fundsAmount.textContent = `Funds: $${account.funds} million`
        span.appendChild(fundsAmount)
        frgmntbanks.appendChild(span) 
      


    })
}

const financialBusinessesBuilder = (name) => {

    financeDB.businesses.forEach(bus => {
  // Creating cards for businesses
        const span2 = document.createElement(`span`)
        span2.classList = `finance--Cards`
        const header2Creation = document.createElement(`h3`)
        header2Creation.textContent = `${bus.name}`
        span2.appendChild(header2Creation)
        const busWorthDiv = document.createElement(`div`)
        busWorthDiv.textContent = `Total Worth: $${bus.worth} mil`
        span2.appendChild(busWorthDiv)
        const launderedP = document.createElement(`div`)
        launderedP.textContent = `Lndrd: $${bus.laundered}`
        span2.appendChild(launderedP)
        frgmntBusiness.appendChild(span2)

    })
}


const blackmailedBuilder = (name) => {

    financeDB.blackMailed.forEach(official => {

        const span3 = document.createElement(`span`)
        span3.classList = `finance--Cards`

        const imgCreation = document.createElement(`img`)
        imgCreation.src = official.image
        span3.appendChild(imgCreation)
        const headerCreation3 = document.createElement(`h3`)
        headerCreation3.textContent = official.name
        span3.appendChild(headerCreation3)
        const parag = document.createElement(`p`)
        parag.textContent = official.position
        span3.appendChild(parag)        
        frgmntBlackmailed.appendChild(span3)
    })

}


bankAccountCardBuilder()
financialBusinessesBuilder();
blackmailedBuilder();

blackmailedOfficials.appendChild(frgmntBlackmailed)
bankAccounts.appendChild(frgmntbanks)
financeBus.appendChild(frgmntBusiness)