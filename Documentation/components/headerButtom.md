# HeaderButtom

کد فوق یک کامپوننت React به نام "LandingHero" را تعریف می‌کند که وظیفه نمایش بخش بالایی هدر صفحه اصلی را دارد. در ادامه، توضیحی مفصل برای هر بخش از کد ارائه خواهم داد:

```javascript
import React from "react";
import Link from "next/link";
import HeaderLeftImage from '../public/header-leftt.png';
import Image from "next/image";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

const LandingHero: React.FC = () => {

  return (
    <section id="header-bottom">
      <div className="header-right">
        <h1 id="header-tile" className="font-extrabold">دسر دنیزپز</h1>
        <p className="header-des">
          دوست داری دسر هایی درست کنی که مزه اش تا مدت ها زیر زبونت بمونه؟
          <br />
          پس...
        </p>
        <Link
          href={'/recipes'}
          className={
            "py-3 px-6 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-500 text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all text-sm dark:bg-gray-700 dark:hover:bg-gray-500 dark:focus:ring-offset-gray-800"
          }
        >
          <span className="text-lg font-medium">بزن بریم</span>
          <ArrowLeftIcon width={20} />
        </Link>
      </div>
      <div className="header-left">
        {/* <img src="header-leftt.png" alt="header" className="header-left-img" /> */}
        <Image
          src={HeaderLeftImage}
          alt="Deniz Paz"
          width={450}
        />
      </div>
    </section>
  );
};

export default LandingHero;
```

در بخش اصلی کامپوننت، اجزای مختلف بخش بالایی هدر صفحه اصلی ایجاد می‌شوند. این اجزا شامل بخش راست و بخش چپ می‌باشند.

- بخش راست: در این بخش، عنوان اصلی صفحه "دسر دنیزپز"، توضیح مربوط به صفحه و دکمه "بزن بریم" نمایش داده می‌شوند. دکمه "بزن بریم" با استفاده از المان `<Link>` و با استفاده از کلاس‌ها و استیل‌های مشخص شده در کد، طراحی شده است.

- بخش چپ: در این بخش، تصویر بخش چپ هدر نمایش داده می‌شود. تصویر با استفاده از کامپوننت "Image" از next/image درج شده است و به عنوان لینک یک تصویر محلی نمایش داده می‌شود.

با استفاده از کامپوننت "LandingHero" می‌توانید بخش بالایی هدر صفحه اصلی خود را نمایش دهید.
