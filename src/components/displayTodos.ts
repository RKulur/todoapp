import insertTodo from "./insertTodo";
import { Todo } from "./interface/interface";

export default function displayTodos(element: Element, todos: Todo[]) {
  todos &&
    todos.forEach((todo) => {
      insertTodo(element, todo.todo, todo.todoId, todo.checked);
    });
}
