import Image from "next/image";
import Link from "next/link";

export default function ArticleCard({ article, showExcerpt = true }) {
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
      <div className="relative">
        <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-4 rounded-t-3xl">
          <div className="bg-gray-200 rounded-2xl h-48 flex items-center justify-center overflow-hidden">
            <Image
              src={article.image || "/default-article.jpg"}
              alt={article.title}
              width={300}
              height={200}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-purple-600 font-medium">
            {article.category || "Umum"}
          </span>
          <span className="text-xs text-gray-500">
            {formatDate(article.date)}
          </span>
        </div>

        <h3 className="text-lg font-bold text-[#471396] mb-2 line-clamp-2">
          {article.title}
        </h3>

        {showExcerpt && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {article.excerpt || article.content.substring(0, 150) + "..."}
          </p>
        )}

        <div className="flex items-center justify-between">
          <Link href={`/artikel/${article.slug}`}>
            <button className="text-[#471396] text-sm font-semibold hover:text-purple-600 transition-colors">
              Baca selengkapnya...
            </button>
          </Link>

          {article.readTime && (
            <span className="text-xs text-gray-400">
              {article.readTime} min baca
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
