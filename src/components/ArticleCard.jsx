import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import TagBadge from './TagBadge';

export default function ArticleCard({ article, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
    >
      <Link to={`/article/${article.slug}`}>
        <motion.div
          whileHover={{ y: -4, boxShadow: 'var(--shadow-hover)' }}
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 16,
            padding: '28px 30px',
            marginBottom: 20,
            boxShadow: 'var(--shadow)',
            transition: 'box-shadow 0.3s ease',
            cursor: 'pointer',
          }}
        >
          <div style={{ display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
            {article.tags.map((tag) => (
              <TagBadge key={tag} tag={tag} />
            ))}
          </div>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 10, lineHeight: 1.4, color: 'var(--text-primary)' }}>
            {article.title}
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 15, marginBottom: 14, lineHeight: 1.6 }}>
            {article.excerpt}
          </p>
          <time style={{ color: 'var(--text-muted)', fontSize: 13, fontWeight: 500 }}>
            {article.date}
          </time>
        </motion.div>
      </Link>
    </motion.article>
  );
}
