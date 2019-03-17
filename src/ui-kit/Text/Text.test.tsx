import React from 'react'
import renderer from 'react-test-renderer'
import Text from './Text'

it('should render', () => {
  const tree = renderer.create(<Text>Lorem Ipsum is simply dummy text of the printing and typesetting
    industry.</Text>).toJSON()
  expect(tree).toMatchSnapshot()
})
