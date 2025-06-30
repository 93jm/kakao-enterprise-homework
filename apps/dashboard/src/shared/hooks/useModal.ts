import { ReactNode } from 'react'
import { useModalStore, ModalItem } from '@/shared/store/modal'

export const useModal = () => {
  const { modals, openModal, closeModal, closeAllModals } = useModalStore()

  const open = (content: ReactNode, options?: Partial<Omit<ModalItem, 'id' | 'content'>>) => {
    return openModal({ content, ...options })
  }

  const close = (id?: string) => {
    closeModal(id)
  }

  const closeAll = () => {
    closeAllModals()
  }

  const isOpen = modals.length > 0

  return {
    isOpen,
    openModal: open,
    closeModal: close,
    closeAllModals: closeAll,
    modalsCount: modals.length
  }
}
