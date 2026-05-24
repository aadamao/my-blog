import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { getArticleBySlug } from '../data/articles';
import TagBadge from '../components/TagBadge';

export default function ArticleDetail() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <div style={{ textAlign: 'center', padding: '100px 24px' }}>
        <h1 style={{ fontSize: 48, marginBottom: 16 }}>404</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: 24 }}>文章找不到了</p>
        <Link to="/" style={{ color: 'var(--accent)', fontWeight: 600 }}>← 返回首页</Link>
      </div>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px' }}
    >
      {/* Header */}
      <header style={{ marginBottom: 40 }}>
        <Link to="/" style={{ color: 'var(--accent)', fontSize: 14, fontWeight: 600, marginBottom: 20, display: 'inline-block' }}>
          ← 返回首页
        </Link>
        <h1 style={{ fontSize: 'clamp(26px, 5vw, 40px)', fontWeight: 800, lineHeight: 1.3, marginBottom: 16, color: 'var(--text-primary)' }}>
          {article.title}
        </h1>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
          {article.tags.map((tag) => (
            <TagBadge key={tag} tag={tag} />
          ))}
          <time style={{ color: 'var(--text-muted)', fontSize: 14, marginLeft: 4 }}>
            {article.date}
          </time>
        </div>
      </header>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="article-content"
        style={{
          fontSize: 17,
          lineHeight: 1.9,
          color: 'var(--text-primary)',
        }}
      >
        <ReactMarkdown
          components={{
            h1: ({ children }) => <h1 style={{ fontSize: 32, fontWeight: 700, margin: '40px 0 16px', color: 'var(--text-primary)' }}>{children}</h1>,
            h2: ({ children }) => <h2 style={{ fontSize: 26, fontWeight: 700, margin: '36px 0 14px', color: 'var(--text-primary)' }}>{children}</h2>,
            h3: ({ children }) => <h3 style={{ fontSize: 22, fontWeight: 600, margin: '28px 0 12px', color: 'var(--text-primary)' }}>{children}</h3>,
            p: ({ children }) => <p style={{ marginBottom: 18, color: 'var(--text-secondary)' }}>{children}</p>,
            ul: ({ children }) => <ul style={{ marginBottom: 18, paddingLeft: 24, color: 'var(--text-secondary)' }}>{children}</ul>,
            ol: ({ children }) => <ol style={{ marginBottom: 18, paddingLeft: 24, color: 'var(--text-secondary)' }}>{children}</ol>,
            li: ({ children }) => <li style={{ marginBottom: 6 }}>{children}</li>,
            blockquote: ({ children }) => (
              <blockquote style={{
                borderLeft: '4px solid var(--accent)',
                paddingLeft: 20,
                margin: '20px 0',
                color: 'var(--text-muted)',
                fontStyle: 'italic',
                background: 'var(--bg-secondary)',
                padding: '16px 20px',
                borderRadius: '0 10px 10px 0',
              }}>
                {children}
              </blockquote>
            ),
            code: ({ className, children, ...props }) => {
              const isInline = !className;
              if (isInline) {
                return <code {...props}>{children}</code>;
              }
              return (
                <pre><code className={className} {...props}>{children}</code></pre>
              );
            },
            strong: ({ children }) => <strong style={{ color: 'var(--text-primary)', fontWeight: 700 }}>{children}</strong>,
          }}
        >
          {article.content}
        </ReactMarkdown>
      </motion.div>

      {/* Comments placeholder */}
      <div style={{
        marginTop: 60,
        padding: '32px 0',
        borderTop: '1px solid var(--border)',
      }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20, color: 'var(--text-primary)' }}>
          评论
        </h3>
        <div style={{
          background: 'var(--bg-secondary)',
          borderRadius: 14,
          padding: '40px',
          textAlign: 'center',
          color: 'var(--text-muted)',
          border: '1px dashed var(--border)',
        }}>
          <p style={{ fontSize: 40, marginBottom: 10 }}>💬</p>
          <p style={{ fontSize: 15 }}>
            评论区即将接入{' '}
            <a href="https://giscus.app" target="_blank" rel="noopener" style={{ color: 'var(--accent)', fontWeight: 600 }}>
              Giscus
            </a>
          </p>
          <p style={{ fontSize: 13, marginTop: 4 }}>
            需要配置 GitHub 仓库后即可使用（完全免费）
          </p>
        </div>
      </div>

      {/* Back to top */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          position: 'fixed',
          bottom: 30,
          right: 30,
          width: 44,
          height: 44,
          borderRadius: '50%',
          background: 'var(--accent)',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          fontSize: 20,
          boxShadow: 'var(--shadow-hover)',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        aria-label="返回顶部"
      >
        ↑
      </motion.button>
    </motion.article>
  );
}
