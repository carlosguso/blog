import Link from "next/link";

interface ItemCardProps {
  title: string;
  description: string;
  url: string;
  date?: string;
}

const ItemCard: React.FC<ItemCardProps> = ({
  title,
  description,
  url,
  date,
}) => {
  return (
    <Link href={url} className="block">
      <div className="bg-white dark:bg-[#1e0a30] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
        {date && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            {date}
          </p>
        )}
      </div>
    </Link>
  );
};

export default ItemCard;
