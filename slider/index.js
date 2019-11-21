import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Slider from '@react-native-community/slider'

import styles from './style'

export default class ccSlider extends PureComponent {
  state = {
    isPlaying: false,
  }

  static defaultProps = {
    value: 0,
    minValue: 0,
    maxValue: 2,
    default: 1,
    minColor: '#FFFFFF',
    maxColor: '#000000',
    onComplete: () => {},
    onChange: () => {},
  }

  static propTypes = {
    value: PropTypes.number,
    minValue: PropTypes.number,
    maxValue: PropTypes.number,
    default: PropTypes.number,
    minColor: PropTypes.string,
    maxColor: PropTypes.string,
    onComplete: PropTypes.func,
    onChange: PropTypes.func,
  }

  render() {
    const { value, minValue, maxValue, minColor, maxColor, onComplete, onChange } = this.props
    return (
      <Slider
        style={styles.slider}
        value={value}
        minimumValue={minValue}
        maximumValue={maxValue}
        minimumTrackTintColor={minColor}
        maximumTrackTintColor={maxColor}
        onSlidingComplete={value => onComplete(value)}
        onValueChange={value => onChange(value)}
      />
    )
  }
}
