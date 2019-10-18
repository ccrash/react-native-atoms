import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import View from '../view'
import Image from '../image'

import styles from './style'

export default class AvatarFromImage extends PureComponent {
  static defaultProps = {
    src: null,
    imageStyle: null,
  }

  static propTypes = {
    src: PropTypes.any.isRequired,
    containerStyle: PropTypes.number,
    imageStyle: PropTypes.object,
  }

  render() {
    const { src, containerStyle, imageStyle } = this.props
    return (
      <View style={containerStyle || styles.container}>
        <Image style={imageStyle || styles.image} source={src} />
      </View>
    )
  }
}
