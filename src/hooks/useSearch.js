import { useState, useMemo } from 'react';
import articles from '../data/articles';

export default function useSearch(query) {
  return useMemo(() => {
    if (!query || query.length < 1) return [];
    const q = query.toLowerCase();
    return articles.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.content.toLowerCase().includes(q) ||
        a.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [query]);
}
