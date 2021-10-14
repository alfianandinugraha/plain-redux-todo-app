import {createListItem} from "./dom";

interface Todo {
  value: string
  id: string
}

const todosEl = document.getElementById('todos')!
const initialTodos: Todo[] = [{
  value: 'Buy meal',
  id: '1'
}, {
  value: 'Buy meal',
  id: '2'
}]

initialTodos.forEach((todo) => {
  todosEl.appendChild(createListItem(todo))
})