import * as React from 'react'
import './ProdDetailImage.scss'
import { IProdItem } from '../../interfaces/prod-item'
import Slider from 'react-slick'

export interface IProdDetailProps {
  prodDetailItem: IProdItem
}

export interface IProdDetailState {
  mainNav: any
  thumbNav: any
}

export default class ProdDetailImage extends React.Component<
  IProdDetailProps,
  IProdDetailState
> {
  private mainSlider = React.createRef<Slider>()
  private thumbSlider = React.createRef<Slider>()

  constructor(props: any) {
    super(props)

    this.state = {
      mainNav: null,
      thumbNav: null,
    }
  }

  componentDidMount() {
    this.setState({
      mainNav: this.mainSlider.current,
      thumbNav: this.thumbSlider.current,
    })
  }

  renderImageList() {
    return this.props.prodDetailItem.shoeColors[0].image.map(
      (imgItem, index) => {
        return (
          <div key={index} className="prod__detail--image--item">
            <img className="detail-image" src={imgItem} alt={imgItem} />
          </div>
        )
      }
    )
  }

  render() {
    console.log(this.state, 'state')
    return (
      <div className="prod__detail--wrapper">
        <Slider
          className="prod__detail--main-list"
          asNavFor={this.state.thumbNav}
          ref={this.mainSlider}
        >
          {this.renderImageList()}
        </Slider>
        <Slider
          className="prod__detail--thumb-list"
          asNavFor={this.state.mainNav}
          ref={this.thumbSlider}
          slidesToShow={4}
          infinite={true}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          {this.renderImageList()}
        </Slider>
      </div>
    )
  }
}
