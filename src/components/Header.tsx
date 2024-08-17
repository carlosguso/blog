import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
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
  );
};

export default Header;
