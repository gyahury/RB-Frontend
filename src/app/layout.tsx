import './globals.css'
import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'R&B - 부동산 매물 관리 플랫폼 초기',
  description: '부동산 매물 관리 플랫폼 초기',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={nunito.className}>{children}</body>
    </html>
  )
}
