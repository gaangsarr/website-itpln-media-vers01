import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

import "remixicon/fonts/remixicon.css";

const fontPoppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "ITPLN Media",
  description: "Website UKM ITPLN Media - 2025",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fontPoppins.className} antialiased`}>
        <Navbar />
        <div className="container mx-auto px-4">{children}</div>
      </body>
    </html>
  );
}
