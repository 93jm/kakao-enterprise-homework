export interface IssueListParams {
  page?: number
  per_page?: number
  state?: 'open' | 'closed' | 'all'
  sort?: 'created' | 'updated' | 'comments'
  direction?: 'asc' | 'desc'
  labels?: string
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
