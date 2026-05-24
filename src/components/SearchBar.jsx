import { motion } from 'framer-motion';
import { useState } from 'react';

export default function SearchBar({ onSearch, autoFocus }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
      setQuery('');
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: '100%', maxWidth: 520, opacity: 1 }}
      style={{
        display: 'flex',
        background: 'var(--bg-card)',
        border: '2px solid var(--accent)',
        borderRadius: 14,
        overflow: 'hidden',
        boxShadow: 'var(--shadow-hover)',
      }}
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="搜索文章..."
        autoFocus={autoFocus}
        style={{
          flex: 1,
          border: 'none',
          outline: 'none',
          padding: '14px 18px',
          fontSize: 16,
          background: 'transparent',
          color: 'var(--text-primary)',
        }}
      />
      <motion.button
        whileHover={{ background: 'var(--accent-light)' }}
        type="submit"
        style={{
          background: 'var(--accent)',
          color: '#fff',
          border: 'none',
          padding: '14px 22px',
          cursor: 'pointer',
          fontWeight: 600,
          fontSize: 15,
          transition: 'background 0.2s',
        }}
      >
        搜索
      </motion.button>
    </motion.form>
  );
}
