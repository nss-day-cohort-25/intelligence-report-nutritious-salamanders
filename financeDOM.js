const loadDatabase = (key) => {
    const databaseString = localStorage.getItem(key);
    let parsedData =  JSON.parse(databaseString) 
    return parsedData;
}

loadDatabase(`financialStmnts`);

