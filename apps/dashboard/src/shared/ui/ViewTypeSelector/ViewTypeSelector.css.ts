import { style } from '@vanilla-extract/css'
import { theme } from '@/styles'

export const container = style({
  position: 'relative'
})

export const dropdown = style({
  position: 'absolute',
  top: '100%',
  right: '0',
  width: '160px',
  backgroundColor: theme.color.background.primary,
  border: `1px solid ${theme.color.border.medium}`,
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  marginTop: '4px',
  padding: '8px',
  zIndex: 1000
})

export const option = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  padding: '8px 12px',
  cursor: 'pointer',
  borderRadius: '4px',
  color: theme.color.text.secondary,

  ':hover': {
    backgroundColor: theme.color.background.secondary
  }
})

export const radioCircle = style({
  width: '16px',
  height: '16px',
  borderRadius: '50%',
  border: `2px solid ${theme.color.border.medium}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export const radioSelected = style({
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  backgroundColor: theme.color.accent
})
