import {createListItem} from "./dom";
import {todosStore} from "./store";
import {nanoid} from "nanoid";

const todosEl = document.getElementById('todos')!
const addTodoBtn = document.getElementById('add-activity-btn')!
const inputTodoEl = document.getElementById('input-activity')! as HTMLInputElement

todosStore.subscribe(() => {
  const todos = todosStore.getState()
  todosEl.innerHTML = ''
  todos.forEach((todo) => {
    todosEl.appendChild(createListItem(todo))
  })
})

addTodoBtn.addEventListener('click', () => {
  todosStore.dispatch({
    type: 'ADD',
    payload: {
      id: nanoid(),
      value: inputTodoEl.value,
      isComplete: false
    }
  })

  inputTodoEl.value = ''
})
