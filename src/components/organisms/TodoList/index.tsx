import React from 'react'
import classNames from 'classnames'
import { Todo } from '../../../models/Todo'

import List from '../../molecules/List/index'
import ListItem from '../../molecules/ListItem/index'
import CheckBox from '../../atoms/CheckBox/index'
import Button from '../../atoms/Button/index'

import styles from './style.module.css'

interface IProps {
  className?: string
  todoList: Array<Todo>
  addTodo(event: React.FormEvent<HTMLButtonElement>): void
}

const TodoList: React.FC<IProps> = ({ className, todoList, addTodo }) => {
  const classProps = classNames(className, styles['default'])

  const createTodos = () =>
    todoList.map((item, index) => (
      <ListItem key={index}>
        <CheckBox text={item.description} name="todos" value={item.description} />
      </ListItem>
    ))

  return (
    <div className={classProps}>
      <List>{createTodos()}</List>
      <div className={styles['buttons']}>
        <Button text="할 일 추가" onClick={addTodo} />
      </div>
    </div>
  )
}

export default TodoList
