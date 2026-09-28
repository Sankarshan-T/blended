import type { Metadata } from "next";
import { Bubblegum_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const bubblegumSans = Bubblegum_Sans({
  variable: "--font-bubblegum-sans",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "blended",
  description: "hack club blended ysws.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${bubblegumSans.variable} min-h-full flex flex-col`}>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
