import React from 'react'
import classNames from 'classnames'

import styles from './style.module.css'

interface IProps {
  className?: string
  text: string
  name: string
  value: string
}

const CheckBox: React.FC<IProps> = ({ className, text, name, value }) => {
  const classProps = classNames(className, styles['default'])

  return (
    <label className={classProps}>
      <input type="checkbox" name={name} value={value} />
      <p>{text}</p>
    </label>
  )
}

export default CheckBox
