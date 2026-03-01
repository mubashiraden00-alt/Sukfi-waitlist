import type { Metadata } from "next";
import Script from 'next/script';
import Script from 'next/script';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sukfi | Spiritual Wealth",
  description: "The first Halal compliance engine for your portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
                {/* Floating AI Chat Button */}
                <div style={{position: 'fixed', bottom: '32px', right: '32px', zIndex: 9999}}>
                  <button
                    id="ai-chat-toggle"
                    style={{
                      background: '#00FF85',
                      color: '#050505',
                      fontWeight: 'bold',
                      borderRadius: '999px',
                      padding: '14px 32px',
                      boxShadow: '0 4px 24px rgba(0,255,133,0.18)',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '1rem',
                      letterSpacing: '0.08em',
                      transition: 'box-shadow 0.2s',
                    }}
                    onClick={() => {
                      const el = document.querySelector('.elfsight-app-cd2466c7-0db9-4f43-8e33-781379e56544');
                      if (el) {
                        el.style.display = el.style.display === 'block' ? 'none' : 'block';
                        el.style.position = 'fixed';
                        el.style.bottom = '90px';
                        el.style.right = '32px';
                        el.style.zIndex = '9999';
                      }
                    }}
                  >
                    AI Chat
                  </button>
                </div>
                {/* Elfsight AI Widget (initially hidden, toggled by button) */}
              <Script src="https://elfsightcdn.com/platform.js" strategy="afterInteractive" />
              <div className="elfsight-app-cd2466c7-0db9-4f43-8e33-781379e56544" data-elfsight-app-lazy style={{display: 'none'}}></div>
              {/* Elfsight raw code for AI safety assistant */}
              <Script 
                src="https://elfsightcdn.com" 
                strategy="afterInteractive" 
              />
              <div className="elfsight-app-cd2466c7-0db9-4f43-8e33-781379e56544" data-elfsight-app-lazy></div>
      </body>
    </html>
  );
}
