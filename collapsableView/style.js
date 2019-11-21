import { StyleSheet } from 'react-native'

import DefaultStyles from '@settings/defaultStyles'
import Color from '@settings/colors'
import Size from '@settings/sizes'

export const style = StyleSheet.create({
  ...DefaultStyles,
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Size.padding.regular,
    width: '100%',
    borderWidth: 1,
  },
  headRow: {
    ...DefaultStyles.expandedRow,
  },
  title: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {},
})

export default style
