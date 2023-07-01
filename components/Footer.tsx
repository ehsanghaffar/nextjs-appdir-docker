import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Footer: React.FC = () => {
  return (
    <footer id="footer" className=" sticky bottom-0 border-t-2 border-gray-100">
      <div className="container">
        <div className="footer">
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

      <div className="copyright">
        <p className="copyright-text">
          Copyright © Deniz Paz Desserts | Designed by fatemeh arian
        </p>
      </div>
    </footer>
  );
};

export default Footer;
