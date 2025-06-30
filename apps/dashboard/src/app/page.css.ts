import { style } from '@vanilla-extract/css'
import { flexColumn } from '@/styles/utils/layout'

export const homeContainer = style({
  ...flexColumn,
  maxWidth: '100%'
})
