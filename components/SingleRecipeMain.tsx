import { Ingredients } from "@/models/recipe";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import React from "react";

interface SingleRecipeMainProps {
  recipePhoto?: string | any;
  recipeIngredients?: Ingredients[];
  recipeSteps?: string;
}

const SingleRecipeMain = ({
  recipePhoto,
  recipeIngredients,
  recipeSteps,
}: SingleRecipeMainProps) => {
  // console.log(JSON.parse(recipeIngredients));

  return (
    <>
      <div className="md:container md:mx-auto">
        <section className="grid grid-cols-2 gap-6 items-center justify-items-center p-10">
          <ul className="list-outside">
            <p className=" text-xl p-3 text-red-600 font-medium">
              مواد لازم برای تهیه:
            </p>
            {recipeIngredients?.map((ing) => (
              <li className="flex items-center gap-3 py-2" key={ing.id}>
                <CheckCircleIcon
                  width={24}
                  className="flex-shrink-0 h-7 w-7 text-blue-600"
                />
                <span className="text-gray-700 text-lg">{ing.name}</span>
              </li>
            ))}
          </ul>
          <div className="flex-1 p-5">
            <img
              src={recipePhoto}
              className="rounded-xl"
              width={300}
              alt={"deniz recipe"}
            />
          </div>
        </section>
        <section className="flex flex-col w-3/5 mx-auto py-20">
          <h3 className=" text-3xl mb-10 divide-y-2 font-bold text-red-600">
            دستور تهیه:
          </h3>
          <div className="whitespace-normal text-lg leading-loose">
            <p>{recipeSteps}</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default SingleRecipeMain;
