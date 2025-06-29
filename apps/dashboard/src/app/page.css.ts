import { style } from '@vanilla-extract/css'
import { flexColumn } from '@/styles/utils/layout'
import { theme } from '@/styles/tokens/color.css'

export const homeContainer = style({
  ...flexColumn,
  maxWidth: '100%'
})

export const homeTitle = style({
  margin: '0 0 24px 0',
  fontSize: '24px',
  fontWeight: 600,
  color: theme.color.text.primary
})
