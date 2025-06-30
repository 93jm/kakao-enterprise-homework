import { create } from 'zustand'
import { storage } from '@/shared/utils/storage'
import { VIEW_TYPE, VIEW_TYPE_STORAGE_KEY, type ViewType } from '@/shared/ui/ViewTypeSelector/types'

interface ViewTypeState {
  home: ViewType
  serviceBoard: ViewType
  setViewType: (page: 'home' | 'serviceBoard', type: ViewType) => void
}

const initializeStorage = (key: string, defaultValue: ViewType): ViewType => {
  const storedValue = storage.getItem(key)
  if (!storedValue) {
    storage.setItem(key, defaultValue)
  }
  return storage.getItem(key, defaultValue) as ViewType
}

export const useViewTypeStore = create<ViewTypeState>(set => ({
  //localstorage 초기화가 필요합니다.
  home: initializeStorage(VIEW_TYPE_STORAGE_KEY.HOME, VIEW_TYPE.LIST),
  serviceBoard: initializeStorage(VIEW_TYPE_STORAGE_KEY.SERVICE_BOARD, VIEW_TYPE.LIST),

  setViewType: (page, type) => {
    const storageKey = page === 'home' ? VIEW_TYPE_STORAGE_KEY.HOME : VIEW_TYPE_STORAGE_KEY.SERVICE_BOARD

    storage.setItem(storageKey, type)
    set(state => ({
      ...state,
      [page]: type
    }))
  }
}))
