const taskInput = document.querySelector("#task-input");
const addTaskBtn = document.querySelector("#add-task");
const taskList = document.querySelector("#tasks");
const taskText = document.querySelectorAll(".task-text");
const deleteTaskBtn = document.querySelectorAll(".delete-task");

// Strike through on the text when completed
taskText.forEach((task) => {
  task.addEventListener("click", () => {
    task.classList.toggle("completed");
  });
});

addTaskBtn.addEventListener("click", () => {
  let newTask = document.createElement("div");
  newTask.classList.add("task");
  newTask.innerHTML = `
  <p class="task-text">${taskInput.value}</p>
  <button class="delete-task"><i class="fa-regular fa-trash-can"></i></button>
  `;
  taskList.appendChild(newTask);

  taskInput.value = "";
});

// todo: need to figure out how to get the dynamically added html
// deleteTaskBtn.forEach((task) => {
//   task.addEventListener("click", () => {
//     task.parentElement.remove();
//   });
// });
