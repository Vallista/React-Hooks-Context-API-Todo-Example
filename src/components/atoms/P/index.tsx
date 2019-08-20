import React from 'react'
import classNames from 'classnames'

interface IProps {
  className?: string
  text: string
  size?: Size
  weight?: Weight
}

export enum Size {
  small = 14,
  regular = 16,
  large = 20,
  extraLarge = 30
}

export enum Weight {
  regular = 400,
  bold = 700,
  extraBold = 800
}

const P: React.FC<IProps> = ({ className, text, size = Size.regular, weight = Weight.regular }) => {
  const classProps = classNames(className)
  const style = {
    fontSize: size,
    fontWeight: weight
  }

  return (
    <p className={classProps} style={style}>
      {text}
    </p>
  )
}

export default P
