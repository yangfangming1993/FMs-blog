import type { Article } from "@/types";

const now = new Date().toISOString();

export const mockArticles: Article[] = [
  {
    id: "mock-32w",
    title: "32w，我还是我",
    summary: "人还是要保持持续学习",
    content: "人还是要保持持续学习",
    cover_image: "/images/covers/default.svg",
    created_at: now,
    updated_at: now,
  },
  {
    id: "mock-spring",
    title: "春日漫步",
    summary: "在这个温暖的春日午后，我漫步在公园的小径上，感受着微风拂面的惬意。",
    content:
      "在这个温暖的春日午后，我漫步在公园的小径上，感受着微风拂面的惬意。樱花树下，粉色的花瓣随风飘落，像是大自然送给我们的浪漫礼物。",
    cover_image: "/images/covers/default.svg",
    created_at: now,
    updated_at: now,
  },
];

export function getMockArticles(limit = 20, offset = 0) {
  return mockArticles.slice(offset, offset + limit);
}

export function getMockArticleById(id: string) {
  return mockArticles.find(a => a.id === id) ?? null;
}

