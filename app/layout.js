import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="px-10">
      <body className={inter.className}>
        <Navbar />
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
