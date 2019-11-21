import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { Text as RnText } from 'react-native'

import View from '../view'
import Text from '../text'
import Icon from '../icon'

import styles from './style'
export default class CollapsableView extends Component {
  static defaultProps = {
    title: '',
  }

  static propTypes = {
    title: PropTypes.string,
    outerStyle: RnText.propTypes.style,
  }

  state = {
    expanded: false,
  }

  toggleExpand = () => {
    const { expanded } = this.state
    this.setState({ expanded: !expanded })
  }

  renderIcon() {
    const { expanded } = this.state
    return expanded ? (
      <Icon type={'fa'} style={styles.icon} name={'caret-up'} size={26} />
    ) : (
      <Icon type={'fa'} style={styles.icon} name={'caret-down'} size={26} />
    )
  }

  render() {
    const { outerStyle, title, children } = this.props
    const { expanded } = this.state
    return (
      <View style={[styles.container, outerStyle]}>
        <View style={styles.headRow}>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity style={styles.toggle} onPress={() => this.toggleExpand()}>
            {this.renderIcon()}
          </TouchableOpacity>
        </View>
        <View style={styles.children}>{expanded && children}</View>
      </View>
    )
  }
}
