declare module "types" {
  export interface Todo {
    value: string
    id: string
    isComplete: boolean
  }

  export type TodosAction = {
    type: 'ADD' | 'UPDATE',
    payload: Todo
  } | {
    type: 'REMOVE' | 'TOGGLE',
    payload: string
  }
}