import { ReactNode } from 'react'
import * as styles from './NavList.css'

interface Props {
  children: ReactNode
}

const NavList = ({ children }: Props) => {
  return <div className={styles.navList}>{children}</div>
}

export default NavList
