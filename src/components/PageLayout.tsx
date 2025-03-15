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
        <Navigation />
        {/*
        <div className="container mx-auto flex justify-between items-center">
          <DarkAndLightToggle />
        </div>
        */}
      </header>

      <main className={containerClass}>
        {children}
      </main>
    </div>
  );
}