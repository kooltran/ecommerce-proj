import React, { useState } from 'react';
import classnames from 'classnames'
import { useSpring, animated } from 'react-spring'
import {Icon} from 'antd';

import { useMeasure } from '../../common/helpers';

import {Text} from '../../ui-kit/Text'
import './NavItem.scss'

export interface ISubNavItemProps {
  id: string
  name: string
}

export interface INavItemProps {
  name: string
  isActive?: boolean
  subNav?: ISubNavItemProps[]
}

const NavItem: React.SFC<INavItemProps> = ({name, isActive=false, subNav=[], children}) => {

  const [isOpen, toggleOpen] = useState(false)

  const styleSubNav = classnames({
    'open': isOpen,
    'none': !isOpen
  })

  const styleLink = classnames({
    'active': isActive
  })

  const [bind, { height: viewHeight }] = useMeasure();

  const accordion = useSpring({
    height: !isOpen ? 0 : viewHeight,
    opacity: !isOpen ? 0 : 1,
    overflow: 'hidden'
  })

  const iconArrow = useSpring({
    transform: !isOpen?'rotate(0deg)':'rotate(180deg)'
  })

  const onToggle = () => toggleOpen(!isOpen);

  const renderSubNav = () => {
    return <div className='nav__sub-list' {...bind}>
      {subNav.map((item) => <div className='nav__sub-item' key={item.id}>
        <Text isLink className={`nav__link`}>{item.name}</Text>
      </div>)}
    </div>
  }

  return (
    subNav.length ? <div className='nav__item'>
      <Text isLink className={`nav__link ${styleLink}`} onClick={onToggle}>
        {name}
        <animated.div style={iconArrow} className='nav__arrow'>
          <Icon type='caret-down'/>
        </animated.div>
      </Text>
      <animated.div style={accordion}>
        {
          renderSubNav()
        }
      </animated.div>
    </div>:
    <div className='nav__item'>
      <Text isLink className={`nav__link ${styleLink}`}>{name}</Text>
    </div>
  )
}

export default NavItem