import Link from "next/link";
import About from "./about.mdx";
import highlights from "./highlights.json";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
        <Header />
        <section>
          <About />
        </section>
        {/* Think about putting the image here */}
        {typedHighlights.thoughts.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-semibold mb-6 text-main-accent">
              Thoughts
            </h2>
            <div className="flex flex-col space-y-6">
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
            <div className="flex flex-col space-y-6">
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
            <div className="flex flex-col space-y-6">
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
        <Footer />
      </div>
    </div>
  );
}
