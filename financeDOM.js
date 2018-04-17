const loadDatabase = (key) => {
    const databaseString = localStorage.getItem(key);
    let parsedData =  JSON.parse(databaseString) 
    return parsedData;
}

loadDatabase(`financialStmnts`);
// Targets id on finance.html
const bankAccounts = document.querySelector(`#bank--Accts`);
const frgmntHold = document.createDocumentFragment();

console.log(financeDB.bankAccts)
const bankAccountCardBuilder = (accounts) => {
    
    financeDB.bankAccts.forEach(account => {
            
        const span = document.createElement(`span`)
        span.classList = `card test`
        const headerCreation = document.createElement(`h5`)
        headerCreation.textContent = account.name
        const headerImgCreation = document.createElement(`img`)
        headerImgCreation.src = `img/money-bag.svg`
        headerCreation.appendChild(headerImgCreation)
        span.appendChild(headerCreation)

        const accountNumber = document.createElement(`p`)
        accountNumber.textContent = account.acct
        span.appendChild(accountNumber)
        frgmntHold.appendChild(span)

         

    
    })
}

bankAccountCardBuilder()

bankAccounts.appendChild(frgmntHold)
