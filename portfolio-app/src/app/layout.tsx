import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/siteConfig";
import SmoothScrollProvider from "@/components/common/SmoothScrollProvider";
import ScrollProgressBar from "@/components/common/ScrollProgressBar";
import CustomCursor from "@/components/common/CustomCursor";

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const monoFont = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://manishmaurya.in"),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.tagline,
  keywords: [
    "Manish Kumar",
    "Manish Maurya",
    "Creative Developer",
    "UI/UX Designer",
    "Full-Stack Developer",
    "React Developer",
    "Portfolio",
    "n8n Automation",
    "Vadodara",
    "Gujarat"
  ],
  authors: [{ name: siteConfig.name, url: "https://manishmaurya.in" }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://manishmaurya.in",
    title: siteConfig.title,
    description: siteConfig.tagline,
    siteName: siteConfig.name,
    images: [
      {
        url: "/assets/meta.png",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.tagline,
    images: ["/assets/meta.png"],
    creator: "@mauryamanish01",
  },
  icons: {
    icon: "/assets/logo.png",
    apple: "/assets/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sansFont.variable} ${displayFont.variable} ${monoFont.variable} dark`}
    >
      <body className="min-h-screen bg-[#070709] text-[#f4f4f7] font-sans antialiased selection:bg-[#00f0ff] selection:text-[#070709] flex flex-col relative">
        <ScrollProgressBar />
        <CustomCursor />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
