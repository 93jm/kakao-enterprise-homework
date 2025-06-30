'use client'

import { useState } from 'react'
import { Table, Pagination, VIEW_TYPE, Title, MoreDropdown, Button } from '@/shared/ui'
import { BoardCard } from '@/features/serviceBoard/ui'
import { useIssues } from '@/features/github'
import { useViewTypeStore } from '@/shared/store/viewType'
import { useRouter } from 'next/navigation'

const ITEMS_PER_PAGE = 10

const ServiceBoardPage = () => {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1)
  const { serviceBoard: viewType } = useViewTypeStore()

  const { data: issues, isLoading } = useIssues({
    page: currentPage,
    per_page: ITEMS_PER_PAGE,
    state: 'all'
  })

  const totalPages = Math.ceil((issues?.total_count || 0) / ITEMS_PER_PAGE)

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
        <div style={{ cursor: 'pointer' }} onClick={() => router.push(`/serviceBoard/${item.id}`)}>
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
        <MoreDropdown itemId={item.id} onDelete={id => console.log('더보기를 클릭했습니다. :', id)} />
      )
    }
  ]

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Title>서비스 게시판</Title>
        <Button variant='secondary' onClick={() => router.push('/serviceBoard/create')}>
          등록
        </Button>
      </div>
      {viewType === VIEW_TYPE.LIST ? (
        <Table columns={columns} data={issues?.items || []} rowKey='number' />
      ) : (
        <BoardCard
          items={issues?.items || []}
          onMoreClick={number => console.log('더보기를 클릭했습니다. :', number)}
        />
      )}
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  )
}

export default ServiceBoardPage
