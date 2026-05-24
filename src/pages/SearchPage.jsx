import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import useSearch from '../hooks/useSearch';
import ArticleCard from '../components/ArticleCard';
import SearchBar from '../components/SearchBar';
import ScrollReveal from '../components/ScrollReveal';
import { useState, useEffect } from 'react';

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [inputValue, setInputValue] = useState(query);
  const results = useSearch(query);

  useEffect(() => {
    setInputValue(query);
  }, [query]);

  const handleSearch = (q) => {
    setSearchParams({ q });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ padding: '0 24px' }}
    >
      <ScrollReveal>
        <h1 className="section-title" style={{ marginBottom: 28 }}>搜索文章</h1>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <SearchBar onSearch={handleSearch} autoFocus={!query} />
      </ScrollReveal>

      {query && (
        <ScrollReveal delay={0.2}>
          <p style={{
            marginTop: 24,
            color: 'var(--text-secondary)',
            fontSize: 15,
          }}>
            搜索「{query}」的结果：找到 {results.length} 篇文章
          </p>
        </ScrollReveal>
      )}

      <div style={{ marginTop: 24 }}>
        {results.length > 0 ? (
          results.map((article, i) => (
            <ArticleCard key={article.id} article={article} index={i} />
          ))
        ) : query ? (
          <ScrollReveal>
            <div style={{
              textAlign: 'center',
              padding: 60,
              color: 'var(--text-muted)',
              background: 'var(--bg-secondary)',
              borderRadius: 16,
              border: '1px dashed var(--border)',
            }}>
              <p style={{ fontSize: 50, marginBottom: 12 }}>🔍</p>
              <p>没有找到相关文章，试试别的关键词</p>
            </div>
          </ScrollReveal>
        ) : (
          <ScrollReveal>
            <div style={{
              textAlign: 'center',
              padding: 60,
              color: 'var(--text-muted)',
              background: 'var(--bg-secondary)',
              borderRadius: 16,
              border: '1px dashed var(--border)',
            }}>
              <p style={{ fontSize: 50, marginBottom: 12 }}>⌨️</p>
              <p>在上方输入关键词开始搜索</p>
            </div>
          </ScrollReveal>
        )}
      </div>
    </motion.div>
  );
}
