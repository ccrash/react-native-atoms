import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { ViewPropTypes } from 'react-native'

import View from '../view'
import Text from '../text'
import Image from '../image'

import styles from './style'

export default class Logo extends PureComponent {
  static defaultProps = {
    mode: 'text',
    title: 'Your logo',
  }

  static propTypes = {
    mode: PropTypes.string,
    title: PropTypes.string,
    source: PropTypes.any,
    outerStyle: ViewPropTypes.style,
    innerStyle: ViewPropTypes.style,
  }

  render() {
    const { mode, outerStyle, innerStyle, title, source } = this.props
    return (
      <View style={[styles.container, outerStyle]}>
        {mode == 'image' ? (
          <Image style={[styles.image, innerStyle]} source={source} />
        ) : (
          <Text style={[styles.text, innerStyle]}>{title}</Text>
        )}
      </View>
    )
  }
}
