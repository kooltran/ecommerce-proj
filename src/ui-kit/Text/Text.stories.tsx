import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions';
import Text from './Text'

storiesOf('Conversation/UI-Kit/Text', module)
  .add(
    'Default',
    withInfo({ header: true })(() => (
      <Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </Text>
    ))
  )
  .add(
    'Bold',
    withInfo({ header: true })(() => (
      <Text isBold={true}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>
    ))
  )
  .add(
    'Italic',
    withInfo({ header: true })(() => (
      <Text isItalic={true}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>
    ))
  )
  .add(
    'TextLink',
    withInfo({ header: true })(() => (
      <Text isLink={true} onClick={action('>>> TextLink')}>Lorem Ipsum is simply dummy text of the printing and typesetting
      industry.</Text>
    ))
  )
  .add(
    'Text Block',
    withInfo({ header: true })(() => (
      <>
        <Text isBlock={true}>Lorem Ipsum is simply dummy text of the printing and typesetting
      industry.</Text>
        <Text isBlock={true}>Lorem Ipsum is simply dummy text of the printing and typesetting
      industry.</Text>
      </>
    ))
  )