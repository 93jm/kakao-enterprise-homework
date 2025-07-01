import { style } from '@vanilla-extract/css'
import { flexColumn, flexRowCenter } from '@/styles'
import { theme } from '@/styles/tokens/color.css'

export const container = style({
  ...flexRowCenter,
  minHeight: '60vh',
  padding: '48px 24px',
  textAlign: 'center'
})

export const content = style({
  ...flexColumn,
  alignItems: 'center',
  gap: '24px',
  maxWidth: '480px'
})

export const subtitle = style({
  fontSize: '24px',
  fontWeight: '600',
  color: theme.color.text.primary,
  margin: 0
})

export const description = style({
  fontSize: '16px',
  color: theme.color.text.secondary,
  lineHeight: '1.6',
  margin: 0
})

export const actions = style({
  display: 'flex',
  gap: '16px',
  marginTop: '16px'
}) 