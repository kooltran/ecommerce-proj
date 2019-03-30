import React from 'react';
import classnames from 'classnames'

import {Text} from '../../ui-kit/Text'
import './Nav.scss'

export interface INavItem {
  page: string
  isActive: boolean
}

export interface INavProps {
  className?: string
  data: Array<INavItem>
}



const Nav: React.SFC<INavProps> = ({className, data}) => {
  const styleNav = classnames(className, {
    nav: true
  })

  return (
    <nav className={styleNav}>
      <ul>
        {
          data.map(item => {
            const styleItem = classnames(className, {
              selected: item.isActive
            })
            return <li className={styleItem}><Text isLink>{item.page}</Text></li>
          })
        }
      </ul>
    </nav>
  )
}

export default Nav