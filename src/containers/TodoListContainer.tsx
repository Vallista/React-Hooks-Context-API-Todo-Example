import React from 'react'
import TodoList from '../components/organisms/TodoList/index'
import TodoContext, { ITodo } from '../store/Todo'

import { Todo } from '../models/Todo'

interface IProps {}

const TodoListContainer: React.FC<IProps> = () => {
	const newTodo: Todo = {
		isComplete: false,
		description: '',
	}

	const todo = React.useContext<ITodo | null>(TodoContext)

	const addTodo = (event: React.FormEvent<HTMLButtonElement>): void => {
		todo && todo.actions.addTodo(newTodo)
	}

	const clearTodo = (event: React.FormEvent<HTMLButtonElement>): void => {
		todo && todo.actions.clearTodo()
	}

	const onInputChange = (index: number, { isComplete }: Todo, event: React.ChangeEvent<HTMLInputElement>): void => {
		const item = {
			isComplete,
			description: event.currentTarget.value,
		}

		todo && todo.actions.setTodo(index, item)
	}

	const onCheckBoxChange = (index: number, { isComplete, description }: Todo): void => {
		const item = {
			isComplete: !isComplete,
			description,
		}

		todo && todo.actions.setTodo(index, item)
	}

	return (
		todo && (
			<TodoList
				todoList={todo.state.todos}
				addTodo={addTodo}
				clearTodo={clearTodo}
				onInputChange={onInputChange}
				onCheckBoxChange={onCheckBoxChange}
			/>
		)
	)
}

export default TodoListContainer
