import React from 'react'
import PropTypes from 'prop-types'

import View from '../view'
import Text from '../text'

import styles from './style'

export const badge = ({ number, outerStyle = styles.container, innerStyle = styles.counter }) => {
  if (number <= 0) return null

  return (
    <View style={outerStyle}>
      <Text style={innerStyle}>{number}</Text>
    </View>
  )
}

badge.propTypes = {
  number: PropTypes.number.isRequired,
}

export default badge
