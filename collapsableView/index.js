import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text as RnText } from 'react-native'

import View from '../../atom/view'
import Text from '../../atom/text'
import Icon from '../../atom/icon'

import styles from './style'

export default class CollapsableView extends Component {
  static defaultProps = {
    title: null,
    onClose: () => {},
    outerStyle: styles.outerStyle,
  }

  static propTypes = {
    title: PropTypes.string,
    onClose: PropTypes.func,
    outerStyle: RnText.propTypes.style,
  }

  render() {
    const { title, onClose, children } = this.props
    return (
      <View style={{ ...styles.centredRow, flex: 1 }}>
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
