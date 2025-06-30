export type ViewType = 'list' | 'card'

export const VIEW_TYPE = {
  LIST: 'list',
  CARD: 'card'
} as const

export const VIEW_TYPE_STORAGE_KEY = {
  HOME: 'home-view-type',
  SERVICE_BOARD: 'service-board-view-type'
} as const
