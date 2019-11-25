import React, { PureComponent } from 'react'

import { Text } from 'react-native'

export default class ccText extends PureComponent {
  render() {
    const { children } = this.props
    return <Text {...this.props}>{children}</Text>
  }
}
