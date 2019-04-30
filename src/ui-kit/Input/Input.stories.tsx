import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import InputText from './InputText/InputText'
import InputCheckBox from './InputCheckBox/InputCheckBox'

storiesOf('Ecommerce/UI-Kit/Input', module)
  .add(
    'Input Text',
    withInfo({ header: true })(() => <InputText placeHolder="input here..." />)
  )
  .add('Input CheckBox', withInfo({ header: true })(() => <InputCheckBox />))
  .add(
    'Input CheckBox with Label',
    withInfo({ header: true })(() => <InputCheckBox checkboxLabel="checkbox" />)
  )
