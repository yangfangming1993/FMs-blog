import { supabase } from './supabase';
import type { Article } from '@/types';

// 获取所有文章（按创建时间倒序）
export async function getArticles(limit = 20, offset = 0): Promise<Article[]> {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1);

  if (error) {
    console.error('获取文章列表失败:', error);
    return [];
  }

  return Array.isArray(data) ? data : [];
}

// 获取单篇文章
export async function getArticleById(id: string): Promise<Article | null> {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('id', id)
    .maybeSingle();

  if (error) {
    console.error('获取文章详情失败:', error);
    return null;
  }

  return data;
}

// 获取最新的N篇文章（用于首页展示）
export async function getLatestArticles(limit = 6): Promise<Article[]> {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('获取最新文章失败:', error);
    return [];
  }

  return Array.isArray(data) ? data : [];
}
