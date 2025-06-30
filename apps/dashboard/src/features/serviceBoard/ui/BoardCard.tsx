'use client'

import { useRouter } from 'next/navigation'
import { BoardItem } from '../model'
import { MoreDropdown } from '@/shared/ui/MoreDropdown'
import * as styles from './BoardCard.css'

interface BoardCardProps {
  items: BoardItem[]
  onMoreClick: (id: number) => void
}

export function BoardCard({ items, onMoreClick }: BoardCardProps) {
  const router = useRouter()

  const handleTitleClick = (id: number) => {
    router.push(`/serviceBoard/${id}`)
  }

  return (
    <div className={styles.cardGrid}>
      {items.map(item => (
        <div key={item.id} className={styles.card}>
          <div className={styles.header}>
            <div className={styles.title} onClick={() => handleTitleClick(item.id)}>
              {item.title}
            </div>
            <MoreDropdown itemId={item.id} onDelete={onMoreClick} />
          </div>
          <div className={styles.info}>
            <div>작성자: {item.user.login}</div>
            <div>작성일: {new Date(item.created_at).toLocaleDateString()}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
