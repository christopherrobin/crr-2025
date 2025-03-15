// src/components/PageLayout.tsx
import Navigation from "@/components/Navigation";
/* import DarkAndLightToggle from "@/components/DarkAndLightToggle"; */

interface PageLayoutProps {
  children: React.ReactNode;
  maxWidth?: "default" | "narrow" | "wide";
}

export default function PageLayout({ 
  children, 
  maxWidth = "default" 
}: PageLayoutProps) {
  const maxWidthClasses = {
    default: "max-w-6xl",
    narrow: "max-w-4xl",
    wide: "max-w-7xl"
  };

const containerClass = `flex-grow container mx-auto px-4 sm:px-6 py-4 ${maxWidthClasses[maxWidth]}`

  return (
    <div className="flex flex-col">
      <header className={containerClass}>
        <div className="container mx-auto flex justify-between items-center">
          <Navigation />
          {/* <DarkAndLightToggle /> */}
        </div>
      </header>
      
      <main className={containerClass}>
        {children}
      </main>
      <footer>
        <div className={`{containerClass} text-slate-300 mt-20 mb-10`}>
          <div className="text-center">
            &copy; {new Date().getFullYear()} Christopher Reynolds. All rights reserved.
          </div>
          <div className="text-center">
            Built with Next.js, Tailwind CSS, and TypeScript.
          </div>
        </div>
      </footer>
    </div>
  );
}