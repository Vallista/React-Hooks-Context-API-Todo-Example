import React from 'react'
import Header from '../components/organisms/Header/index'
import TodoContext, { ITodo } from '../store/Todo'

interface IProps {}

const HeaderContainer: React.FC<IProps> = () => {
  const todo = React.useContext<ITodo | null>(TodoContext)

  const openMenu = (event: React.FormEvent<HTMLButtonElement>): void => {
    todo && todo.actions.openMenu()
  }

  if (todo && todo.state.isOpenMenu) {
    return <div />
  }

  return todo && <Header openMenu={openMenu} />
}

export default HeaderContainer
