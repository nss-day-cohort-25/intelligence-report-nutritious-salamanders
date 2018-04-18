// Data for dashboard
const dashboardData = [];

const knownAssociates = [
    {
        name: 'John Smith',
        age: 28,
        location: 'United States'
    },
    {
        name: 'Jennifer Strong',
        age: 38,
        location: 'South Africa'
    },
    {
        name: 'Bob Westerson',
        age: 91,
        location: 'Mexico'
    },
    {
        name: 'Amanda Frank',
        age: 51,
        location: 'Ireland'
    },
    {
        name: 'Willie Billie',
        age: 12,
        location: 'Canada'
    },
]

const countriesVisited = ['Ireland', 'United States', 'Mexico', 'Canada', 'Thailand'];
const nicknames = ['Irish Carbomb', 'Gracie Girl', 'The Joker', 'Guinness', 'Grace Face'];

dashboardData.push(knownAssociates);
dashboardData.push(countriesVisited);
dashboardData.push(nicknames);


const saveToDatabase = (databaseName, databaseObject) => {
    const stringifiedDB = JSON.stringify(databaseObject)
    localStorage.setItem(databaseName, stringifiedDB)
}

const loadDatabase = () => {
    const databaseString = localStorage.getItem('dashboard');
    let databaseData =  JSON.parse(databaseString) 
    return databaseData;
  }

saveToDatabase('dashboard', dashboardData);