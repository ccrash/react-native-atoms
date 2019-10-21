import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import View from '../view'
import Icon from '../icon'
import { Text } from 'react-native'

import styles from './style'

export class ToggleIcon extends PureComponent {
  state ={
    currentState: true
  }

  static defaultProps = {
    defaultState: false,
    forceState: null,
    onTrueIcon: null,
    onFalseIcon: null,
    onPress: () => {},
    outerStyle: styles.outerStyle,
    innerStyle: styles.innerStyle,
  }

  static propTypes = {
    defaultState: PropTypes.bool,
    forceState: PropTypes.bool,
    type: PropTypes.string,
    size: PropTypes.number,
    onTrueIcon: PropTypes.string,
    onFalseIcon: PropTypes.string,
    onPress: PropTypes.func,
    outerStyle: Text.propTypes.style,
    innerStyle: Text.propTypes.style,
    innerStyleWhenTrue: Text.propTypes.style,
    innerStyleWhenFalse: Text.propTypes.style,
  }

  componentDidMount() {
    const {defaultState, forceState} = this.props
    if(forceState != null) {
      this.setState({currentState: forceState})
    } else {
      this.setState({currentState: defaultState})
    }
  }

  componentDidUpdate(prevProps) {
    const { forceState } = this.props
    if (forceState != prevProps.forceState) {
      this.setState({currentState: forceState})
    }
  }

  onToggle = () => {
    if(forceState != null) {
      const {currentState} = this.state
      const {onPressWhenTrue, onPressWhenFalse} = this.props
      this.setState({currentState: !currentState})
      return currentState ? onPressWhenTrue() : onPressWhenFalse()
    }
  }

  render() {
    const {currentState} = this.state
    const {
      type,
      size,
      onTrueIcon,
      onFalseIcon,
      outerStyle,
      innerStyle,
      innerStyleWhenTrue,
      innerStyleWhenFalse,
    } = this.props
    return (
      <View style={outerStyle}>
        {currentState ? (
          <Icon type={type} style={innerStyleWhenTrue || innerStyle} name={onTrueIcon} size={size} />
        ) : (
          <Icon type={type} style={innerStyleWhenFalse || innerStyle} name={onFalseIcon} size={size} />
        )}
      </View>
    )
  }
}
