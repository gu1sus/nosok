import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nosok VPN",
  description: "Nosok VPN landing page and product site.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
