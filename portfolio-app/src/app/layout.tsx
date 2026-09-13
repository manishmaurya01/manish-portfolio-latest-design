import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/siteConfig";
import SmoothScrollProvider from "@/components/common/SmoothScrollProvider";
import ScrollProgressBar from "@/components/common/ScrollProgressBar";
import CustomCursor from "@/components/common/CustomCursor";
import { ThemeProvider } from "@/components/common/ThemeProvider";

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
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('portfolio-theme');
                  var isDark = saved ? saved === 'dark' : true;
                  if (isDark) {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                    document.documentElement.setAttribute('data-theme', 'dark');
                    document.documentElement.style.colorScheme = 'dark';
                  } else {
                    document.documentElement.classList.add('light');
                    document.documentElement.classList.remove('dark');
                    document.documentElement.setAttribute('data-theme', 'light');
                    document.documentElement.style.colorScheme = 'light';
                  }
                } catch(e) {}

                function purgeNetlify() {
                  var targets = [
                    'netlify-drawer',
                    '#netlify-drawer',
                    '.netlify-drawer',
                    '[data-netlify-drawer]',
                    '[data-netlify-badge]',
                    'iframe[src*="netlify"]',
                    'iframe[id*="netlify"]',
                    'div[id*="netlify-feedback"]',
                    'div[class*="netlify-feedback"]',
                    'div[id*="netlify-drawer"]'
                  ];
                  for (var i = 0; i < targets.length; i++) {
                    try {
                      var els = document.querySelectorAll(targets[i]);
                      for (var j = 0; j < els.length; j++) {
                        els[j].remove();
                      }
                    } catch(e) {}
                  }
                }
                if (typeof window !== 'undefined') {
                  purgeNetlify();
                  window.addEventListener('DOMContentLoaded', purgeNetlify);
                  window.addEventListener('load', purgeNetlify);
                  if (typeof MutationObserver !== 'undefined') {
                    new MutationObserver(purgeNetlify).observe(document.documentElement, {
                      childList: true,
                      subtree: true
                    });
                  }
                }
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans antialiased selection:bg-blue-600 selection:text-white flex flex-col relative transition-colors duration-200">
        <ThemeProvider>
          <ScrollProgressBar />
          <CustomCursor />
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
