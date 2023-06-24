import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import React from "react";
import Link from "next/link";
import HeaderLeftImage from '../public/header-leftt.png'
import Image from "next/image";

const HeaderBottom: React.FC = () => {

  return (
    <section id="header-bottom">
      <div className="header-right">
        <h1 id="header-tile" className=" font-extrabold">دسر دنیزپز</h1>
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

export default HeaderBottom;
