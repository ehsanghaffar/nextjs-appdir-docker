import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Footer: React.FC = () => {
  return (
    <footer id="footer" className=" sticky bottom-0 border-t-2 border-gray-100">
      <div className="container">
        <div className="footer">
          <svg className="svg-bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#f9f8f8"
              fillOpacity="1"
              d="M0,288L48,272C96,256,192,224,288,192C384,160,480,128,576,149.3C672,171,768,245,864,261.3C960,277,1056,235,1152,218.7C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
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
