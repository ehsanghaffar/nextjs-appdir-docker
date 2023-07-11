import React from "react";
import LatestRecipes from "../../components/LatestRecipes";
import SingleRecipeTopSection from "../../components/SingleRecipeTopSection";
import { SearchComponent } from "@/components/Search";

const Recipes = () => {
  return (
    <>
      <SingleRecipeTopSection 
        sectionBackground={"/header-recipe.png"} 
        recipeName="... رسپی ها ..."
        recipeDesc="دنبال یه دسر خاص و خوشمزه ای ؟ سریع پیداش کن ..."
      />
      <SearchComponent classes="bg-[#F9f8f8]" />
      <section id="recipes">
        <div className="container py-10">
          <div className="recipes-section">
            <LatestRecipes limitNumber={20} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Recipes;
