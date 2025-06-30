import { style } from '@vanilla-extract/css'
import { theme } from '@/styles'

export const cardGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '16px',
  width: '100%'
})

export const card = style({
  padding: '16px',
  borderRadius: '8px',
  backgroundColor: theme.color.background.primary,
  border: `1px solid ${theme.color.border.light}`,
  display: 'flex',
  flexDirection: 'column',
  gap: '12px'
})

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '8px'
})

export const title = style({
  fontSize: '16px',
  fontWeight: 'bold',
  color: theme.color.text.primary,
  cursor: 'pointer',
  flex: 1,
  lineHeight: '1.4',
  ':hover': {
    textDecoration: 'underline'
  }
})

export const info = style({
  fontSize: '14px',
  color: theme.color.text.secondary,
  display: 'flex',
  flexDirection: 'column',
  gap: '4px'
})

export const moreButton = style({
  padding: '6px 12px',
  borderRadius: '4px',
  backgroundColor: theme.color.background.secondary,
  color: theme.color.text.secondary,
  cursor: 'pointer',
  fontSize: '12px',
  whiteSpace: 'nowrap',
  border: 'none',
  ':hover': {
    backgroundColor: theme.color.background.tertiary
  }
})
