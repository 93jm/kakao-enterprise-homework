import { createThemeContract } from '@vanilla-extract/css'

export const kakaoColors = createThemeContract({
  color: {
    background: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    text: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    border: {
      light: null,
      medium: null,
      dark: null
    },
    primary: null,
    accent: null,

    success: null,
    warning: null,
    error: null
  }
})
