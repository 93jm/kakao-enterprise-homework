'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/shared/ui/Button'
import { MoreDropdown } from '@/shared/ui/MoreDropdown'
import { useIssue, useDeleteIssueMutation } from '@/features/github'
import { useModal } from '@/shared/hooks'
import { ConfirmModal } from '@/shared/ui'
import { toast } from 'sonner'
import * as styles from './page.css'
import { use } from 'react'

interface Props {
  params: Promise<{ id: string }>
}

const ServiceBoardDetailPage = ({ params }: Props) => {
  const router = useRouter()
  const { openModal, closeModal } = useModal()
  const resolvedParams = use(params)

  const issueNumber = parseInt(resolvedParams.id)

  const { data: issue, isLoading } = useIssue(issueNumber)
  const { mutate: deleteIssue } = useDeleteIssueMutation()

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

  const handleBackToList = () => {
    router.push('/serviceBoard')
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!issue) {
    return <div>게시글을 찾을 수 없습니다.</div>
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 style={{ fontSize: '24px', fontWeight: '600' }}>게시글 상세</h1>
        <MoreDropdown            
          onEdit={() => router.push(`/serviceBoard/${issueNumber}/edit`)}
          onDelete={() => handleDelete(issueNumber)}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.meta}>
          <span>작성자: {issue.user.login}</span>
          <span>작성일: {new Date(issue.created_at).toLocaleDateString()}</span>
        </div>
        <h2>{issue.title}</h2>
        <div className={styles.body}>{issue.body}</div>
      </div>

      <div className={styles.footer}>
        <Button variant='secondary' onClick={handleBackToList}>
          목록
        </Button>
      </div>
    </div>
  )
}

export default ServiceBoardDetailPage
