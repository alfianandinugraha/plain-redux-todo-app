import {createListItem} from "./dom";
import {Todo} from 'types'

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