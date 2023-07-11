# Get Single Recipe

کد فوق یک فایل سمت سرور برای ایجاد درخواست GET در مورد یک رسپی بر اساس آی‌دی مشخص است. در ادامه، توضیحی مفصل برای هر بخش از کد ارائه خواهم داد:

```javascript
import { NextResponse } from "next/server";
import { Recipe } from "../../../../models";

export const dynamic = 'force-dynamic'

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    // جستجوی رسپی بر اساس آی‌دی
    const recipe = await Recipe.findOne({
      _id: id
    });

    if (await recipe) {
      // اگر رسپی پیدا شد، آن را به عنوان پاسخ JSON برگردانده می‌شود
      return NextResponse.json({ status: 200, data: recipe });
    } else {
      // اگر رسپی پیدا نشد، پاسخی با کد 204 و پیام "No recipe found." برگردانده می‌شود
      return NextResponse.json({ status: 204, success: false, message: 'No recipe found.' });
    }
  } catch (error) {
    console.log('Error in getting recipe by id:', error);
    // اگر در هنگام دریافت رسپی بر اساس آی‌دی خطایی رخ دهد، پاسخی با کد 500 و پیام خطا برگردانده می‌شود
    return NextResponse.json({ status: 500, success: false, message: error });
  }
}
```

این فایل سرور برای پردازش درخواست GET در مورد یک رسپی بر اساس آی‌دی استفاده می‌شود.

- تابع `GET` برای دریافت رسپی بر اساس آی‌دی تعریف شده است. دریافت آی‌دی رسپی از آدرس URL و جستجوی رسپی بر اساس این آی‌دی صورت می‌گیرد.
- اگر رسپی پیدا شود، آن را به عنوان پاسخ JSON با کد 200 برگردانده می‌شود.
- اگر رسپی پیدا نشود، پاسخی با کد 204 و پیام "No recipe found." برگردانده می‌شود.
- اگر در هنگام دریافت رسپی بر اساس آی‌دی خطایی رخ دهد، پاسخی با کد 500 و پیام خطا برگردانده می‌شود.

با استفاده از این فایل سرور، می‌توانید درخواست GET مربوط به یک رسپی بر اساس آی‌دی را در سمت سرور پردازش کنید.
