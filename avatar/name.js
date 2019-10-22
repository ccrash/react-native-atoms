import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Text as rnText } from 'react-native'

import View from '../view'
import Text from '../text'

import styles from './style'

export default class AvatarFromName extends PureComponent {
  static defaultProps = {
    name: 'Default Name',
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    outerStyle: rnText.propTypes.style,
    innerStyle: rnText.propTypes.style,
  }

  render() {
    const { name, outerStyle, innerStyle } = this.props
    const [firstName = '', lastName = ''] = name.trim().split(' ')
    return (
      <View style={[styles.container, outerStyle]}>
        <Text style={[styles.text, innerStyle]}>{firstName[0] + (lastName[0] ? ' ' + lastName[0] : '')}</Text>
      </View>
    )
  }
}
