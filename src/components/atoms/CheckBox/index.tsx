import React from 'react'
import classNames from 'classnames'

import styles from './style.module.css'

interface IProps {
  className?: string
  value: boolean
  onClick(event: React.MouseEvent<HTMLInputElement>): void
}

const CheckBox: React.FC<IProps> = ({ className, value, onClick }) => {
  const classProps = classNames(className, styles['default'])
  const checkAnims = classNames(styles['check'], value ? styles['active'] : '')

  const handleClick = (event: React.MouseEvent<HTMLInputElement>): void => {
    onClick(event)
  }

  return (
    <div className={classProps} onClick={handleClick}>
      <div className={checkAnims}>
        <div className={styles['check-left']} />
        <div className={styles['check-right']} />
      </div>
    </div>
  )
}

export default CheckBox
