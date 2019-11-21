import { StyleSheet } from 'react-native'

import { Color, Size } from '../_settings'

export const style = StyleSheet.create({
  outerStyle: {
    height: 24,
    width: 24,
    borderRadius: Size.radius.regular,
    borderWidth: 2,
    borderColor: Color.grey_dark,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerStyle: {
    height: 12,
    width: 12,
    borderRadius: Size.radius.small,
    backgroundColor: Color.green,
  },
})

export default style
