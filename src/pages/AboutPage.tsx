import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Sparkles, BookOpen } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 md:py-16 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
            关于我们
          </h1>
          <p className="text-lg text-muted-foreground">
            用心记录，用爱分享
          </p>
        </div>

        <div className="grid gap-8 mb-12">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                关于阿明
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed">
              <p className="mb-4">
                你好，我是阿明。这是我的个人博客，一个记录生活点滴的小天地。
              </p>
              <p className="mb-4">
                我相信生活中处处都有美好，只要我们用心去发现、去感受。一杯咖啡的香气，
                一场说走就走的旅行，一次与朋友的深夜长谈，这些看似平凡的瞬间，
                都值得被记录和珍藏。
              </p>
              <p>
                在这里，我会分享我的日常生活、旅行见闻、美食体验，以及一些生活感悟。
                希望我的文字能给你带来一些温暖和启发。
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                博客理念
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed">
              <p className="mb-4">
                "阿明的精彩生活"不仅仅是一个博客，更是一种生活态度的体现。
              </p>
              <p className="mb-4">
                我希望通过这个平台，能够：
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>记录生活中的美好瞬间，留住珍贵的回忆</li>
                <li>分享个人的经历和感悟，与读者产生共鸣</li>
                <li>传递积极向上的生活态度，激励更多人热爱生活</li>
                <li>创造一个温暖的交流空间，结识志同道合的朋友</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                内容方向
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed">
              <p className="mb-4">
                在这个博客中，你会看到：
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-accent">
                  <h3 className="font-semibold text-foreground mb-2">📸 生活记录</h3>
                  <p className="text-sm">日常生活的点滴瞬间，用镜头和文字定格美好</p>
                </div>
                <div className="p-4 rounded-lg bg-accent">
                  <h3 className="font-semibold text-foreground mb-2">✈️ 旅行见闻</h3>
                  <p className="text-sm">探索世界的脚步，分享旅途中的故事和风景</p>
                </div>
                <div className="p-4 rounded-lg bg-accent">
                  <h3 className="font-semibold text-foreground mb-2">🍜 美食体验</h3>
                  <p className="text-sm">品味人间烟火，记录舌尖上的幸福时刻</p>
                </div>
                <div className="p-4 rounded-lg bg-accent">
                  <h3 className="font-semibold text-foreground mb-2">💭 生活感悟</h3>
                  <p className="text-sm">对生活的思考和感悟，与你分享心灵的触动</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center p-8 rounded-lg bg-gradient-to-br from-accent via-background to-secondary">
          <p className="text-lg font-medium mb-2">感谢你的阅读</p>
          <p className="text-muted-foreground">
            愿我们都能在平凡的日子里，发现生活的精彩
          </p>
        </div>
      </div>
    </div>
  );
}
