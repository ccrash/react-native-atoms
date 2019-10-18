import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Badge from './index'

configure({ adapter: new Adapter() })

describe('Testing Badge component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(<Badge number={0} />)
    expect(wrapper).toMatchSnapshot()
    wrapper.setProps({ number: 123 })
    expect(wrapper).toMatchSnapshot()
    wrapper.setProps({ number: -1 })
    expect(wrapper).toMatchSnapshot()
  })
})
