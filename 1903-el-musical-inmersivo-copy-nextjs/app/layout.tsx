import type { CSSProperties, ReactNode } from "react";
import { Bodoni_Moda, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const bodoniModa = Bodoni_Moda({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-bodoni",
  display: "swap",
});

const fontVars = {
  ["--font-family-body"]: "var(--font-inter), Inter, system-ui, sans-serif",
  ["--font-family-heading"]:
    'var(--font-bodoni), "Bodoni Moda", Georgia, serif',
} as CSSProperties;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es-419" className={`${inter.variable} ${bodoniModa.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* Single Material family, deferred to avoid blocking first paint */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
          media="print"
          id="material-symbols-font"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `document.getElementById('material-symbols-font')?.setAttribute('media','all');`,
          }}
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
          />
        </noscript>
        <meta
          name="theme-color"
          content="#F0E7D7"
          suppressHydrationWarning={true}
        />
      </head>
      <body style={fontVars}>{children}</body>
    </html>
  );
}
