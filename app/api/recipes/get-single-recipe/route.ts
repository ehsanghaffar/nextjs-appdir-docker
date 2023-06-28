import { NextResponse } from "next/server";
import { Recipe } from "../../../../models";

export const dynamic = 'force-dynamic'
// ایجاد درخواست GET برای دریافت رسپی بر اساس آی‌دی
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id')

    const recipe = await Recipe.findOne({
      _id: id
    });

    if (await recipe) {
      return NextResponse.json({ status: 200, data: recipe });
    } else {
      return NextResponse.json({ status: 204, success: false, message: 'No recipe found.' });
    }
  } catch (error) {
    console.log('Error in getting recipe by id:', error);
    return NextResponse.json({ status: 500, success: false, message: error });
  }
}