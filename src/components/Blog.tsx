import React, { useState } from 'react';
import { BlogPost } from '../types';
import './Blog.css';

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Building Scalable React Applications with TypeScript",
      excerpt: "Learn how to structure large React applications using TypeScript for better maintainability and developer experience.",
      content: `
# Building Scalable React Applications with TypeScript

TypeScript has become an essential tool for building robust React applications. In this post, I'll share my experience and best practices for creating scalable React apps with TypeScript.

## Why TypeScript?

TypeScript provides several benefits:
- **Type Safety**: Catch errors at compile time
- **Better IDE Support**: Enhanced autocomplete and refactoring
- **Self-Documenting Code**: Types serve as documentation
- **Easier Refactoring**: Confident code changes across large codebases

## Project Structure

When building scalable React applications, structure is key:

\`\`\`
src/
├── components/     # Reusable UI components
├── pages/         # Page-level components
├── hooks/         # Custom React hooks
├── types/         # TypeScript type definitions
├── utils/         # Utility functions
├── contexts/      # React contexts
└── services/      # API services
\`\`\`

## Key Takeaways

1. Start with strict TypeScript configuration
2. Define clear interfaces for your data
3. Use custom hooks for business logic
4. Implement proper error boundaries
5. Consider performance from the beginning

Building with TypeScript might feel like extra work initially, but the long-term benefits far outweigh the initial investment.
      `,
      date: "2024-01-15",
      tags: ["React", "TypeScript", "Web Development"],
      slug: "building-scalable-react-applications",
      readTime: 5
    },
    {
      id: 2,
      title: "My Journey into Open Source Development",
      excerpt: "How I started contributing to open source projects and what I learned along the way.",
      content: `
# My Journey into Open Source Development

Contributing to open source has been one of the most rewarding experiences in my development journey. Here's how I got started and what I've learned.

## Getting Started

My first contribution was to the ColorStack Oyster project. I was nervous about making my first pull request, but the community was incredibly welcoming.

## What I Learned

- **Communication is Key**: Clear documentation and communication make all the difference
- **Start Small**: Begin with documentation fixes or small bug fixes
- **Read the Contributing Guidelines**: Every project has its own workflow
- **Be Patient**: Code reviews take time, and that's okay

## Impact

Contributing to open source has:
- Improved my coding skills
- Connected me with amazing developers
- Given me confidence in my abilities
- Taught me about project management

## Getting Involved

If you're thinking about contributing to open source:
1. Find projects you use and care about
2. Look for "good first issue" labels
3. Join the community discussions
4. Don't be afraid to ask questions

The open source community is one of the most supportive communities in tech. Take the leap!
      `,
      date: "2024-01-10",
      tags: ["Open Source", "Career", "Community"],
      slug: "journey-into-open-source",
      readTime: 4
    },
    {
      id: 3,
      title: "Sustainability in Tech: More Than Just Code",
      excerpt: "Exploring how we can make technology more sustainable and environmentally conscious.",
      content: `
# Sustainability in Tech: More Than Just Code

As developers, we have a responsibility to consider the environmental impact of our work. Here's how we can build more sustainable technology.

## The Problem

The tech industry accounts for about 4% of global greenhouse gas emissions, and this number is growing rapidly.

## What We Can Do

### Code Efficiency
- Write performant code that uses fewer resources
- Optimize images and assets
- Implement proper caching strategies
- Use efficient algorithms and data structures

### Infrastructure Choices
- Choose green hosting providers
- Implement proper CDN strategies
- Optimize database queries
- Use serverless where appropriate

### Design Decisions
- Create interfaces that encourage sustainable behavior
- Reduce unnecessary features and complexity
- Design for longevity, not just the latest trends

## My Experience

Working on the campus water fountain mapping project taught me how technology can directly impact sustainability. By making it easier for students to find water fountains, we reduced single-use plastic bottle consumption.

## The Future

Sustainable technology isn't just about being environmentally conscious—it's about building better, more efficient systems that benefit everyone.

Let's build technology that not only solves problems but does so responsibly.
      `,
      date: "2024-01-05",
      tags: ["Sustainability", "Environment", "Technology"],
      slug: "sustainability-in-tech",
      readTime: 6
    }
  ];

  const closeModal = () => {
    setSelectedPost(null);
  };

  return (
    <div className="blog-container" id="blog-section">
      <h2 className="section-title">Latest Articles</h2>
      <p className="section-subtitle">Thoughts on development, technology, and life</p>
      
      <div className="blog-grid">
        {blogPosts.map(post => (
          <article key={post.id} className="blog-card">
            <div className="blog-header">
              <h3 className="blog-title">{post.title}</h3>
              <div className="blog-meta">
                <span className="blog-date">{new Date(post.date).toLocaleDateString()}</span>
                <span className="blog-read-time">{post.readTime} min read</span>
              </div>
            </div>
            
            <p className="blog-excerpt">{post.excerpt}</p>
            
            <div className="blog-tags">
              {post.tags.map(tag => (
                <span key={tag} className="blog-tag">{tag}</span>
              ))}
            </div>
            
            <button 
              onClick={() => setSelectedPost(post)}
              className="read-more-btn"
              aria-label={`Read full article: ${post.title}`}
            >
              Read More
            </button>
          </article>
        ))}
      </div>

      {selectedPost && (
        <div className="blog-modal" onClick={closeModal}>
          <div className="blog-modal-content" onClick={e => e.stopPropagation()}>
            <button 
              className="modal-close-btn"
              onClick={closeModal}
              aria-label="Close article"
            >
              ×
            </button>
            <div className="blog-article">
              <div className="article-header">
                <h1>{selectedPost.title}</h1>
                <div className="article-meta">
                  <span>{new Date(selectedPost.date).toLocaleDateString()}</span>
                  <span>{selectedPost.readTime} min read</span>
                </div>
                <div className="article-tags">
                  {selectedPost.tags.map(tag => (
                    <span key={tag} className="article-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div 
                className="article-content"
                dangerouslySetInnerHTML={{ 
                  __html: selectedPost.content.replace(/\n/g, '<br/>').replace(/```([^`]+)```/g, '<pre><code>$1</code></pre>') 
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;