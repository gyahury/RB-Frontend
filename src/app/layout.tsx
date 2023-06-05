import "./globals.css";
import localFont from "next/font/local";

const koFont = localFont({
  src: './fonts/NotoSansKR-Regular.otf',
  display: 'swap',
});

export const metadata = {
  title: "R&B - 부동산 매물 관리 플랫폼",
  description: "부동산 매물 관리 플랫폼",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={koFont.className}>{children}</body>
    </html>
  );
}
