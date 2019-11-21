import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text as RnText } from 'react-native'

import View from '../view'
import Text from '../text'
import Icon from '../icon'

import styles from './style'

export default class ClosableView extends Component {
  static defaultProps = {
    title: null,
    onClose: () => {},
  }

  static propTypes = {
    title: PropTypes.string,
    onClose: PropTypes.func,
    outerStyle: RnText.propTypes.style,
  }

  render() {
    const { title, outerStyle, onClose, children } = this.props
    return (
      <View style={[styles.container, outerStyle]}>
        <View style={styles.view}>
          <View style={styles.head}>
            <View style={styles.headLeft} />
            <View style={styles.headTitle}>
              <Text style={styles.h4}>{title}</Text>
            </View>
            <View style={styles.headRight}>
              <Icon style={styles.closeIcon} name={'close_circle'} size={26} onPress={() => onClose()} />
            </View>
          </View>
          <View style={styles.hr} />
          {children}
        </View>
      </View>
    )
  }
}
