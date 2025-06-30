import { style } from '@vanilla-extract/css'
import { theme } from '@/styles'

export const container = style({
  position: 'relative'
})

export const dropdown = style({
  position: 'absolute',
  top: '100%',
  right: '0',
  minWidth: '120px',
  backgroundColor: theme.color.background.primary,
  border: `1px solid ${theme.color.border.medium}`,
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  marginTop: '4px',
  padding: '8px',
  zIndex: 1000
})
