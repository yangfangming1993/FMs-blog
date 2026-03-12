import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Calendar } from 'lucide-react';
import type { Article } from '@/types';

interface ArticleCardProps {
  article: Article;
  showImage?: boolean;
}

export default function ArticleCard({ article, showImage = true }: ArticleCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Link to={`/article/${article.id}`}>
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer group">
        {showImage && (
          <div className="aspect-video w-full overflow-hidden bg-muted">
            <img
              src={article.cover_image}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        <CardHeader>
          <h3 className="text-lg md:text-xl font-semibold line-clamp-2 group-hover:text-primary transition-colors">
            {article.title}
          </h3>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {article.summary}
          </p>
        </CardContent>
        <CardFooter>
          <div className="flex items-center text-xs text-muted-foreground">
            <Calendar className="h-3 w-3 mr-1" />
            <span>{formatDate(article.created_at)}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
