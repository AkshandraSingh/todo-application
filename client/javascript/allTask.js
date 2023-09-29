document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/allTask")
        .then(response => response.json())
        .then(tasks => {
            const taskList = document.getElementById("taskList");
            tasks.forEach(task => {
                const listItem = document.createElement("li");
                listItem.textContent = `Task: ${task.taskName}, Description: ${task.taskDescription}`;
                taskList.appendChild(listItem);
            });
        })
        .catch(error => console.error(error));
});