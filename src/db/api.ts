import { supabase } from './supabase';
import type { Article } from '@/types';
import { toast } from 'sonner';
import { getMockArticleById, getMockArticles } from '@/db/mock';

// 获取所有文章（按创建时间倒序）
export async function getArticles(limit = 20, offset = 0): Promise<Article[]> {
  try {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1);

    if (error) {
      console.error('获取文章列表失败:', error);
      toast.error(`获取文章列表失败：${error.message}（已切换为离线数据）`);
      return getMockArticles(limit, offset);
    }

    return Array.isArray(data) ? data : [];
  } catch (e) {
    console.error('获取文章列表异常:', e);
    toast.error('网络不可达，已切换为离线数据');
    return getMockArticles(limit, offset);
  }
}

// 获取单篇文章
export async function getArticleById(id: string): Promise<Article | null> {
  try {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('id', id)
      .maybeSingle();

    if (error) {
      console.error('获取文章详情失败:', error);
      toast.error(`获取文章详情失败：${error.message}（已切换为离线数据）`);
      return getMockArticleById(id);
    }

    return data;
  } catch (e) {
    console.error('获取文章详情异常:', e);
    toast.error('网络不可达，已切换为离线数据');
    return getMockArticleById(id);
  }
}

// 获取最新的N篇文章（用于首页展示）
export async function getLatestArticles(limit = 6): Promise<Article[]> {
  try {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('获取最新文章失败:', error);
      toast.error(`获取最新文章失败：${error.message}（已切换为离线数据）`);
      return getMockArticles(limit, 0);
    }

    return Array.isArray(data) ? data : [];
  } catch (e) {
    console.error('获取最新文章异常:', e);
    toast.error('网络不可达，已切换为离线数据');
    return getMockArticles(limit, 0);
  }
}
