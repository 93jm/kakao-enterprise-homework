'use client'

import { useRouter } from 'next/navigation'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input, TextArea, Button, Title } from '@/shared/ui'
import { usePreventPageLeave } from '@/shared/hooks'
import { formIssueSchema, type FormIssueData } from '@/features/serviceBoard/model'
import { useCreateIssueMutation } from '@/features/github'
import { toast } from 'sonner'
import { useState } from 'react'

const INITIAL_VALUES = {
  title: '',
  body: ''
}

const CreateIssuePage = () => {
  const router = useRouter()
  const { mutate: createIssue, isPending } = useCreateIssueMutation()
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty }
  } = useForm<FormIssueData>({
    resolver: zodResolver(formIssueSchema),
    defaultValues: INITIAL_VALUES,
    mode: 'onBlur'
  })

  usePreventPageLeave({
    isDirty,
    isSubmitting: isSubmitting || isPending,
    allowNavigate: isSuccess
  })

  const onSubmit = (data: FormIssueData) => {
    createIssue(data, {
      onSuccess: () => {
        setIsSuccess(true) 
        toast.success('이슈 등록을 성공했습니다.')

        setTimeout(() => {
          router.push('/serviceBoard')
        }, 0)
      },
      onError: error => {
        toast.error('이슈 등록에 실패했습니다.')
      }
    })
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Title>게시글 등록</Title>
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
          <Button type='submit' disabled={isPending}>
            {isPending ? '등록 중...' : '등록'}
          </Button>
        </div>
      </form>
    </div>
  )
}

export default CreateIssuePage
