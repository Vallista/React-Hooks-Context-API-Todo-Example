import React from 'react'
import classNames from 'classnames'

interface IProps {
  className?: string
  text: string
  onClick(event: React.FormEvent<HTMLButtonElement>): void
}

const Button: React.FC<IProps> = ({ className, text, onClick }) => {
  const classProps = classNames(className)

  return (
    <button className={classProps} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
