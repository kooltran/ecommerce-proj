import * as React from 'react'
import './ProdItem.scss'
import { ShoeColor } from 'interfaces/shoe-color'

export interface IProdColorThumbProps {
  color: ShoeColor
  onHoverColor: (a: any) => void
}

const ProdColorThumb: React.SFC<IProdColorThumbProps> = ({
  color,
  onHoverColor,
}) => {
  const handleHoverColor = (shoeColor: ShoeColor) => {
    onHoverColor(shoeColor)
  }

  return (
    <div
      className="prod__thumb--item"
      onMouseEnter={() => handleHoverColor(color)}
    >
      <img className="thumb-img" src={color.image[0]} />
    </div>
  )
}

export default ProdColorThumb
