let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let editId = null;

function addTask() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("dueDate").value;
    const priority = document.getElementById("priority").value;

    if (title === "" || dueDate === "") {
        alert("Title and Due Date are required!");
        return;
    }

    if (editId === null) {
        tasks.push({
            id: Date.now(),
            title,
            description,
            dueDate,
            priority
        });
    } else {
        const task = tasks.find(t => t.id === editId);
        task.title = title;
        task.description = description;
        task.dueDate = dueDate;
        task.priority = priority;
        editId = null;
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));
    clearFields();
    displayTasks();
}

function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    const filter = document.getElementById("filterPriority").value;
    const search = document.getElementById("search").value.toLowerCase();

    const filteredTasks = tasks.filter(task =>
        (filter === "All" || task.priority === filter) &&
        task.title.toLowerCase().includes(search)
    );

    filteredTasks.forEach(task => {
        const div = document.createElement("div");
        div.className = "task";
        div.innerHTML = `
            <strong>${task.title}</strong><br>
            ${task.description}<br>
            Due Date: ${task.dueDate}<br>
            Priority: ${task.priority}<br>
            <div class="task-actions">
                <button onclick="editTask(${task.id})">Edit</button>
                <button onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;
        taskList.appendChild(div);
    });
}

function editTask(id) {
    const task = tasks.find(t => t.id === id);
    document.getElementById("title").value = task.title;
    document.getElementById("description").value = task.description;
    document.getElementById("dueDate").value = task.dueDate;
    document.getElementById("priority").value = task.priority;
    editId = id;
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

function clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("dueDate").value = "";
    document.getElementById("priority").value = "";
}

displayTasks();
