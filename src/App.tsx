import React from 'react'
import './App.css'

import { TodoProvider } from './store/Todo'

import TodoList from './containers/TodoListContainer'
import Header from './components/organisms/Header'

const App: React.FC = () => {
	return (
		<div className='app'>
			<TodoProvider>
				<Header />
				<TodoList />
			</TodoProvider>
		</div>
	)
}

export default App
