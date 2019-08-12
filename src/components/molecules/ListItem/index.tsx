import React from 'react'
import classNames from 'classnames'

import styles from './style.module.css'

interface IProps {
  className?: string
  children: React.ReactNode
}

const ListItem: React.FC<IProps> = ({ className, children }) => {
  const classProps = classNames(className, styles['default'])

  return <li className={classProps}>{children}</li>
}

export default ListItem
