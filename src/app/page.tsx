import About from "./about.mdx";
import highlights from "./highlights";
import MainLayout from "@/components/MainLayout";

export default function Landing() {
  return (
    <MainLayout>
      <section>
        <About />
      </section>
      {/* Think about putting the image here */}
      {highlights.thoughts.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-main-accent">
            Thoughts
          </h2>
          <div className="flex flex-col space-y-6">
            {highlights.thoughts.map((thought, index) => (
              <div
                key={index}
                className="bg-[#1e0a30] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{thought.title}</h3>
                <p className="text-gray-300">{thought.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {highlights.articles.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-main-accent">
            Articles
          </h2>
          <div className="flex flex-col space-y-6">
            {highlights.articles.map((article, index) => (
              <div
                key={index}
                className="bg-[#1e0a30] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-300">{article.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {highlights.projects.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-main-accent">
            Projects
          </h2>
          <div className="flex flex-col space-y-6">
            {highlights.projects.map((project, index) => (
              <div
                key={index}
                className="bg-[#1e0a30] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </MainLayout>
  );
}
