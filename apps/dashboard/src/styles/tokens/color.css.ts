import { createGlobalTheme } from '@vanilla-extract/css'

export const theme = createGlobalTheme(':root', {
  color: {
    background: {
      primary: '#ffffff',
      secondary: '#f8fafc',
      tertiary: '#f1f5f9'
    },

    text: {
      primary: '#1e293b',
      secondary: '#64748b',
      tertiary: '#94a3b8'
    },

    border: {
      light: '#f1f5f9',
      medium: '#e2e8f0',
      dark: '#cbd5e1'
    },

    primary: '#64748b',
    accent: '#3b82f6',

    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444'
  }
})
