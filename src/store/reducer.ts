import {Todo, TodosAction} from "types";

const todosReducer = (initialState: Todo[] = [], action: TodosAction): Todo[] => {
  switch (action.type) {
    case "ADD": {
      return [action.payload, ...initialState]
    }
    case "REMOVE": {
      return initialState.filter((todo) => todo.id !== action.payload)
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