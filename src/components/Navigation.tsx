"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div className="w-full py-4">
      <div className="flex flex-wrap gap-2 justify-center">
        <Link href="/" 
          className={`px-4 py-2 rounded-full transition-colors ${
            isActive("/") 
              ? "bg-blue-600 text-white" 
              : "bg-slate-200 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-slate-700"
          }`}>
          Home
        </Link>
        <Link href="/resume" 
          className={`px-4 py-2 rounded-full transition-colors ${
            isActive("/resume") 
              ? "bg-blue-600 text-white" 
              : "bg-slate-200 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-slate-700"
          }`}>
          Resume
        </Link>
        <Link href="/contact" 
          className={`px-4 py-2 rounded-full transition-colors ${
            isActive("/contact") 
              ? "bg-blue-600 text-white" 
              : "bg-slate-200 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-slate-700"
          }`}>
          Contact
        </Link>
      </div>
    </div>
  );
}