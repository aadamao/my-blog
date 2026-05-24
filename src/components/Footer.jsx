import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer style={{
      marginTop: 80,
      padding: '40px 0',
      borderTop: '1px solid var(--border)',
      textAlign: 'center',
      color: 'var(--text-muted)',
      fontSize: 14,
    }}>
      <div className="container">
        <p style={{ marginBottom: 8 }}>
          &copy; {new Date().getFullYear()} 从零到一的编程之旅 — 用 AI 辅助，从零开始学编程
        </p>
        <p>
          由 <a href="https://github.com" target="_blank" rel="noopener" style={{ color: 'var(--accent)' }}>GitHub Pages</a> 驱动
          &nbsp;·&nbsp;
          <Link to="/" style={{ color: 'var(--accent)' }}>首页</Link>
          &nbsp;·&nbsp;
          <Link to="/tags" style={{ color: 'var(--accent)' }}>分类</Link>
        </p>
      </div>
    </footer>
  );
}
