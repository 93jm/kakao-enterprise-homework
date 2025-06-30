import { useMemo } from 'react'
import { PageButton } from './PageButton'
import * as styles from './Pagination.css'

const MAX_VISIBLE_PAGES = 7

export interface Props {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const Pagination = ({ currentPage, totalPages, onPageChange }: Props) => {
  const pages = useMemo(() => {
    // 현재 페이지 위치에 따라 페이지 구성이 달라집니다.
    const calculateVisiblePages = () => {
      const pages: (number | string)[] = []

      if (totalPages <= MAX_VISIBLE_PAGES) {
        return Array.from({ length: totalPages }, (_, i) => i + 1)
      }

      // 현재 페이지가 첫 4개 페이지안에 들어온 경우 (초반)
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) {
          pages.push(i)
        }
        pages.push('...')
        pages.push(totalPages)
      } else if (currentPage >= totalPages - 3) {
        // 현재 페이지가 마지막 3개 페이지에 들어온 경우 (끝)
        pages.push(1)
        pages.push('...')
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i)
        }
      } else {
        // 현재 페이지가 중간 위치에 있는 경우 (중간)
        pages.push(1)
        pages.push('...')

        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i)
        }
        pages.push('...')
        pages.push(totalPages)
      }

      return pages
    }

    return calculateVisiblePages()
  }, [currentPage, totalPages])

  return (
    <nav className={styles.container}>
      <PageButton page='이전' onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} />

      {pages.map((page, index) => (
        <PageButton
          key={`${page}-${index}`}
          page={page}
          isActive={page === currentPage}
          onClick={() => typeof page === 'number' && onPageChange(page)}
          disabled={typeof page === 'string'}
        />
      ))}

      <PageButton page='다음' onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} />
    </nav>
  )
}

export default Pagination
