'use client'

import { useEffect } from 'react'
import { useViewTypeStore } from '@/shared/store/viewType'

interface Props {
  children: React.ReactNode
}

const HydrationProvider = ({ children }: Props) => {
    
  useEffect(() => {
    useViewTypeStore.persist.rehydrate()
  }, [])

  return <>{children}</>
}

export default HydrationProvider