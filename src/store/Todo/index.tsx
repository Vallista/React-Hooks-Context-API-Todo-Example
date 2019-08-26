import React from 'react'
import { Todo } from '../../models/Todo'

export interface IState {
  todos: Array<Todo>
  isOpenMenu: boolean
}

export interface IActions {
  addTodo(value: Todo): void
  setTodo(index: number, value: Todo): void
  clearTodo(): void
  openMenu(): void
  closeMenu(): void
}

export interface ITodo {
  state: IState
  actions: IActions
}

const context = React.createContext<ITodo | null>(null)

const { Provider, Consumer: TodoConsumer } = context

class TodoProvider extends React.Component {
  state = {
    todos: [],
    isOpenMenu: false,
  }

  actions = {
    addTodo: (value: Todo): void => {
      this.setState({ todos: [ ...this.state.todos, value ] })
    },
    setTodo: (index: number, value: Todo): void => {
      const { todos }: IState = this.state
      todos[index] = value

      this.setState({
        todos,
      })
    },
    clearTodo: (): void => {
      this.setState({ todos: [] })
    },

    openMenu: (): void => {
      this.setState({ isOpenMenu: true })
    },
    closeMenu: (): void => {
      this.setState({ isOpenMenu: false })
    },
    getMenuState: (): boolean => {
      return this.state.isOpenMenu
    },
  }

  render() {
    const { state, actions } = this
    const value = { state, actions }

    return <Provider value={value}>{this.props.children}</Provider>
  }
}

export { TodoProvider, TodoConsumer }
export default context
