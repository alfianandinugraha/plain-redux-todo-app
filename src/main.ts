import {createListItem} from "./dom";
import {todosStore} from "./store";

const todosEl = document.getElementById('todos')!

todosStore.subscribe(() => {
  const todos = todosStore.getState()
  todosEl.innerHTML = ''
  todos.forEach((todo) => {
    todosEl.appendChild(createListItem(todo))
  })
})

todosStore.dispatch({
  type: 'ADD',
  payload: {
    id: '8989',
    value: 'Buy milk',
    isComplete: false
  }
})
