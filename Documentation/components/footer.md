# Footer

کد فوق یک کامپوننت React به نام "Footer" را تعریف می‌کند. در ابتدا، ماژول‌های موردنیاز برای React و next.js وارد می‌شوند.

```javascript
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
```

سپس، تابع `Footer` تعریف می‌شود. این تابع عملکرد فوتر سایت را تعیین می‌کند. تابع برگشتی JSX است که شامل اجزای مختلف فوتر است.

```javascript
const Footer: React.FC = () => {
  return (
    <footer id="footer" className=" sticky bottom-0 border-t-2 border-gray-100">
      <div className="container">
        <div className="footer">
          {/* بخش های سایت */}
          <div className="footer-pages">
            <h4 className="footer-title">بخش های سایت</h4>
            <ul>
              <li>
                <Link href={'/'} className="footer-pages-links">
                  صفحه اصلی
                </Link>
              </li>
              <li>
                <Link href={'/recipes'} className="footer-pages-links">
                  رسپی ها
                </Link>
              </li>
              <li>
                <Link href={'/about'} className="footer-pages-links">
                  درباره ما
                </Link>
              </li>
              <li>
                <Link href={'/contact'} className="footer-pages-links">
                  ارتباط با ما
                </Link>
              </li>
            </ul>
          </div>

          {/* شبکه‌های اجتماعی */}
          <div className="footer-media justify-center">
            <img src="/logo.png" alt="logo" className="footer-img mx-auto" />
            <p className="footer-media-des">
              صفحات ما در شبکه های اجتماعی رو از دست ندید
            </p>
            <div className="footer-media-medias">
              <a href="#" className="footer-media-media">
                <FontAwesomeIcon icon={['fab', 'twitter']} className=" transition-all hover:scale-125 duration-700  hover:text-white p-5" />
              </a>
              <a href="#" className="footer-media-media">
                <FontAwesomeIcon icon={['fab', 'facebook']} className=" transition-all hover:scale-125 duration-700  hover:text-white p-5" />
              </a>
              <a href="#" className="footer-media-media">
                <FontAwesomeIcon icon={['fab', 'instagram']} className=" transition-all hover:scale-125 duration-700  hover:text-white p-5" />
              </a>
              <a href="#" className="footer-media-media">
                <FontAwesomeIcon icon={['fab', 'linkedin']} className=" transition-all hover:scale-125 duration-700  hover:text-white p-5" />
              </a>
            </div>
          </div>

          {/* اطلاعات تماس */}
          <div className="footer-contactus">
            <h4 className="footer-title mb-2">تماس با ما</h4>
            <p className="footer-contactus-sub">ایمیل</p>
            <p className="footer-contactus-des">denizpaz.desserts@gmail.com</p>
            <p className="footer-contactus-sub">تلفن</p>
            <p className="footer-contactus-des">0XXX-XXXXXX</p>
            <p className="footer-contactus-sub">آدرس</p>
            <p className="footer-contactus-des">کرج - مهرشهر</p>
          </div>
        </div>
      </div>

      {/* حق کپی رایت */}
      <div className="copyright">
        <p className="copyright-text">
          حق کپی رایت © Deniz Paz Desserts | طراحی شده توسط فاطمه آریان
        </p>
      </div>
    </footer>
  );
};
```

در بخش اصلی تابع، اجزای فوتر ایجاد می‌شوند. این اجزا شامل بخش‌های سایت، شبکه‌های اجتماعی و اطلاعات تماس می‌باشند.

- بخش های سایت: در این بخش، لیستی از صفحات سایت ایجاد می‌شود. هر صفحه به وسیلهٔ یک المان `<Link>` در یک `<li>` قرار می‌گیرد. هر المان `<Link>` به یک URL مشخص می‌شود و با استفاده از کلاس "footer-pages-links" قابل استیل دهی است.

- شبکه‌های اجتماعی: در این بخش، لوگوی سایت و توضیح مربوط به شبکه‌های اجتماعی نمایش داده می‌شود. همچنین، لوگوهای شبکه‌های اجتماعی نیز در اینجا قرار دارند و با استفاده از کلاس "footer-media-media" قابل استیل دهی هستند.

- اطلاعات تماس: در این بخش، اطلاعات تماس مانند ایمیل، تلفن و آدرس نمایش داده می‌شوند.

- حق کپی رایت: در انتها، متن حق کپی رایت نمایش داده می‌شود.

در نهایت، کامپوننت "Footer" را به عنوان کامپوننت پیش‌فرض (default) برای صادرات تعریف می‌کنیم.

```javascript
export default Footer;
```

با استفاده از این کامپوننت، می‌توانید فوتری کامل و قابل

 تنظیم را در صفحات React خود نمایش دهید.
