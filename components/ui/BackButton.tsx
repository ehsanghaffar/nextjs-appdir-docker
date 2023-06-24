"use client";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const BackButton = () => {
  const router = useRouter();
  const pathName = usePathname();
  return (
    <>
      {pathName !== "/" && (
        <button
          onClick={() => router.back()}
          className=" grid grid-cols-2 gap-2 items-center px-4 py-1  rounded"
        >
          <span>بازگشت</span>
          <ArrowLeftIcon width={20} />
        </button>
      )}
    </>
  );
};

export default BackButton;
