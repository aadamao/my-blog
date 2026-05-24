import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import articles from '../data/articles';
import ArticleCard from '../components/ArticleCard';
import ScrollReveal from '../components/ScrollReveal';
import { useTheme } from '../context/ThemeContext';

function ParticleBg() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: 4 + Math.random() * 8,
            height: 4 + Math.random() * 8,
            borderRadius: '50%',
            background: 'var(--accent)',
            opacity: 0.15,
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
          }}
          animate={{
            y: [0, -30 - Math.random() * 40, 0],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

export default function Home() {
  const { theme } = useTheme();

  const heroText = '从小白开始，用 AI 写代码';
  const subText = '记录一个零基础的人，如何借助 AI 工具，一步步学会编程，搭建出自己的网站和应用。';

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        padding: '80px 0 60px',
        textAlign: 'center',
        borderRadius: 20,
        marginBottom: 60,
        background: 'url(/hero-bg.gif) center/cover no-repeat',
        overflow: 'hidden',
      }}>
        <ParticleBg />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ position: 'relative', zIndex: 1, padding: '0 24px' }}
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: 'clamp(32px, 6vw, 56px)',
              fontWeight: 800,
              color: '#fff',
              marginBottom: 16,
              letterSpacing: -1,
            }}
          >
            {heroText.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.03 }}
                style={{ display: 'inline-block' }}
              >
                {char === ' ' ? ' ' : char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            style={{
              fontSize: 'clamp(15px, 2.5vw, 18px)',
              color: 'rgba(255,255,255,0.85)',
              maxWidth: 600,
              margin: '0 auto 32px',
              lineHeight: 1.7,
            }}
          >
            {subText}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <motion.a
              href="#articles"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: '#fff',
                color: 'var(--accent)',
                padding: '12px 30px',
                borderRadius: 30,
                fontWeight: 700,
                fontSize: 16,
                cursor: 'pointer',
                display: 'inline-block',
              }}
            >
              开始阅读
            </motion.a>
            <motion.a
              href="/tags"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: 'rgba(255,255,255,0.15)',
                color: '#fff',
                padding: '12px 30px',
                borderRadius: 30,
                fontWeight: 700,
                fontSize: 16,
                border: '1px solid rgba(255,255,255,0.3)',
                cursor: 'pointer',
                display: 'inline-block',
                textDecoration: 'none',
              }}
            >
              探索分类
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Articles Section */}
      <section id="articles" style={{ padding: '0 0 60px' }}>
        <ScrollReveal>
          <h2 className="section-title">最新文章</h2>
        </ScrollReveal>
        <div>
          {articles.map((article, i) => (
            <ArticleCard key={article.id} article={article} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
