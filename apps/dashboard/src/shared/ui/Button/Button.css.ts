import { style, styleVariants } from '@vanilla-extract/css'
import { flexRowAlignCenter, theme } from '@/styles'

export const button = style({
  ...flexRowAlignCenter,
  gap: '8px',
  padding: '8px 16px',
  border: 'none',
  borderRadius: '6px',
  fontSize: '14px',
  fontWeight: 500,
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  justifyContent: 'center',
  ':focus': {
    outline: 'none'
  }
})

export const variants = styleVariants({
  primary: {
    backgroundColor: theme.color.primary,
    color: theme.color.background.primary,
    ':hover': {
      backgroundColor: theme.color.text.secondary
    }
  },
  secondary: {
    backgroundColor: theme.color.background.tertiary,
    color: theme.color.text.primary,
    border: `1px solid ${theme.color.border.medium}`,
    ':hover': {
      borderColor: theme.color.border.dark,
      backgroundColor: theme.color.border.light
    }
  },
  danger: {
    backgroundColor: theme.color.error,
    color: theme.color.background.primary,
    ':hover': {
      backgroundColor: '#dc2626'
    }
  },
  dropdown: {
    backgroundColor: theme.color.background.tertiary,
    color: theme.color.text.primary,
    border: `1px solid ${theme.color.border.medium}`,
    ':hover': {
      borderColor: theme.color.border.dark,
      backgroundColor: theme.color.border.light
    }
  }
})

export const disabled = style({
  opacity: 0.5,
  cursor: 'not-allowed'
})
