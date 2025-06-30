import { style } from '@vanilla-extract/css'
import { flexRowBetween, flexRowAlignCenter, theme } from '@/styles'

export const header = style({
  position: 'relative',
  ...flexRowBetween,
  zIndex: 100,
  padding: '0 24px',
  borderBottom: `1px solid ${theme.color.border.medium}`,
  width: '100%',
  height: '60px',
  backgroundColor: theme.color.background.primary
})

export const leftSection = style({
  ...flexRowAlignCenter,
  gap: '16px'
})

export const rightSection = style({
  ...flexRowAlignCenter,
  gap: '8px'
})

export const title = style({
  margin: 0,
  color: theme.color.text.primary,
  fontSize: '18px',
  fontWeight: 600
})

export const button = style({
  gap: 0,
  margin: 0,
  padding: '8px 16px',
  border: `1px solid ${theme.color.border.medium}`,
  borderRadius: '6px',
  backgroundColor: theme.color.background.tertiary,
  color: theme.color.text.secondary,
  fontSize: '14px',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  ':hover': {
    borderColor: theme.color.border.dark,
    backgroundColor: theme.color.border.light
  }
})
