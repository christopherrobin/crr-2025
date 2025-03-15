import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}