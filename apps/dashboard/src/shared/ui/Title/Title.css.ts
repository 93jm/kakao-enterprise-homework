import { style } from '@vanilla-extract/css'
import { theme } from '@/styles/tokens/color.css'

export const Title = style({
  fontSize: '24px',
  fontWeight: 600,
  color: theme.color.text.primary
})
