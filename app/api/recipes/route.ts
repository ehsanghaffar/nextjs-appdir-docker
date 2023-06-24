import mime from "mime";
import { connectToDatabase } from '@/lib/mongodb';
import { NextResponse } from 'next/server';
import { Recipe } from '@/models/index'
import { join } from "path";
import { stat, writeFile } from "fs/promises";

connectToDatabase();

// ایجاد درخواست GET برای دریافت لیست رسپی‌ها
export async function GET() {
  try {
    const recipes = Recipe.find();
    return NextResponse.json((await recipes).reverse());
  } catch (error) {
    console.log(error);
    return NextResponse.json('error', {
      status: 500
    });
  }
}

// ایجاد درخواست POST برای ایجاد رسپی جدید
export async function POST(req: Request) {
  const data = await req.formData();
  const file: File | null = data.get('photo') as unknown as File;
  const bytes = await file.arrayBuffer();
  
  const buffer = Buffer.from(await file.arrayBuffer());
  const relativeUploadDir = `/uploads/recipes`;
  const uploadDir = join(process.cwd(), "public", relativeUploadDir);
  await stat(uploadDir);
  
  try {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const filename = `${file.name.replace(
      /\.[^/.]+$/,
      ""
    )}-${uniqueSuffix}.${mime.getExtension(file.type)}`;
    await writeFile(`${uploadDir}/${filename}`, buffer);
    
    const newRecipe = {
      name: data.get('name'),
      description: data.get('description'),
      ingredients: JSON.parse(data.get('ingredients') as string),
      steps: data.get('steps'),
      photo: `${relativeUploadDir}/${filename}`
    }
    
    console.log("recipe", newRecipe)
    const recipe = new Recipe(newRecipe);
    const save = await recipe.save();
    return NextResponse.json(save);
  } catch (error) {
    console.log(error);
    return NextResponse.json('error', {
      status: 500,
    });
  }

}