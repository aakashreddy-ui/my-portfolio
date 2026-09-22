import React, { useEffect, useRef, useState } from 'react';
import { blogPosts } from '../data/portfolioData';

export default function BlogSection() {
  const [selectedPost, setSelectedPost] = useState(null);
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (!selectedPost) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleDialogKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedPost(null);
        return;
      }

      if (event.key !== 'Tab') return;
      const focusableElements = dialogRef.current?.querySelectorAll('button');
      if (!focusableElements?.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener('keydown', handleDialogKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleDialogKeyDown);
      triggerRef.current?.focus();
    };
  }, [selectedPost]);

  return (
    <section className="section-shell writing-section" id="writing">
      <div className="section-heading writing-heading">
        <div>
          <p className="section-label">Writing</p>
          <h2>Notes from building for the web.</h2>
        </div>
        <p>A few practical notes on frontend work, backend basics, and the decisions behind my projects.</p>
      </div>
      <div className="writing-grid">
        {blogPosts.map((post) => (
          <button className="writing-card" key={post.title} type="button" onClick={(event) => { triggerRef.current = event.currentTarget; setSelectedPost(post); }}>
            <span>{post.category}</span>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <div className="writing-tags">
              {post.tags.map((tag) => <small key={tag}>{tag}</small>)}
            </div>
            <strong className="writing-read-more">Read note <span aria-hidden="true">-&gt;</span></strong>
          </button>
        ))}
      </div>
      {selectedPost && (
        <div className="writing-dialog-backdrop" role="presentation" onClick={() => setSelectedPost(null)}>
          <article ref={dialogRef} className="writing-dialog" role="dialog" aria-modal="true" aria-labelledby="writing-dialog-title" aria-describedby="writing-dialog-excerpt" onClick={(event) => event.stopPropagation()}>
            <button ref={closeButtonRef} className="writing-dialog-close" type="button" onClick={() => setSelectedPost(null)} aria-label="Close blog post">x</button>
            <span>{selectedPost.category}</span>
            <h3 id="writing-dialog-title">{selectedPost.title}</h3>
            <p id="writing-dialog-excerpt" className="writing-dialog-excerpt">{selectedPost.excerpt}</p>
            <div className="writing-dialog-content">
              {selectedPost.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="writing-tags">
              {selectedPost.tags.map((tag) => <small key={tag}>{tag}</small>)}
            </div>
          </article>
        </div>
      )}
    </section>
  );
}
