import { style } from '@vanilla-extract/css'
import { theme } from '@/styles'
import { flexRowCenter } from '@/styles'

export const container = style({
  ...flexRowCenter,
  gap: '8px',
  padding: '16px 0'
})

export const button = style({
  ...flexRowCenter,
  minWidth: '32px',
  height: '32px',
  padding: '0 8px',
  border: `1px solid ${theme.color.border.medium}`,
  borderRadius: '4px',
  backgroundColor: theme.color.background.primary,
  color: theme.color.text.secondary,
  cursor: 'pointer',
  transition: 'all 0.2s',

  ':hover': {
    backgroundColor: theme.color.background.secondary
  },

  ':disabled': {
    backgroundColor: theme.color.background.tertiary,
    color: theme.color.text.tertiary,
    cursor: 'not-allowed'
  }
})

export const activeButton = style({
  backgroundColor: theme.color.accent,
  color: theme.color.background.primary,
  borderColor: theme.color.accent,

  ':hover': {
    backgroundColor: theme.color.accent
  }
})
