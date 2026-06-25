import type { Metadata, Viewport } from "next";
import { Inter_Tight } from "next/font/google";
import "@flaticon/flaticon-uicons/css/all/all.css";
import "./globals.css";

// 1. TYPOGRAPHY SYSTEM: Load Inter Tight font from next/font/google
const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// 2. METADATA FOUNDATION: Next.js 16 SEO & Metadata standard setup
export const metadata: Metadata = {
  metadataBase: new URL("https://lgn.co.id"),
  title: {
    template: "%s | Langit Global Nusantara",
    default: "Langit Global Nusantara (LGN) | Autonomous Systems, UAV & Robotics Solutions",
  },
  description: "Langit Global Nusantara (LGN) delivers autonomous systems, UAV platforms, robotics, AI-enabled technologies, and mission-critical engineering solutions for government, industrial, maritime, and public safety operations across Indonesia.",
  openGraph: {
    title: "Langit Global Nusantara (LGN) | Autonomous Systems, UAV & Robotics Solutions",
    description: "Langit Global Nusantara (LGN) delivers autonomous systems, UAV platforms, robotics, AI-enabled technologies, and mission-critical engineering solutions for government, industrial, maritime, and public safety operations across Indonesia.",
    url: "https://lgn.co.id",
    siteName: "Langit Global Nusantara",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Langit Global Nusantara (LGN) | Autonomous Systems, UAV & Robotics Solutions",
    description: "Langit Global Nusantara (LGN) delivers autonomous systems, UAV platforms, robotics, AI-enabled technologies, and mission-critical engineering solutions for government, industrial, maritime, and public safety operations across Indonesia.",
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
  alternates: {
    canonical: "./",
  },
};

// 3. VIEWPORT CONFIGURATION: Next.js 16 viewport specification (separated from Metadata)
export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // Accessbility standard for pinch zoom
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="id" 
      className={`${interTight.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-canvas text-text-primary">
        {children}
      </body>
    </html>
  );
}
