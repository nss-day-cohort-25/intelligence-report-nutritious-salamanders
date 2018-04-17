const allTasks = [];

const saveToDatabase = (databaseName, databaseObject) => {
    const stringifiedDB = JSON.stringify(databaseObject)
    console.log(stringifiedDB)
    localStorage.setItem(databaseName, stringifiedDB)
}

saveToDatabase('tasks', allTasks);