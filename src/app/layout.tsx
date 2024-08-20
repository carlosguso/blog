import type { Metadata } from "next";
import { Merriweather_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "../components/Header";
import Footer from "../components/Footer";

const merriweatherSans = Merriweather_Sans({
  subsets: ["latin"],
  weight: ["300", "600"],
});

export const metadata: Metadata = {
  title: "Carlos Gutierrez",
  description: "Carlos' personal page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${merriweatherSans.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="w-full flex justify-center align-center">
            <div className="lg:w-8/12 md:w-9/12 w-full p-2 mx-auto sm:px-4">
              <Header />
              <main className="mt-12">{children}</main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
