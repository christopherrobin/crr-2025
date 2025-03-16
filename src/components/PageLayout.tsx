"use client";
interface PageLayoutProps {
  children: React.ReactNode;
  maxWidth?: "default" | "narrow" | "wide";
}

// This is now a server component since it doesn't need client-side features
export default function PageLayout({ 
  children, 
  maxWidth = "default" 
}: PageLayoutProps) {
  const maxWidthClasses = {
    default: "",  // Default is already set in RootLayout
    narrow: "max-w-4xl",
    wide: "max-w-7xl"
  };

  return (
    <div className={`transition-opacity duration-300 ${maxWidthClasses[maxWidth]}`}>
      {children}
    </div>
  );
}