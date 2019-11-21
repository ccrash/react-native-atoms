import { StyleSheet } from 'react-native'

import { DefaultStyles, Color, Size } from '../_settings'

export const style = StyleSheet.create({
  ...DefaultStyles,
  container: {
    ...DefaultStyles.centredRow,
    flex: 1,
  },
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Size.padding.big,
    width: 200,
    backgroundColor: Color.white,
    borderRadius: Size.radius.big,
  },
  head: {
    ...DefaultStyles.expandedRow,
  },
  headLeft: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headTitle: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headRight: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default style
