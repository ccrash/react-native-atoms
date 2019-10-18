import React, { PureComponent } from 'react'

import AvatarFromImage from './image'
import AvatarFromName from './name'

export default class Avatar extends PureComponent {
  static defaultProps = {
    src: null,
  }

  render() {
    const { src } = this.props
    return src ? <AvatarFromImage {...this.props} /> : <AvatarFromName {...this.props} />
  }
}
