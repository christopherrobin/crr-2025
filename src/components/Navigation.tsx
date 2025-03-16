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
              className={`font-medium transition-colors ${
                pathname === href 
                  ? "text-slate-900 dark:text-white"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
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