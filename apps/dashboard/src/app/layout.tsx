import '@/styles/reset.css'
import '@/styles/global.css'
import '@/styles/pretendard.css'

import QueryProvider from '@/providers/QueryProvider'

import type { Metadata } from 'next'
import { lightTheme } from '@/styles/theme/light.css'
import { DashboardLayout } from '@/widgets/layout'
import { Toaster } from 'sonner'
import { Modal } from '@/shared/ui/Modal'

export const metadata: Metadata = {
  title: 'homework - 이정민',
  description: 'kakao enterprise 웹 개발자 과제'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ko' className={lightTheme}>
      <body>
        <QueryProvider>
          <DashboardLayout>{children}</DashboardLayout>
          <Toaster position='top-right' />
          <Modal />
        </QueryProvider>
      </body>
    </html>
  )
}
