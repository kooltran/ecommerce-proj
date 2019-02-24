import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import Text from './'

storiesOf('Conversation/UI-Kit/Text', module)
  .add(
    'Default',
    withInfo({ header: true })(() => (
      <Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.{' '}
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
    'with Heading',
    withInfo({ header: true })(() => (
      <>
        <Text isBold={true} isBlock={true}>
          Ciao
        </Text>

        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{' '}
        </Text>
      </>
    ))
  )
