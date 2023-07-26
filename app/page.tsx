
import Link from "next/link";
import HeaderBottom from "../components/HeaderBottom";
import LandingSection from "../components/LandingSection";
import LatestRecipes from "../components/LatestRecipes";
import Button from "../components/ui/Button";

// تعریف کامپوننت Home
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