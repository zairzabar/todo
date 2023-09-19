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

// TODO: Need to implement the add task functionality
// todo: need to change it into a list, so if we add a new task it adds up without replacing the existing task
// addTaskBtn.addEventListener("click", () => {
//   taskList.innerHTML = `<div class="task">
//                 <p class="task-text">${taskInput.value}</p>
//                 <button class="delete-task"><i class="fa-regular fa-trash-can"></i></button>
//             </div>`;
//   taskInput.value = "";
// });

deleteTaskBtn.forEach((task) => {
  task.addEventListener("click", () => {
    task.parentElement.remove();
  });
});
