import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import blogPosts from "./posts";

export default function BlogMainPage() {
  return (
    <div className="w-full flex justify-center align-center">
      <div className="lg:w-8/12 md:w-9/12 w-full p-2 mx-auto sm:px-4">
        <Header />
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-main-accent-light dark:text-main-accent">
            Thoughts
          </h2>
          {blogPosts.length > 0 ? (
            <div className="flex flex-col space-y-6">
              {blogPosts.map((post, index) => (
                <Link href={post.url} key={index} className="block">
                  <div className="bg-white dark:bg-[#1e0a30] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {post.description}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      {post.date}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-gray-700 dark:text-gray-300">
              No blog posts available at the moment. Check back later!
            </p>
          )}
        </section>
        <Footer />
      </div>
    </div>
  );
}
