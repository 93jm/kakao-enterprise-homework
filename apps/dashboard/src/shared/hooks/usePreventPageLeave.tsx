import { useEffect, useRef } from 'react'
import { useModal } from './useModal'
import { ConfirmModal } from '../ui'

interface Props {
  isDirty: boolean
  isSubmitting: boolean
}

const usePreventPageLeave = ({ isDirty, isSubmitting }: Props) => {
  const { openModal, closeModal } = useModal()
  const hasHistoryBack = useRef(false)

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isDirty && !isSubmitting) {
        e.preventDefault()
      }
    }

    const handlePopState = () => {
      //브라우저 alert이 아닌 modal로 핸들링을 하기 위해 플래그를 심어 두번의 history.back() 처리
      if (hasHistoryBack.current) {
        window.history.back()
        return
      }

      if (isDirty && !isSubmitting) {
        openModal(
          <ConfirmModal
            title='작성 중인 내용이 사라집니다.'
            message='페이지를 이동하시겠습니까?'
            confirmText='이동'
            cancelText='취소'
            onConfirm={() => {
              closeModal()
              hasHistoryBack.current = true
              window.history.back()
            }}
            onCancel={() => {
              closeModal()
              window.history.pushState(null, '', window.location.href)
            }}
          />,
          {
            closeOnBackdrop: false
          }
        )
      }
    }

    // 현재 URL을 히스토리에 추가
    if (isDirty && !isSubmitting) {
      window.history.pushState(null, '', window.location.href)
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
      window.removeEventListener('popstate', handlePopState)
    }
  }, [isDirty, isSubmitting, openModal, closeModal])
}

export default usePreventPageLeave
