import React from 'react'
import classNames from 'classnames'

interface IProps {
  className?: string
  children: React.ReactNode
}

const List: React.FC<IProps> = ({ className, children }) => {
  const classProps = classNames(className)

  return <ul className={classProps}>{children}</ul>
}

export default List
