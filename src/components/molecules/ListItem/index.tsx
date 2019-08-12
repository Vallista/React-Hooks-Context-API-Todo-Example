import React from 'react'
import classNames from 'classnames'

interface IProps {
  className?: string
  children: React.ReactNode
}

const ListItem: React.FC<IProps> = ({ className, children }) => {
  const classProps = classNames(className)

  return <li className={classProps}>{children}</li>
}

export default ListItem
