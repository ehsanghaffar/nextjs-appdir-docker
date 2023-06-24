// وارد کردن کامپوننت LandingSection از فایل LandingSection
import LandingSection from "@/components/LandingSection";

// وارد کردن کامپوننت LatestRecipes از فایل LatestRecipes
import LatestRecipes from "@/components/LatestRecipes";

// وارد کردن کامپوننت HeaderBottom از فایل HeaderBottom
import HeaderBottom from "@/components/HeaderBottom";

// وارد کردن کامپوننت Button از فایل Button
import Button from "@/components/ui/Button";

// تعریف کامپوننت Home
export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <main className="flex flex-col">
          <HeaderBottom />
          <LandingSection
            title={"رسپی‌ها"}
            subTitle={"آماده اید تا کلی دسر خوشمزه با هم درست کنیم؟"}
            rootClasses={"bg-gray-50"}
          >
            <LatestRecipes limitNumber={4} />
            <div className="flex flex-col mx-auto mt-20 items-center">
              <Button className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-500 text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all text-sm dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-offset-gray-800">
                دیدن همه رسپی‌ها
              </Button>
            </div>
          </LandingSection>
        </main>
      </div>
    </>
  );
}