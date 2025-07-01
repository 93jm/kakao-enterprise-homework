import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { VIEW_TYPE, type ViewType } from '@/shared/ui/ViewTypeSelector/types'

interface ViewTypeState {
  home: ViewType
  serviceBoard: ViewType
  hasHydrated: boolean
  setViewType: (page: 'home' | 'serviceBoard', type: ViewType) => void
  setHasHydrated: (state: boolean) => void
}

export const useViewTypeStore = create<ViewTypeState>()(
  persist(
    (set) => ({
      home: VIEW_TYPE.LIST,
      serviceBoard: VIEW_TYPE.LIST,
      hasHydrated: false,
      
      setViewType: (page, type) => {
        set(state => ({
          ...state,
          [page]: type
        }))
      },

      setHasHydrated: (state) => {
        set({ hasHydrated: state })
      }
    }),
    {
      name: 'viewType-storage',
      partialize: (state) => ({
        home: state.home,
        serviceBoard: state.serviceBoard
      }),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true)
      }
    }
  )
)