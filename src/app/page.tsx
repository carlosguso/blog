import Link from "next/link";
import About from "./about.mdx";
import highlights from "./highlights.json";
import ThemeToggle from "../components/ThemeToggle";

type Highlights = {
  thoughts: Highlight[];
  articles: Highlight[];
  projects: Highlight[];
};

const typedHighlights = highlights as Highlights;

type Highlight = {
  title: string;
  description: string;
};

export default function Landing() {
  return (
    <div className="w-full flex justify-center align-center">
      <div className="lg:w-8/12 md:w-9/12 w-full p-2 mx-auto sm:px-4">
        <header className="flex flex-row justify-between items-center pt-12 pb-3">
          <Link
            href="/"
            className="transition-colors duration-300 ease-in-out hover:text-main-accent-light dark:hover:text-main-accent rounded-md text-sx"
          >
            <h1 className="text-2xl font-semibold text-main-accent-light dark:text-main-accent">
              Carlos Gutierrez
            </h1>
          </Link>
          <div className="flex items-center space-x-4">
            <Link
              href="/blog"
              className="transition-colors duration-300 ease-in-out hover:text-main-accent-light dark:hover:text-main-accent rounded-md text-sx"
            >
              Thoughts
            </Link>
            <Link
              href="/projects"
              className="transition-colors duration-300 ease-in-out hover:text-main-accent-light dark:hover:text-main-accent rounded-md text-sx"
            >
              Projects
            </Link>
            <Link
              href="/articles"
              className="transition-colors duration-300 ease-in-out hover:text-main-accent-light dark:hover:text-main-accent rounded-md text-sx"
            >
              Articles
            </Link>
            <ThemeToggle />
          </div>
        </header>
        <section>
          <About />
        </section>
        {/* Think about putting the image here */}
        {typedHighlights.thoughts.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-semibold mb-6 text-main-accent">
              Thoughts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {typedHighlights.thoughts.map((thought, index) => (
                <div
                  key={index}
                  className="bg-[#1e0a30] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {thought.title}
                  </h3>
                  <p className="text-gray-300">{thought.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {typedHighlights.articles.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-semibold mb-6 text-main-accent">
              Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {typedHighlights.articles.map((article, index) => (
                <div
                  key={index}
                  className="bg-[#1e0a30] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-300">{article.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {typedHighlights.projects.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-semibold mb-6 text-main-accent">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {typedHighlights.projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-[#1e0a30] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300">{project.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}
        <footer className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-center space-x-6">
            <Link
              href="https://www.linkedin.com/in/carlosguso"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-main-accent-light dark:hover:text-main-accent transition-colors duration-300"
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
              className="text-gray-400 hover:text-main-accent-light dark:hover:text-main-accent transition-colors duration-300"
            >
              <span className="sr-only">X</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
            <Link
              href="https://github.com/carlosguso"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-main-accent-light dark:hover:text-main-accent transition-colors duration-300"
            >
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </Link>
            <Link
              href="mailto:carlosguso@protonmail.com"
              className="text-gray-400 hover:text-main-accent-light dark:hover:text-main-accent transition-colors duration-300"
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
