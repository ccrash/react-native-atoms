import React, { PureComponent } from 'react'

import { Text as rnText } from 'react-native'

export default class Text extends PureComponent {
  render() {
    const { children } = this.props
    return <rnText {...this.props}>{children}</rnText>
  }
}
