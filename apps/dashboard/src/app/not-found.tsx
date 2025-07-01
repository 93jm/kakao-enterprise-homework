import Link from 'next/link'
import { Button, Title } from '@/shared/ui'
import * as styles from './not-found.css'

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Title>404</Title>
        <h2 className={styles.subtitle}>페이지를 찾을 수 없습니다</h2>
        <p className={styles.description}>
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        </p>
        <div className={styles.actions}>
          <Link href="/">
            <Button variant="primary">홈으로 돌아가기</Button>
          </Link>
          <Link href="/serviceBoard">
            <Button variant="secondary">서비스 게시판</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound 