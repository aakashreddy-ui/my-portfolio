import React, { useEffect, useState } from 'react';
import { blogPosts } from '../data/portfolioData';

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export default function BlogSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState(null);
  const [activeView, setActiveView] = useState('read');
  const categories = ['All', ...new Set(blogPosts.map((post) => post.category))];
  const visiblePosts =
    activeCategory === 'All' ? blogPosts : blogPosts.filter((post) => post.category === activeCategory);

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace('#', '');
      const slug = hash.replace(/^blog\//, '');

      if (!slug) {
        setSelectedPost(null);
        setActiveView('read');
        return;
      }

      const post = blogPosts.find((entry) => slugify(entry.title) === slug);
      if (post) {
        setSelectedPost(post);
        setActiveView('read');
      }
    };

    syncFromHash();
    window.addEventListener('popstate', syncFromHash);

    return () => window.removeEventListener('popstate', syncFromHash);
  }, []);

  useEffect(() => {
    if (!selectedPost) {
      if (window.location.hash.startsWith('#blog/')) {
        window.history.replaceState(null, '', '#blog');
      }
      return;
    }

    const nextHash = `#blog/${slugify(selectedPost.title)}`;
    if (window.location.hash !== nextHash) {
      window.history.pushState(null, '', nextHash);
    }
  }, [selectedPost]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setSelectedPost(null);
    setActiveView('read');
    if (window.location.hash.startsWith('#blog/')) {
      window.history.pushState(null, '', '#blog');
    }
  };

  const openPost = (post) => {
    setSelectedPost(post);
    setActiveView('read');
  };

  const closePost = () => {
    setSelectedPost(null);
    setActiveView('read');
    window.history.pushState(null, '', '#blog');
  };

  return (
    <section className="section-shell" id="blog">
      <div className="section-heading">
        <p className="section-label">Blog</p>
        <h2>Notes on building things: tutorials, project breakdowns, and lessons from shipping code.</h2>
      </div>
      {selectedPost ? (
        <div className="blog-detail-page">
          <button type="button" className="blog-back-button" onClick={closePost}>
            ← Back to blog
          </button>
          <div className="blog-detail-panel" id={`post-${slugify(selectedPost.title)}`}>
            <div className="blog-detail-nav">
              <div>
                <p className="blog-detail-label">Reading now</p>
                <h3>{selectedPost.title}</h3>
              </div>
              <div className="blog-detail-actions">
                <button
                  type="button"
                  className={`detail-tab ${activeView === 'read' ? 'active' : ''}`}
                  onClick={() => setActiveView('read')}
                >
                  Read
                </button>
                <button
                  type="button"
                  className={`detail-tab ${activeView === 'gallery' ? 'active' : ''}`}
                  onClick={() => setActiveView('gallery')}
                >
                  Gallery
                </button>
              </div>
            </div>

            {activeView === 'read' ? (
              <div className="blog-detail-content">
                <p className="blog-detail-intro">{selectedPost.intro}</p>
                {selectedPost.content.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            ) : (
              <div className="blog-gallery">
                {selectedPost.gallery.map((image) => (
                  <img key={image} src={image} alt={selectedPost.title} />
                ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        <>
          <div className="blog-filter-row">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`filter-chip ${activeCategory === category ? 'active' : ''}`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="blog-grid">
            {visiblePosts.map((post) => (
              <article className="blog-card" key={post.title}>
                <div className="blog-card-top">
                  <span className="blog-category">{post.category}</span>
                  <span className="blog-meta">{post.date}</span>
                </div>
                <button type="button" className="blog-title-button" onClick={() => openPost(post)}>
                  {post.title}
                </button>
                <p>{post.excerpt}</p>
                <div className="blog-tags">
                  {post.tags.map((tag) => (
                    <small key={tag}>{tag}</small>
                  ))}
                </div>
                <span className="blog-readtime">{post.readTime}</span>
              </article>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
