"use client"
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import SingleRecipeMain from "../../../components/SingleRecipeMain";
import SingleRecipeTopSection from "../../../components/SingleRecipeTopSection";
import { IRecipCreate } from "../../../models/recipe";

// کامپوننت SingleRecipe که اطلاعات یک رسپی را نمایش می‌دهد
const SingleRecipe = () => {
  const { id } = useParams(); // دریافت پارامتر id از URL
  const [singleRecipe, setSingleRecipe] = useState<IRecipCreate | undefined>(
    undefined
  );

  // دریافت رسپی با استفاده از شناسه
  const get_recipe_by_id = async (id: string) => {
    try {
      const res = await fetch(`/api/recipes/get-single-recipe?id=${id}`, {
        method: "GET",
        // headers: {
        //   "Content-Type": "application/json",
        // },
      });

      const data = await res.json();
      setSingleRecipe(data.data);
      return data;
    } catch (error) {
      console.log("Error in getting product by ID (service) =>", error);
    }
  };

  useEffect(() => {
    get_recipe_by_id(id); // دریافت رسپی با استفاده از شناسه بعد از بارگذاری کامپوننت
  }, []);

  console.log(singleRecipe); // نمایش اطلاعات رسپی در کنسول

  return (
    <>
      {/* استفاده از کامپوننت SingleRecipeTopSection برای نمایش بخش بالایی رسپی */}
      <SingleRecipeTopSection
        recipeName={singleRecipe?.name}
        recipeDesc={singleRecipe?.description}
        sectionBackground="/recipe-header.jpg"
      />
      {/* استفاده از کامپوننت SingleRecipeMain برای نمایش بخش اصلی رسپی */}
      <SingleRecipeMain
        recipePhoto={singleRecipe?.photo}
        recipeIngredients={singleRecipe?.ingredients}
        recipeSteps={singleRecipe?.steps}
      />
    </>
  );
};

export default SingleRecipe;