import { AiFillGithub, AiFillYoutube, AiOutlineYoutube } from "react-icons/ai";
import Projectimage from "./Projectimage";
import { client, urlFor } from "@/app/lib/sanity";
import Link from "next/link";
import { TbNetwork } from "react-icons/tb";
import { revalidatePath } from "next/cache";
import { Badge } from "../shadcn/badge";
import { Roboto } from "next/font/google";
import { Network } from "lucide-react";

type DataProps = {
  title: string;
  body?: string;
  image: string;
  video?: string | undefined;
  github?: string | undefined;
  website?: string | undefined;
  technologies: object[];
};

export async function getProjects(): Promise<DataProps[]> {
  const projects = await client
    .fetch(`*[_type == "projects"] | order(_createdAt desc)`)
    .catch((err) => {
      console.log(err);
    });
  revalidatePath("/");
  return projects;
}

const Projects: any = async () => {
  const data = await getProjects();
  if (!data) {
    return (
      <div className="grid h-screen px-4 place-content-center">
        <div className="text-center">
          <h1 className="font-black  text-9xl">503</h1>

          <p className="text-2xl font-bold tracking-tight  sm:text-4xl">
            Oops! Connection Lost
          </p>

          <p className="mt-4 text-gray-500">
            Please check your internet connection and try again.
          </p>

          <a
            href="/"
            className="inline-block px-5 py-3 mt-6 text-sm font-medium rounded border-2 duration-150 ease-linear dark:hover:border-white hover:border-black bg-black text-white hover:bg-white hover:text-black dark:bg-white dark:hover:bg-black 
            dark:hover:text-white dark:text-black focus:outline-none focus:ring"
          >
            Refresh
          </a>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="flex justify-center text-center">
        <h1 className="border rounded px-6 py-1 mt-4 text-xl dark:hover:bg-gray-900 hover:bg-slate-300 cursor-pointer">
          Innovations <Badge>{data?.length > 0 ? data?.length : 0}</Badge>
        </h1>
      </div>
      <div className="flex justify-center font-sans">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-4 text-center ">
          {data?.map((i, k) => (
            <div
              className="sm:border-2 border sm:p-2 p-0 border-black dark:border-white max-w-sm rounded
                 overflow-hidden  m-4 ease-linear duration-150 
                  hover:border-indigo-600 dark:hover:border-indigo-500
                 hover:shadow-xl dark:hover:shadow-gray-900 hover:shadow-gray-300
                "
              key={k}
            >
              <Projectimage urlProps={urlFor(i?.image).url()} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 border-b-2 border-black dark:border-white pb-2">
                  {i?.title}
                </div>
                <p className="text-gray-700 text-base">{i?.body}</p>
              </div>
              <div className="flex flex-wrap justify-center p-2">
                {i.github ? (
                  <Link
                    href={i?.github}
                    target={"_blank"}
                    className="border rounded px-4 py-0.5 m-1 bg-black hover:bg-white hover:border-black text-white hover:text-black
                     dark:text-black dark:bg-white dark:hover:bg-black dark:hover:border-white dark:hover:text-white ease-linear duration-150"
                  >
                    <AiFillGithub className="text-3xl" />
                  </Link>
                ) : (
                  <button
                    disabled
                    className="border rounded px-4 py-0.5 m-1 text-gray-500 dark:bg-slate-900 bg-slate-300
                     "
                  >
                    <AiFillGithub className="text-3xl" />
                  </button>
                )}
                {i.video ? (
                  <Link
                    href={i?.video ? i.video : ""}
                    target={"_blank"}
                    className="border rounded px-4 py-0.5 m-1 bg-black hover:bg-white hover:border-red-500 text-white hover:text-black
                     dark:text-black dark:hover:text-white dark:bg-white dark:hover:bg-black dark:hover:border-red-500 ease-linear duration-150"
                  >
                    <AiOutlineYoutube className="text-3xl text-red-500" />
                  </Link>
                ) : (
                  <button
                    disabled
                    className="border rounded px-4 py-0.5 m-1 text-gray-500 dark:bg-slate-900 bg-slate-300
                    "
                  >
                    <AiFillYoutube className="text-3xl" />
                  </button>
                )}
                {i.website ? (
                  <Link
                    href={i?.website ? i.website : ""}
                    target={"_blank"}
                    className="border rounded px-4 py-0.5 m-1 bg-black hover:bg-white hover:border-indigo-500 text-white hover:text-black
                   dark:text-black dark:hover:text-white dark:bg-white dark:hover:bg-black dark:hover:border-indigo-500 ease-linear duration-150"
                  >
                    <TbNetwork className="text-3xl text-indigo-500" />
                  </Link>
                ) : (
                  <button
                    disabled
                    className="border rounded px-4 py-0.5 m-1 text-gray-500 dark:bg-slate-900 bg-slate-300
                   "
                  >
                    <TbNetwork className="text-3xl" />
                  </button>
                )}
              </div>
              <div className="px-6 pt-4 pb-2 h-32 sm:overflow-hidden overflow-y-scroll">
                {i.technologies?.map((stack: any, k: number) => (
                  <span
                    key={k}
                    className="inline-block border cursor-pointer ease-linear duration-150 hover:bg-white hover:text-black hover:border-black dark:hover:bg-black dark:hover:text-white dark:hover:border-white  bg-black dark:bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-white dark:text-black mr-2 mb-2"
                  >
                    {stack}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
