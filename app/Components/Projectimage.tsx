"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../shadcn/dialog";

const Projectimage = ({ urlProps }: any) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>
          {" "}
          <Image
            className={
              isLoading
                ? "bg-slate-400 animate-pulse h-48"
                : "h-full sm:h-48 sm:object-fill object-contain rounded cursor-pointer"
            }
            style={{ animationDuration: "800ms" }}
            src={urlProps}
            width={1920}
            height={1080}
            blurDataURL={urlProps}
            placeholder="blur"
            loading="lazy"
            onLoadingComplete={() => setLoading(false)}
            alt="Project image"
          />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[1000px]">
        <div className="">
          <Image
            style={{ animationDuration: "800ms" }}
            src={urlProps}
            width={1920}
            height={1080}
            blurDataURL={urlProps}
            placeholder="blur"
            loading="lazy"
            onLoadingComplete={() => setLoading(false)}
            alt="Project image"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Projectimage;
