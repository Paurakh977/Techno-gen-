import React from "react";
import "./styles/globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Technogen",
  description: "Innovating the future, one byte at a time",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className={`font-poppins [&_.blog-content]:prose [&_.blog-content]:max-w-none 
        [&_.blog-content_img]:rounded-lg [&_.blog-content_img]:max-w-full [&_.blog-content_img]:h-auto
        [&_.blog-content_.image-style-align-left]:float-left [&_.blog-content_.image-style-align-left]:mr-4 [&_.blog-content_.image-style-align-left]:max-w-[50%]
        [&_.blog-content_.image-style-align-right]:float-right [&_.blog-content_.image-style-align-right]:ml-4 [&_.blog-content_.image-style-align-right]:max-w-[50%]
        [&_.blog-content_.image-style-align-center]:mx-auto [&_.blog-content_.image-style-align-center]:block
        dark:[&_.blog-content]:prose-invert
        [&_.blog-content_figure]:my-8 [&_.blog-content_figure]:mx-0
        [&_.blog-content_figure_img]:rounded-lg [&_.blog-content_figure_img]:mx-auto`}>
        {children}
      </body>
    </html>
  );
}
