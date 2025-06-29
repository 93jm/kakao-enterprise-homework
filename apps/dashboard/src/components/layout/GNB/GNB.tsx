import { ReactNode } from 'react'
import * as styles from './GNB.css'

interface Props {
  leftContent?: ReactNode
  rightContent?: ReactNode
}

const GNB = ({ leftContent, rightContent }: Props) => {
  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>{leftContent}</div>
      <div className={styles.rightSection}>{rightContent}</div>
    </header>
  )
}

export default GNB
