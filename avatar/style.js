import { StyleSheet } from 'react-native'
import { Color } from '../_settings'

export const style = StyleSheet.create({
  container: {
    backgroundColor: '#222',
    width: 40,
    height: 40,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Color.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  text: {
    color: Color.white,
  },
})

export default style
