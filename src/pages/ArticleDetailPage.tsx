import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { getArticleById } from '@/db/api';
import type { Article } from '@/types';
import { Calendar, ArrowLeft } from 'lucide-react';

export default function ArticleDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      if (!id) return;
      setLoading(true);
      const data = await getArticleById(id);
      setArticle(data);
      setLoading(false);
    };

    fetchArticle();
  }, [id]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen py-12 md:py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <Skeleton className="h-10 w-32 mb-8 bg-muted" />
          <Skeleton className="h-12 w-3/4 mb-4 bg-muted" />
          <Skeleton className="h-6 w-48 mb-8 bg-muted" />
          <Skeleton className="aspect-video w-full mb-8 bg-muted" />
          <div className="space-y-4">
            <Skeleton className="h-4 w-full bg-muted" />
            <Skeleton className="h-4 w-full bg-muted" />
            <Skeleton className="h-4 w-3/4 bg-muted" />
          </div>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen py-12 md:py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">文章未找到</h1>
          <Button asChild>
            <Link to="/articles">
              <ArrowLeft className="mr-2 h-4 w-4" />
              返回文章列表
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 md:py-16 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl">
        <Button variant="ghost" className="mb-8 group" asChild>
          <Link to="/articles">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            返回文章列表
          </Link>
        </Button>

        <article>
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {article.title}
            </h1>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{formatDate(article.created_at)}</span>
            </div>
          </header>

          <div className="aspect-video w-full overflow-hidden rounded-lg mb-8 bg-muted">
            <img
              src={article.cover_image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed whitespace-pre-wrap">
              {article.content}
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
