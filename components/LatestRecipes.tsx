// استفاده از مودول کلاینت
"use client";

// وارد کردن کامپوننت RecipeCard از فایل RecipeCard
import RecipeCard from "@/components/RecipeCard";

// وارد کردن ماژول‌های React، useEffect و useState
import React, { useEffect, useState } from "react";

// وارد کردن نوع داده GetAllRecipesResponse از فایل types/Recipe
import { GetAllRecipesResponse } from "@/types/Recipe";

// وارد کردن کامپوننت SkeletonCard از فایل ui/Skeleton
import SkeletonCard from "./ui/Skeleton";

// تعریف ویژگی‌های LatestRecipesProps
interface LatestRecipesProps {
  limitNumber: number;
}

// تعریف کامپوننت LatestRecipes
const LatestRecipes = ({ limitNumber }: LatestRecipesProps) => {
  // تعریف وضعیت های allRecipes و loading با استفاده از useState
  const [allRecipes, setAllRecipes] = useState<
    GetAllRecipesResponse[] | undefined
  >(undefined);
  const [loading, setLoading] = useState(true);

  // تابع get_all_recipes برای دریافت همه‌ی رسپی‌ها
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

  // استفاده از useEffect برای اجرای تابع get_all_recipes در زمان بارگیری صفحه
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

// صادر کردن کامپوننت LatestRecipes به عنوان کامپوننت پیشفرض
export default LatestRecipes;