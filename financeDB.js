const financeDB = {}

financeDB.bankAccts = []
financeDB.businesses = []
financeDB.blackMailed = []

financeDB.bankAccts.push(
    {
     name: `Citibank`,
     acct: 45321432234-32,
     funds: 2.73  
    },
    {
     name: `Bank of Ireland`,
     acct: 75467429,
     funds: 10.5  
    },
    {
     name: `UBS`,
     acct: 4332-8,
     funds: 2.73  
    },
    {
     name: `Bank of China`,
     acct: 9992483-10,
     funds: .750  
    }    
)
// Worth represented in millions
financeDB.businesses.push(
    {
     name: `Sunland Park Racetrack & Casino`,
     location: `Las Cruces, NM`,
     worth: 400,
     laundered: 25  
    },
    {
     name: `Nashville Car Wash & Detail`,
     location: `Nashville, TN`,
     worth: 112.2,
     laundered: 2.6  
  
    },
    {
     name: `Baltimore Technologies`,
     location: `Dublin, IR`,
     worth: 200,
     laundered: 10.25  
  
    },
    {
     name: `Uberfyt`,
     location: `Silicon Valley, CA`,
     worth: 354,
     laundered: 90.5  
  
    },

)
financeDB.blackMailed.push(
    {
     name: `Seán T. O'Kelly`,
     position: `Vice President of the Irish Free State`
    },
    {
     name: `Bill Haslam`,
     position: `Governor of TN`
    },
    {
     name: `Bill de Blasio`,
     position: `Mayor of NYC`
    },
    {
     name: `Huma Abedin`,
     position: `Political Staffer`
    }
)


const saveToDatabase = (databaseName, databaseObject) => {
    const stringifiedDB = JSON.stringify(databaseObject)
    // console.log(stringifiedDB)
    localStorage.setItem(databaseName, stringifiedDB)
}

saveToDatabase(`financialStmnts`, financeDB);