import React from 'react'
import classNames from 'classnames'

interface IProps {
  className?: string
  text: string
}

const P: React.FC<IProps> = ({ className, text }) => {
  const classProps = classNames(className)

  return <p className={classProps}>{text}</p>
}

export default P
