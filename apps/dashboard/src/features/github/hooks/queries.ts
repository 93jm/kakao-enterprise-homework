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
      /**
       * 깃허브 API가 이슈 등록시에 바로 List 데이터가 갱신이 되지 않아
       * 임시로 성공 후 받은 데이터를 밀어 넣습니다.
       */
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
