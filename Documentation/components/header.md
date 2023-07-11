# Header

در اینجا یک کامپوننت React به نام "Navbar" تعریف شده است که وظیفه نمایش هدر سایت را دارد. در ادامه، توضیحی مفصل برای هر بخش از کد ارائه خواهم داد:

```javascript
import React from "react";
import Link from "next/link";
import BackButton from "./ui/BackButton";

const Navbar: React.FC = () => {
  return (
    <header className="bg-[#f9f8f8] sticky top-0 border-b z-10">
      <div className="container md:mx-auto">
        <nav
          aria-label="Site Nav"
          className="mx-auto flex items-center justify-between p-4"
        >
          {/* لیست منو */}
          <ul className="menu flex items-center gap-2 text-sm font-medium text-gray-500">
            <li className="hidden lg:block">
              <Link className="menu-links rounded-lg" href={"/"}>
                {" "}
                صفحه اصلی{" "}
              </Link>
            </li>

            <li>
              <Link href={"recipes"} className="menu-links rounded-lg">
                {" "}
                رسپی ها{" "}
              </Link>
            </li>

            <li>
              <Link className="menu-links rounded-lg" href={"about"}>
                {" "}
                درباره ما{" "}
              </Link>
            </li>
            <li>
              <Link className="menu-links rounded-lg" href={"contact"}>
                {" "}
                ارتباط با ما{" "}
              </Link>
            </li>
            
            {/* دکمه بازگشت */}
            <BackButton />
          </ul>

          {/* لوگو */}
          <a
            href="/"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100"
          >
            <img src="/logo.png" alt="logo" className="navbar-img" />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
```

در بخش اصلی کامپوننت، اجزای مختلف هدر ایجاد می‌شوند. این اجزا شامل لیست منو و لوگو می‌باشند.

- لیست منو: در این بخش، یک لیست از موارد منوی سایت ایجاد می‌شود. هر مورد منو با استفاده از المان `<Link>` در یک `<li>` قرار می‌گیرد. هر المان `<Link>` به یک URL مشخص می‌شود و با استفاده از کلاس "menu-links" قابل استیل دهی است. همچنین، یک مورد منو دیگر نیز با استفاده از کامپوننت "BackButton" اضافه می‌شود که در صورت نیاز به دکمه بازگشت استفاده می‌شود.

- لوگو: در این بخش، لوگوی سایت نمایش داده می‌شود. این لوگو به عنوان یک لینک به صفحه اصلی استفاده می‌شود و با استفاده از کلاس "navbar-img" قابل استیل دهی است.

با استفاده از کامپوننت "Navbar" می‌توانید هدر سایت خود را نمایش دهید.
