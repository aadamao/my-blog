import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getAllTags, getArticlesByTag } from '../data/articles';
import ArticleCard from '../components/ArticleCard';
import ScrollReveal from '../components/ScrollReveal';
import TagBadge from '../components/TagBadge';

export default function TagsPage() {
  const [searchParams] = useSearchParams();
  const activeTag = searchParams.get('tag');
  const allTags = getAllTags();

  const filteredArticles = activeTag ? getArticlesByTag(activeTag) : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ padding: '0 24px' }}
    >
      <ScrollReveal>
        <h1 className="section-title" style={{ marginBottom: 32 }}>文章分类</h1>
      </ScrollReveal>

      {/* Tag cloud */}
      <ScrollReveal delay={0.1}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 10,
          marginBottom: 40,
          background: 'var(--bg-secondary)',
          padding: '24px 28px',
          borderRadius: 16,
          border: '1px solid var(--border)',
        }}>
          <Link to="/tags" style={{
            display: 'inline-block',
            padding: '4px 14px',
            borderRadius: 20,
            fontSize: 13,
            fontWeight: 600,
            background: !activeTag ? 'var(--accent)' : 'var(--tag-bg)',
            color: !activeTag ? '#fff' : 'var(--tag-text)',
            textDecoration: 'none',
          }}>
            全部
          </Link>
          {allTags.map((tag) => (
            <TagBadge key={tag} tag={tag} active={tag === activeTag} />
          ))}
        </div>
      </ScrollReveal>

      {/* Articles */}
      {activeTag ? (
        <div>
          <ScrollReveal>
            <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 24, color: 'var(--text-secondary)' }}>
              标签为「{activeTag}」的文章 ({filteredArticles.length})
            </h2>
          </ScrollReveal>
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article, i) => (
              <ArticleCard key={article.id} article={article} index={i} />
            ))
          ) : (
            <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: 40 }}>没有找到相关文章</p>
          )}
        </div>
      ) : (
        <ScrollReveal delay={0.2}>
          <div style={{
            textAlign: 'center',
            padding: 60,
            color: 'var(--text-muted)',
            background: 'var(--bg-secondary)',
            borderRadius: 16,
            border: '1px dashed var(--border)',
          }}>
            <p style={{ fontSize: 50, marginBottom: 12 }}>🏷️</p>
            <p>点击上方标签即可按分类查看文章</p>
          </div>
        </ScrollReveal>
      )}
    </motion.div>
  );
}
