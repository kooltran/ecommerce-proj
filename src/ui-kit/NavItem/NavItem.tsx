import React, { useState } from 'react'
import classnames from 'classnames'
import { useSpring, animated } from 'react-spring'
import { Icon } from 'antd'

import { useMeasure } from 'hooks'

import { Text } from 'ui-kit/Text'
import './NavItem.scss'

export interface INavItemProps {
  name: string
  isActive?: boolean
  hasSubNav?: boolean
}

const NavItem: React.SFC<INavItemProps> = ({
  name,
  isActive = false,
  hasSubNav = false,
  children,
}) => {
  const [isOpen, toggleOpen] = useState(false)

  const styleLink = classnames({
    active: isActive,
    'text--bold': isOpen
  })

  const [bind, { height: viewHeight }] = useMeasure()

  const accordion = useSpring({
    height: !isOpen ? 0 : viewHeight,
    opacity: !isOpen ? 0 : 1,
    overflow: 'hidden',
  })

  const iconArrow = useSpring({
    transform: !isOpen ? 'rotate(0deg)' : 'rotate(180deg)',
  })

  const onToggle = () => toggleOpen(!isOpen)

  return (
    <div className="nav__item">
      <Text isLink className={`nav__link ${styleLink}`} onClick={onToggle}>
        {name}
        {
          hasSubNav && <animated.div style={iconArrow} className="nav__arrow">
            <Icon type="caret-down" />
          </animated.div>
        }
      </Text>
      {
        hasSubNav && <animated.div style={accordion}>
          <div className="nav__sub-list" {...bind}>
          {
            children
          }
          </div>
        </animated.div>
      }
    </div>
  )
}

export default NavItem
