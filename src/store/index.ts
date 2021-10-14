import {createStore} from "redux";
import {todosReducer} from "./reducer";

const todosStore = createStore(todosReducer)

export {
  todosStore
}