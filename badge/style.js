import { StyleSheet } from 'react-native'

import Color from '../../../settings/colors'
import Size from '../../../settings/sizes'

export const style = StyleSheet.create({
  container: {
    paddingVertical: Size.padding.small,
    paddingHorizontal: Size.padding.regular,
    backgroundColor: Color.badge,
    borderRadius: 15,
    marginRight: Size.margin.regular,
  },
  counter: {
    fontSize: 10,
    fontWeight: Size.weight.bold,
    color: Color.white,
  },
})

export default style