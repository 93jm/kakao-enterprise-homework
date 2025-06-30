import { z } from 'zod'

export const createIssueSchema = z.object({
  title: z.string().min(1, '제목을 입력해주세요').max(50, '제목은 50자 이하로 입력해주세요'),
  body: z.string().min(1, '내용을 입력해주세요').max(500, '내용은 500자 이하로 입력해주세요')
})

export type CreateIssueFormData = z.infer<typeof createIssueSchema>
