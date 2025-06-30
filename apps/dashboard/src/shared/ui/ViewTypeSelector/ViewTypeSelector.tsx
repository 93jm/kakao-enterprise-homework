'use client'

import { useState, useRef, useEffect } from 'react'
import { ViewType, VIEW_TYPE } from './types'
import * as styles from './ViewTypeSelector.css'
import { Button } from '../Button'
import { useViewTypeStore } from '@/shared/store/viewType'

const viewOptions = [
  { value: VIEW_TYPE.LIST, label: '리스트 보기' },
  { value: VIEW_TYPE.CARD, label: '카드 보기' }
] as const

interface ViewTypeSelectorProps {
  page: 'home' | 'serviceBoard'
}

const ViewTypeSelector = ({ page }: ViewTypeSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const { home, serviceBoard, setViewType } = useViewTypeStore()
  const containerRef = useRef<HTMLDivElement>(null)

  // 현재 페이지의 viewType 가져오기
  const currentViewType = page === 'home' ? home : serviceBoard

  const handleViewChange = (newViewType: ViewType) => {
    setViewType(page, newViewType)
    setIsOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => window.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={containerRef} className={styles.container}>
      <Button variant='secondary' onClick={() => setIsOpen(!isOpen)}>
        설정
      </Button>
      {isOpen && (
        <div className={styles.dropdown}>
          {viewOptions.map(option => (
            <div key={option.value} className={styles.option} onClick={() => handleViewChange(option.value)}>
              <div className={styles.radioCircle}>
                {currentViewType === option.value && <div className={styles.radioSelected} />}
              </div>
              <span>{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ViewTypeSelector
