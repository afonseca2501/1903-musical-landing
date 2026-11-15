import type { ReactNode } from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es-419">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:FILL,wght@0..1,100..700&family=Material+Symbols+Rounded:FILL,wght@0..1,100..700&family=Material+Symbols+Sharp:FILL,wght@0..1,100..700&display=block" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bodoni%20Moda:wght@100;200;300;400;500;600;700;800;900&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" />
        <meta
          name="theme-color"
          content="#F0E7D7"
          suppressHydrationWarning={true}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
