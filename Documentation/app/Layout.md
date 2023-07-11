# Layout

کد فوق یک کامپوننت RootLayout است که برای تنظیمات کلی و طرح‌بندی صفحه استفاده می‌شود. در ادامه، توضیحی مفصل برای هر بخش از کد ارائه خواهم داد:

```javascript
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import Navbar from "../components/Header";
import vazirmatn from "../styles/fonts";
import "./globals.css";

// اضافه کردن آیکون‌های Font Awesome به کتابخانه
library.add(fab, fas);

// تعریف متادیتا برای صفحه
export const metadata = {
  title: "دنیز پز",
  description: "به دنیز پز خوش آمدید",
};

// تعریف کامپوننت RootLayout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // رندر کردن کامپوننت‌های Navbar، children و Footer
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${vazirmatn.className} flex flex-col min-h-screen`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
```

این کامپوننت برای تنظیمات کلی صفحه استفاده می‌شود. در اینجا:

- آیکون‌های Font Awesome با استفاده از توابع `library.add(fab, fas)` به کتابخانه اضافه می‌شوند.
- متادیتا صفحه با استفاده از متغیر `metadata` تعریف شده است که عنوان و توضیحات صفحه را شامل می‌شود.
- کامپوننت `RootLayout` برای طرح‌بندی کلی صفحه استفاده می‌شود. در اینجا، کامپوننت‌های `Navbar`، `children` و `Footer` به ترتیب قرار داده شده‌اند. `Navbar` بالای صفحه و `Footer` در پایین نمایش داده می‌شود.
