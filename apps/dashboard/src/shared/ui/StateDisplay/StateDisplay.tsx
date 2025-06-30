'use client'

import * as styles from './StateDisplay.css'

interface StateDisplayProps {
  title: string
  description?: string
}

const StateDisplay = ({ title, description }: StateDisplayProps) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  )
}

export default StateDisplay