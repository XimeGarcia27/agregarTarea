import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {
  evento.preventDefault();//evitar que se recargue la página
  const input = document.querySelector("[data-form-input]");
  const value = input.value;
  const list = document.querySelector("[data-list]");
  const task = document.createElement("li");

  input.value = '';
  task.classList.add("card");

  const taskContainer = document.createElement("div");
  const titleTask = document.createElement("span");

  titleTask.classList.add("task");
  titleTask.innerText = value;

  taskContainer.appendChild(checkComplete());
  taskContainer.appendChild(titleTask);
  //backticks
  const content = `
  <i class="fas fa-trash-alt trashIcon icon"></i>`

  task.appendChild(taskContainer);
  task.appendChild(deleteIcon());
  list.appendChild(task);
};

//Arrow functions o funciones anonimas
btn.addEventListener("click", createTask);
