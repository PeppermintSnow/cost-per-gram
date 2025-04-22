"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavLinksType {
  name: string,
  href: string,
  isActive: boolean,
}


const Navbar = (): JSX.Element => {
  const pathname = usePathname();
  const [navLinks, setNavlinks] = useState<NavLinksType[]>([
    {name: 'Home', href: '/', isActive: false},
    {name: 'App', href: '/app', isActive: false},
    {name: 'About', href: '/about', isActive: false},
  ]);
  
  useEffect(() => {
    setNavlinks((links) => {
      return links.map((link) => ({
        ...link,
        isActive: link.href === pathname,
      }));
    });
  }, [pathname]);

  return (
    <>
      <header className="flex items-center justify-between py-5 px-1 md:px-5 bg-purple-800">
        <div className="mx-5">
          <Link href="/" className="text-2xl md:text-3xl font-extrabold text-white text-pre">
            costPerGram
          </Link>
          <p className="text-base md:text-lg mx-3 font-bold text-purple-300">
            by&nbsp;
            <a 
              href="https://github.com/peppermintsnow"
              target="_blank"
              className="font-bold hover:text-white cursor-pointer transition"
            >
              @PeppermintSnow
            </a>
          </p>
        </div>
        <nav>
          <ul className="text-lg md:text-xl font-bold text-purple-300 flex gap-5 mx-3">
            {navLinks.map((link, index) => {
              return (
                <li key={index} className="hover:text-white transition">
                  <Link 
                    href={link.href}
                    className={link.isActive ? "text-white font-extrabold" : ""}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
