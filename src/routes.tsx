import HomePage from './pages/HomePage';
import ArticleListPage from './pages/ArticleListPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import AboutPage from './pages/AboutPage';
import type { ReactNode } from 'react';

interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
}

const routes: RouteConfig[] = [
  {
    name: '首页',
    path: '/',
    element: <HomePage />
  },
  {
    name: '文章列表',
    path: '/articles',
    element: <ArticleListPage />
  },
  {
    name: '文章详情',
    path: '/article/:id',
    element: <ArticleDetailPage />
  },
  {
    name: '关于我们',
    path: '/about',
    element: <AboutPage />
  }
];

export default routes;
