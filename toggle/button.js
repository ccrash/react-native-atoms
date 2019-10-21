import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Button from '../button'
import Icon from '../icon'
import { Text } from 'react-native'

import styles from './style'

export class ToggleButton extends PureComponent {
  state ={
    currentState: true
  }

  static defaultProps = {
    defaultState: false,
    forceState: null,
    outerStyle: null,
    innerStyle: null,

    onTrueIcon: null,
    onTrueText: null,
    onPressWhenTrue: () => {},
    outerStyleWhenTrue: null,
    innerStyleWhenTrue: null,

    onFalseIcon: null,
    onFalseText: null,
    onPressWhenFalse: () => {},
    outerStyleWhenFalse: null,
    innerStyleWhenFalse: null,
  }

  static propTypes = {
    defaultState: PropTypes.bool,
    forceState: PropTypes.bool,
    type: PropTypes.string,
    size: PropTypes.number,
    outerStyle: Text.propTypes.style,
    innerStyle: Text.propTypes.style,

    onTrueIcon: PropTypes.string,
    onTrueText: PropTypes.string,
    outerStyleWhenTrue: Text.propTypes.style,
    innerStyleWhenTrue: Text.propTypes.style,
    onPressWhenTrue: PropTypes.func,

    onFalseIcon: PropTypes.string,
    onFalseText: PropTypes.string,
    outerStyleWhenFalse: Text.propTypes.style,
    innerStyleWhenFalse: Text.propTypes.style,
    onPressWhenFalse: PropTypes.func,
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
    const {onPressWhenTrue, onPressWhenFalse, forceState} = this.props
    const {currentState} = this.state
    if(forceState == null) {
      this.setState({currentState: !currentState})
    }
    return currentState ? onPressWhenTrue() : onPressWhenFalse()
  }

  render() {
    const {currentState} = this.state
    const {
      type,
      outerStyle,
      innerStyle,

      onTrueIcon,
      onTrueText,
      innerStyleWhenTrue,
      outerStyleWhenTrue,

      onFalseIcon,
      onFalseText,
      innerStyleWhenFalse,
      outerStyleWhenFalse,
    } = this.props
    const inner = [styles.buttonInnerStyle, innerStyle, currentState ? innerStyleWhenTrue : innerStyleWhenFalse]
    const outer = [styles.buttonOuterStyle, outerStyle, currentState ? outerStyleWhenTrue : outerStyleWhenFalse]
    return (
      <Button outerStyle={outer} 
              innerStyle={inner} 
              onPress={() => this.onToggle()}
              title={currentState ? onTrueText : onFalseText}>
        {
          (onTrueIcon || onFalseIcon) && 
          <Icon type={type} style={inner} name={currentState ? onTrueIcon : onFalseIcon} size={30}/>
        }
      </Button>
    )
  }
}
