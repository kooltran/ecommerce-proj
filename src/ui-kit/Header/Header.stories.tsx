import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import Header from './Header'

storiesOf('Ecommerce/UI-Kit/Header', module)
    .add(
        'Default',
        withInfo({ header: true })(() => (
            <Header />
        ))
    )