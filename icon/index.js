import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import IconManager from './iconManager'

export const CcIcon = props => {
  const { type } = props
  switch (type) {
    case 'fa':
      return <FontAwesome {...props} />
    case 'fa5':
      return <FontAwesome5 {...props} />
    default:
      return <Icon style={props.style} name={IconManager[props.name]} size={props.size} />
  }
}

export default CcIcon
