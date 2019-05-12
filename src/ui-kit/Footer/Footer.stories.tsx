import React from 'react'

import {storiesOf} from '@storybook/react'
import {withInfo} from '@storybook/addon-info'
import Footer from './Footer'

storiesOf('Ecommerce/UI-Kit/Footer', module)
  .add(
    'Default',
    withInfo({header: true})(() => (
      <Footer />
    ))
  )