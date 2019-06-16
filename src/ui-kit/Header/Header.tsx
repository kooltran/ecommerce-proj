import React from 'react'
import classnames from 'classnames'

import { Text } from '../Text'
import { InputText } from '../Input/InputText'
import { Button } from '../Button'
import Icon from 'antd/lib/icon'
import './Header.scss'

export interface IFooterProps {
  className?: string
}

const Header: React.SFC<IFooterProps> = () => {
  return (
    <div className="header">
      <div className="header-search">
        <Icon className="icon-search" type="search" />
        <InputText placeHolder="Search..." />
      </div>
      <div className="header-cart-checkout">
        <div className="header-cart">
          <Icon className="icon-cart" type="shopping-cart" />
          <span className="text-cart">Cart (0)</span>
        </div>
        <div className="header-checkout">checkout</div>
      </div>
    </div>
  )
}

export default Header
