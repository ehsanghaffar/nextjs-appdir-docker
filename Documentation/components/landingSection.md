# LandingSection

کد فوق یک کامپوننت React به نام "LandingSection" را تعریف می‌کند که وظیفه نمایش یک بخش از صفحه اصلی را دارد. در ادامه، توضیحی مفصل برای هر بخش از کد ارائه خواهم داد:

```javascript
import * as React from "react";

interface LandingSectionProps {
  title: string;
  subTitle: string;
  children: React.ReactNode;
  rootClasses: string;
}

const LandingSection = ({
  title,
  subTitle,
  children,
  rootClasses,
}: LandingSectionProps) => {
  return (
    <>
      {/* بخش عنوان و توضیحات */}
      <div className={`w-full ${rootClasses}`}>
        <section className="container mx-auto py-10">
          <div className="flex flex-col mx-auto items-center gap-2 my-4">
            <h2 className="text-5xl text-red-600 font-bold">{title}</h2>
            <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-500 sm:text-2xl">
              {subTitle}
            </p>
            <span className="self-center h-1 w-full bg-gray-200 lg:w-[100px] my-3"></span>
          </div>
          {children}
        </section>
      </div>
    </>
  );
};

export default LandingSection;
```

در بخش اصلی کامپوننت، اجزای مختلف بخش اطلاعات اصلی نمایش داده می‌شوند.

- بخش عنوان و توضیحات: در این بخش، عنوان و توضیحات بخش نمایش داده می‌شود. عنوان با استفاده از المان `<h2>` و توضیحات با استفاده از المان `<p>` قابل استایل دهی است. همچنین، یک خط افقی با استفاده از المان `<span>` و کلاس‌های مشخص شده در کد نمایش داده می‌شود.

- بخش محتوا: در این بخش، محتوایی که به عنوان پارامتر ورودی دریافت می‌شود، نمایش داده می‌شود.

با استفاده از کامپوننت "LandingSection" می‌توانید یک بخش از صفحه اصلی خود را نمایش دهید.
