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
      <div className={`w-full ${rootClasses}`}>
        <section className="container mx-auto py-10">
          <div className="flex flex-col mx-auto items-center gap-2 my-4">
            <h2 className="text-5xl text-red-600 font-bold">{title}</h2>
            <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-500 sm:text-2xl">
              {subTitle}
            </p>
            <span className=" self-center h-1 w-full bg-gray-200 lg:w-[100px] my-3"></span>
          </div>
          {children}
        </section>
      </div>
    </>
  );
};

export default LandingSection;
