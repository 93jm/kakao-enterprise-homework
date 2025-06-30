import { ReactNode } from 'react'
import { create } from 'zustand'
import { nanoid } from 'nanoid'

export interface ModalItem {
  id: string
  content: ReactNode
  onClose?: () => void
  closeOnBackdrop?: boolean
}

interface ModalState {
  modals: ModalItem[]
  openModal: (modal: Omit<ModalItem, 'id'>) => string
  closeModal: (id?: string) => void
  closeAllModals: () => void
}

export const useModalStore = create<ModalState>((set, get) => ({
  modals: [],

  openModal: modal => {
    const id = nanoid()
    const newModal: ModalItem = {
      id,
      closeOnBackdrop: true,
      ...modal
    }

    set(state => ({
      modals: [...state.modals, newModal]
    }))

    return id
  },

  closeModal: id => {
    const { modals } = get()

    if (!id) {
      // id가 없으면 마지막 모달을 닫습니다.
      if (modals.length === 0) {
        return
      }

      const lastModal = modals[modals.length - 1]
      lastModal.onClose?.()

      set(state => ({
        modals: state.modals.slice(0, -1)
      }))
    } else {
      // 특정 id의 모달을 찾아 닫습니다.
      const modal = modals.find(m => m.id === id)
      modal?.onClose?.()

      set(state => ({
        modals: state.modals.filter(m => m.id !== id)
      }))
    }
  },

  closeAllModals: () => {
    const { modals } = get()
    modals.forEach(modal => modal.onClose?.())
    set({ modals: [] })
  }
}))
