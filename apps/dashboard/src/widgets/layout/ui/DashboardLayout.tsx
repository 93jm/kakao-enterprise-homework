'use client'

import { ReactNode } from 'react'
import { GNB } from '../../headers'
import { LNB } from '../../sidebar'
import * as styles from './DashboardLayout.css'
import { ViewTypeSelector } from '@/shared/ui'
import { usePathname } from 'next/navigation'

interface Props {
  children: ReactNode
}

const DashboardLayout = ({ children }: Props) => {
  const pathname = usePathname()

  const getStorageKey = () => {
    if (pathname === '/') {
      return 'home'
    }

    if (pathname.startsWith('/serviceBoard')) {
      return 'serviceBoard'
    }

    return 'home'
  }

  return (
    <div className={styles.layoutContainer}>
      <GNB
        leftContent={<h1 className={styles.title}>Dashboard</h1>}
        rightContent={
          <div className={styles.rightContent}>
            <ViewTypeSelector page={getStorageKey()} />
          </div>
        }
      />
      <div className={styles.mainContent}>
        <LNB />
        <div className={styles.contentWrapper}>
          <main className={styles.content}>{children}</main>
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
