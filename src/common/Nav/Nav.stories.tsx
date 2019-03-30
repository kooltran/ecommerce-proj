import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import dataList from './data'
import Nav from './Nav'

storiesOf('Ecommerce/Common/Nav', module)
  .add(
    'Default',
    withInfo({ header: true })(() => (
      <Nav data={dataList}/>
    ))
  )