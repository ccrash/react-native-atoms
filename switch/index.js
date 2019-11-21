import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Text as rnText, Switch as rnSwitch, Platform } from 'react-native'

import { Color } from '../_settings'

import styles from './style'

export default class Switch extends PureComponent {
  static defaultProps = {
    disabled: false,
    selected: false,
    onValueChange: () => {},
  }

  static propTypes = {
    disabled: PropTypes.bool,
    selected: PropTypes.bool,
    onValueChange: PropTypes.func,
    style: rnText.propTypes.style,
  }

  color = {
    true: Platform.OS === 'ios' ? Color.green_light : Color.gray,
    false: Color.gray,
  }

  render() {
    const { disabled, selected, onValueChange, style } = this.props
    return (
      <rnSwitch
        disabled={disabled}
        value={selected}
        style={[styles.switch, style]}
        trackColor={this.color}
        ios_backgroundColor={this.color.background}
        onValueChange={() => onValueChange()}
      />
    )
  }
}
