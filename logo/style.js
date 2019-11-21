import { StyleSheet } from 'react-native'

import { Size } from '../_settings'

export const style = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
  text: {
    fontSize: Size.font.h3,
    fontWeight: '500',
    color: '#000',
    width: '100%',
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
})

export default style
