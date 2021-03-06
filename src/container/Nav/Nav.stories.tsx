import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import Nav from './Nav'

storiesOf('Ecommerce/Container/Nav', module)
  .add(
    'Default',
    withInfo({ header: true })(() => (
      <Nav />
    ))
  )