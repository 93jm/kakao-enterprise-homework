import { ReactNode } from 'react'
import * as styles from './NavItem.css'

interface Props {
  href: string
  children: ReactNode
  isActive?: boolean
  onClick?: () => void
}

const NavItem = ({ href, children, isActive = false, onClick }: Props) => {
  const className = isActive ? `${styles.navItem} ${styles.navItemActive}` : styles.navItem

  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  )
}

export default NavItem
