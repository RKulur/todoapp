export default function insertTodo(
  element: Element,
  todo: string,
  todoId: string,
  checked: boolean,
) {
  const prevHTML = element.innerHTML;
  element.innerHTML =
    `
    <div id="${todoId}" class="flex fl1x-row justify-between md:flex-row my-3 md:justify-between gap-2 border-b-2 border-gray-300 p-1">
    <div class='flex'>
    <input type='checkbox' data-todoid="${todoId}" id="checkbox" ${
      checked ? "checked" : ""
    } class="mr-2 md:mr-4 lg:mr-6 scale-110" />
    <p class="${checked ? "text-gray-500 line-through" : ""}">${todo}</p>
</div>
<div class="flex justify-end">
<button id="deleteBtn" data-todoid="${todoId}" class="bg-red-400 py-2 px-4 rounded-md font-bold text-white text-lg scale-75 transition-all active:scale-[70%]">x</button>
</div>
</div>
</div>
` + prevHTML;
}
