import { globalStyle } from '@vanilla-extract/css'

const inputSelector = 'input, button, select, textarea'

globalStyle('html, body', {
  fontFamily: 'Pretendard'
})

globalStyle('*', {
  boxSizing: 'border-box',
  padding: 0,
  margin: 0
})

globalStyle(inputSelector, {
  all: 'unset',
  appearance: 'none',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  background: 'none',
  border: 'none',
  outline: 'none',
  font: 'inherit',
  color: 'inherit',
  boxSizing: 'border-box'
})

globalStyle('::placeholder', {
  color: 'inherit',
  opacity: 1
})
