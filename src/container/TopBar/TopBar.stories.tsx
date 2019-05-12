import React from 'react'

import { storiesOf } from '@storybook/react'
import {withInfo} from '@storybook/addon-info'
import TopBar from './TopBar'

storiesOf('Ecommerce/Container/TopBar', module)
  .add(
    'Default',
    withInfo({header: true})(() => (
      <TopBar/>
    ))
  )