import React from 'react'
import classNames from 'classnames'

import P, { Size, Weight } from '../../atoms/P'
import Date, { Size as DateSize } from '../../atoms/Date'

import styles from './style.module.css'

interface IProps {
	className?: string
}

const Header: React.FC<IProps> = ({ className }) => {
	const classProps = classNames(className, styles['default'])

	return (
		<div className={classProps}>
			<P text='안녕하세요' size={Size.extraLarge} className={styles['title']} />
			<P text='광휘.' size={Size.extraLarge} weight={Weight.bold} className={styles['name']} />
			<Date className={styles['date']} size={DateSize.small} />
		</div>
	)
}

export default Header
