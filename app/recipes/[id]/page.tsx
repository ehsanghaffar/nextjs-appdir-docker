"use client"
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import SingleRecipeMain from "../../../components/SingleRecipeMain";
import SingleRecipeTopSection from "../../../components/SingleRecipeTopSection";
import { IRecipCreate } from "../../../models/recipe";

const SingleRecipe = () => {
  const { id } = useParams(); 
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
    get_recipe_by_id(id);
  }, []);

  return (
    <>
      
      <SingleRecipeTopSection
        recipeName={singleRecipe?.name}
        recipeDesc={singleRecipe?.description}
        sectionBackground="/recipe-header.jpg"
      />
      
      <SingleRecipeMain
        recipePhoto={singleRecipe?.photo}
        recipeIngredients={singleRecipe?.ingredients}
        recipeSteps={singleRecipe?.steps}
      />
      <div className="grid grid-cols-2 gap-6">
      {/* <Button status="danger" className="roundedrounded px-4 py-2 bg-orange-600" onClick={() => onDeleteRecipe(id)}>
        Remove
      </Button> */}
      </div>
    </>
  );
};

export default SingleRecipe;