import React from 'react'
import './App.css'

import TodoList from './containers/TodoListContainer'

const App: React.FC = () => {
  return (
    <div className="app">
      <TodoList />
    </div>
  )
}

export default App
