"use client"
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import SingleRecipeMain from "../../../components/SingleRecipeMain";
import SingleRecipeTopSection from "../../../components/SingleRecipeTopSection";
import { IRecipCreate } from "../../../models/recipe";
import Button from "@/components/ui/Button";

// کامپوننت SingleRecipe که اطلاعات یک رسپی را نمایش می‌دهد
const SingleRecipe = () => {
  const { id } = useParams(); // دریافت پارامتر id از URL
  const [singleRecipe, setSingleRecipe] = useState<IRecipCreate | undefined>(
    undefined
  );

  const onDeleteRecipe = async (id: string) => {
    try {
      const response = await fetch(`/api/recipes/${id}`, {
        method: "DELETE"
      })
      const data = response.json()
      console.log("deleted", data);
    } catch (error) {
      console.log("er",error);
    }
  }

  useEffect(() => {
     // دریافت رسپی با استفاده از شناسه
  const get_recipe_by_id = async (id: string) => {
    try {
      const res = await fetch(`/api/recipes/get-single-recipe?id=${id}`, {
        method: "GET",
      });
      const data = await res.json();
      setSingleRecipe(data.data);
    } catch (error) {
      console.log("Error in getting product by ID (service) =>", error);
    }
  };
    get_recipe_by_id(id); // دریافت رسپی با استفاده از شناسه بعد از بارگذاری کامپوننت
  }, []);

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
      <div className="grid grid-cols-2 gap-6">
      {/* <Button status="danger" className="roundedrounded px-4 py-2 bg-orange-600" onClick={() => onDeleteRecipe(id)}>
        حذف رسپی
      </Button> */}
      </div>
    </>
  );
};

export default SingleRecipe;