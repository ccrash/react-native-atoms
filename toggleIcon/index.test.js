import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import ToggleIcon from './index'

configure({ adapter: new Adapter() })

describe('Testing ToggleIcon component', () => {
  const pressCallback = jest.fn()

  const wrapper = shallow(<ToggleIcon onPress={pressCallback} onTrueIcon={'heart'} onFalseIcon={'heart_empty'} />)

  it('Renders a ToggleIcon as expected', () => {
    wrapper.setProps({ state: true })
    expect(wrapper).toMatchSnapshot()
    wrapper.setProps({ state: false })
    expect(wrapper).toMatchSnapshot()
  })
})
