import React from "react";
interface SingleRecipeTopSectionProps {
  recipeName?: string;
  recipeDesc?: string;
  sectionBackground?: string;
}

const SingleRecipeTopSection = ({
  recipeName,
  recipeDesc,
  sectionBackground,
}: SingleRecipeTopSectionProps) => {
  return (
    <>
      <section className="relative">
        <div className="recipe-header-pic">
          <img
            height={400}
            className="recipe-header-img"
            src={sectionBackground}
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
