import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "1903: El Musical Inmersivo",
  description:
    "Musical inmersivo sobre el nacimiento de la República de Panamá. Del 23 de noviembre al 2 de diciembre de 2026 en Islas de Atlapa.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="bg-stage text-parchment">
        <div className="max-w-[430px] mx-auto min-h-screen relative overflow-hidden shadow-2xl bg-ink">
          <div className="absolute inset-0 overflow-y-auto overflow-x-hidden">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
