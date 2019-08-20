import React from 'react'
import classNames from 'classnames'
import { Todo } from '../../../models/Todo'

import List from '../../molecules/List/index'
import ListItem from '../../molecules/ListItem/index'
import CheckBox from '../../atoms/CheckBox/index'
import Button from '../../atoms/Button/index'
import Image from '../../atoms/Image'
import Input from '../../atoms/Input'

import styles from './style.module.css'

import PlusIcon from '../../../assets/icons/plus-button.svg'

interface IProps {
  className?: string
  todoList: Array<Todo>
  addTodo(event: React.FormEvent<HTMLButtonElement>): void
  onInputChange(index: number, { isComplete }: Todo, event: React.ChangeEvent<HTMLInputElement>): void
  onCheckBoxChange(index: number, { isComplete, description }: Todo): void
}

const TodoList: React.FC<IProps> = ({ className, todoList, addTodo, onInputChange, onCheckBoxChange }) => {
  const classProps = classNames(className, styles['default'])

  const createTodos = () => {
    return todoList.map((item, index) => (
      <ListItem key={index} className={styles['list-item']}>
        <Input
          className={classNames(styles['list-item-left'], item.isComplete ? styles['active-middle-line'] : '')}
          placeholder="할 일을 입력해주세요."
          value={item.description}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => onInputChange(index, item, event)}
        />
        <CheckBox
          className={classNames(styles['list-item-right'])}
          value={item.isComplete}
          onClick={() => {
            onCheckBoxChange(index, item)
          }}
        />
      </ListItem>
    ))
  }

  return (
    <div className={classProps}>
      <List>{createTodos()}</List>
      <div className={styles['buttons']}>
        <Button onClick={addTodo}>
          <div className={styles['image-wrapper']}>
            <Image src={PlusIcon} />
          </div>
        </Button>
      </div>
    </div>
  )
}

export default TodoList
