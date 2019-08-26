import React from 'react'
import classNames from 'classnames'

import P, { Size, Weight } from '../../atoms/P'
import Date, { Size as DateSize } from '../../atoms/Date'

import styles from './style.module.css'
import Button from '../../atoms/Button'
import Image from '../../atoms/Image'

import MenuIcon from '../../../assets/icons/menu-button.svg'

interface IProps {
  className?: string
  openMenu(event: React.FormEvent<HTMLButtonElement>): void
}

const Header: React.FC<IProps> = ({ className, openMenu }) => {
  const classProps = classNames(className, styles['default'])

  return (
    <div className={classProps}>
      <Button className={styles['menu-button']} onClick={openMenu}>
        <Image className={styles['menu-icon']} src={MenuIcon} />
      </Button>
      <div className={styles['text-area']}>
        <P text='안녕하세요' size={Size.extraLarge} className={styles['title']} />
        <P text='광휘.' size={Size.extraLarge} weight={Weight.bold} className={styles['name']} />
        <Date className={styles['date']} size={DateSize.small} />
      </div>
    </div>
  )
}

export default Header
