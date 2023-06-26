import React from "react";
import LatestRecipes from "../../components/LatestRecipes";
import SingleRecipeTopSection from "../../components/SingleRecipeTopSection";

// کامپوننت Recipes که لیست رسپی‌ها را نمایش می‌دهد
const Recipes = () => {
  return (
    <>
      {/* بخش بالایی */}
      <SingleRecipeTopSection 
        sectionBackground={"/header-recipe.png"} 
        recipeName="... رسپی ها ..."
        recipeDesc="دنبال یه دسر خاص و خوشمزه ای ؟ سریع پیداش کن ..."
      />
      {/* بخش لیست رسپی‌ها */}
      <section id="recipes">
        <div className="container py-10">
          <div className="recipes-section">
            {/* استفاده از کامپوننت LatestRecipes برای نمایش لیست آخرین رسپی‌ها */}
            <LatestRecipes limitNumber={20} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Recipes;
