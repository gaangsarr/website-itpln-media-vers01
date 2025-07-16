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

export default function Head() {
  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
        rel="stylesheet"
      />
    </>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fontPoppins.className} antialiased`}>
        {/* Fixed Navbar */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
          <Navbar />
        </div>

        {/* Main Content dengan padding top untuk navbar */}
        <div className="pt-16 lg:pt-20">{children}</div>
      </body>
    </html>
  );
}
