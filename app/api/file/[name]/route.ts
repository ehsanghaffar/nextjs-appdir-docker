import { NextRequest, NextResponse } from "next/server";
import { existsSync } from "fs";
import fs from "fs/promises";
import path from "path";
import mime from "mime/lite";

export async function GET(
  req: NextRequest,
  { params }: { params: { name: string } }
) {
  const filePath = path.join(
    process.cwd(),
    process.env.STORE_PATH!,
    params.name
  );
  if (!existsSync(filePath)) {
    return NextResponse.json({ msg: "Not found" }, { status: 404 });
  }

  const mimeType = mime.getType(filePath);
  const fileStat = await fs.stat(filePath);

  const file = await fs.readFile(filePath);

  const headers: [string, string][] = [
    ["Content-Length", fileStat.size.toString()],
  ];
  if (mimeType) {
    headers.push(["Content-Type", mimeType]);
  }
  return new NextResponse(file, {
    headers,
  });
}
