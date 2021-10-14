import {Todo, TodosAction} from "types";

const todosReducer = (initialState: Todo[] = [], action: TodosAction): Todo[] => {
  switch (action.type) {
    case "ADD": {
      return [...initialState, action.payload]
    }
    case "REMOVE": {
      return initialState.filter((todo) => todo.id !== action.payload)
    }
    case "UPDATE": {
      return initialState.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            value: action.payload.value
          }
        }
        return todo
      })
    }
    case "TOGGLE": {
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isComplete: !todo.isComplete
          }
        }
        return todo
      })
    }
    default: {
      return initialState
    }
  }
}

export {
  todosReducer
}