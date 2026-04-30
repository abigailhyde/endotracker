import type { Metadata } from "next";
import { Hedvig_Letters_Serif } from "next/font/google";
import "./globals.css";
import { Nav } from "./ui/Nav";
import { SWRegister } from "./sw-register";

const hedvig = Hedvig_Letters_Serif({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Eclipse",
  description: "Track your endometriosis symptoms",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Eclipse",
  },
};

export const viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${hedvig.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}<Nav /><SWRegister /></body>
    </html>
  );
}
