import React from 'react'
import './App.css'

import { TodoProvider } from './store/Todo'

import TodoList from './containers/TodoListContainer'
import ComplateList from './containers/CompleteListContainer'
import Header from './containers/HeaderContainer'

const App: React.FC = () => {
  return (
    <div className='app'>
      <TodoProvider>
        <Header />
        <TodoList />
        <ComplateList />
      </TodoProvider>
    </div>
  )
}

export default App
