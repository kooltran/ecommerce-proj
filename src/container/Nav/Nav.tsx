import React, { useState } from 'react';
import classnames from 'classnames'

import data from './data'
import {NavItem} from '../../ui-kit/NavItem'
import './Nav.scss'

export interface INavProps {
  className?: string
}

const Nav: React.SFC<INavProps> = ({className}) => {
  const styleNav = classnames(className, {
    nav: true
  })

  return (
    <nav className={styleNav}>
      <div className="nav__list">
        <NavItem name="home" isActive/>
        <NavItem name="catalog" subNav={data}/>
        <NavItem name="example" subNav={data}/>
        <NavItem name="blog"/>
        <NavItem name="about us"/>
      </div>
    </nav>
  )
}

export default Nav