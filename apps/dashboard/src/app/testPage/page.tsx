'use client'

import { Button, Input, TextArea } from '@/components/common'

const TestPage = () => {
  return (
    <div>
      <Button variant='primary'>Primary</Button>
      <Button variant='secondary'>Secondary</Button>
      <Button variant='danger'>Danger</Button>
      <Button disabled>Disabled</Button>
      <Input label='제목' />
      <TextArea label='내용' />
      <Input label='제목' error='에러 메세지에요.' />
      <TextArea label='내용' error='에러 메세지에요.' />
      <Input label='제목' helperText='도움말 메세지에요.' />
      <TextArea label='내용' helperText='도움말 메세지에요.' />
      <Input label='제목' error='에러 메세지에요.' helperText='도움말 메세지에요.' />
      <TextArea label='내용' error='에러 메세지에요.' helperText='도움말 메세지에요.' />
    </div>
  )
}

export default TestPage
