import React from 'react'
import classNames from 'classnames'

interface IProps {
  className?: string
  text: string
  name: string
  value: string
}

const RadioButton: React.FC<IProps> = ({ className, text, name, value }) => {
  const classProps = classNames(className)

  return (
    <label className={classProps}>
      <input type="radio" name={name} value={value} />
      <p>{text}</p>
    </label>
  )
}

export default RadioButton
