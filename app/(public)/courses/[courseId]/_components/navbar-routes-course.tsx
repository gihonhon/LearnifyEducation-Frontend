"use client";
import { usePathname } from "next/navigation";
import { ArrowLeft, Home, LogOut, StepBack } from "lucide-react";
import Link from "next/link";
// import { SearchInput } from "./search-input";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { SearchInput } from "@/components/search-input";

const NavbarRoutesCourse = () => {
  const pathname = usePathname();

  const isSearchPage = pathname === "/search";
  return (
    <>
      <Link href="/student" className="pl-2">
        <Button variant="ghost">
          <ArrowLeft className="h-6 w-6 hover:text-[#78329c] " />
        </Button>
      </Link>
      {isSearchPage && (
        <div className="hidden md:block">
          <SearchInput />
        </div>
      )}
      {isSearchPage && (
        <div className="hidden md:block">{/* <SearchInput /> */}</div>
      )}
      <div className="flex gap-x-2 ml-auto">
        <Button variant="purple" onClick={() => signOut({ callbackUrl: "/" })}>
          <LogOut className="h-4 w-4 mr-2" />
          Exit
        </Button>
      </div>
    </>
  );
};

export default NavbarRoutesCourse;
