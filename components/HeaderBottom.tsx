import React from "react";
import Link from "next/link";
import HeaderLeftImage from '../public/header-leftt.png'
import Image from "next/image";
import {  ArrowRightIcon } from "@heroicons/react/24/solid";

const LandingHero: React.FC = () => {

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      <div className="col-span-2 flex flex-col gap-8">
        <h1 className="font-extrabold text-7xl text-red-600 m-0 p-0">Recipe App</h1>
        <p className="header-des">
        Discover, Cook, and Savor Delicious Recipes!
        </p>
        <span className="w-[650px] leading-loose">
        Are you a food enthusiast always on the lookout for exciting new recipes to try? Look no further! Foodie Delights is here to fulfill all your culinary desires with a vast collection of mouthwatering recipes from around the world.
        </span>
        <Link
          href={'/recipes'}
          className={
            "w-48 py-3 px-6 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-500 text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all text-sm dark:bg-gray-700 dark:hover:bg-gray-500 dark:focus:ring-offset-gray-800"
          }
        >
          <span className="text-lg font-medium">
            Lets Go
          </span>
          <ArrowRightIcon width={20} />
        </Link>
      </div>
      <div className="flex">
        {/* <img src="header-leftt.png" alt="header" className="header-left-img" /> */}
        <Image
          src={HeaderLeftImage}
          alt="Deniz Paz"
          width={450}
          />
      </div>
    </div>
  );
};

export default LandingHero
