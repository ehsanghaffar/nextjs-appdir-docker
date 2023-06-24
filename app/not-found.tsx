import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="grid h-screen px-4 bg-white place-content-center">
        <div className="text-center">
          <h1 className="font-black text-gray-200 text-9xl">۴۰۴</h1>

          <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            آخ ببخشید!
          </p>

          <p className="mt-4 text-gray-500">این صفحه وجود ندارد</p>

          <Link
            href={"/"}
            className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-cyan-800 rounded hover:bg-cyan-600 focus:outline-none focus:ring"
          >
            بازگشت به صفحه‌اصلی
          </Link>
        </div>
      </div>
    </>
  );
}
