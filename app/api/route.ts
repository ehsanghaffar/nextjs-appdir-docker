import { NextResponse } from 'next/server';

export async function GET() {
  const user = {
    name: "ehsan"
  }

  return NextResponse.json({ user });
}