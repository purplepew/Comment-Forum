import type { Metadata } from 'next'
import Header from "./components/layout/Header";
import Theme from "./components/layout/Theme";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Comment Forum',
  description: 'A modern comment forum built with Next.js and Material-UI',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Theme>
          <Header />
          {children}
        </Theme>
      </body>
    </html >
  );
}
