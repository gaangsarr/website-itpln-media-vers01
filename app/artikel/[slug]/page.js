import { getArticleData, getAllArticles } from "@/lib/articles";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage(props) {
  const slug = props?.params?.slug;

  if (!slug) notFound();

  let article;

  try {
    article = await getArticleData(slug);
  } catch (error) {
    notFound();
  }

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/artikel"
            className="text-purple-200 hover:text-white mb-4 inline-block"
          >
            ← Kembali ke Artikel
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            {article.title}
          </h1>
          <div className="flex items-center text-purple-100 text-sm">
            <span>{formatDate(article.date)}</span>
            {article.author && (
              <>
                <span className="mx-2">•</span>
                <span>oleh {article.author}</span>
              </>
            )}
            {article.readTime && (
              <>
                <span className="mx-2">•</span>
                <span>{article.readTime} min baca</span>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {article.image && (
            <div className="mb-8">
              <Image
                src={article.image}
                alt={article.title}
                width={800}
                height={400}
                className="w-full h-64 sm:h-96 object-cover rounded-2xl"
              />
            </div>
          )}

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>
        </div>
      </div>
    </div>
  );
}
