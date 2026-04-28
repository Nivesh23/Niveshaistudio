import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nivesh AI Solutions | Premium AI-Powered Digital Solutions",
  description:
    "Transform your business with cutting-edge AI solutions. We specialize in AI chatbots, NLP, computer vision, predictive analytics, and custom AI SaaS platforms. Based in New Delhi, serving globally.",
  keywords: [
    "AI Solutions",
    "Artificial Intelligence",
    "Machine Learning",
    "AI Chatbots",
    "NLP",
    "Computer Vision",
    "Web Development",
    "3D Web Experience",
    "AI Agency India",
    "Nivesh AI",
  ],
  authors: [{ name: "Nivesh", url: "https://niveshai.com" }],
  openGraph: {
    title: "Nivesh AI Solutions | Premium AI-Powered Digital Solutions",
    description:
      "Transform your business with cutting-edge AI solutions. Chatbots, NLP, Computer Vision, and more.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=Playfair+Display:wght@400;600;700&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased noise-overlay">{children}</body>
    </html>
  );
}
