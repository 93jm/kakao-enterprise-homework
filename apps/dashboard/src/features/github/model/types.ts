export interface IssueListParams {
  page?: number
  per_page?: number
  sort?: 'created' | 'updated' | 'comments'
  direction?: 'asc' | 'desc'
  labels?: string
  q?: string // 검색어 파라미터 추가
}

export interface CreateIssueParams {
  title: string
  body?: string
  labels?: string[]
  assignees?: string[]
}

export interface UpdateIssueParams {
  title?: string
  body?: string
  state?: 'open' | 'closed'
  labels?: string[]
}
