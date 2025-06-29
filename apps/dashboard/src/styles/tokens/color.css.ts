import { createGlobalTheme } from '@vanilla-extract/css'

export const theme = createGlobalTheme(':root', {
  color: {
    // 배경
    background: {
      primary: '#ffffff',
      secondary: '#f8fafc',
      tertiary: '#f1f5f9'
    },

    // 텍스트
    text: {
      primary: '#1e293b',
      secondary: '#64748b',
      tertiary: '#94a3b8'
    },

    // 보더
    border: {
      light: '#f1f5f9',
      medium: '#e2e8f0',
      dark: '#cbd5e1'
    },

    //메인 컬러
    primary: '#64748b',
    accent: '#3b82f6',

    // 상태
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444'
  }
})
