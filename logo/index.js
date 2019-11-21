import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Text as rnText } from 'react-native'

import View from '../view'
import Text from '../text'
import Image from '../image'

import Images from '@assets/images'
import styles from './style'

export default class Logo extends PureComponent {
  static defaultProps = {
    mode: 'text',
    title: 'Your logo',
    negative: false,
  }

  static propTypes = {
    mode: PropTypes.string,
    title: PropTypes.string,
    negative: PropTypes.bool,
    outerStyle: rnText.propTypes.style,
    innerStyle: rnText.propTypes.style,
  }

  render() {
    const { mode, outerStyle, innerStyle, negative, title } = this.props
    const source = negative ? Images.logo_header_negative : Images.logo_header
    return (
      <View style={[styles.container, outerStyle]}>
        {mode == 'image' ? <Image style={style} source={source} /> : <Text style={[styles.text, innerStyle]}>{title}</Text>}
      </View>
    )
  }
}
