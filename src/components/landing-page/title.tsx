import React from "react";

interface TitleProps {
  title: string;
  pill: string;
  subheading?: string;
}

const Title: React.FC<TitleProps> = ({ title, pill, subheading }) => {
  return (
    <>
      <section className="flex flex-col gap-4 justify-center items-center ">
        <article className="rounded-full text-sm dark:bg-gradient-to-r p-[1px]  dark:from-brand-primaryBlue dark:to-brand-primaryPurple">
          <div className="rounded-full px-3 py-1 darl:bg-black">{pill}</div>
        </article>
        {subheading ? (
          <>
            <h2 className=" text-center text-3xl sm:text-5xl sm:max-w-[750px] md:text-center font-semibold">
              {title}
            </h2>
            <p className="dark:text-washed-purple-700 sm:max-w-[450px] md:text-center">
              {subheading}
            </p>
          </>
        ) : (
          <h1 className="text-center text-4xl sm:text-6xl sm:max-w-[850px] md:text-center font-semibold">
            {title}
          </h1>
        )}
      </section>
    </>
  );
};

export default Title;
