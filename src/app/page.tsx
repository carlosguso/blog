import Link from "next/link";
import About from "./about.mdx";

export default function Landing() {
  return (
    <div className="w-full flex justify-center align-center border-2 border-red-500 bg-blue">
      <div className="md:w-3/5 w-full border-2 border-blue-500 p-2">
        <header className="flex flex-row justify-between py-4">
          <h1>Carlos Gutierrez</h1>
          <div>
            <Link
              href="/blog"
              className="hover:bg-main-accent mr-2 p-2 px-4 rounded-md"
            >
              Blog
            </Link>
          </div>
        </header>
        <section>
          <About />
        </section>
      </div>
    </div>
  );
}
