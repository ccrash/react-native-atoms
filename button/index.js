import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { Text, TouchableOpacity } from 'react-native'
import CcText from '../text'
import View from '../view'

import styles from './style'

export default class CcButton extends PureComponent {
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
    innerStyle: Text.propTypes.style,
    outerStyle: Text.propTypes.style,
  }

  render() {
    const { value, title, onPress, children, innerStyle, outerStyle } = this.props
    return (
      <TouchableOpacity style={[styles.outerStyle, outerStyle]} activeOpacity={0.5} onPress={() => onPress(value)}>
        {title ? (
          <View style={styles.innerViewStyle}>
            {children}
            <CcText style={[styles.innerStyle, innerStyle]}>{title}</CcText>
          </View>
        ) : (
          children
        )}
      </TouchableOpacity>
    )
  }
}
