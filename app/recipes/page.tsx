import React from "react";
import LatestRecipes from "@/components/LatestRecipes";

const Recipes = () => {
  return (
    <>
      <section>
        <div className="bg-white">
          <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
            <h2 className=" text-5xl font-extrabold text-gray-700">
              <span className="block">... رسپی ها ...</span>
            </h2>
            <p className="text-xl mt-4 max-w-md mx-auto text-gray-400">
              دنبال یه دسر خاص و خوشمزه ای ؟ سریع پیداش کن ...
            </p>
            <div className="lg:mt-0 lg:flex-shrink-0">
              <div className="mt-12 inline-flex rounded-md shadow">
              
              </div>
            </div>
          </div>
        </div>
      </section>
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
