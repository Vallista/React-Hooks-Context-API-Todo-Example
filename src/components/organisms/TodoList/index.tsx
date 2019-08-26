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
import CloseIcon from '../../../assets/icons/close-button.svg'

interface IProps {
  className?: string
  onlyComplete?: boolean
  todoList: Array<Todo>
  addTodo(event: React.FormEvent<HTMLButtonElement>): void
  clearTodo(event: React.FormEvent<HTMLButtonElement>): void
  onInputChange(index: number, { isComplete }: Todo, event: React.ChangeEvent<HTMLInputElement>): void
  onCheckBoxChange(index: number, { isComplete, description }: Todo): void
  closeMenu(event: React.FormEvent<HTMLButtonElement>): void
}

const TodoList: React.FC<IProps> = ({
  className,
  onlyComplete = false,
  todoList,
  addTodo,
  clearTodo,
  onInputChange,
  onCheckBoxChange,
  closeMenu,
}) => {
  const createTodos = () => {
    var resultList: Array<Todo> = new Array<Todo>()
    if (onlyComplete) {
      for (var i = 0; i < todoList.length; ++i) {
        if (todoList[i].isComplete) {
          resultList.push(todoList[i])
        }
      }
    } else {
      resultList = todoList
    }

    return resultList.map((item, index) => (
      <ListItem key={index} className={styles['list-item']}>
        <Input
          className={classNames(styles['list-item-left'], item.isComplete ? styles['active-middle-line'] : '')}
          placeholder='할 일을 입력해주세요.'
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

  var classProps = ''
  if (onlyComplete) {
    classProps = classNames(className, styles['complete-list'])
    return (
      <div className={classProps}>
        <Button onClick={closeMenu}>
          <div className={styles['image-wrapper']}>
            <Image src={CloseIcon} />
          </div>
        </Button>
        <List>{createTodos()}</List>
      </div>
    )
  }
  classProps = classNames(className, styles['default'])
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
      <Button className={styles['clear-button']} text='비우기' onClick={clearTodo} />
    </div>
  )
}

export default TodoList
