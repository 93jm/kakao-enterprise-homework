'use client'

import { usePathname } from 'next/navigation'
import { NavList, NavItem } from '@/components/common'
import * as styles from './LNB.css'

const LNB = () => {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') {
      return true
    }

    if (path !== '/' && pathname.startsWith(path)) {
      return true
    }

    return false
  }

  return (
    <nav className={styles.sidebar}>
      <div className={styles.navigation}>
        <NavList>
          <NavItem href='/' isActive={isActive('/')}>
            홈
          </NavItem>
          <NavItem href='/board' isActive={isActive('/board')}>
            서비스게시판
          </NavItem>
        </NavList>
      </div>
    </nav>
  )
}

export default LNB
