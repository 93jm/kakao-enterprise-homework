import { createTheme } from '@vanilla-extract/css'
import { kakaoColors } from './contract.css'
import { theme } from '../tokens/color.css'

export const lightTheme = createTheme(kakaoColors, {
  color: {
    background: {
      primary: theme.color.background.primary,
      secondary: theme.color.background.secondary,
      tertiary: theme.color.background.tertiary
    },
    text: {
      primary: theme.color.text.primary,
      secondary: theme.color.text.secondary,
      tertiary: theme.color.text.tertiary
    },
    border: {
      light: theme.color.border.light,
      medium: theme.color.border.medium,
      dark: theme.color.border.dark
    },
    primary: theme.color.primary,
    accent: theme.color.accent,

    success: theme.color.success,
    warning: theme.color.warning,
    error: theme.color.error
  }
})
