'use client'

import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useModalStore } from '@/shared/store/modal'
import * as styles from './Modal.css'

const Modal = () => {
  const { modals, closeModal } = useModalStore()

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && modals.length > 0) {
        closeModal()
      }
    }

    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [modals.length, closeModal])

  useEffect(() => {
    if (modals.length > 0) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [modals.length])

  if (modals.length === 0) {
    return null
  }

  return createPortal(
    <>
      {modals.map((modal, index) => {
        const isFirst = index === 0
        const zIndex = 1000 + index

        return (
          <div
            key={modal.id}
            className={isFirst ? styles.backdrop : styles.stackedModal}
            style={{ zIndex }}
            onClick={e => {
              if (e.target === e.currentTarget && modal.closeOnBackdrop) {
                closeModal(modal.id)
              }
            }}
          >
            <div className={styles.modalContainer} onClick={e => e.stopPropagation()}>
              <button className={styles.closeButton} onClick={() => closeModal(modal.id)} aria-label='모달 닫기'>
                ✕
              </button>
              <div className={styles.modalContent}>{modal.content}</div>
            </div>
          </div>
        )
      })}
    </>,
    document.body
  )
}

export default Modal
