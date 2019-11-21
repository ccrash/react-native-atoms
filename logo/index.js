import React, { PureComponent } from 'react'

import View from '../view'
import Text from '../text'
import Image from '../image'

import Images from '@assets/images'
import styles from './style'

export default class Logo extends PureComponent {
  static defaultProps = {
    mode: 'text',
    style: styles.silkfred,
    negative: false,
  }

  render() {
    const { mode, style, negative } = this.props
    const source = negative ? Images.logo_header_negative : Images.logo_header
    return (
      <View style={styles.container}>
        {mode == 'image' ? <Image style={style} source={source} /> : <Text style={style}>SilkFred</Text>}
      </View>
    )
  }
}
