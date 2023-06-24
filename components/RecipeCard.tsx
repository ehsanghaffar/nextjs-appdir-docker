import {  Recipe } from "@/types/Recipe";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";
import Button from "./ui/Button";

interface RecipeCardProps {
  recipe: Recipe | any;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <>
      <Link href={`recipes/${recipe?._id}`}>
        <div className="w-64 m-auto overflow-hidden shadow rounded-2xl h-90 ease-in-out hover:-translate-y-4 duration-300">
          <img
            alt="eggs"
            src={`${recipe?.photo}`}
            className="rounded-t-lg w-full h-[220px]"
          />
          <div className="relative w-full p-4 bg-white">
            <p className="mb-2 text-xl font-medium text-gray-800">
              {recipe?.name}
            </p>
            <p className="text-xs text-gray-600">{recipe?.description}</p>
            <div className="flex flex-wrap items-center mt-6 justify-starts">
              <Button
                type="button"
                className="py-3 px-4 flex gap-4 justify-center items-center bg-slate-700 hover:bg-slate-800 focus:ring-slate-500 focus:ring-offset-slate-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                <span>دیدن رسپی</span>
                <ArrowLeftIcon width={16} />
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default RecipeCard;
