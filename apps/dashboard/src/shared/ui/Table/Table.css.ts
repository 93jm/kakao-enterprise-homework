import { style } from '@vanilla-extract/css'
import { theme } from '@/styles'

export const table = style({
  width: '100%',
  borderCollapse: 'collapse'
})

export const thead = style({
  backgroundColor: theme.color.background.secondary
})

export const th = style({
  padding: '12px 16px',
  textAlign: 'left',
  borderBottom: `1px solid ${theme.color.border.medium}`,
  color: theme.color.text.primary
})

export const td = style({
  padding: '12px 16px',
  borderBottom: `1px solid ${theme.color.border.light}`,
  color: theme.color.text.secondary
})

export const tr = style({
  backgroundColor: theme.color.background.primary
})
