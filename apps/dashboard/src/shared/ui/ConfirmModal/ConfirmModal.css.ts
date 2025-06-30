import { style } from '@vanilla-extract/css'

export const container = style({
  padding: '24px',
  minWidth: '320px'
})

export const title = style({
  marginBottom: '8px',
  fontSize: '18px',
  fontWeight: '600'
})

export const message = style({
  marginBottom: '32px',
  color: '#666',
  fontSize: '14px',
  lineHeight: '1.5'
})

export const buttonContainer = style({
  display: 'flex',
  gap: '8px',
  justifyContent: 'flex-end'
})
