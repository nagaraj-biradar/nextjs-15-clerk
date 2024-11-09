"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navigation = () => {
  const pathName = usePathname();

  return (
    <nav className="flex flex-row gap-4  justify-evenly bg-slate-500 py-4 rounded-sm text-white ">
      <Link
        href="/"
        className={
          pathName === "/"
            ? "text-2xl font-bold text-blue-800 "
            : "text-2xl font-bold"
        }
      >
        Home
      </Link>
      <Link
        href="/about"
        className={
          pathName === "/about"
            ? "text-2xl font-bold text-blue-800 "
            : "text-2xl font-bold"
        }
      >
        About
      </Link>
      <Link
        href="/mock-users"
        className={
          pathName === "/mock-users"
            ? "text-2xl font-bold text-blue-800 "
            : "text-2xl font-bold"
        }
      >
        Mock Users
      </Link>
      <Link
        href="/user-client"
        className={
          pathName === "/user-client"
            ? "text-2xl font-bold text-blue-800 "
            : "text-2xl font-bold"
        }
      >
        User Client
      </Link>
      <Link
        href="/user-server"
        className={
          pathName === "/user-server"
            ? "text-2xl font-bold text-blue-800 "
            : "text-2xl font-bold"
        }
      >
        User Server
      </Link>
      <SignedOut>
        <SignInButton mode="modal" />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  );
};

export default Navigation;
