export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: ["/"],
      disallow: [],
    },
    sitemap: ["https://petalwood.com/sitemap.xml"],
  }
}
