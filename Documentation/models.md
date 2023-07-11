```typescript
import mongoose, { Document, Schema } from 'mongoose'

// تعریف مدل داده برای داکیومنت رسپی
export interface IRecipe extends Document {
  name: string;
  description: string;
  ingredients?: Ingredients[];
  photo: File | null;
  steps: string;
}

// تعریف نوع داده برای آرایه مواد اولیه
export interface Ingredients {
  id: number;
  name: string;
}

// تعریف نوع داده برای ایجاد رسپی جدید
export type IRecipCreate = Pick<IRecipe, "name" | "description" | "ingredients" | "photo" | "steps">

// تعریف طرح مدل رسپی
const RecipeSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  ingredients: [
    new Schema({
      id: Number,
      name: String
    },
    { _id: false }
    )
  ],
  photo: {
    type: String
  },
  steps: {
    type: String
  }
})

// تعریف مدل رسپی با استفاده از طرح مدل
export const Recipe = mongoose.models.Recipe || mongoose.model<IRecipe>('Recipe', RecipeSchema)
```

توضیحات:

- `mongoose` استفاده شده است که قبلاً معرفی شده است، برای تعریف و استفاده از مدل های داده MongoDB.
- `IRecipe` و `Ingredients` تعریف نوع داده برای داکیومنت رسپی و مواد اولیه است.
- `IRecipCreate` نوع داده‌ای است که برای ایجاد رسپی جدید استفاده می‌شود و تعدادی از ویژگی‌های `IRecipe` را انتخاب می‌کند.
- `RecipeSchema` یک طرح مدل است که ویژگی‌ها و انواع داده‌های مربوط به رسپی را تعریف می‌کند.
- `Recipe` مدل رسپی را تعریف می‌کند با استفاده از طرح مدل `RecipeSchema`. اگر قبلاً مدل با نام "Recipe" تعریف شده باشد، از آن استفاده می‌کند، در غیر این صورت یک مدل جدید با نام "Recipe" را ایجاد می‌کند.
