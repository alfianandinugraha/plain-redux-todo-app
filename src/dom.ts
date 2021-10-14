import {Todo} from "types";
import {todosStore} from "./store";

const createListItem = (todo: Todo) => {
  const wrapperEl = document.createElement('section')
  wrapperEl.className = 'list-group-item d-flex align-items-center px-2 ps-3'
  wrapperEl.id = todo.id
  wrapperEl.innerHTML = `
    <input type="checkbox" class="form-check-input me-3 mt-0 toggle-btn" ${todo.isComplete ? 'checked' : ''}>
    <div class="todo-value">${todo.value}</div>
    <section class="btn-group ms-auto">
      <button class="btn btn-outline-danger remove-btn">Remove</button>
    </section>
  `
  const removeBtnEl = wrapperEl.getElementsByClassName('remove-btn')[0]
  const toggleBtnEl = wrapperEl.getElementsByClassName('toggle-btn')[0]

  removeBtnEl.addEventListener('click', () => {
    todosStore.dispatch({
      type: 'REMOVE',
      payload: todo.id
    })
  })
  toggleBtnEl.addEventListener('click', () => {
    todosStore.dispatch({
      type: 'TOGGLE',
      payload: todo.id
    })
  })

  return wrapperEl
}

export {
  createListItem
}