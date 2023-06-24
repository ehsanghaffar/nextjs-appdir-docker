import React from "react";

interface SingleRecipeTopSectionProps {
  recipeName?: string;
  recipeDesc?: string;
}

const SingleRecipeTopSection = ({
  recipeName,
  recipeDesc,
}: SingleRecipeTopSectionProps) => {
  return (
    <>
      <section className="relative">
        <div className="recipe-header-pic">
          <img
            className="recipe-header-img"
            src="/recipe-header.jpg"
            alt="header"
          />
        </div>
        <div className="pRecipe-title">
          <h2 className="section-title">{recipeName}</h2>
          <p className="section-des">{recipeDesc}</p>
        </div>
      </section>
    </>
  );
};

export default SingleRecipeTopSection;
