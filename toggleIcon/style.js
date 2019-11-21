import { StyleSheet } from 'react-native'

import Color from '@settings/colors'
import Size from '@settings/sizes'

export const style = StyleSheet.create({
  outerStyle: {},
  innerStyle: {
    color: Color.dark,
    fontSize: 36,
    marginLeft: Size.margin.big,
  },
})

export default style
