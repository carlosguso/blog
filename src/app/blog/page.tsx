import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import blogPosts from "./posts";
import ItemCard from "../../components/ItemCard";

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
                <ItemCard
                  key={index}
                  title={post.title}
                  description={post.description}
                  url={post.url}
                  date={post.date}
                />
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
