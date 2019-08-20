import React from 'react'
import { Todo } from '../../models/Todo'

export interface IState {
  todos: Array<Todo>
}

export interface IActions {
  addTodo(value: Todo): void
  setTodo(index: number, value: Todo): void
}

export interface ITodo {
  state: IState
  actions: IActions
}

const context = React.createContext<ITodo | null>(null)

const { Provider, Consumer: TodoConsumer } = context

class TodoProvider extends React.Component {
  state = {
    todos: []
  }

  actions = {
    addTodo: (value: Todo): void => {
      this.setState({ todos: [ ...this.state.todos, value ] })
    },
    setTodo: (index: number, value: Todo): void => {
      const { todos }: IState = this.state
      todos[index] = value

      this.setState({
        todos
      })
    }
  }

  render() {
    const { state, actions } = this
    const value = { state, actions }

    return <Provider value={value}>{this.props.children}</Provider>
  }
}

export { TodoProvider, TodoConsumer }
export default context
