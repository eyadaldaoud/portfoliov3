"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { BiMoon } from "react-icons/bi";
import { MdOutlineWbSunny } from "react-icons/md";
import { CgLaptop } from "react-icons/cg";

interface ThemesType {
  value: string;
  icon: any;
}
const Theme = () => {
  const { theme, setTheme } = useTheme();
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const themes: ThemesType[] = [
    { value: "system", icon: <CgLaptop /> },
    { value: "dark", icon: <BiMoon /> },
    { value: "light", icon: <MdOutlineWbSunny /> },
  ];

  if (Loading) {
    return (
      <div className="flex justify-content-center">
        <div
          className="inline-flex rounded-2xl shadow-sm border dark:border-gray-800 border-gray-300 dark:bg-gray-900/80 bg-gray-100 animate-pulse"
          style={{ animationDuration: "800ms" }}
        >
          {themes.map((i, k) => (
            <div
              key={k}
              className="inline-flex items-center px-2 py-1.5 text-lg bg-transparent rounded-xl border-gray-900 p-2"
            >
              <span className="inline-flex items-center px-0.5 py-0.5 text-lg rounded-2xl border-gray-900 bg-gray-200 dark:bg-gray-900">
                {i.icon}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-content-center">
      <div className="inline-flex rounded-2xl shadow-sm border dark:border-gray-800 border-gray-300 dark:bg-gray-900/80 bg-gray-100">
        {themes.map((i, k) => (
          <button
            className="py-0.5 px-0.5"
            key={k}
            onClick={() => {
              setTheme(i.value);
            }}
          >
            <span
              className={
                i.value === theme
                  ? "inline-flex items-center px-2 py-1.5 text-lg rounded-2xl border-gray-900 bg-gray-200 dark:bg-gray-800/40 text-blue-600 dark:text-blue-400"
                  : "inline-flex items-center px-2 py-1.5 text-lg  hover:bg-gray-200 dark:hover:bg-gray-700 duration-100 ease-linear rounded-2xl border-gray-900"
              }
            >
              {i.icon}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Theme;
