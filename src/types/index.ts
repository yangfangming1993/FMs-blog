export interface Option {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
  withCount?: boolean;
}

// 文章类型定义
export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  cover_image: string;
  created_at: string;
  updated_at: string;
}

