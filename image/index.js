import React, { PureComponent } from 'react'

import { Image } from 'react-native'

export default class CcImage extends PureComponent {
  render() {
    return <Image {...this.props} />
  }
}
