import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Slider from '@react-native-community/slider';

import styles from './style'

export default class ccSlider extends PureComponent {

  state = {
    isPlaying: false
  }

  static defaultProps = {
    minValue: 0,
    maxValue: 2,
    default: 1,
    minColor: '#FFFFFF',
    maxColor: '#000000',
    onComplete: () => {},
  }

  static propTypes = {
    minValue: PropTypes.number,
    maxValue: PropTypes.number,
    default: PropTypes.number,
    minColor: PropTypes.string,
    maxColor: PropTypes.string,
    onComplete: PropTypes.func,
  }

  render() {
    const { minValue, maxValue, minColor, maxColor, onComplete } = this.props
    return (
      <Slider
        style={styles.slider}
        minimumValue={minValue}
        maximumValue={maxValue}
        minimumTrackTintColor={minColor}
        maximumTrackTintColor={maxColor}
        onSlidingComplete={value => onComplete(value)}
      />
    )
  }
}
