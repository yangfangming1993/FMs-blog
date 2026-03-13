import type { Article } from '@/types';
import {
  getAllArticlesFromMarkdown,
  getArticleByIdFromMarkdown,
  getLatestArticlesFromMarkdown,
} from "@/posts/loader";

// 获取所有文章（按创建时间倒序）
export async function getArticles(limit = 20, offset = 0): Promise<Article[]> {
  const all = await getAllArticlesFromMarkdown();
  return all.slice(offset, offset + limit);
}

// 获取单篇文章
export async function getArticleById(id: string): Promise<Article | null> {
  return await getArticleByIdFromMarkdown(id);
}

// 获取最新的N篇文章（用于首页展示）
export async function getLatestArticles(limit = 6): Promise<Article[]> {
  return await getLatestArticlesFromMarkdown(limit);
}
