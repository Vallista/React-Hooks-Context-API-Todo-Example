import React from 'react'
import classNames from 'classnames'

import styles from './style.module.css'

interface IProps {
  className?: string
  value: string
  onChange(event: React.ChangeEvent<HTMLInputElement>): void
  placeholder?: string
}

const input: React.FC<IProps> = ({ className, value, onChange, placeholder = '' }) => {
  const classProps = classNames(className, styles['default'])

  return <input type="text" placeholder={placeholder} className={classProps} onChange={onChange} value={value} />
}

export default input
