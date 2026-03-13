import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PregnancyDiaryPage() {
  return (
    <div className="min-h-screen py-12 md:py-16 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
            孕期日记
          </h1>
          <p className="text-lg text-muted-foreground">
            记录孕期里的每一个小变化，每一份期待与感动
          </p>
        </div>

        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle>这个板块怎么用？</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              这里可以记录孕期的点滴心情、身体变化、产检节点，以及对宝宝的期待。
            </p>
            <p>
              你可以后续根据自己的需要，把这里改成按照时间线展示、按周记录，或者拆成多个子分类（例如：
              情绪记录、产检记录、给宝宝的话等）。
            </p>
            <p>
              目前只是一个入口页面，后续如果你想把“孕期日记”也做成和博客文章一样的结构，我们可以再一起设计对应的数据表和页面展示方式。
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

