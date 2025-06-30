import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { queryKeys } from '@/shared/lib/queries/queryKeys'
import { getIssues, getIssue, createIssue, updateIssue, deleteIssue } from '../api/github.issues'
import { CreateIssueParams, IssueListParams } from '../model/types'

export const useIssues = (params: IssueListParams = {}) => {
  return useQuery({
    queryKey: queryKeys.issuesList(params),
    queryFn: () => getIssues(params)
  })
}

export const useIssue = (issueNumber: number) => {
  return useQuery({
    queryKey: queryKeys.issue(issueNumber),
    queryFn: () => getIssue(issueNumber),
    enabled: !!issueNumber
  })
}

export const useCreateIssueMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (params: CreateIssueParams) => createIssue(params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['issues', 'list'] })
    }
  })
}

export const useUpdateIssueMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ issueNumber, params }: { issueNumber: number; params: any }) => updateIssue(issueNumber, params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['issues'] })
    }
  })
}

export const useDeleteIssueMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteIssue,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['issues'] })
    }
  })
}
