import { style, styleVariants } from '@vanilla-extract/css'
import { flexColumn, theme } from '@/styles'

export const container = style({
  ...flexColumn,
  gap: '6px',
  width: '100%'
})

export const label = style({
  fontSize: '14px',
  fontWeight: 500,
  color: theme.color.text.primary
})

export const textarea = style({
  padding: '10px 12px',
  border: `1px solid ${theme.color.border.medium}`,
  borderRadius: '6px',
  fontSize: '14px',
  backgroundColor: theme.color.background.primary,
  color: theme.color.text.primary,
  transition: 'border-color 0.2s ease',
  minHeight: '100px',
  fontFamily: 'inherit',
  resize: 'vertical',
  ':focus': {
    outline: 'none',
    borderColor: theme.color.accent
  },
  ':disabled': {
    backgroundColor: theme.color.background.secondary,
    color: theme.color.text.tertiary
  }
})

export const textareaError = style({
  borderColor: theme.color.error,
  ':focus': {
    borderColor: theme.color.error
  }
})

export const errorMessage = style({
  fontSize: '12px',
  color: theme.color.error
})

export const helperText = style({
  fontSize: '12px',
  color: theme.color.text.secondary
})
