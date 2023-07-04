
import { NextResponse } from 'next/server';
import { join } from "path";
import { stat, writeFile } from "fs/promises";
import { connectToDatabase } from "../../../lib/mongodb";
import { Recipe } from "../../../models";
import mime from 'mime';
import { existsSync } from "fs";
import fs from "fs/promises";
import path from "path";

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

  const fileArrayBuffer = await file.arrayBuffer();
  const destinationDirPath = path.join(process.cwd(), process.env.STORE_PATH!);

  if (!existsSync(destinationDirPath)) {
    await fs.mkdir(destinationDirPath, { recursive: true });
  }

  let name = data.get('name')
  var fileExtension = file.name.split('.').pop();
  let filename = `${name}.${fileExtension}`
  while (existsSync(path.join(destinationDirPath, filename))) {
    filename = `(1)` + filename;
  }
  await fs.writeFile(
    path.join(destinationDirPath, filename),
    Buffer.from(fileArrayBuffer)
  );
  try {
    const newRecipe = {
      name: data.get('name'),
      description: data.get('description'),
      ingredients: JSON.parse(data.get('ingredients') as string),
      steps: data.get('steps'),
      photo: `/api/file/${filename}`
    }
    
    const recipe = new Recipe(newRecipe);
    const save = await recipe.save();
    return NextResponse.json({ status: 200, data: save});
  } catch (error) {
    console.log(error);
    return NextResponse.json('error', {
      status: 500,
    });
  }

}