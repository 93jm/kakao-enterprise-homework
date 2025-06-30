'use client'

import { useRouter } from 'next/navigation'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input, TextArea, Button, Title } from '@/shared/ui'
import { usePreventPageLeave } from '@/shared/hooks'
import { formIssueSchema, type FormIssueData } from '@/features/serviceBoard/model'
import { useIssue, useUpdateIssueMutation } from '@/features/github'
import { toast } from 'sonner'
import { use, useEffect, useState } from 'react'

const INITIAL_VALUES = {
  title: '',
  body: ''
}

interface Props {
  params: Promise<{ id: string }>
}

const EditIssuePage = ({ params }: Props) => {
  const router = useRouter()
  const resolvedParams = use(params)
  const issueNumber = parseInt(resolvedParams.id)
  const { data: issue, isLoading: isLoadingIssue } = useIssue(issueNumber)
  const { mutate: updateIssue, isPending } = useUpdateIssueMutation()
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty }
  } = useForm<FormIssueData>({
    resolver: zodResolver(formIssueSchema),
    defaultValues: INITIAL_VALUES,
    mode: 'onBlur'
  })

  useEffect(() => {
    if (issue) {
      reset({
        title: issue.title,
        body: issue.body || ''
      })
    }
  }, [issue, reset])

  usePreventPageLeave({
    isDirty,
    isSubmitting: isSubmitting || isPending,
    allowNavigate: isSuccess
  })

  const onSubmit = (data: FormIssueData) => {
    updateIssue(
      { 
        issueNumber,
        params: data
      },
      {
        onSuccess: () => {
          setIsSuccess(true) 
          toast.success('이슈 수정을 성공했습니다.')
  
          setTimeout(() => {
            router.push('/serviceBoard')
          }, 0)
        },
        onError: () => {
          toast.error('이슈 수정에 실패했습니다.')
        }
      }
    )
  }

  if (isLoadingIssue) {
    return <div>Loading...</div>
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Title>게시글 수정</Title>
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Controller
          name='title'
          control={control}
          render={({ field }) => (
            <Input label='제목' placeholder='제목을 입력해주세요' error={errors.title} {...field} />
          )}
        />
        <Controller
          name='body'
          control={control}
          render={({ field }) => (
            <TextArea label='내용' placeholder='내용을 입력해주세요' rows={10} error={errors.body} {...field} />
          )}
        />
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
          <Button type='button' variant='secondary' onClick={() => router.back()}>
            취소
          </Button>
          <Button type='submit' disabled={isPending}>
            {isPending ? '수정 중...' : '수정'}
          </Button>
        </div>
      </form>
    </div>
  )
}

export default EditIssuePage 