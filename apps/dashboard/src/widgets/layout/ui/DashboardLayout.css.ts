import { style } from '@vanilla-extract/css'
import { flexColumn, flexRow, theme } from '@/styles'

export const layoutContainer = style({
  ...flexColumn,
  height: '100vh',
  overflow: 'hidden'
})

export const mainContent = style({
  ...flexRow,
  flex: 1,
  overflow: 'hidden'
})

export const contentWrapper = style({
  flex: 1,
  overflow: 'auto',
  backgroundColor: theme.color.background.primary
})

export const content = style({
  padding: '24px',
  minHeight: '100%'
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
