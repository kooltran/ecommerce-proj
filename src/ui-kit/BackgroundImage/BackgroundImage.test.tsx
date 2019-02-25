import React from 'react'
import renderer from 'react-test-renderer'
import BackgroundImage from './BackgroundImage'

it('renders image', () => {
  const tree = renderer.create(<BackgroundImage />).toJSON()
  expect(tree).toMatchSnapshot()
})
