import Color from './colors'
import Size from './sizes'

export const defaultStyle = {
  containerPaddingB: {
    padding: Size.padding.big,
    backgroundColor: Color.white,
  },
  containerPaddingS: {
    padding: Size.padding.small,
    backgroundColor: Color.white,
  },
  containerPadding: {
    padding: Size.padding.regular,
    backgroundColor: Color.white,
  },
  mainContainer: {
    padding: Size.padding.big,
    backgroundColor: Color.white,
  },
  block: {
    fontSize: Size.font.h5,
    fontWeight: Size.weight.regular,
    backgroundColor: Color.grey_lighter,
    marginBottom: Size.margin.regular,
    padding: Size.padding.regular,
  },
  borderedBlock: {
    marginBottom: Size.margin.regular,
    padding: Size.padding.regular,
    borderColor: Color.grey,
    borderRadius: 5,
    backgroundColor: Color.white,
    borderWidth: 1,
    borderRadius: Size.radius.minimal,
  },
  blockTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: Color.black,
  },
  column: {
    flexDirection: 'column',
  },
  expandedRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  centredRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  balancedRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  hr: {
    borderBottomWidth: 1,
    borderBottomColor: Color.grey_dark,
    height: 1,
    width: '100%',
    marginVertical: Size.margin.regular,
  },
  h1: {
    color: Color.dark,
    fontSize: Size.font.h1,
    fontWeight: Size.weight.regular,
  },
  h2: {
    color: Color.dark,
    fontSize: Size.font.h2,
    fontWeight: Size.weight.regular,
  },
  h3: {
    color: Color.dark,
    fontSize: Size.font.h3,
    fontWeight: Size.weight.regular,
  },
  h3b: {
    color: Color.dark,
    fontSize: Size.font.h3,
    fontWeight: Size.weight.bold,
  },
  h4: {
    color: Color.dark,
    fontSize: Size.font.h4,
    fontWeight: Size.weight.regular,
  },
  h4b: {
    color: Color.dark,
    fontSize: Size.font.h4,
    fontWeight: Size.weight.bold,
  },
  h5: {
    color: Color.dark,
    fontSize: Size.font.h5,
    fontWeight: Size.weight.regular,
  },
  h5b: {
    color: Color.dark,
    fontSize: Size.font.h5,
    fontWeight: Size.weight.bold,
  },
  h6: {
    color: Color.dark,
    fontSize: Size.font.h6,
    fontWeight: Size.weight.regular,
  },
}

export default defaultStyle
