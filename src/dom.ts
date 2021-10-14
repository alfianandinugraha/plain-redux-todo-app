const createListItem = (todo: Todo) => {
  const wrapperEl = document.createElement('section')
  wrapperEl.className = 'list-group-item d-flex justify-content-between align-items-center px-2 ps-3'
  wrapperEl.id = todo.id
  wrapperEl.innerHTML = `
    <div>${todo.value}</div>
    <section class="btn-group">
      <button class="btn btn-outline-primary update-btn">Update</button>
      <button class="btn btn-outline-danger remove-btn">Remove</button>
    </section>
  `
  const updateBtnEl = wrapperEl.getElementsByClassName('update-btn')[0]
  const removeBtnEl = wrapperEl.getElementsByClassName('remove-btn')[0]

  updateBtnEl.addEventListener('click', () => {
    console.log(`updating ${todo.id}...`)
  })
  removeBtnEl.addEventListener('click', () => {
    console.log(`removing ${todo.id}...`)
  })

  return wrapperEl
}

export {
  createListItem
}