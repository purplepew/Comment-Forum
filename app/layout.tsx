import Header from "./components/layout/Header";
import Theme from "./components/layout/Theme";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Theme>
          <Header />
          {children}
        </Theme>
      </body>
    </html >
  );
}
