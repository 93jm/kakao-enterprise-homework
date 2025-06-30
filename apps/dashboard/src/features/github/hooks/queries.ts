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
    onSuccess: newIssue => {
      queryClient.setQueriesData({ queryKey: ['issues', 'list'] }, (oldData: any) => {
        if (!oldData?.items) {
          return oldData
        }

        return {
          ...oldData,
          items: [newIssue, ...oldData.items],
          total_count: (oldData.total_count || 0) + 1
        }
      })
    }
  })
}

export const useUpdateIssueMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ issueNumber, params }: { issueNumber: number; params: any }) => updateIssue(issueNumber, params),
    onSuccess: (_, { issueNumber }) => {
      queryClient.invalidateQueries({
        queryKey: ['issues', 'detail', issueNumber]
      })
      
      queryClient.invalidateQueries({
        queryKey: ['issues', 'list']
      })
    }
  })
}

export const useDeleteIssueMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteIssue,
    onSuccess: (_, deletedIssueNumber) => {
      queryClient.setQueriesData({ queryKey: ['issues', 'list'] }, (oldData: any) => {
        if (!oldData?.items) {
          return oldData
        }

        return {
          ...oldData,
          items: oldData.items.filter((item: any) => item.number !== deletedIssueNumber),
          total_count: Math.max(0, (oldData.total_count || 0) - 1)
        }
      })

      queryClient.removeQueries({
        queryKey: ['issues', 'detail', deletedIssueNumber]
      })
    }
  })
}
