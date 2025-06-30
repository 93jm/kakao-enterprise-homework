export const queryKeys = {
  issuesList: (params?: { page?: number; per_page?: number; state?: string }) => ['issues', 'list', params] as const,
  issue: (issueNumber: number) => ['issues', 'detail', issueNumber] as const
} as const
