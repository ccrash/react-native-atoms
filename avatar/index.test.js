import React from 'react'
import renderer from 'react-test-renderer'

import Avatar from './index'

it('Renders an avatar from Name using capital letters', () => {
  expect(renderer.create(<Avatar name={'Silk Fred'} />)).toMatchSnapshot()
})

// it('Renders an avatar from Image', () => {
//   expect(renderer.create(<Avatar src={Images.defaultAvatar} />)).toMatchSnapshot()
// })
