import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Header from "./components/header/header"; 
 


const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: " Criando Login Modal com Next.js e Node.js",
  description: "configuração de login em modal",
};

export default function RootLayout({ children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${figtree.variable}`} suppressHydrationWarning> 
        <Header />
        {children}
      </body>
    </html>
  );
}
