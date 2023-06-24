// وارد کردن کامپوننت Navbar از فایل Header
import Navbar from "@/components/Header";

// وارد کردن استایل‌های سراسری از فایل globals.css
import "./globals.css";

// وارد کردن فونت Vazir از فایل fonts
import vazirmatn from "@/fonts";

// وارد کردن کامپوننت Footer از فایل Footer
import Footer from "@/components/Footer";

// وارد کردن کتابخانه آیکون Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'

// وارد کردن آیکون‌های برند از کتابخانه free-brands-svg-icons
import { fab } from '@fortawesome/free-brands-svg-icons'

// وارد کردن آیکون‌های جامد از کتابخانه free-solid-svg-icons
import { fas } from '@fortawesome/free-solid-svg-icons'

// اضافه کردن آیکون‌های برند و جامد به کتابخانه آیکون Font Awesome
library.add(fab, fas)

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