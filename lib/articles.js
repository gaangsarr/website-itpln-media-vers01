import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const articlesDirectory = path.join(process.cwd(), "artikel");

// 🔹 Ambil semua artikel lengkap (tanpa konten HTML)
export function getAllArticles() {
  const fileNames = fs.readdirSync(articlesDirectory);

  const articles = fileNames
    .filter((name) => name.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(articlesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const { data } = matter(fileContents);

      return {
        slug,
        ...data,
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return articles;
}

// 🔹 Ambil artikel berdasarkan slug dan render markdown
export async function getArticleData(slug) {
  const fullPath = path.join(articlesDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    ...data,
    content: contentHtml,
  };
}

// 🔹 Ambil n artikel terbaru
export function getLatestArticles(limit = 3) {
  const articles = getAllArticles();
  return articles.slice(0, limit);
}

// 🔹 Fungsi potong konten aman
export function safeExcerpt(content, max = 150) {
  if (!content) return "";
  return content.substring(0, max) + "...";
}
