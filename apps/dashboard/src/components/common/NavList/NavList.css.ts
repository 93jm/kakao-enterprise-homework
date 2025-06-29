import { style } from '@vanilla-extract/css'
import { flexColumn } from '@/styles'

export const navList = style({
  ...flexColumn,
  gap: '4px',
  margin: 0,
  padding: 0
})
