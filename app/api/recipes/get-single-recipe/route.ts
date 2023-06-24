import { Recipe } from "@/models";
import { NextResponse } from "next/server";

// ایجاد درخواست GET برای دریافت رسپی بر اساس آی‌دی
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) return NextResponse.json({ status: 400, success: false, message: 'Please provide recipe id.' });

    const recipe = await Recipe.findOne({
      _id: id
    });

    if (recipe) {
      return NextResponse.json({ status: 200, data: recipe });
    } else {
      return NextResponse.json({ status: 204, success: false, message: 'No recipe found.' });
    }
  } catch (error) {
    console.log('Error in getting recipe by id:', error);
    return NextResponse.json({ status: 500, success: false, message: 'Something went wrong. Please try again!' });
  }
}