import React from 'react'
import {Icon} from 'antd'

import {InputText} from '../../ui-kit/Input/InputText';
import {Text} from '../../ui-kit/Text';
import './TopBar.scss'

export interface ITopBarProps {
  className?: string
}

const TopBar: React.SFC<ITopBarProps> = ({className}) => {
  return (
    <div className="topbar">
      <div className="topbar__seach"><Icon type="search" style={{fontSize: '18px'}}/><InputText placeHolder="Search" /></div>
      <div className="topbar__payment">
        <div className="cart">
          <Icon type="shopping-cart" style={{fontSize: '18px'}}/>
          <Text isLink className="cart__text">Cart (0)</Text>
        </div>
        <div className="checkout">
          <Text isLink>Check Out</Text>
        </div>
      </div>
    </div>
  )
}

export default TopBar