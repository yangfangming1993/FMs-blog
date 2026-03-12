import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Header() {
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
              阿明的精彩生活
            </span>
          </Link>

          <nav className="flex items-center space-x-1 md:space-x-2">
            <Button
              variant={isActive('/') ? 'default' : 'ghost'}
              className="text-sm md:text-base"
              asChild
            >
              <Link to="/">首页</Link>
            </Button>
            <Button
              variant={isActive('/articles') ? 'default' : 'ghost'}
              className="text-sm md:text-base"
              asChild
            >
              <Link to="/articles">文章列表</Link>
            </Button>
            <Button
              variant={isActive('/about') ? 'default' : 'ghost'}
              className="text-sm md:text-base"
              asChild
            >
              <Link to="/about">关于我们</Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="ml-2"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
