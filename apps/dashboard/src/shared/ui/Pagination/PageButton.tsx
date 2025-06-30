import * as styles from './Pagination.css'

interface Props {
  page: number | string
  isActive?: boolean
  onClick?: () => void
  disabled?: boolean
}

export const PageButton = ({ page, isActive, onClick, disabled }: Props) => {
  return (
    <button className={`${styles.button} ${isActive ? styles.activeButton : ''}`} onClick={onClick} disabled={disabled}>
      {page}
    </button>
  )
}
