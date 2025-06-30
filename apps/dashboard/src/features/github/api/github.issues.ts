import { IssueListParams, CreateIssueParams } from '../model/types'

export const getIssues = async (params: IssueListParams = {}) => {
  const searchParams = new URLSearchParams()
  if (params.page) {
    searchParams.set('page', params.page.toString())
  }
  if (params.per_page) {
    searchParams.set('per_page', params.per_page.toString())
  }

  if (params.q) {  // 검색어 파라미터 추가
    searchParams.set('q', params.q)
  }

  const response = await fetch(`/api/github/issues?${searchParams}`)

  if (!response.ok) {
    console.error('이슈 목록 호출이 실패했습니다.')
  }

  return response.json()
}

export const getIssue = async (issueNumber: number) => {
  const response = await fetch(`/api/github/issues/${issueNumber}`)

  if (!response.ok) {
    console.error(`이슈 호출이 실패했습니다. #${issueNumber}`)
  }

  return response.json()
}

export const createIssue = async (params: CreateIssueParams) => {
  const response = await fetch('/api/github/issues', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params)
  })

  if (!response.ok) {
    throw new Error('이슈를 생성하는데 실패했습니다.')
  }

  return response.json()
}

export const updateIssue = async (issueNumber: number, params: any) => {
  const response = await fetch(`/api/github/issues/${issueNumber}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params)
  })

  if (!response.ok) {
    throw new Error('이슈 업데이트를 실패했습니다.')
  }

  return response.json()
}

export const deleteIssue = async (issueNumber: number) => {
  const response = await fetch(`/api/github/issues/${issueNumber}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ state: 'closed' })
  })

  if (!response.ok) {
    throw new Error('이슈 클로징을 실패했습니다.')
  }

  return response.json()
}
