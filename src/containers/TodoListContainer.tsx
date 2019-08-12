import React from 'react'
import TodoList from '../components/organisms/TodoList/index'

import { Todo } from '../models/Todo'

interface IProps {}

interface IState {
  todos: Array<Todo>
}

class TodoListContainer extends React.Component<IProps, IState> {
  state = {
    todos: Array<Todo>()
  }

  addTodo = () => {
    const todo: Todo = {
      isComplete: false,
      description: ''
    }

    this.setState({
      todos: [ ...this.state.todos, todo ]
    })
  }

  render() {
    return <TodoList todoList={this.state.todos} addTodo={this.addTodo} />
  }
}

export default TodoListContainer
