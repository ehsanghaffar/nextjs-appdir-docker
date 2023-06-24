# داکیومت کامپوننت ها به صورت جدا

## کامپوننت رسپی تکی

```javascript
"use client";
import SingleRecipeMain from "@/components/SingleRecipeMain";
import SingleRecipeTopSection from "@/components/SingleRecipeTopSection";
import { IRecipCreate } from "@/models/recipe";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const SingleRecipe = () => {
  const { id } = useParams();
  const [singleRecipe, setSingleRecipe] = useState<IRecipCreate | undefined>(
    undefined
  );

  const get_recipe_by_id = async (id: string) => {
    try {
      const res = await fetch(`/api/recipes/get-single-recipe?id=${id}`, {
        method: "GET",
      });

      const data = await res.json();
      setSingleRecipe(data.data);
      return data;
    } catch (error) {
      console.log("Error in getting product by ID (service) =>", error);
    }
  };

  useEffect(() => {
    get_recipe_by_id(id);
  }, []);

  console.log(singleRecipe);

  return (
    <>
      <SingleRecipeTopSection
        recipeName={singleRecipe?.name}
        recipeDesc={singleRecipe?.description}
      />
      <SingleRecipeMain
        recipePhoto={singleRecipe?.photo}
        recipeIngredients={singleRecipe?.ingredients}
        recipeSteps={singleRecipe?.steps}
      />
    </>
  );
};

export default SingleRecipe;
```

### توضیحات

- این کد یک کامپوننت React است که از `SingleRecipeTopSection` و `SingleRecipeMain` استفاده می‌کند.
- از `useParams` برای دریافت پارامتر `id` از آدرس استفاده می‌شود.
- در این کامپوننت، از `fetch` برای ارسال درخواست به آدرس `/api/recipes/get-single-recipe` برای دریافت اطلاعات رسپی استفاده می‌شود.
- اطلاعات دریافتی از سرور در متغیر `singleRecipe` ذخیره می‌شود و به عنوان پارامترهای ورودی به کامپوننت `SingleRecipeTopSection` و `SingleRecipeMain` ارسال می‌شوند.
- در

 نهایت، اطلاعات رسپی در کنسول چاپ می‌شود.

## کامپوننت همه‌ی رسپی‌ها

```javascript
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
```

### توضیحات

- این کد یک کامپوننت React است که از کامپوننت `LatestRecipes` استفاده می‌کند.
- این کامپوننت قسمتی از یک صفحه وب را تشکیل می‌دهد که در آن لیستی از رسپی‌ها نمایش داده می‌شود.
- عنوان و متن معرفی نمایش داده می‌شود و در ادامه لیست رسپی‌ها نمایش داده می‌شود.

## اندپوینت مدیریت رسپی‌ها

```javascript
import mime from "mime";
import { connectToDatabase } from '@/lib/mongodb';
import { NextResponse } from 'next/server';
import { Recipe } from '@/models/index'
import { join } from "path";
import { stat, writeFile } from "fs/promises";
connectToDatabase()

export async function GET() {
  try {
    const recipes = Recipe.find()
    return NextResponse.json((await recipes).reverse())
  } catch (error) {
    console.log(error)
    return NextResponse.json('error', {
      status: 500
    })
  }
}

export async function POST(req: Request) {
  const data = await req.formData();
  const file: File | null = data.get('photo') as unknown as File
  const bytes = await file.arrayBuffer()

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
```

### توضیحات

- این کد شامل دو تابع `GET` و `POST` است که به عنوان رویدادهای مربوط به درخواست‌های HTTP GET و POST در نظر گرفته شده‌اند.
- تابع `GET` به عنوان پاسخ به درخواست GET برای دریافت لیست رسپی‌ها استفاده می‌شود.
- تابع `POST` برای ذخیره رسپی جدید استفاده می‌شود. در این تابع، اطلاعات فرم ارسال شده درخواست دریافت و یک فایل تصویر آپلود می‌شود. سپس اطلاعات رسپی جدید به همراه مسیر تصویر آپلود شده در پایگاه داده ذخیره می‌شود.
- در صورت بروز خطا، خروجی مناسب به همراه کد وضعیت HTTP مناسب برگردانده می‌شود.

## اندپوینت گرفتن یک رسپی از دیتابیس

```javascript
import { Recipe } from "@/models";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) return NextResponse.json({ status: 400, success: false, message: 'Please provide recipe id.' });

    const recipe = await Recipe.findOne({
      _id: id
    })
    if (recipe) {
      return NextResponse.json({ status: 200, data: recipe });
    } else {
      return NextResponse.json({ status: 204, success: false, message: 'No Product found.' });
    }
  } catch (error) {
    console.log('Error in getting recipe by id:', error);
    return NextResponse.json({ status: 500, success: false, message: 'Something went wrong. Please try again!' });
  }
}
```

### توضیحات

- این کد شامل یک تابع `GET` است که به عنوان رویداد مربوط به درخواست HTTP GET در نظر گرفته شده است.
- این تابع بر اساس پارامتر `id`

 درخواست، یک رسپی را از پایگاه داده بازیابی می‌کند.

- در صورت وجود رسپی، اطلاعات آن به همراه کد وضعیت HTTP 200 برگردانده می‌شود. در غیر این صورت، پیام خطای مناسب به همراه کد وضعیت HTTP 204 برگردانده می‌شود.
- در صورت بروز خطا، پیام خطا مناسب به همراه کد وضعیت HTTP 500 برگردانده می‌شود.

## ماژول ارتباط با دیتابیس

```javascript
import mongoose, { connect, connection } from 'mongoose'

const { MONGO_URI = 'mongodb://root:root@mongo:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false' } = process.env;

const options: any = {
  useUnifiedTopology: true,
  useNewUrlParser: true
}

export const connectToDatabase = async () => {
  if (!connection.readyState) {
    console.log('Connecting to ', MONGO_URI)
    await mongoose.connect(MONGO_URI, options)
  }
}
```

### توضیحات

- این کد شامل تابع `connectToDatabase` است که برای برقراری ارتباط با پایگاه داده MongoDB استفاده می‌شود.
- این تابع از کتابخانه `mongoose` برای برقراری اتصال با استفاده از آدرس `MONGO_URI` استفاده می‌کند.
- اتصال با استفاده از تنظیمات مشخص شده در `options` برقرار می‌شود.
- در صورتی که اتصال قبلاً برقرار نباشد، اتصال به پایگاه داده برقرار می‌شود.

با توجه به این داکیومنت، شما می‌توانید از کدهای مذکور استفاده کنید و توضیحات مربوطه را برای هر کد مطالعه کنید.
