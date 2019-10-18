import { Platform } from 'react-native'

const isIos = Platform.OS === 'ios'

export const IconManager = {
  close_circle: isIos ? 'ios-close-circle-outline' : 'md-close-circle-outline',
  heart: isIos ? 'ios-heart' : 'md-heart',
  heart_empty: isIos ? 'ios-heart-empty' : 'md-heart-empty',
  cart: isIos ? 'ios-cart' : 'md-cart',
  menu: isIos ? 'ios-menu' : 'md-menu',
  icon_dropdown: isIos ? 'ios-arrow-dropdown' : 'md-arrow-dropdown',
  login: isIos ? 'ios-log-in' : 'md-log-in',
  home: isIos ? 'ios-home' : 'md-home',
  heart_dislike: isIos ? 'ios-heart-dislike' : 'md-heart-dislike',
  settings: isIos ? 'ios-settings' : 'md-settings',
  logout: isIos ? 'ios-log-out' : 'md-log-out',
  basket: isIos ? 'ios-basket' : 'md-basket',
  shopping_bag: isIos ? 'ios-bag' : 'md-shopping-bag',
  close: isIos ? 'ios-close' : 'md-close',
  back: isIos ? 'ios-arrow-back' : 'md-arrow-back',
  orders: isIos ? 'ios-filing' : 'md-filing',
  facebook: isIos ? 'ios-facebook-square' : 'md-facebook-square',
}

export default IconManager
