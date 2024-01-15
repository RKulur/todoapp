export default function deleteTodo(element: Element, id: string) {
  const todoToBeDeleted = element.querySelector(`#${id}`) as HTMLDivElement;
  element.removeChild(todoToBeDeleted);
  localStorage.removeItem(id.slice(2));
}
