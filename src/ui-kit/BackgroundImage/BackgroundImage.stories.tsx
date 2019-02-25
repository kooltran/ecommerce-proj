import React from 'react'

import { storiesOf, addDecorator } from '@storybook/react'
import BackgroundImage from './BackgroundImage'
const Logo = require('../../assets/like_icon.png')

storiesOf('Conversation/UI-Kit/Icon', module).add(
  'Background Image',
  () => (
    <BackgroundImage src={Logo} width={27} height={24} text={'text'} isBGIcon />
  ),
  {
    header: true,
  }
)
