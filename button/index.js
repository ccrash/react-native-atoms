import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { Text as rnText, TouchableOpacity } from 'react-native'
import Text from '../text'
import View from '../view'

import styles from './style'

export default class Button extends PureComponent {
  static defaultProps = {
    title: null,
    value: null,
    children: null,
    outerStyle: styles.outerStyle,
    innerStyle: styles.innerStyle,
    onPress: value => {},
  }

  static propTypes = {
    title: PropTypes.any,
    value: PropTypes.any,
    onPress: PropTypes.func,
    children: PropTypes.any,
    innerStyle: rnText.propTypes.style,
    outerStyle: rnText.propTypes.style,
  }

  render() {
    const { value, title, onPress, children, innerStyle, outerStyle } = this.props
    return (
      <TouchableOpacity style={outerStyle} activeOpacity={0.5} onPress={() => onPress(value)}>
        {title ? (
          <View style={styles.innerViewStyle}>
            {children}
            <Text style={innerStyle}>{title}</Text>
          </View>
        ) : (
          children
        )}
      </TouchableOpacity>
    )
  }
}
