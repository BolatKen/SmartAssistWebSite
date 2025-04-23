import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "SmartAssist - AI Business Automation Assistant",
    template: "%s | SmartAssist",
  },
  description:
    "Intelligent AI assistant for business automation, designed for small and medium-sized businesses.",
  icons: {
    icon: "/favicon.jpeg",
  },
  keywords: [
    "AI assistant",
    "business automation",
    "CRM integration",
    "sales automation",
    "customer support",
  ],
  authors: [{ name: "SmartAssist" }],
  creator: "SmartAssist",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://smartassist.ai",
    title: "SmartAssist - AI Business Automation Assistant",
    description:
      "Intelligent AI assistant for business automation, designed for small and medium-sized businesses.",
    siteName: "SmartAssist",
  },
  twitter: {
    card: "summary_large_image",
    title: "SmartAssist - AI Business Automation Assistant",
    description:
      "Intelligent AI assistant for business automation, designed for small and medium-sized businesses.",
    creator: "@smartassist",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SE9BYS4KKY"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SE9BYS4KKY');
            `,
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} font-sans bg-[#0d0f14] text-[#f0f0f0]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
