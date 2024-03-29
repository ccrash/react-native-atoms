import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { ViewPropTypes } from 'react-native'

import View from '../view'

import styles from './style'

export default class CcRadioButton extends PureComponent {
  static defaultProps = {
    selected: false,
  }

  static propTypes = {
    selected: PropTypes.bool,
    innerStyle: ViewPropTypes.style,
    outerStyle: ViewPropTypes.style,
  }

  render() {
    const { selected, outerStyle, innerStyle } = this.props
    return (
      <View style={[styles.outerStyle, outerStyle]}>
        {selected ? <View style={[styles.innerStyle, innerStyle]} /> : null}
      </View>
    )
  }
}
