import { style } from '@vanilla-extract/css'
import { flexColumn, theme } from '@/styles'

export const sidebar = style({
  ...flexColumn,
  borderRight: `1px solid ${theme.color.border.medium}`,
  width: '240px',
  backgroundColor: theme.color.background.secondary
})

export const navigation = style({
  flex: 1,
  padding: '24px 16px'
})
