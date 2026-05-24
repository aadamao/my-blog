import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ArticleDetail from './pages/ArticleDetail';
import TagsPage from './pages/TagsPage';
import SearchPage from './pages/SearchPage';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename="/my-blog">
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Navbar />
          <main style={{ flex: 1, maxWidth: 1100, width: '100%', margin: '0 auto', padding: '20px 0 40px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/article/:slug" element={<ArticleDetail />} />
              <Route path="/tags" element={<TagsPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="*" element={
                <div style={{ textAlign: 'center', padding: '100px 24px' }}>
                  <h1 style={{ fontSize: 64, marginBottom: 16 }}>404</h1>
                  <p style={{ color: 'var(--text-secondary)' }}>页面不存在</p>
                </div>
              } />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
