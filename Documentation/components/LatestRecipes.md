# LatestRecipes

کد فوق یک کامپوننت React به نام "LatestRecipes" را تعریف می‌کند که وظیفه نمایش آخرین رسپی‌ها را دارد. در ادامه، توضیحی مفصل برای هر بخش از کد ارائه خواهم داد:

```javascript
"use client";

import React, { useEffect, useState } from "react";
import { GetAllRecipesResponse } from "../types/Recipe";
import RecipeCard from "./RecipeCard";
import SkeletonCard from "./ui/Skeleton";

interface LatestRecipesProps {
  limitNumber: number;
}

const LatestRecipes = ({ limitNumber }: LatestRecipesProps) => {
  const [allRecipes, setAllRecipes] = useState<
    GetAllRecipesResponse[] | undefined
  >(undefined);
  const [loading, setLoading] = useState(true);

  const get_all_recipes = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/recipes", {
        method: "GET",
      });
      const data = await res.json();
      setAllRecipes(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("Error in getting all recipes (service) =>", error);
    }
  };

  useEffect(() => {
    get_all_recipes();
  }, []);

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {loading &&
          Array.from({ length: limitNumber || 4 }, (item, index) => (
            <div key={index} className="flex">
              <SkeletonCard />
            </div>
          ))}
        {!loading &&
          allRecipes
            ?.slice(0, limitNumber ? limitNumber : 4)
            ?.map((cake) => <RecipeCard key={cake._id} recipe={cake} />)}
      </div>
    </>
  );
};

export default LatestRecipes;
```

کامپوننت "LatestRecipes" وظیفه نمایش آخرین رسپی‌ها را بر عهده دارد. این کامپوننت از ویژگی‌های `limitNumber` برای محدود کردن تعداد رسپی‌ها استفاده می‌کند.

- در این کامپوننت از `useState` برای تعریف وضعیت‌های `allRecipes` و `loading` استفاده می‌شود.
- تابع `get_all_recipes` برای دریافت همه‌ی رسپی‌ها از API استفاده می‌کند. این تابع با فراخوانی API، داده‌های رسپی‌ها را دریافت کرده و وضعیت‌ها را به‌روز می‌کند.
- با استفاده از `useEffect`، تابع `get_all_recipes` در زمان بارگیری صفحه اجرا می‌شود.
- در بخش بصری، اگر در حالت بارگذاری (`loading`) بود، کارت‌های Skeleton نمایش داده می‌شوند. در غیر این صورت، رسپی‌های دریافت شده از API نمایش داده می‌شوند.

با استفاده از کامپوننت "LatestRecipes" می‌توانید آخرین رسپی‌ها را در صفحه خود نمایش دهید.
