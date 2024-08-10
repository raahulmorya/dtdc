import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Sumitra Express - Fast & Reliable DTDC Courier Services | Authorized Partner",
  description:
    "Experience fast, reliable, and secure DTDC courier services with Sumitra Express. As an authorized DTDC channel partner, we ensure your parcels are delivered safely and on time. Contact us today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
        <script
          src="https://kit.fontawesome.com/a076d05399.js"
          crossorigin="anonymous"
        ></script>
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
