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
  const isCourseStudent = pathname?.includes("/teacher");
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
      <div className={cn(isCourseStudent ? "hidden" : "mx-2 hidden md:inline")}>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Kelas Belajar</NavigationMenuTrigger>
              <NavigationMenuContent>
                {/* <NavigationMenuLink>Hello</NavigationMenuLink> */}
                <Accordion
                  type="single"
                  collapsible
                  className="grid grid-cols-1 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-1"
                >
                  <AccordionItem value="item-1" className="border-b-0">
                    <AccordionTrigger className="hover:no-underline hover:text-[#7c32a1] hover:font-semibold">
                      SMA
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col gap-y-2">
                        <a className="hover:text-[#7c32a1]" href="">
                          Kelas XII
                        </a>
                        <a className="hover:text-[#7c32a1]" href="">
                          Kelas XI
                        </a>
                        <a className="hover:text-[#7c32a1]" href="">
                          Kelas X
                        </a>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border-b-0">
                    <AccordionTrigger className="hover:no-underline hover:text-[#7c32a1] hover:font-semibold">
                      SMP
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col gap-y-2">
                        <a className="hover:text-[#7c32a1]" href="">
                          Kelas IX
                        </a>
                        <a className="hover:text-[#7c32a1]" href="">
                          Kelas VIII
                        </a>
                        <a className="hover:text-[#7c32a1]" href="">
                          Kelas VII
                        </a>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="border-b-0">
                    <AccordionTrigger className="hover:no-underline hover:text-[#7c32a1] hover:font-semibold">
                      SD
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col gap-y-2">
                        <a className="hover:text-[#7c32a1]" href="">
                          Kelas VI
                        </a>
                        <a className="hover:text-[#7c32a1]" href="">
                          Kelas V
                        </a>
                        <a className="hover:text-[#7c32a1]" href="">
                          Kelas IV
                        </a>
                        <a className="hover:text-[#7c32a1]" href="">
                          Kelas III
                        </a>
                        <a className="hover:text-[#7c32a1]" href="">
                          Kelas II
                        </a>
                        <a className="hover:text-[#7c32a1]" href="">
                          Kelas I
                        </a>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="hidden ml-auto md:block">
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
