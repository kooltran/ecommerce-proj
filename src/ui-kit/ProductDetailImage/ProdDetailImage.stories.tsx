import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'
import { prodItemData } from '../ProductItem/ProdItem.data'
import ProdDetailImage from './ProdDetailImage'

storiesOf('Ecommerce/UI-Kit/ProductDetailImage', module).add(
  'default',
  withInfo({ header: true })(() => (
    <ProdDetailImage prodDetailItem={prodItemData} />
  ))
)
