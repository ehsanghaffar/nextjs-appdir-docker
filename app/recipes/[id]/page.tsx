"use client";
import SingleRecipeMain from "@/components/SingleRecipeMain";
import SingleRecipeTopSection from "@/components/SingleRecipeTopSection";
import { IRecipCreate } from "@/models/recipe";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const SingleRecipe = () => {
  const { id } = useParams();
  const [singleRecipe, setSingleRecipe] = useState<IRecipCreate | undefined>(
    undefined
  );

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
    get_recipe_by_id(id);
  }, []);

  console.log(singleRecipe);

  return (
    <>
      <SingleRecipeTopSection
        recipeName={singleRecipe?.name}
        recipeDesc={singleRecipe?.description}
      />
      <SingleRecipeMain
        recipePhoto={singleRecipe?.photo}
        recipeIngredients={singleRecipe?.ingredients}
        recipeSteps={singleRecipe?.steps}
      />
    </>
  );
};

export default SingleRecipe;
