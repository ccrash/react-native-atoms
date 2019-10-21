import { StyleSheet } from 'react-native'

import Color from '../../../settings/colors'
import Size from '../../../settings/sizes'

export const style = StyleSheet.create({
  outerStyle: {
    flex: 1,
    padding: Size.padding.big,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Color.grey,
    borderWidth: 1,
    borderRadius: Size.radius.regular,
    marginBottom: Size.margin.small,
    flexDirection: 'row',
  },
  innerStyle: {
    color: Color.dark,
    fontSize: 22,
    fontWeight: Size.weight.bold,
  },
  innerViewStyle: {
    flexDirection: 'row',
  },
})

export default style
