import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import View from '../view'
import Icon from '../icon'
import { Text } from 'react-native'

import styles from './style'

export default class ToggleIcon extends PureComponent {
  static defaultProps = {
    state: false,
    onTrueIcon: null,
    onFalseIcon: null,
    onPress: () => {},
    outerStyle: styles.outerStyle,
    innerStyle: styles.innerStyle,
  }

  static propTypes = {
    state: PropTypes.bool,
    type: PropTypes.string,
    size: PropTypes.number,
    onTrueIcon: PropTypes.string,
    onFalseIcon: PropTypes.string,
    onPress: PropTypes.func,
    outerStyle: Text.propTypes.style,
    innerStyle: Text.propTypes.style,
    innerStyleWhenTrue: Text.propTypes.style,
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
