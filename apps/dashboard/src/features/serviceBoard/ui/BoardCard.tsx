'use client'

import { useRouter } from 'next/navigation'
import { BoardItem } from '../model'
import { MoreDropdown } from '@/shared/ui/MoreDropdown'
import * as styles from './BoardCard.css'
import { useModal } from '@/shared/hooks'
import { useDeleteIssueMutation } from '@/features/github'
import { ConfirmModal } from '@/shared/ui'
import { toast } from 'sonner'

interface BoardCardProps {
  items: BoardItem[]
}

const BoardCard = ({ items }: BoardCardProps) => {
  const router = useRouter()
  const { openModal, closeModal } = useModal()
  const { mutate: deleteIssue } = useDeleteIssueMutation()

  const handleTitleClick = (id: number) => {
    router.push(`/serviceBoard/${id}`)
  }


  const handleDelete = (id: number) => {
    openModal(
      <ConfirmModal
        title='게시글 삭제'
        message='정말 삭제하시겠습니까?'
        confirmText='삭제'
        cancelText='취소'
        confirmVariant='danger'
        onConfirm={() => {
          deleteIssue(id, {
            onSuccess: () => {
              closeModal()
              toast.success('게시글이 삭제되었습니다')
              router.push('/serviceBoard')
            },
            onError: () => {
              toast.error('게시글 삭제에 실패했습니다')
            }
          })
        }}
        onCancel={() => {}}
      />
    )
  }

  return (
    <div className={styles.cardGrid}>
      {items.map(item => (
        <div key={item.id} className={styles.card}>
          <div className={styles.header}>
            <div className={styles.title} onClick={() => handleTitleClick(item.number)}>
              {item.title}
            </div>
            <MoreDropdown onEdit={() => router.push(`/serviceBoard/${item.number}/edit`)} onDelete={() => handleDelete(item.number)} />
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

export default BoardCard