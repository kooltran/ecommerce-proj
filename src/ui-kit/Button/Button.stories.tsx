import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions';
import MainButton from './Button'

storiesOf('Ecommerce/UI-Kit/Button', module)
    .add(
        'Default',
        withInfo({ header: true })(() => (
            <MainButton onClick={action('Button Clicked!!!')}>Test</MainButton>
        ))
    )
    .add(
        'Background Button',
        withInfo({ header: true })(() => (
            <MainButton isBGBtn={true} onClick={action('Button Clicked!!!')}>Background</MainButton>
        ))
    )
    .add(
        'Outline Button',
        withInfo({ header: true })(() => (
            <MainButton isBtnOutline={true} onClick={action('Button Clicked!!!')}>Background</MainButton>
        ))
    )
    .add(
        'Large Button',
        withInfo({ header: true })(() => (
            <MainButton size="large" isBGBtn={true} onClick={action('Button Clicked!!!')}>Background</MainButton>
        ))
    )
    .add(
        'Loading Button',
        withInfo({ header: true })(() => (
            <MainButton size="large" loading={true} isBGBtn={true} onClick={action('Button Clicked!!!')}>Background</MainButton>
        ))
    )
    .add(
        'Icon Button',
        withInfo({ header: true })(() => (
            <MainButton size="large" iconType="shop" isBGBtn={true} onClick={action('Button Clicked!!!')}>Background</MainButton>
        ))
    )

