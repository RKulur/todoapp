import "./style.css";
import insertTodo from "./components/insertTodo";
import deleteTodo from "./components/deleteTodo";
import displayTodos from "./components/displayTodos";
import { Todo } from "./interface/Todo";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div class="h-screen flex justify-center items-center">
  <div id="" class=" h-[35rem] w-72 md:w-[35rem] lg:w-[50rem] xl:w-[60rem] flex flex-col gap-4 items-center">
    <div class='w-full'>
      <h1 class=" text-center text-[2em] font-bold">TODOs</h1>
    </div>
    <form id="form" class='border-2 flex justify-between w-full'>
      <input class='p-2  min-w-1 outline-none' type='text' placeholder="Enter the note"/>
      <button type='submit'class='px-3 md:px-6 bg-green-300 active:scale-95'>Add</button>
    </form>
    <div id='todoContainer' class="w-full"></div>
  </div>`;

const form = document.querySelector("#form") as HTMLFormElement;
const button = form.querySelector("button") as HTMLButtonElement;
button.addEventListener("click", handleForm);

function handleForm(e: Event) {
  e.preventDefault();
  const input = form.querySelectorAll("input")[0];
  const todo = input.value;
  const todoId = `id${Date.now().toString()}`;
  localStorage.setItem(
    Date.now().toString(),
    JSON.stringify({ todo, checked: false, todoId }),
  );
  form.reset();
  insertTodo(todoContainer, todo, todoId, false);
}

// Get all the todos from localStorage
const todos: Todo[] | [] = Object.keys(localStorage)
  .map((key) => parseInt(key))
  .sort((a, b) => a - b)
  .map((key) => {
    const value = localStorage.getItem(key.toString());
    if (value) return JSON.parse(value);
  });

const todoContainer = document.querySelector(
  "#todoContainer",
) as HTMLDivElement;

displayTodos(todoContainer, todos);

// Adding event listener to delete button and checkbox
todoContainer.addEventListener("click", (e) => {
  const target = e.target as HTMLButtonElement;
  const id = target.dataset.todoid!;
  if (target.id == "deleteBtn") {
    if (id) deleteTodo(todoContainer, id);
  }

  if (target.id == "checkbox") {
    const key = id.slice(2);
    const checkbox = target as HTMLInputElement;
    const getTodo = localStorage.getItem(key);
    if (getTodo) {
      const updatedTodo = JSON.parse(getTodo);
      updatedTodo.checked = checkbox.checked;
      localStorage.setItem(key, JSON.stringify(updatedTodo));
    }
    if (checkbox.checked) {
      checkbox.nextElementSibling?.classList.add(
        "text-gray-500",
        "line-through",
      );
    } else {
      checkbox.nextElementSibling?.classList.remove(
        "text-gray-500",
        "line-through",
      );
    }
  }
});
