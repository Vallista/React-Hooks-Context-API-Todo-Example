import React from 'react'
import TodoList from '../components/organisms/TodoList/index'
import TodoContext, { ITodo } from '../store/Todo'

import { Todo } from '../models/Todo'

interface IProps {}

const CompleteListContainer: React.FC<IProps> = () => {
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

  const closeMenu = (event: React.FormEvent<HTMLButtonElement>): void => {
    todo && todo.actions.closeMenu()
  }

  const onInputChange = (index: number, { isComplete }: Todo, event: React.ChangeEvent<HTMLInputElement>): void => {}
  const onCheckBoxChange = (index: number, { isComplete, description }: Todo): void => {}

  if (!(todo && todo.state.isOpenMenu)) {
    return <div />
  }

  return (
    todo && (
      <TodoList
        onlyComplete={true}
        todoList={todo.state.todos}
        addTodo={addTodo}
        clearTodo={clearTodo}
        onInputChange={onInputChange}
        onCheckBoxChange={onCheckBoxChange}
        closeMenu={closeMenu}
      />
    )
  )
}

export default CompleteListContainer
