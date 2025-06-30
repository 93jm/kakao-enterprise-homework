import { style } from '@vanilla-extract/css'
import { theme } from '@/styles/tokens/color.css'

export const Title = style({
  margin: '0 0 24px 0',
  fontSize: '24px',
  fontWeight: 600,
  color: theme.color.text.primary
})
