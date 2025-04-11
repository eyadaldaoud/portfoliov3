import React from "react";
import Link from "next/link";
import Theme from "./Theme";

const Navbar: any = async () => {
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-black border-b-2 dark:border-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href={"https://eyad.vercel.app"} className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Eyad (Old) click for v4
            </span>
          </Link>
          <div className="flex items-center md:order-2">
            <Theme />
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
