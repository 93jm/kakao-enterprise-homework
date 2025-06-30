import { Dropdown } from '@/shared/ui/Dropdown'
import * as styles from './MoreDropdown.css'

interface MoreDropdownProps {
  onEdit?: () => void
  onDelete?: () => void
}

const MoreDropdown = ({ onEdit, onDelete }: MoreDropdownProps) => {
  return (
    <Dropdown trigger={<button className={styles.triggerButton}>...</button>}>
      <div className={styles.menuContainer}>
        {onEdit && (
          <button className={styles.menuItem} onClick={onEdit}>
            수정
          </button>
        )}
        {onDelete && (
          <button className={styles.menuItem} onClick={onDelete}>
            삭제
          </button>
        )}
      </div>
    </Dropdown>
  )
}

export default MoreDropdown
