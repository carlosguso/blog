import articles from "./articles";
import ItemCard from "../../components/ItemCard";

export default function ArticlesMainPage() {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-6 text-main-accent-light dark:text-main-accent">
        Articles
      </h2>
      {articles.length > 0 ? (
        <div className="flex flex-col space-y-6">
          {articles.map((article, index) => (
            <ItemCard
              key={index}
              title={article.title}
              description={article.description}
              url={article.url}
              date={article.date}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-700 dark:text-gray-300">
          No articles available at the moment. Check back later!
        </p>
      )}
    </>
  );
}
