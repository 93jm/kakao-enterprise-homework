import { style } from '@vanilla-extract/css'
import { flexColumn } from '@/styles'

export const homeContainer = style({
  ...flexColumn,
  gap: '24px',
  padding: '24px',
})

export const imageGrid = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '16px',
  width: '100%',
})

export const imageWrapper = style({
  position: 'relative',
  borderRadius: '8px',
  overflow: 'hidden',
  aspectRatio: '16 / 9',
})
