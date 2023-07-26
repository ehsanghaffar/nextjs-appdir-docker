"use client"
import RecipeCard from '@/components/RecipeCard';
import { SearchComponent } from '@/components/Search'
import SingleRecipeTopSection from '@/components/SingleRecipeTopSection'
import { GetAllRecipesResponse, Recipe } from '@/types/Recipe';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const SearchPage = () => {
  const { q } = useParams();
  console.log("q", q);
  const [searches, setSearches] = useState<GetAllRecipesResponse[]>()
  
  useEffect(() => {
    const getSearches = async () => {
      try {
        const response = await fetch(`/api/search/?q=${q}`, {
          method: "GET"
        })
        if (response.ok) {
          const data = await response.json()
          setSearches(data)
        }
      } catch (error) {
        console.log(error);
      }
    }
    getSearches()
  },[])

  return (
    <>
    <SingleRecipeTopSection 
        sectionBackground={"/search-page.jpg"} 
        recipeName="Searching Recipes"
        recipeDesc="Discover, Cook, and Savor Delicious Recipes!"
      />
    <SearchComponent classes='bg-white' />
    <div className="grid grid-cols-5 gap-4 p-10">
      {
        searches?.length === 0 && <p>Nothing founded ...</p>
      }
      {
        searches && searches?.map((recipes: GetAllRecipesResponse) => (
          <RecipeCard key={recipes._id} recipe={recipes} />
        ))
      }
    </div>
    </>
  )
}

export default SearchPage