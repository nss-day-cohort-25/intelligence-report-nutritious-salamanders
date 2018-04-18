const createCard = (cardInfo) => {
    const cardStructure = document.createElement('span');
    const cardHeader = document.createElement('h2');
    const cardDivider = document.createElement('hr');
    const pageClass = cardInfo.pageClass;
    const cardClass = cardInfo.cardClass;

    cardHeader.textContent = cardInfo.header;

    cardStructure.classList.add(pageClass, cardClass)

    cardStructure.appendChild(cardHeader)
    cardStructure.appendChild(cardDivider)

    return cardStructure;
}

const testCard = () => {
    let test = {
        header: 'this is a test header',
        cardClass: 'card',
        pageClass: 'financials',
    }

    const newCard = createCard(test)
    const funds = document.createElement('p');
    funds.textContent = '2.54'

    newCard.appendChild(funds)
}




// cardInfo = {
//     header: 'text for header',
//     body: 'text for body',
//     cardClass: 'card-specific class',
//     pageClass: 'page-specific class',
//     pageSection: ''
// }