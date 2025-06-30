import { theme } from '@/styles'
import { style } from '@vanilla-extract/css'

export const container = style({
  padding: '24px',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px'
})

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
})

export const content = style({
  backgroundColor: 'white',
  padding: '24px',
  borderRadius: '8px',
  border: `1px solid ${theme.color.border.medium}`
})

export const meta = style({
  display: 'flex',
  gap: '16px',
  marginBottom: '16px',
  color: '#666',
  fontSize: '14px'
})

export const body = style({
  marginTop: '16px',
  fontSize: '16px',
  lineHeight: '1.6',
  whiteSpace: 'pre-wrap'
})

export const footer = style({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '24px'
})
