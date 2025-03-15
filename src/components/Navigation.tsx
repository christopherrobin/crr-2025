"use client";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const getLinkClass = (path: string) => 
    `rounded-full px-2 py-1 transition-colors font-bold text-xlarge cursor-pointer ${
      pathname === path
        ? "bg-slate-700 text-white"
        : "text-slate-700 hover:bg-slate-700 hover:text-white"
    }`;

  const links = [
    { href: "/", label: "Home" },
    { href: "/resume", label: "Resume" }
  ];

  return (
    <nav>
      <div className="flex flex-wrap gap-2" id="navigation">
        {links.map(({ href, label }) => (
            <button key={href} onClick={() => window.location.href = href} className={getLinkClass(href)}>
            {label}
            </button>
        ))}
      </div>
    </nav>
  );
}
