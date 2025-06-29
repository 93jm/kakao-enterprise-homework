import { ReactNode } from 'react'
import { GNB } from './GNB'
import { LNB } from './LNB'
import * as styles from './DashboardLayout.css'

interface Props {
  children: ReactNode
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className={styles.layoutContainer}>
      <GNB
        leftContent={<h1 className={styles.title}>Dashboard</h1>}
        rightContent={<button className={styles.button}>설정</button>}
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
