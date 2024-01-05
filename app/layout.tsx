import "./globals.css";
import Navbar from "./Header/Navbar";
import Wrapper from "./Warpper";
import { Inter } from "next/font/google";
import Footer from "./Components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eyad's Portfolio",
  description: "Eyad's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className && "dark:bg-black bg-white"}>
        <Wrapper>
          <Navbar />
          {children}
        </Wrapper>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
