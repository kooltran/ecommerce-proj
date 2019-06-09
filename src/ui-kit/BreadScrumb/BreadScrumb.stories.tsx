import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import BreadScrumb from './BreadScrumb'

storiesOf('Ecommerce/UI-Kit/BreadScrumb', module)
  .add(
    'Default',
    withInfo({ header: true })(() => (
      <BreadScrumb />
    ))
  )