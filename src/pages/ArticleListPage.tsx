import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import ArticleCard from '@/components/ArticleCard';
import { getArticles } from '@/db/api';
import type { Article } from '@/types';

export default function ArticleListPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      const data = await getArticles(50);
      setArticles(data);
      setLoading(false);
    };

    fetchArticles();
  }, []);

  return (
    <div className="min-h-screen py-12 md:py-16 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">所有文章</h1>
          <p className="text-muted-foreground">
            共 {articles.length} 篇文章，记录生活的美好时光
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="aspect-video w-full bg-muted" />
                <Skeleton className="h-6 w-3/4 bg-muted" />
                <Skeleton className="h-4 w-full bg-muted" />
                <Skeleton className="h-4 w-2/3 bg-muted" />
              </div>
            ))}
          </div>
        ) : articles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">暂无文章</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
