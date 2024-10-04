// function to add a task

function addTask(){
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();
    if(taskValue !== ''){
        saveTaskLocalStorage(taskValue);
        createTaskElement(taskValue);
        taskInput.value= ''; //Clear input
    }

}

// Function to save a task to localstorage

function saveTaskLocalStorage(task){
    let tasks = getTasksFromLocalStorage();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

}

//function to get all tasks from local storage
function getTasksFromLocalStorage(){
    const tasks = localStorage.getItem('tasks');
    return tasks? JSON.parse(tasks): [];
}

//function to create a task element

function createTaskElement(task){
    const taskList = document.getElementById('taskList')
    const li = document.createElement('li')
    li.textContent= task;
    // add remove button
    const removeButton = document.createElement('button')
    removeButton.textContent = 'Remove'
    removeButton.onclick = function(){
        removeTask(task)
        taskList.removeChild(li)
};
li.appendChild(removeButton)
taskList.appendChild(li)
}

//function to remove a task from localstorage
function removeTask(taskToRemove){
    let tasks=getTasksFromLocalStorage();
    tasks =tasks.filter(task => task !== taskToRemove);
    localStorage.setItem('tasks',JSON.stringify(tasks))
}
// load tasks when page loads or refreshes
window.onload = function(){
    loadTask();
};

function loadTask(){
    const tasks = getTasksFromLocalStorage();
    tasks.forEach(task => {
        createTaskElement(task);
    });
}