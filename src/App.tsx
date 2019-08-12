import React from 'react'
import './App.css'

import TodoList from './components/organisms/TodoList/index'
import { Todo } from './models/Todo'

const todos: Array<Todo> = [
  {
    description: 'hihi',
    isComplete: false
  },
  {
    description: 'hihi',
    isComplete: false
  },
  {
    description: 'hihi',
    isComplete: false
  },
  {
    description: 'hihi',
    isComplete: false
  },
  {
    description: 'hihi',
    isComplete: false
  }
]

const App: React.FC = () => {
  return (
    <div className="app">
      <TodoList todoList={todos} addTodo={() => {}} />
    </div>
  )
}

export default App
