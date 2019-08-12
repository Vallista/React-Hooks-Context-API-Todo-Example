import React from 'react'
import classNames from 'classnames'
import { Todo } from '../../models/Todo'

import List from '../molecules/List/index'
import ListItem from '../molecules/ListItem/index'
import RadioButton from '../atoms/RadioButton/index'
import Button from '../atoms/Button/index'

interface IProps {
  className?: string
  todoList: Array<Todo>
  addTodo(event: React.FormEvent<HTMLButtonElement>): void
}

const TodoList: React.FC<IProps> = ({ className, todoList, addTodo }) => {
  const classProps = classNames(className)

  const createTodos = () =>
    todoList.map((item) => (
      <ListItem>
        <RadioButton text={item.description} name="todos" value={item.description} />
      </ListItem>
    ))

  return (
    <div className={classProps}>
      <List>{createTodos()}</List>
      <Button text="할 일 추가" onClick={addTodo} />
    </div>
  )
}

export default TodoList
