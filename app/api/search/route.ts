import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../lib/mongodb";
import { Recipe } from "../../../models";

export const dynamic = 'force-dynamic'
connectToDatabase()

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get('q')
    const recipes = await Recipe.find()

    const recipesData = recipes.filter((recipe) => {
      return recipe["name"].includes(query)
    })
    return NextResponse.json(recipesData);
  } catch (error) {
    console.log(error)
  }

}
