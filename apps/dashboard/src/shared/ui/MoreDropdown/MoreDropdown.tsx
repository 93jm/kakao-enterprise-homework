'use client'

import { useRouter } from 'next/navigation'
import { Dropdown } from '@/shared/ui/Dropdown'
import * as styles from './MoreDropdown.css'

interface MoreDropdownProps {
  itemId: number
  onDelete: (id: number) => void
}

const MoreDropdown = ({ itemId, onDelete }: MoreDropdownProps) => {
  const router = useRouter()

  const handleEdit = () => {
    router.push(`/serviceBoard/${itemId}/edit`)
  }

  const handleDelete = () => {
    console.log('삭제 클릭:', itemId)
    onDelete(itemId)
  }

  return (
    <Dropdown trigger={<button className={styles.triggerButton}>...</button>}>
      <div className={styles.menuContainer}>
        <button className={styles.menuItem} onClick={handleEdit}>
          수정
        </button>
        <button className={styles.menuItem} onClick={handleDelete}>
          삭제
        </button>
      </div>
    </Dropdown>
  )
}

export default MoreDropdown
