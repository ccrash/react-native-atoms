import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

import View from '../view'

import styles from './style'

export default class CcRadioButton extends PureComponent {
  static defaultProps = {
    selected: false,
    outerStyle: styles.outerStyle,
    innerStyle: styles.innerStyle,
  }

  static propTypes = {
    selected: PropTypes.bool,
    innerStyle: Text.propTypes.style,
    outerStyle: Text.propTypes.style,
  }

  render() {
    const { selected, outerStyle, innerStyle } = this.props
    return <View style={outerStyle}>{selected ? <View style={innerStyle} /> : null}</View>
  }
}
