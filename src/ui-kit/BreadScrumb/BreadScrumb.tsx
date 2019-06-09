import React from 'react'
import classnames from 'classnames'
import { Icon } from 'antd'

import data from './data'
import {Text} from '../Text'
import './BreadScrumb.scss'

export interface IBreadScrumbProps {
  className?: string
}

const Nav: React.SFC<IBreadScrumbProps> = ({ className }) => {
  const styleNav = classnames(className, {
    breadscrumb: true,
  })

  return (
    <nav className={styleNav}>
      {
        data.map((link, index) => <Text key={link.id} isLink>{link.pageName}
          {index < (data.length-1) && <Icon className="breadscrumb__arrow" type="right" style={{fontSize: '8px', verticalAlign: 'middle'}} />}
        </Text>)
      }
    </nav>
  )
}

export default Nav
