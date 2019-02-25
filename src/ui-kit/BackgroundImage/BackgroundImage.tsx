import * as React from 'react'
import classnames from 'classnames'

import './BackgroundImage.scss'

export interface IBackgroundImageProps {
  className?: string
  src: string
  width?: number
  height?: number
  text?: string
}

const BackgroundImage: React.SFC<IBackgroundImageProps> = ({
  className,
  src,
  width = 20,
  height = 20,
  text,
}) => {
  const styleBackgroundImage = classnames(className, {
    bg: true,
  })

  return (
    <span
      style={{ backgroundImage: `url(${src})`, width: width, height: height }}
      className={styleBackgroundImage}
    >
      {text}
    </span>
  )
}

export default BackgroundImage
BackgroundImage.displayName = 'BackgroundImage'
