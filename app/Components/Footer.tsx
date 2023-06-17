import Link from "next/link";
import React from "react";
import { IoLogoVercel } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-black mt-12">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href={"https://vercel.com"}
            target="_blank"
            className="flex items-center"
          >
            <IoLogoVercel className="text-3xl" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Vercel
            </span>
          </Link>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 <strong className="hover:underline">Eyad's Portfolio</strong>.
          All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
