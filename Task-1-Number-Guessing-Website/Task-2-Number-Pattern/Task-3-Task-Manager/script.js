let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const pendingTasks = document.getElementById("pendingTasks");


function addTask() {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const task = {
        id: Date.now(),
        text: taskText,
        completed: false
    };
    tasks.push(task);

localStorage.setItem("tasks", JSON.stringify(tasks));

taskInput.value = "";

displayTasks();

    
}


function displayTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));

    taskList.innerHTML = "";

    tasks.forEach(function(task) {

        const li = document.createElement("li");

        li.innerHTML = `
            <input
                type="checkbox"
                ${task.completed ? "checked" : ""}
                onchange="toggleTask(${task.id})"
            >

            <span class="task-text"
                style="${task.completed ? "text-decoration: line-through;" : ""}">
                ${task.text}
            </span>

            <div class="actions">

                <button onclick="editTask(${task.id})">
                    ✏️
                </button>

                <button onclick="deleteTask(${task.id})">
                    🗑️
                </button>

            </div>
        `;

        taskList.appendChild(li);
    });

    updateStats();
}


function toggleTask(id) {

    const task = tasks.find(function(task) {
        return task.id === id;
    });

    task.completed = !task.completed;
    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTasks();
}


function editTask(id) {

    const task = tasks.find(function(task) {
        return task.id === id;
    });

    const newText = prompt("Edit your task:", task.text);

    if (newText !== null && newText.trim() !== "") {
        task.text = newText.trim();

localStorage.setItem("tasks", JSON.stringify(tasks));

        displayTasks();
    }
}


function deleteTask(id) {

    const taskIndex = tasks.findIndex(function(task) {
        return task.id === id;
    });

    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTasks();
}



function updateStats() {

    const total = tasks.length;

    const completed = tasks.filter(function(task) {
        return task.completed;
    }).length;

    const pending = total - completed;

    totalTasks.textContent = total;
    completedTasks.textContent = completed;
    pendingTasks.textContent = pending;
}


addButton.addEventListener("click", addTask);


taskInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        addTask();
    }

});