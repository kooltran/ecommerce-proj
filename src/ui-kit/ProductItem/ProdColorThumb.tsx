import * as React from 'react';
import './ProdItem.scss';
import { Link } from 'react-router-dom';
import { ShoeColor } from '../../../src/interfaces/shoe-color';

export interface IProdColorThumbProps {
    color: ShoeColor
}

const ProdColorThumb: React.SFC<IProdColorThumbProps> = ({
    color
}) => {
    return (
        <div className="prod__thumb--item">
            <img className="thumb-img" src={color.image} />
        </div>
    )
}

export default ProdColorThumb;