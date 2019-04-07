import * as React from 'react';
import './ProdItem.scss';
import Text from '../Text/Text';
import ProdColorThumb from './ProdColorThumb';
import { IProdItem } from '../../../src/interfaces/prod-item';
import Slider from 'react-slick';

export interface IProdItemProps {
    prodItem: IProdItem;
    hasColorThumb?: boolean;
    onClick?: (e: any) => void;
}

const settingThumbSlide = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true
};

export default class ProItem extends React.Component<IProdItemProps> {

    renderColorThumbList() {
        return this.props.prodItem.shoeColors.map(color => <ProdColorThumb color={color} />)
    }

    render() {
        return (
            <div className="prod__item">
                <img className="prod__item--img" src={this.props.prodItem.shoeColors[0].image} alt={this.props.prodItem.name} />
                {
                    this.props.hasColorThumb &&
                    <Slider {...settingThumbSlide}>
                        {this.renderColorThumbList()}
                    </Slider>
                }
                <Text isBlock={true} className="prod__item--name">{this.props.prodItem.name}</Text>
                <Text isBlock={true} isBold={true} className="prod__item--price">{this.props.prodItem.price}</Text>
            </div>
        )
    }
}