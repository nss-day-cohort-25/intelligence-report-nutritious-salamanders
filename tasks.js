const allTasks = [];

const newTask = () => {
    console.log('hi')
    let modal = document.querySelector('#modal'),
        close = document.querySelector('#closeModal').addEventListener('click', closeModal)

    modal.classList.toggle('hide')


    const task = Object.create(null, {
        taskName: { writable: true, value: name },
        taskDescript: { writable: true, value: description },
        taskDue: { writable: true, value: due },
        priority: { writable: true, value: priority },
    })

}

const addTask = document.querySelector('#addTask').addEventListener('click', newTask);

const closeModal = () => {
    let modal = document.querySelector('#modal');
    modal.classList.toggle('hide');
}