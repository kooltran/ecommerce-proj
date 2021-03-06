import * as React from 'react'
import './ProdItem.scss'
import Text from '../Text/Text'
import ProdColorThumb from './ProdColorThumb'
import { IProdItem } from 'interfaces/prod-item'
import Slider from 'react-slick'
import { ShoeColor } from 'interfaces/shoe-color'
import classnames from 'classnames'

export interface IProdItemProps {
  prodItem: IProdItem
  hasColorThumb?: boolean
  onClick?: (e: any) => void
}

const settingThumbSlide = {
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
}

export default class ProItem extends React.Component<IProdItemProps> {
  state = {
    activeColor: this.props.prodItem.shoeColors[0],
  }

  private onHoverColor = (color: ShoeColor) => {
    this.setState({
      activeColor: color,
    })
  }

  private renderColorThumbList() {
    return this.props.prodItem.shoeColors.map(color => (
      <ProdColorThumb
        key={color.name}
        color={color}
        onHoverColor={this.onHoverColor}
      />
    ))
  }

  render() {
    return (
      <div
        className={classnames({
          prod__item: true,
          'prod__item--thumb': this.props.hasColorThumb,
        })}
      >
        <img
          className="prod__item--img"
          src={this.state.activeColor.image[0]}
          alt={this.props.prodItem.name}
        />
        <Text isBlock={true} className="prod__item--name">
          {this.props.prodItem.name}
        </Text>
        {this.props.hasColorThumb && (
          <Slider {...settingThumbSlide} className="prod__thumb">
            {this.renderColorThumbList()}
          </Slider>
        )}
        <Text isBlock={true} isBold={true} className="prod__item--price">
          {this.props.prodItem.price}
        </Text>
      </div>
    )
  }
}
