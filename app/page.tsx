
import Link from "next/link";
import HeaderBottom from "../components/HeaderBottom";
import LandingSection from "../components/LandingSection";
import LatestRecipes from "../components/LatestRecipes";
import Button from "../components/ui/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recipe App",
  description: "Welcome to Recpie app",
  applicationName: "RecipeApp",
  authors:[
    {
      name: "Ehsan Ghaffar",
      url: "https://ehsanghaffarii.ir"
    }
  ],
  creator: "Ehsan Ghaffar",
  verification: {
    google: "aG69rfEfYwvFjNKS3C-jUj60PsqRr2LO9lHyKw0wNFE"
  },
  openGraph: {
    title: 'Nextjs Appdir Recipe App',
    description: 'Recipe App created with next.js 13.4',
    type: 'article',
    publishedTime: '2023-01-01T00:00:00.000Z',
    authors: ['Ehsan Ghaffar', 'Eindev'],
  },

};

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <main className="flex flex-col">
          <div className="container py-10">
          <HeaderBottom />
          </div>
          <LandingSection
            title={"Best Recipes"}
            subTitle={"Your Ultimate Recipes"}
            rootClasses={"bg-gray-50"}
          >
            <LatestRecipes limitNumber={4} />
            <div className="flex flex-col mx-auto mt-20 items-center">
              <Link href={'/recipes'}>
              <Button className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-500 text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all text-sm dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-offset-gray-800">
                All recipes
              </Button>
              </Link>
            </div>
          </LandingSection>
        </main>
      </div>
    </>
  );
}