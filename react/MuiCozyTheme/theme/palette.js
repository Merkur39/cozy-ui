import { getCssVariableValue } from '../../utils/color'

const normalPalette = {
  type: 'light',
  primary: {
    light: getCssVariableValue('primaryLight'),
    main: getCssVariableValue('primaryMain'),
    dark: getCssVariableValue('primaryDark'),
    contrastText: getCssVariableValue('primaryContrastText')
  },
  error: {
    main: getCssVariableValue('errorMain')
  },
  secondary: {
    light: getCssVariableValue('secondaryLight'),
    main: getCssVariableValue('secondaryMain'),
    dark: getCssVariableValue('secondaryDark'),
    contrastText: getCssVariableValue('secondaryContrastText')
  },
  text: {
    primary: getCssVariableValue('textPrimary'),
    secondary: getCssVariableValue('textSecondary')
  },
  grey: {
    0: getCssVariableValue('white'),
    100: getCssVariableValue('paleGrey'),
    200: getCssVariableValue('silver'),
    300: getCssVariableValue('coolGrey'),
    400: getCssVariableValue('slateGrey'),
    800: getCssVariableValue('charcoalGrey'),
    900: getCssVariableValue('black')
  },
  divider: getCssVariableValue('divider'),
  actions: {
    focus: getCssVariableValue('actionsFocus')
  }
}

normalPalette.background = {
  default: getCssVariableValue('backgroundDefault'),
  selected: '#F5FAFF'
}

export default normalPalette
