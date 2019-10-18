import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import View from '../view'
import Button from '../button'
import { Text } from 'react-native'

import styles from './style'

export default class ToggleIcon extends PureComponent {
  state ={
    currentState: true
  }

  static defaultProps = {
    default: false,
    outerStyle: null,
    innerStyle: null,

    onTrueIcon: null,
    onTrueText: 'True',
    onPressWhenTrue: () => {},
    outerStyleWhenTrue: null,
    innerStyleWhenTrue: null,

    onFalseIcon: null,
    onFalseText: 'False',
    onPressWhenFalse: () => {},
    outerStyleWhenFalse: null,
    innerStyleWhenFalse: null,
  }

  static propTypes = {
    state: PropTypes.bool,
    type: PropTypes.string,
    size: PropTypes.number,
    outerStyle: Text.propTypes.style,
    innerStyle: Text.propTypes.style,

    onTrueIcon: PropTypes.string,
    onTrueText: PropTypes.string,
    onPressWhenTrue: PropTypes.func,
    outerStyleWhenTrue: Text.propTypes.style,
    innerStyleWhenTrue: Text.propTypes.style,

    onFalseIcon: PropTypes.string,
    onFalseText: PropTypes.string,
    onPressWhenFalse: PropTypes.func,
    outerStyleWhenFalse: Text.propTypes.style,
    innerStyleWhenFalse: Text.propTypes.style,
  }

  render() {
    const {
      type,
      state,
      size,
      onTrueIcon,
      onFalseIcon,
      outerStyle,
      innerStyle,
      innerStyleWhenTrue,
      innerStyleWhenFalse,
    } = this.props
    return (
      <View style={outerStyle}>
        {state ? (
          <Icon type={type} style={innerStyleWhenTrue || innerStyle} name={onTrueIcon} size={size} />
        ) : (
          <Icon type={type} style={innerStyleWhenFalse || innerStyle} name={onFalseIcon} size={size} />
        )}
      </View>
    )
  }
}
