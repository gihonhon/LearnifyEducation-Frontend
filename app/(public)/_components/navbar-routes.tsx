"use client";
import { signOut, useSession } from "next-auth/react";
import { SearchInput } from "./search-input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Layout, LogOut, User } from "lucide-react";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { redirect, usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const NavbarRoutes = () => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const isCourseTeacher = pathname?.includes("/teacher");
  const isCourseStudent = pathname?.includes("/courses");
  const router = useRouter();
  function convertToInitials(fullName: string | undefined): string {
    if (!fullName) {
      return " ";
    }
    const nameArray = fullName.split(" ");

    const initials = nameArray
      .slice(0, 2)
      .map((word) => word[0])
      .join("");

    return initials.toUpperCase();
  }
  const initials = convertToInitials(session?.user.name!);

  const dashboardNavigate = () => {
    if (session?.user.role == "TEACHER") {
      router.push("/teacher/create");
    } else {
      router.push("/student");
    }
  };

  return (
    <>
      <div className={cn(isCourseStudent ? "hidden" : "px-auto mr-3")}>
        <Image src="/finalLogo.png" width={140} height={140} alt="logo" />
      </div>

      <div className="hidden md:block">
        <SearchInput />
      </div>
      <div className="md:flex gap-x-2 ml-2 hidden">
        {session ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="w-auto h-auto rounded-full px-1 py-1 hover:ring-2 hover:ring-purple-700">
                <Avatar>
                  {session.user.image ? (
                    <AvatarImage src={session.user.image} />
                  ) : (
                    <AvatarFallback>{initials}</AvatarFallback>
                  )}
                </Avatar>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={dashboardNavigate}>
                <Layout className="mr-2 h-4 w-4" />
                <span>Dashboard</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => signOut({ callbackUrl: "/" })}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log Out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <button
            onClick={() => router.push("/masuk")}
            className="h-10 px-4 py-2 bg-[#78329c] text-primary-foreground hover:bg-[#78329c]/90 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            Daftar/Masuk
          </button>
        )}
      </div>
    </>
  );
};

export default NavbarRoutes;
