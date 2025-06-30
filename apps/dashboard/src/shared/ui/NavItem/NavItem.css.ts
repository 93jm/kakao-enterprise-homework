import { style } from '@vanilla-extract/css'
import { theme } from '@/styles'

export const navItem = style({
  display: 'block',
  padding: '12px 16px',
  border: 'none',
  borderRadius: '6px',
  width: '100%',
  backgroundColor: 'transparent',
  color: theme.color.text.secondary,
  fontSize: '14px',
  fontWeight: 500,
  textDecoration: 'none',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  ':hover': {
    backgroundColor: theme.color.background.tertiary,
    color: theme.color.text.primary
  }
})

export const navItemActive = style({
  backgroundColor: theme.color.primary,
  color: theme.color.background.primary,
  ':hover': {
    backgroundColor: theme.color.text.secondary
  }
})
