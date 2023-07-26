import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import Navbar from "../components/Header";
import vazirmatn from "../styles/fonts";
import "./globals.css";

library.add(fab, fas)

export const metadata = {
  title: "Recipe App",
  description: "Welcome to Recpie app",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${vazirmatn.className} flex flex-col min-h-screen`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}