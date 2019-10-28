import React from 'react'
import classnames from 'classnames'
import {Icon} from 'antd'

import data from './data'
import { NavItem } from 'ui-kit/NavItem'
import './Nav.scss'

export interface INavProps {
  className?: string
}

const Nav: React.SFC<INavProps> = ({ className }) => {
  const styleNav = classnames(className, {
    nav: true,
  })

  return (
    <nav className={styleNav}>
      <div className="nav__menu">
        <Icon type="menu" style={{ fontSize: '20px' }} />
      </div>
      <div className="nav__list">
        <NavItem name="home" isActive />
        <NavItem name="catalog" hasSubNav={Boolean(data.length)}>
          {
            data.map(item => <NavItem name={item.name} key={item.id} hasSubNav={Boolean(item.subData.length)}>
              {
                item.subData.map(itemX => <NavItem name={itemX.name} key={itemX.id}/>)
              }
            </NavItem>)
          }
        </NavItem>
        <NavItem name="blog" />
        <NavItem name="about us" />
      </div>
    </nav>
  )
}

export default Nav
