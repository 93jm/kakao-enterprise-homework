'use client'

import { useState, useRef, useEffect, ReactNode } from 'react'
import * as styles from './Dropdown.css'

interface DropdownProps {
  trigger: ReactNode
  children: ReactNode
  className?: string
  onClose?: () => void
}

const Dropdown = ({ trigger, children, className, onClose }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const closeDropdown = () => {
    setIsOpen(false)
    onClose?.()
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        closeDropdown()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={containerRef} className={`${styles.container} ${className || ''}`}>
      <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>
      {isOpen && (
        <div className={styles.dropdown}>
          <div onClick={closeDropdown}>{children}</div>
        </div>
      )}
    </div>
  )
}

export default Dropdown
