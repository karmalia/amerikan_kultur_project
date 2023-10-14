"use client";
import React, { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { navbarItems } from "./navitems.json";
import { useRouter } from "next/navigation";

function Navbar() {
  const all = useTheme();
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);
  const { push } = useRouter();

  React.useEffect(() => {
    if (all.resolvedTheme) {
      setTheme(all.resolvedTheme);
    }
  }, [all.resolvedTheme]);

  return (
    <div className='h-30 border-2    mb-2  '>
      <div className='py-2 border-b-2 border-gray-200'>
        <div className='md:container flex-wrap  flex justify-between items-center h-full'>
          <div className='h-[55px] md:h-[110px] w-[200px] md:w-[400px] bg-gradient-to-br from-green-300 via-blue-500 to-purple-600'>
            {/* <Image
            src={theme === "light" ? "/logo-dark.png" : "/logo-light.png"}
            width={250}
            height={120}
            alt='logo'
          /> */}
          </div>
          {/* User */}
          <div className='flex gap-2 items-center'>
            <div className='h-10 w-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-green-300 via-blue-500 to-purple-600'></div>
            <div className='flex flex-col'>
              <span className='font-bold text-sm md:text-lg'>Lorem Ipsum</span>
              <span className='font-bold text-sm sm:text-md md:text-lg'>
                Öğretmen
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='sm:flex justify-between py-2 md:container mx-auto'>
          <ul className='flex border-2 gap-2 flex-wrap  bg-white dark:bg-zinc-950 text-black dark:text-white'>
            {navbarItems.map((item) => (
              <li key={item.id}>
                <Button onClick={() => push(item.link)}>{item.name}</Button>
              </li>
            ))}
          </ul>
          <div className='border-2'>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant='outline' size='icon'>
                  <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
                  <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
                  <span className='sr-only'>Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end'>
                <DropdownMenuItem onClick={() => all.setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => all.setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => all.setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
