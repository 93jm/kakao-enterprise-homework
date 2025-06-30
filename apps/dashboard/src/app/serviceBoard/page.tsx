'use client'

import { useState } from 'react'
import { Table, Pagination, VIEW_TYPE, Title, MoreDropdown, Button, ConfirmModal } from '@/shared/ui'
import { BoardCard } from '@/features/serviceBoard/ui'
import { useDeleteIssueMutation, useIssues } from '@/features/github'
import { useViewTypeStore } from '@/shared/store/viewType'
import { useRouter } from 'next/navigation'
import { useModal } from '@/shared/hooks'
import { toast } from 'sonner'
import { SearchBar } from '@/features/serviceBoard/ui/SearchBar'
import { StateDisplay } from '@/shared/ui/StateDisplay'

const ITEMS_PER_PAGE = 10

const ServiceBoardPage = () => {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1)
  const { serviceBoard: viewType } = useViewTypeStore()
  const [searchQuery, setSearchQuery] = useState('')
  const { openModal, closeModal } = useModal()
  const { mutate: deleteIssue } = useDeleteIssueMutation()

  const { data: issues, isLoading } = useIssues({
    q: searchQuery,
    page: currentPage,
    per_page: ITEMS_PER_PAGE,
  })

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    setCurrentPage(1)
  }

  const totalPages = Math.ceil((issues?.total_count || 0) / ITEMS_PER_PAGE)


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

  const columns = [
    {
      id: 'number',
      label: '번호',
      width: 80
    },
    {
      id: 'title',
      label: '타이틀',
      render: (item: any) => (
        <div style={{ cursor: 'pointer' }} onClick={() => router.push(`/serviceBoard/${item.number}`)}>
          {item.title}
        </div>
      )
    },
    {
      id: 'user',
      label: '작성자',
      width: 120,
      render: (item: any) => item.user.login
    },
    {
      id: 'created_at',
      label: '등록일자',
      width: 120,
      render: (item: any) => new Date(item.created_at).toLocaleDateString()
    },
    {
      id: 'actions',
      label: '기타',
      width: 80,
      render: (item: any) => (
        <MoreDropdown 
          onEdit={() => router.push(`/serviceBoard/${item.number}/edit`)}
          onDelete={() => handleDelete(item.number)}
        />
      )
    }
  ]

  const renderContent = () => {
    if (isLoading) {
      return (
        <StateDisplay
          title="로딩 중..."
          description="잠시만 기다려주세요"
        />
      )
    }

    if (!issues?.items?.length) {
      return (
        <StateDisplay
          title={searchQuery ? "검색 결과가 없습니다" : "등록된 게시글이 없습니다"}
          description={searchQuery ? "다른 검색어로 다시 시도해보세요" : "새로운 게시글을 작성해보세요"}
        />
      )
    }

    return (
      <>
        {viewType === VIEW_TYPE.LIST ? (
          <Table columns={columns} data={issues.items} rowKey='number' />
        ) : (
          <BoardCard
            items={issues?.items || []}
          />
        )}
        <Pagination 
          currentPage={currentPage} 
          totalPages={Math.ceil((issues.total_count || 0) / ITEMS_PER_PAGE)} 
          onPageChange={setCurrentPage} 
        />
      </>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Title>서비스 게시판</Title>
        <Button variant='secondary' onClick={() => router.push('/serviceBoard/create')}>
          등록
        </Button>
      </div>
      <SearchBar 
        value={searchQuery}
        onSearch={handleSearch} 
      />
      {renderContent()}
    </div>
  )
}

export default ServiceBoardPage
