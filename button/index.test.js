import React from 'react'
import renderer from 'react-test-renderer'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Button from './index'

configure({ adapter: new Adapter() })

describe('Testing Button component', () => {
  const submitCallback = jest.fn()

  const wrapper = shallow(<Button onPress={submitCallback} />)

  it('Renders a button with text passed as props', () => {
    expect(renderer.create(<Button title={'Hello world'} />)).toMatchSnapshot()
  })

  it('Renders a button with text passed as children', () => {
    expect(renderer.create(<Button>{'Hello world'}</Button>)).toMatchSnapshot()
  })

  it('Renders a button with custom component passed as children', () => {
    expect(
      renderer.create(
        <Button>
          <Button>{'Hello world'}</Button>
        </Button>,
      ),
    ).toMatchSnapshot()
  })

  it('calls actions as expected when clicked', () => {
    wrapper.setProps({ value: 'test' })
    wrapper
      .find('TouchableOpacity')
      .first()
      .simulate('press')
    expect(submitCallback).toBeCalledWith('test')
  })
})
