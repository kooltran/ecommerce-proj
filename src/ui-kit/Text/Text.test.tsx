import React from 'react'
import renderer from 'react-test-renderer'
import Text from './'

it('renders button', () => {
  const tree = renderer.create(<Text>Test</Text>).toJSON()
  expect(tree).toMatchSnapshot()
})
