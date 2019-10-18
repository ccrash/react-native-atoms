import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import View from '../view'
import Text from '../text'

import styles from './style'

export default class AvatarFromName extends PureComponent {
  static defaultProps = {
    name: 'Silk Fred',
    containerStyle: styles.container,
    textStyle: styles.text,
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    containerStyle: PropTypes.any,
    textStyle: PropTypes.any,
  }

  render() {
    const { name, containerStyle, textStyle } = this.props
    const [firstName = '', lastName = ''] = name.trim().split(' ')
    return (
      <View style={containerStyle}>
        <Text style={textStyle}>{firstName[0] + (lastName[0] ? ' ' + lastName[0] : '')}</Text>
      </View>
    )
  }
}
