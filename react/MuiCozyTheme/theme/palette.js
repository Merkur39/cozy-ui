import { getCssVariableValue } from '../../utils/color'

const normalPalette = {
  type: 'light',
  primary: {
    light: getCssVariableValue('primaryLight'),
    main: getCssVariableValue('primaryMain'),
    dark: getCssVariableValue('primaryDark'),
    contrastText: getCssVariableValue('primaryContrastText')
  },
  secondary: {
    light: getCssVariableValue('secondaryLight'),
    main: getCssVariableValue('secondaryMain'),
    dark: getCssVariableValue('secondaryDark'),
    contrastText: getCssVariableValue('secondaryContrastText')
  },
  error: {
    light: getCssVariableValue('errorLight'),
    main: getCssVariableValue('errorMain'),
    dark: getCssVariableValue('errorDark'),
    contrastText: getCssVariableValue('errorContrastText')
  },
  warning: {
    light: getCssVariableValue('warningLight'),
    main: getCssVariableValue('warningMain'),
    dark: getCssVariableValue('warningDark'),
    contrastText: getCssVariableValue('warningContrastText')
  },
  success: {
    light: getCssVariableValue('successLight'),
    main: getCssVariableValue('successMain'),
    dark: getCssVariableValue('successDark'),
    contrastText: getCssVariableValue('successContrastText')
  },
  info: {
    light: getCssVariableValue('infoLight'),
    main: getCssVariableValue('infoMain'),
    dark: getCssVariableValue('infoDark'),
    contrastText: getCssVariableValue('infoContrastText')
  },
  text: {
    primary: getCssVariableValue('textPrimary'),
    secondary: getCssVariableValue('textSecondary'),
    disabled: getCssVariableValue('textDisabled'),
    hint: getCssVariableValue('textHint'),
    icon: getCssVariableValue('textIcon')
  },
  grey: {
    0: getCssVariableValue('grey0'),
    50: getCssVariableValue('grey50'),
    100: getCssVariableValue('grey100'),
    200: getCssVariableValue('grey200'),
    300: getCssVariableValue('grey300'),
    400: getCssVariableValue('grey400'),
    500: getCssVariableValue('grey500'),
    600: getCssVariableValue('grey600'),
    700: getCssVariableValue('grey700'),
    800: getCssVariableValue('grey800'),
    900: getCssVariableValue('grey900'),
    A100: getCssVariableValue('greyA100'),
    A200: getCssVariableValue('greyA200'),
    A400: getCssVariableValue('greyA400'),
    A700: getCssVariableValue('greyA700')
  },
  divider: getCssVariableValue('divider'),
  actions: {
    active: getCssVariableValue('actionsActive'),
    hover: getCssVariableValue('actionsHover'),
    selected: getCssVariableValue('actionsSelected'),
    disabled: getCssVariableValue('actionsDisabled'),
    disabledBackground: getCssVariableValue('actionsDisabledBackground'),
    focus: getCssVariableValue('actionsFocus'),
    ghost: getCssVariableValue('actionsGhost'),
    hoverGhost: getCssVariableValue('actionsHoverGhost')
  },
  border: {
    main: getCssVariableValue('borderMain'),
    disabled: getCssVariableValue('borderDisabled'),
    ghost: getCssVariableValue('borderGhost'),
    ghostDisabled: getCssVariableValue('borderGhostDisabled')
  },
  background: {
    default: getCssVariableValue('backgroundDefault'),
    paper: getCssVariableValue('backgroundPaper'),
    selected: '#F5FAFF'
  }
}

export default normalPalette
