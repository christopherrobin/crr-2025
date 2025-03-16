"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/resume", label: "Resume" }
  ];

  return (
    <nav>
      <ul className="flex space-x-6">
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <Link 
              href={href}
              className={`font-large transition-colors ${
                pathname === href && "border-b-1 border-zinc-800 dark:border-zinc-300"
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
