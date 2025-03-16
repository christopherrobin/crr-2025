import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";
import DarkAndLightToggle from "@/components/DarkAndLightToggle";

export const metadata: Metadata = {
  title: "Christopher Reynolds | Senior Software Engineer",
  description: "Portfolio and resume of Christopher Reynolds, a Senior Software Engineer specialized in JavaScript, React, Node.js, and microservice architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="min-h-screen flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <header className="py-4 flex items-center justify-between">
              <Navigation />
              <DarkAndLightToggle />
            </header>
            
            <main className="flex-grow py-4 transition-opacity duration-200">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}