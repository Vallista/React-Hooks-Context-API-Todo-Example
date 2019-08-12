import React from 'react'
import classNames from 'classnames'

import styles from './style.module.css'

interface IProps {
  className?: string
  children: React.ReactNode
}

const List: React.FC<IProps> = ({ className, children }) => {
  const classProps = classNames(className, styles['default'])

  return <ul className={classProps}>{children}</ul>
}

export default List
