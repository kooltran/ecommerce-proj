import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { prodItemData } from './ProdItem.data'
import ProdItem from './ProdItem'


storiesOf('Ecommerce/UI-Kit/ProductItem', module)
    .add(
        'default',
        withInfo({ header: true })(() => (
            <ProdItem prodItem={prodItemData} />
        ))
    )
    .add(
        'with color thumblist',
        withInfo({ header: true })(() => (
            <ProdItem prodItem={prodItemData} hasColorThumb={true} />
        ))
    )