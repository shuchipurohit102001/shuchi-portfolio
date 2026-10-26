import Footer from "@/components/ui/Footer";
import Nav from "@/components/ui/Nav";
import Providers from "@/providers/Provider";
import type { Metadata, Viewport } from "next";
import { Anek_Latin, Epilogue, Manrope } from "next/font/google";
import "./globals.css";

const anekLatin = Anek_Latin({
  variable: "--font-anek-latin",
  weight: ["600", "700"],
  subsets: ["latin"],
});

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-epilogue",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: {
    default: "Shuchi Purohit | Soft skills coach & business development",
    template: "%s | Shuchi Purohit",
  },
  description: "Soft skills coach, IT business development executive and founder of Skills Synergy and Bhoojanpriye.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fffdf9",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${epilogue.variable} ${anekLatin.variable} ${manrope.variable}`}>
      <body>
        <Providers>
          <Nav />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
