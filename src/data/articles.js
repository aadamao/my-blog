const articles = [
  {
    id: 1,
    slug: 'build-blog-with-ai',
    title: '我把博客搭好了！全程用 AI 帮我写代码',
    excerpt: '从创建项目到部署上线，每一步都有 AI 的陪伴。记录下这个博客的诞生过程。',
    date: '2026-05-24',
    tags: ['实战', 'AI工具', 'React'],
    content: `
## 这个博客是怎么来的

没错，你现在看到的这个博客，就是我和 AI 一起写的！整个过程大概花了不到一天时间。

## 搭建过程

### 1. 确定需求

我先想清楚自己要什么：
- 一个可以发文章的博客
- 要有酷炫的动画效果
- 支持暗黑模式
- 能搜索和分类
- 能评论

### 2. 技术选型

AI 帮我选了这套技术组合：
- **React + Vite** — 现代前端框架
- **Framer Motion** — 动画库
- **React Markdown** — 文章渲染
- **GitHub Pages** — 免费部署

### 3. 一步步搭建

AI 为我做了这些事：
1. 创建项目文件夹
2. 安装必要的依赖包
3. 写全局样式和主题系统
4. 写导航栏、首页、文章页等各个组件
5. 配置路由
6. 最后就可以在本地运行了

### 4. 部署上线

只需要一条命令把代码推送到 GitHub，博客就上线了！

## 一个小白的真心话

如果你也在犹豫要不要学编程，我想说：

> 有了 AI 的帮助，写代码不再是门槛，而是翅膀。

你不需要什么都会，你只需要：
- 一颗愿意尝试的心
- 清楚地描述你想要什么
- 耐心地跟 AI 沟通和迭代

就这样，你也能拥有自己的网站。
    `.trim(),
  },
];

export default articles;

export function getArticleBySlug(slug) {
  return articles.find((a) => a.slug === slug);
}

export function getAllTags() {
  const tagSet = new Set();
  articles.forEach((a) => a.tags.forEach((t) => tagSet.add(t)));
  return [...tagSet];
}

export function getArticlesByTag(tag) {
  return articles.filter((a) => a.tags.includes(tag));
}
