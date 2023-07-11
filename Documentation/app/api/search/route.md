# Search

کد فوق یک فایل سمت سرور برای صفحه جستجوی داینامیک رسپی‌ها ایجاد می‌کند. در ادامه، توضیحی مفصل برای هر بخش از کد ارائه خواهم داد:

```javascript
import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../lib/mongodb";
import { Recipe } from "../../../models";

// اتصال به پایگاه داده MongoDB
connectToDatabase();

export const dynamic = 'force-dynamic'

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get('q');
    const recipes = await Recipe.find();

    // فیلتر کردن رسپی‌ها بر اساس عبارت جستجو
    const recipesData = recipes.filter((recipe) => {
      return recipe["name"].includes(query);
    });

    // بازگرداندن داده‌های رسپی‌ها به عنوان پاسخ JSON
    return NextResponse.json(recipesData);
  } catch (error) {
    console.log(error);
  }
}
```

این فایل سرور برای بررسی درخواست جستجوی داینامیک رسپی‌ها استفاده می‌شود.

- ابتدا به پایگاه داده MongoDB متصل می‌شویم با فراخوانی تابع `connectToDatabase()` که در فایل `lib/mongodb` تعریف شده است.
- متغیر `dynamic` برای اجرای داینامیک این صفحه تنظیم شده است.
- تابع `GET` برای دریافت درخواست جستجوی رسپی‌ها تعریف شده است. دریافت پارامتر `q` از آدرس URL و جستجوی رسپی‌ها بر اساس این پارامتر صورت می‌گیرد.
- رسپی‌ها به عنوان داده‌های JSON بازگردانده می‌شوند.

با استفاده از این فایل سرور، می‌توانید درخواست جستجوی داینامیک رسپی‌ها را در سمت سرور پردازش کنید.
