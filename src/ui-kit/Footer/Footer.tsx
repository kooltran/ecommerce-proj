import React from 'react'
import classnames from 'classnames'

import {Text} from '../Text'
import {InputText} from '../Input/InputText'
import {Button} from '../Button'
import './Footer.scss'

export interface IFooterProps {
  className?: string
}

const Footer: React.SFC<IFooterProps> = ({className}) => {
  const styleFooter = classnames(className, {
    footer: true,
  })

  return (
    <div className={styleFooter}>
      <div className="footer__menu">
        <div className="footer__col">
          <Text className="footer__heading" isBold>Links</Text>
          <div className="footer__nav">
            <Text isLink isBlock className="footer__link">Search</Text>
            <Text isLink isBlock className="footer__link">About Us</Text>
          </div>
        </div>
        <div className="footer__col">
          <Text className="footer__heading" isBold>Be in the know</Text>
          <div className="footer__form">
            <Text className="footer__label" isBlock>Sign up for the latest news, offers and styles</Text>
            <div className="footer__row">
              <InputText placeHolder="Your email" /><Button isBGBtn={true}>Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
      <Text className="footer__copyright" isBlock>Copyright &copy; 2019, beautytheme</Text>
    </div>
  )
}

export default Footer