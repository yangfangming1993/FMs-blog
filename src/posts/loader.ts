import type { Article } from "@/types";

type Frontmatter = {
  id: string;
  title: string;
  summary: string;
  date?: string;
  cover?: string;
};

type ParsedPost = {
  frontmatter: Frontmatter;
  content: string;
};

const DEFAULT_COVER = "default.svg";

// 所有文章文件列表（在 src/posts 目录下）
const POST_FILES = [
  "32w-wo-haishi-wo.md",
  "chunri-manbu.md",
  "kafei-shiguang.md",
  "xiyang-yuhui.md",
  "meishi-jiyi.md",
  "yinyue-zhizye.md",
  "yuhou-qingchen.md",
] as const;

async function loadRawPost(filename: string): Promise<string> {
  const url = new URL(`./${filename}`, import.meta.url);
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`加载文章失败：${filename} (${res.status})`);
  }
  return await res.text();
}

function parseFrontmatter(raw: string): ParsedPost {
  const trimmed = raw.trimStart();
  if (!trimmed.startsWith("---")) {
    return {
      frontmatter: {
        id: Math.random().toString(36).slice(2),
        title: "未命名文章",
        summary: "",
      },
      content: raw,
    };
  }

  const parts = trimmed.split("---");
  // ['', '\nfoo: bar\n', '\ncontent...']
  if (parts.length < 3) {
    return {
      frontmatter: {
        id: Math.random().toString(36).slice(2),
        title: "未命名文章",
        summary: "",
      },
      content: raw,
    };
  }

  const fmBlock = parts[1];
  const body = parts.slice(2).join("---").trimStart();

  const frontmatter: any = {};

  for (const line of fmBlock.split("\n")) {
    const trimmedLine = line.trim();
    if (!trimmedLine || trimmedLine.startsWith("#")) continue;
    const idx = trimmedLine.indexOf(":");
    if (idx === -1) continue;
    const key = trimmedLine.slice(0, idx).trim();
    let value = trimmedLine.slice(idx + 1).trim();
    // 去掉首尾引号
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    frontmatter[key] = value;
  }

  return {
    frontmatter: frontmatter as Frontmatter,
    content: body.trim(),
  };
}

function toArticle(parsed: ParsedPost): Article {
  const { frontmatter, content } = parsed;
  const created = frontmatter.date ?? new Date().toISOString();

  return {
    id: frontmatter.id,
    title: frontmatter.title,
    summary: frontmatter.summary,
    content,
    cover_image: frontmatter.cover || DEFAULT_COVER,
    created_at: created,
    updated_at: created,
  };
}

let cachedArticles: Article[] | null = null;
let loadingPromise: Promise<Article[]> | null = null;

async function loadAllArticles(): Promise<Article[]> {
  if (cachedArticles) return cachedArticles;
  if (loadingPromise) return loadingPromise;

  loadingPromise = Promise.all(
    POST_FILES.map(async (file) => {
      const raw = await loadRawPost(file);
      return toArticle(parseFrontmatter(raw));
    }),
  ).then((articles) => {
    cachedArticles = articles.sort((a, b) => {
      return (
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
    });
    return cachedArticles;
  });

  return loadingPromise;
}

export async function getAllArticlesFromMarkdown(): Promise<Article[]> {
  return loadAllArticles();
}

export async function getArticleByIdFromMarkdown(
  id: string,
): Promise<Article | null> {
  const all = await loadAllArticles();
  return all.find((a) => a.id === id) ?? null;
}

export async function getLatestArticlesFromMarkdown(
  limit: number,
): Promise<Article[]> {
  const all = await loadAllArticles();
  return all.slice(0, limit);
}

