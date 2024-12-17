import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ProgressBarProvider from "./components/ProgressBar";
import { Suspense } from "react";
import { classNames } from "./constants/common";
import styles from "./page.module.css";
import { GoogleTagManager } from "@next/third-parties/google";

import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Phuchoichucnang247",
  description: "Phuchoichucnang247",
  keywords:
    "phục hồi chức năng, phục hồi chức năng vận động, phục hồi chức năng thể chất, phục hồi chức năng sau chấn thương, phục hồi chức năng sau đột quỵ, phục hồi chức năng tại nhà, phục hồi chức năng vật lý trị liệu, thiết bị phục hồi chức năng, trung tâm phục hồi chức năng, bài tập phục hồi chức năng, dịch vụ phục hồi chức năng, phục hồi chức năng thần kinh, phục hồi chức năng cơ xương khớp, phục hồi chức năng hô hấp, phục hồi chức năng trẻ em, phục hồi chức năng người cao tuổi, phục hồi chức năng chi trên, phục hồi chức năng chi dưới, phục hồi chức năng sau phẫu thuật, phục hồi chức năng tim mạch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Header />
      <body className={classNames(styles.main, inter.className)}>
        <GoogleTagManager gtmId="GTM-5FBBVBD6" />
        <Navbar />
        <Suspense>
          <ProgressBarProvider>{children}</ProgressBarProvider>
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
