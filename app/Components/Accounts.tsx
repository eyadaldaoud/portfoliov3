"use client";

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { Button } from "../shadcn/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../shadcn/dropdown-menu";
import { client } from "../lib/sanity";
import Link from "next/link";
import {
  BsDiscord,
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsSteam,
  BsWifiOff,
} from "react-icons/bs";

type Checked = DropdownMenuCheckboxItemProps["checked"];

type AccountsProps = [
  {
    accountName: string;
    accountURL: string;
    accountPlatform?: string;
  }
];

export default function Accounts() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [Accounts, setAccounts] = React.useState<AccountsProps>([
    {
      accountName: "",
      accountURL: "",
      accountPlatform: "",
    },
  ]);

  const [isLoading, setLoading] = React.useState(true);

  const getAccounts = async () => {
    const accounts = await client
      .fetch(`*[_type == "contacts"] | order(_createdAt asc)`)
      .catch((err) => console.log(err));
    setAccounts(accounts);
  };

  React.useEffect(() => {
    setLoading(false);
    getAccounts();
  }, []);
  if (isLoading) {
    return (
      <div
        className="w-24 h-8 rounded animate-pulse bg-slate-500"
        style={{ animationDuration: "800ms" }}
      />
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Get in touch</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel className="text-center">Accounts</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {Accounts?.map((i, k: number) => (
          <Link href={i?.accountURL} target={"_blank"} key={k}>
            <DropdownMenuCheckboxItem
              onCheckedChange={setShowStatusBar}
              className="cursor-pointer"
            >
              <DropdownMenuSeparator />
              {i?.accountPlatform === "Github" ? (
                <BsGithub className="text-xl mr-2" />
              ) : i?.accountPlatform === "LinkedIn" ? (
                <BsLinkedin className="text-xl mr-2" />
              ) : i?.accountPlatform === "Discord" ? (
                <BsDiscord className="text-xl mr-2" />
              ) : i?.accountPlatform === "Facebook" ? (
                <BsFacebook className="text-xl mr-2" />
              ) : i?.accountPlatform === "Steam" ? (
                <BsSteam className="text-xl mr-2" />
              ) : null}
              {i?.accountPlatform}
            </DropdownMenuCheckboxItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
