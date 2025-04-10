import type { Metadata } from "next";
import "./globals.css";
import Text from "@/constants/text-content";
import ThemeRegistry from "@/contexts/themeprovider";
import Header from "@/components/molecules/header/header";

export const metadata: Metadata = {
  title: Text.appName,
  description: Text.metaDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Header />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
