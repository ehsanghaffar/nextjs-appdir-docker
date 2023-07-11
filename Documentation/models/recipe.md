# Recipe Model

کد فوق مربوط به تعریف مدل داده برای داکیومنت رسپی در MongoDB است. در ادامه، توضیحی مفصل برای هر بخش از کد ارائه خواهم داد:

```javascript
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

## در این کد

- تعریف مدل داده برای داکیومنت رسپی در MongoDB با استفاده از `interface IRecipe` صورت گرفته است. این مدل داده شامل ویژگی‌های `name`، `description`، `ingredients`، `photo` و `steps` است.
- نوع داده `Ingredients` برای آرایه مواد اولیه تعریف شده است که شامل ویژگی‌های `id` و `name` است.
- نوع داده `IRecipCreate` برای ایجاد رسپی جدید با استفاده از ویژگی‌های `name`، `description`، `ingredients`، `photo` و `steps` تعریف شده است.
- با استفاده از `new Schema`، طرح مدل رسپی ایجاد شده است که شامل ویژگی‌های `name`، `description`، `ingredients`، `photo` و `steps` است.
- با استفاده از `mongoose.models.Recipe || mongoose.model<IRecipe>('Recipe', RecipeSchema)`، مدل رسپی ساخته شده است. اگر مدل قبلاً تعریف شده باشد، از مدل موجود استفاده می‌شود. در غیر این صورت، مدل جدید ایجاد می‌شود و نام آن "Recipe" است.
