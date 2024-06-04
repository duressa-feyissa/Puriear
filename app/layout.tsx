import type { Metadata } from "next";
import { Lato, Quicksand } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
  weight: ["100", "300", "400", "700", "900"],
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Puriear",
  description:
    "Say GOODBYE To Traditional Solutions For Earwax Buildup, The Future Is Puriear",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className} ${quicksand.className}`}>
        {children}
      </body>
    </html>
  );
}
