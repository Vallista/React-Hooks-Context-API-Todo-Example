import React from 'react'
import classNames from 'classnames'

import styles from './style.module.css'

interface IProps {
  className?: string
  type?: Type
  src: string
}

export enum Type {
  background = 'background',
  img = 'img'
}

const image: React.FC<IProps> = ({ className, src, type = Type.img }) => {
  const classProps = classNames(className, styles['default'], styles[type])

  return type === Type.img ? (
    <img className={classProps} src={src} />
  ) : (
    <div className={classProps} style={{ backgroundImage: `url(${src})` }} />
  )
}

export default image
