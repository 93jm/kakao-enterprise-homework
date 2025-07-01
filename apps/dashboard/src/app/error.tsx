'use client'

import { useEffect } from 'react'
import { Button, Title } from '@/shared/ui'
import * as styles from './error.css'

interface ErrorProps {
  error: Error & { digest?: string }
}

const Error = ({ error }: ErrorProps) => {
  useEffect(() => {
    console.error('error >> ', error)
  }, [error])

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Title>오류가 발생했습니다</Title>
        <h2 className={styles.subtitle}>예상치 못한 문제가 발생했습니다</h2>
        <p className={styles.description}>
          잠시 후 다시 시도해보세요. 문제가 계속 발생하면 관리자에게 문의해주세요.
        </p>
        <div className={styles.actions}>
          <Button variant="secondary" onClick={() => window.location.href = '/'}>
            홈으로 돌아가기
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Error 