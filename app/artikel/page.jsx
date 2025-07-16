import { getAllArticles } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";
import Link from "next/link";

export default async function ArtikelPage() {
  const articles = await getAllArticles();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Semua Artikel
            </h1>
            <p className="text-purple-100 text-lg max-w-2xl mx-auto">
              Temukan berbagai artikel menarik dari ITPLN Media
            </p>
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg mb-4">
                Belum ada artikel tersedia
              </p>
              <Link href="/">
                <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                  Kembali ke Beranda
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
