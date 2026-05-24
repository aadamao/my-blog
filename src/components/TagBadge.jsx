import { Link } from 'react-router-dom';

export default function TagBadge({ tag, active = false, onClick }) {
  const baseStyle = {
    display: 'inline-block',
    padding: '4px 14px',
    borderRadius: 20,
    fontSize: 13,
    fontWeight: 600,
    background: active ? 'var(--accent)' : 'var(--tag-bg)',
    color: active ? '#fff' : 'var(--tag-text)',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    textDecoration: 'none',
  };

  if (onClick) {
    return <button onClick={onClick} style={baseStyle}>{tag}</button>;
  }

  return <Link to={`/tags?tag=${encodeURIComponent(tag)}`} style={baseStyle}>{tag}</Link>;
}
