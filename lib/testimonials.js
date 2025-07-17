// lib/testimonials.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const testimonialsDirectory = path.join(process.cwd(), "content/testimonials");

export function getTestimonials() {
  // Create directory if it doesn't exist
  if (!fs.existsSync(testimonialsDirectory)) {
    fs.mkdirSync(testimonialsDirectory, { recursive: true });
    return [];
  }

  const fileNames = fs.readdirSync(testimonialsDirectory);
  const testimonials = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const filePath = path.join(testimonialsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        name: data.name || "",
        position: data.position || "",
        company: data.company || "",
        content: content.trim(),
        image: data.image || null,
        rating: data.rating || 5,
        date: data.date || new Date().toISOString(),
      };
    })
    .sort(
      (a, b) =>
        new Date(b.date || "").getTime() - new Date(a.date || "").getTime()
    );

  return testimonials;
}

export function getLatestTestimonials(limit = 6) {
  const testimonials = getTestimonials();
  return testimonials.slice(0, limit);
}
