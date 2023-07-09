import React from "react";
import LatestRecipes from "../../components/LatestRecipes";
import SingleRecipeTopSection from "../../components/SingleRecipeTopSection";

const Recipes = () => {
  return (
    <>
      <SingleRecipeTopSection 
        sectionBackground={"/header-recipe.png"} 
        recipeName="... رسپی ها ..."
        recipeDesc="دنبال یه دسر خاص و خوشمزه ای ؟ سریع پیداش کن ..."
      />
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
