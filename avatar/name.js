import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { ViewPropTypes } from 'react-native'

import View from '../view'
import Text from '../text'

import styles from './style'

export default class AvatarFromName extends PureComponent {
  static defaultProps = {
    name: 'Default Name',
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    containerStyle: ViewPropTypes.style,
    textStyle: ViewPropTypes.style,
  }

  render() {
    const { name, containerStyle, textStyle } = this.props
    const [firstName = '', lastName = ''] = name.trim().split(' ')
    return (
      <View style={[styles.container, containerStyle]}>
        <Text style={[styles.text, textStyle]}>{firstName[0] + (lastName[0] ? ' ' + lastName[0] : '')}</Text>
      </View>
    )
  }
}
