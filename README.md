# @ccrash/react-native-atoms

[![npm version](https://badge.fury.io/js/%40ccrash%2Freact-native-atoms.svg)](https://badge.fury.io/js/%40ccrash%2Freact-native-atoms)
[![npm downloads](https://img.shields.io/npm/dm/%40ccrash%2Freact-native-atoms.svg?style=flat-square)](https://www.npmjs.com/package/%40ccrash%2Freact-native-atoms)

A collection of ready to use Atoms for atomic design projects in React Native

## Getting Started

### Installing

`npm install @ccrash/react-native-atoms`

or

`yarn add @ccrash/react-native-atoms`

### Basic Usage

```js
import { Text } from '@ccrash/react-native-atoms'

export const HelloWorld = () => {
    return (
        <Text style={{fontSize: 14}}>Hello World</Text>
    )
}
```

### Versioning

| Component |   React   | React Native |
| --------- | --------- | ------------ |
| >= 0.1.0  | >= 16.9.0 |  >= 0.61.0   |

# Atoms included in the module

* Avatar - An image/name based round/squared avatar element
* Badge - A notification indicator
* Button - A button element based on TouchableOpacity
* CollapsableView - A simple window with title and cross to close on corner
* Icon - Icon element
* Image - Simple image element
* Logo - An image/text based logo
* Modal - Modal view element that closes clicking outside
* RadioButton - A radio button element
* Slider - Slider elemnt redefinition
* Switch - Simple switch element redefinition
* Text - A simple text element redefined
* ToggleButton - A toggle button that changes its state on click
* ToggleIcon - A toggle icon that changes its state on click
* View - Simple view redefinition
