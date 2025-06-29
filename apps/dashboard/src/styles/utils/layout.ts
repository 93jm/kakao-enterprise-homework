import { ComplexStyleRule } from '@vanilla-extract/css'

export const absoluteFit: ComplexStyleRule = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
}

export const flexRow: ComplexStyleRule = {
  display: 'flex',
  flexDirection: 'row'
}

export const flexColumn: ComplexStyleRule = {
  display: 'flex',
  flexDirection: 'column'
}

export const flexRowBetween: ComplexStyleRule = {
  ...flexRow,
  justifyContent: 'space-between',
  alignItems: 'center'
}

export const flexRowAlignCenter: ComplexStyleRule = {
  ...flexRow,
  alignItems: 'center'
}

export const flexRowCenter: ComplexStyleRule = {
  ...flexRow,
  alignItems: 'center',
  justifyContent: 'center'
}

export const flexColumnCenter: ComplexStyleRule = {
  ...flexColumn,
  alignItems: 'center',
  justifyContent: 'center'
}
