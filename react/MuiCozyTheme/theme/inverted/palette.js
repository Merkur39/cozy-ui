import defaultPalette from '../../../../theme/palette.json'
import { getCssVariableValue } from '../../../utils/color'
import normalPalette from '../palette'

const invertedPalette = {
  ...normalPalette,
  type: 'dark',
  background: {
    default: getCssVariableValue('primaryDark'),
    paper: getCssVariableValue('primaryMain'),
    selected: getCssVariableValue('primaryDark')
  },
  primary: {
    main: getCssVariableValue('primaryMain')
  },
  secondary: {
    main: getCssVariableValue('secondaryMain')
  },
  text: {
    primary: getCssVariableValue('textPrimary'),
    secondary: getCssVariableValue('textSecondary')
  },
  success: {
    main: getCssVariableValue('successMain')
  },
  error: {
    main: getCssVariableValue('errorMain')
  },
  divider: getCssVariableValue('divider')
}

invertedPalette.action = {
  active: getCssVariableValue('actionActive'),
  hover: getCssVariableValue('actionHover'),
  selected: getCssVariableValue('actionSelected'),
  disabled: getCssVariableValue('actionDisabled'),
  disabledBackground: getCssVariableValue('actionDisabledBackground'),
  focus: getCssVariableValue('actionFocus')
}

export default invertedPalette
