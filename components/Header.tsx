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
          <ul className="menu flex items-center gap-2 text-sm font-medium text-gray-500">
            <li className="hidden lg:block">
              <Link className="menu-links rounded-lg " href={"/"}>
                {" "}
                صفحه اصلی{" "}
              </Link>
            </li>

            <li>
              <Link href={"recipes"} className="menu-links rounded-lg ">
                {" "}
                رسپی ها{" "}
              </Link>
            </li>

            <li>
              <Link className="menu-links rounded-lg " href={"about"}>
                {" "}
                درباره ما{" "}
              </Link>
            </li>
            <li>
              <Link className="menu-links rounded-lg " href={"contact"}>
                {" "}
                ارتباط با ما{" "}
              </Link>
            </li>
            <BackButton />
          </ul>
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
