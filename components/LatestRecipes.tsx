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