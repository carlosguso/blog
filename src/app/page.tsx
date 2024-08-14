import Link from "next/link";
import About from "./about.mdx";

export default function Landing() {
  return (
    <div className="w-full flex justify-center align-center">
      <div className="lg:w-6/12 md:w-9/12 w-full p-2 mx-auto sm:px-4">
        <header className="flex flex-row justify-between pt-12 pb-3">
          <Link
            href="/"
            className="transition-colors duration-300 ease-in-out hover:text-main-accent rounded-md text-sx"
          >
            <h1 className="text-lg font-semibold">Carlos Gutierrez</h1>
          </Link>
          <div>
            <Link
              href="/blog"
              className="transition-colors duration-300 ease-in-out hover:text-main-accent rounded-md text-sx"
            >
              Thoughts
            </Link>
            <Link
              href="/projects"
              className="transition-colors duration-300 ease-in-out hover:text-main-accent ml-4 rounded-md text-sx"
            >
              Projects
            </Link>
            <Link
              href="/articles"
              className="transition-colors duration-300 ease-in-out hover:text-main-accent ml-4 rounded-md text-sx"
            >
              Articles
            </Link>
          </div>
        </header>
        <section>
          <About />
        </section>
        {/* Think about putting the image here */}
        <footer className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex justify-center space-x-6">
            <Link
              href="https://www.linkedin.com/in/carlosguso"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-main-accent transition-colors duration-300"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </Link>
            <Link
              href="https://x.com/carlosgusol"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-main-accent transition-colors duration-300"
            >
              <span className="sr-only">X</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
            <Link
              href="mailto:carlosguso@protonmail.com"
              className="text-gray-400 hover:text-main-accent transition-colors duration-300"
            >
              <span className="sr-only">Email</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
