import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-native-modal'
import { TouchableOpacity } from 'react-native'

import styles from './style'

export default class CcModal extends PureComponent {
  static defaultProps = {
    isVisible: false,
    children: null,
    onBackdropPress: () => {},
    onBackButtonPress: () => {},
  }

  static propTypes = {
    isVisible: PropTypes.bool,
    onBackdropPress: PropTypes.func,
    onBackButtonPress: PropTypes.func,
    children: PropTypes.any,
  }

  render() {
    const { isVisible, onBackdropPress, onBackButtonPress, children } = this.props
    return (
      <Modal isVisible={isVisible} onBackdropPress={onBackdropPress} onBackButtonPress={onBackButtonPress}>
        <TouchableOpacity style={styles.modalContainer} activeOpacity={1} onPress={onBackdropPress}>
          {children}
        </TouchableOpacity>
      </Modal>
    )
  }
}
