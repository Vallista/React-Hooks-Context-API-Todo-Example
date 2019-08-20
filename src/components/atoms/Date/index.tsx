import React from 'react'
import classNames from 'classnames'

import styles from './style.module.css'

interface IProps {
  className?: string
  size?: Size
}

export enum Size {
  small = 12,
  regular = 16,
  large = 20,
  extraLarge = 30
}

const date: React.FC<IProps> = ({ className, size = Size.regular }) => {
  const classProps = classNames(className, styles['default'])
  const style = {
    fontSize: size
  }

  const date = new Date()
  const dayTable = [ '일', '월', '화', '수', '목', '금', '토' ]

  return (
    <div className={classProps}>
      <span style={style} className={styles['day']}>
        {dayTable[date.getDay()]}요일,
      </span>
      <span style={style} className={styles['month']}>
        {date.getMonth() + 1}월
      </span>
      <span style={style} className={styles['date']}>
        {date.getDate()}일
      </span>
    </div>
  )
}

export default date
