import { style } from '@vanilla-extract/css'
import { theme } from '@/styles'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '48px 24px',
  textAlign: 'center',
  backgroundColor: theme.color.background.secondary,
  borderRadius: '8px',
  minHeight: '300px'
})

export const icon = style({
  marginBottom: '16px',
  fontSize: '48px',
  color: theme.color.text.secondary
})

export const title = style({
  margin: 0,
  marginBottom: '8px',
  fontSize: '18px',
  fontWeight: 'bold',
  color: theme.color.text.primary
})

export const description = style({
  margin: 0,
  maxWidth: '400px',
  fontSize: '14px',
  color: theme.color.text.secondary
})