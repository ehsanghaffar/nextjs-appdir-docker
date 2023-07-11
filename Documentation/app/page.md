# Home

کد فوق یک کامپوننت Home است که صفحه اصلی را تعریف می‌کند. در ادامه، توضیحی مفصل برای هر بخش از کد ارائه خواهم داد:

```javascript
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
          {/* نمایش کامپوننت HeaderBottom */}
          <HeaderBottom />

          {/* نمایش کامپوننت LandingSection */}
          <LandingSection
            title={"رسپی‌ها"}
            subTitle={"آماده اید تا کلی دسر خوشمزه با هم درست کنیم؟"}
            rootClasses={"bg-gray-50"}
          >
            {/* نمایش کامپوننت LatestRecipes */}
            <LatestRecipes limitNumber={4} />

            {/* نمایش دکمه "دیدن همه رسپی‌ها" */}
            <div className="flex flex-col mx-auto mt-20 items-center">
              <Link href={'/recipes'}>
                <Button className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-500 text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all text-sm dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-offset-gray-800">
                  دیدن همه رسپی‌ها
                </Button>
              </Link>
            </div>
          </LandingSection>
        </main>
      </div>
    </>
  );
}
```

این کامپوننت برای تعریف صفحه اصلی استفاده می‌شود. در اینجا:

- کامپوننت `HeaderBottom` به عنوان بخش بالایی صفحه نمایش داده می‌شود.
- کامپوننت `LandingSection` به عنوان بخش اصلی صفحه نمایش داده می‌شود. در اینجا، عنوان و زیرعنوان بخش تعریف شده است و کامپوننت `LatestRecipes` به همراه تعداد محدودی رسپی نمایش داده می‌شود. همچنین، دکمه "دیدن همه رسپی‌ها" نیز در این بخش قرار دارد که با کلیک بر روی آن به صفحه رسپی‌ها هدایت می‌شویم.