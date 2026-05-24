import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      style={{
        background: 'transparent',
        border: '1px solid var(--border)',
        borderRadius: 10,
        padding: 8,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        color: 'var(--text-secondary)',
        fontSize: 18,
      }}
      aria-label={theme === 'dark' ? '切换到亮色模式' : '切换到暗黑模式'}
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </motion.button>
  );
}
