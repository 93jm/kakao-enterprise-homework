import { style } from '@vanilla-extract/css'
import { theme } from '@/styles'

export const triggerButton = style({
  padding: '6px 12px',
  borderRadius: '4px',
  backgroundColor: theme.color.background.secondary,
  color: theme.color.text.secondary,
  cursor: 'pointer',
  fontSize: '12px',
  border: 'none',
  ':hover': {
    backgroundColor: theme.color.background.tertiary
  }
})

export const menuContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px'
})

export const menuItem = style({
  width: '100%',
  padding: '8px 12px',
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  fontSize: '14px',
  textAlign: 'left',
  color: theme.color.text.secondary,
  borderRadius: '4px',
  ':hover': {
    backgroundColor: theme.color.background.secondary
  }
})
