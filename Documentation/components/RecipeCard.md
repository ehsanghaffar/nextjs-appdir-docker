# RecipeCard

کد فوق یک کامپوننت React به نام "RecipeCard" را تعریف می‌کند که وظیفه نمایش کارت رسپی را دارد. در ادامه، توضیحی مفصل برای هر بخش از کد ارائه خواهم داد:

```javascript
// وارد کردن کامپوننت Link از فایل next/link
import Link from "next/link";

// وارد کردن کتابخانه React
import React from "react";

// وارد کردن کامپوننت Button از فایل ui/Button
import Button from "./ui/Button";
import { Recipe } from "../types/Recipe";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

interface RecipeCardProps {
  recipe: Recipe | any;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <>
      {/* لینک به جزئیات رسپی */}
      <Link href={`recipes/${recipe?._id}`}>
        <div className="w-64 m-auto overflow-hidden shadow rounded-2xl h-90 ease-in-out hover:-translate-y-4 duration-300">
          <img
            alt="eggs"
            src={`${recipe?.photo}`}
            className="rounded-t-lg w-full h-[220px]"
          />
          <div className="relative w-full p-4 bg-white">
            {/* نام رسپی */}
            <p className="mb-2 text-lg font-medium text-gray-800">
              {recipe?.name}
            </p>
            {/* توضیحات رسپی */}
            <p className="text-xs text-gray-600">
              {recipe?.description.substring(0, 60)}...
            </p>
            <div className="flex flex-wrap items-center mt-6 justify-starts">
              {/* دکمه مشاهده رسپی */}
              <Button
                type="button"
                className="py-3 px-4 flex gap-4 justify-center items-center bg-slate-700 hover:bg-slate-800 focus:ring-slate-500 focus:ring-offset-slate-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                <span>دیدن رسپی</span>
                <ArrowLeftIcon width={16} />
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default RecipeCard;
```

کامپوننت "RecipeCard" وظیفه نمایش یک کارت رسپی را بر عهده دارد.

- در این کامپوننت، از کامپوننت `Link` برای ایجاد لینک به صفحه جزئیات رسپی استفاده می‌شود.
- عناصر مختلف کارت رسپی شامل عکس، نام رسپی و توضیحات کوتاه رسپی نمایش داده می‌شوند.
- با فشردن دکمه "دیدن رسپی"، کاربر به صفحه جزئیات رسپی هدایت می‌شود.

با استفاده از کامپوننت "RecipeCard" می‌توانید یک کارت رسپی را در صفحه خود نمایش دهید.
