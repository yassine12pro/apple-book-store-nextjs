import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Foter } from "@/components/mainlayout";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
    <main className="dark:bg-gray-900">
    {children}

    </main>
        <Foter />


      </body>
    </html>
  );
}
