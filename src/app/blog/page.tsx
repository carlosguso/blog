import MainLayout from "@/components/MainLayout";
import blogPosts from "./posts";
import ItemCard from "../../components/ItemCard";

export default function BlogMainPage() {
  return (
    <MainLayout>
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
    </MainLayout>
  );
}
