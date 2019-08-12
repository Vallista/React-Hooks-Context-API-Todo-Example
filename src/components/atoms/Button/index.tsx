import React from 'react'
import classNames from 'classnames'

import styles from './style.module.css'

interface IProps {
  className?: string
  text: string
  onClick(event: React.FormEvent<HTMLButtonElement>): void
}

const Button: React.FC<IProps> = ({ className, text, onClick }) => {
  const classProps = classNames(className, styles['default'])

  return (
    <button className={classProps} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
