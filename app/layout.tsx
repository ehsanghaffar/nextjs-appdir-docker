import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import Navbar from "../components/Header";
import vazirmatn from "../styles/fonts";
import "./globals.css";

library.add(fab, fas)

// export const metadata: Metadata = {
//   title: "Recipe App",
//   description: "Welcome to Recpie app",
//   applicationName: "RecipeApp",
//   authors:[
//     {
//       name: "Ehsan Ghaffar",
//       url: "https://ehsanghaffarii.ir"
//     }
//   ],
//   creator: "Ehsan Ghaffar",
//   verification: {
//     google: "aG69rfEfYwvFjNKS3C-jUj60PsqRr2LO9lHyKw0wNFE"
//   },
//   openGraph: {
//     title: 'Nextjs Appdir Recipe App',
//     description: 'Recipe App created with next.js 13.4',
//     type: 'article',
//     publishedTime: '2023-01-01T00:00:00.000Z',
//     authors: ['Ehsan Ghaffar', 'Eindev'],
//   },

// };


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