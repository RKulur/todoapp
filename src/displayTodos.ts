import insertTodo from "./insertTodo";
import { Todo } from "./interface/interface";

export default function displayTodos(element: Element, todos: Todo[]) {
  todos &&
    todos.forEach((todo) => {
      console.log(todos.length);
      console.log(todo);
      insertTodo(element, todo.todo, todo.todoId, todo.checked);
    });
}
