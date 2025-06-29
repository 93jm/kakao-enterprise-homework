import '@/styles/reset.css'
import '@/styles/global.css'
import '@/styles/pretendard.css'

import type { Metadata } from 'next'
import { lightTheme } from '@/styles/theme/light.css'
import DashboardLayout from '@/components/layout/DashboardLayout'

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
        <DashboardLayout>{children}</DashboardLayout>
      </body>
    </html>
  )
}
