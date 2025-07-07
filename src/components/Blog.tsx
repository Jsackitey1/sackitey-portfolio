import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import { BlogPost } from '../types';
import './Blog.css';

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Take On AI",
      excerpt: "An exploration of artificial intelligence's impact on society, ethics, and human potential in the modern technological landscape.",
      content: `
# Take On AI

Artificial Intelligence has become one of the most transformative technologies of our time, reshaping industries, societies, and the very nature of human work and creativity. This paper examines the multifaceted impact of AI on our world and explores the ethical considerations that accompany its rapid advancement.

## The AI Revolution

The current AI revolution is characterized by unprecedented capabilities in machine learning, natural language processing, and computer vision. As Stuart Russell notes in *Human Compatible: Artificial Intelligence and the Problem of Control*, "We are on the threshold of an AI revolution that will transform human society more fundamentally than any previous technological revolution" (Russell, 2019, p. 1). These technologies are not just improving existing processes—they're creating entirely new possibilities for human achievement and collaboration.

## Key Areas of Impact

### 1. **Work and Employment**
AI is fundamentally changing the nature of work, automating routine tasks while creating new opportunities for human creativity and strategic thinking. Erik Brynjolfsson and Andrew McAfee argue in *The Second Machine Age* that "technological progress is going to leave behind some people, perhaps even a lot of people, as it races ahead" (Brynjolfsson & McAfee, 2014, p. 11). The challenge lies in ensuring that AI augmentation enhances human capabilities rather than replacing them entirely.

### 2. **Education and Learning**
AI-powered educational tools are personalizing learning experiences, adapting to individual student needs and learning styles. As noted in *Artificial Intelligence in Education: Promises and Implications for Teaching and Learning* by Wayne Holmes and colleagues, "AI has the potential to transform education by providing personalized learning experiences that adapt to each student's unique needs and learning pace" (Holmes et al., 2019, p. 15). This democratization of education has the potential to bridge gaps in access and quality.

### 3. **Healthcare and Medicine**
From diagnostic assistance to drug discovery, AI is revolutionizing healthcare delivery and medical research. According to Eric Topol in *Deep Medicine: How Artificial Intelligence Can Make Healthcare Human Again*, "AI will be the stethoscope of the 21st century" (Topol, 2019, p. 3). The integration of AI in healthcare promises more accurate diagnoses, personalized treatments, and improved patient outcomes.

### 4. **Ethical Considerations**
As AI systems become more sophisticated, questions of bias, transparency, and accountability become increasingly important. Cathy O'Neil's *Weapons of Math Destruction* warns that "algorithms are opinions embedded in code" (O'Neil, 2016, p. 21). Ensuring that AI systems are fair, explainable, and aligned with human values is crucial for their responsible deployment.

## The Future of Human-AI Collaboration

The most promising applications of AI involve human-AI collaboration, where each brings their unique strengths to solve complex problems. As Fei-Fei Li writes in *The Worlds I See: Curiosity, Exploration, and Discovery at the Dawn of AI*, "The future of AI is not about replacing humans but about augmenting human capabilities" (Li, 2023, p. 245). Humans excel at creativity, empathy, and ethical reasoning, while AI excels at pattern recognition, data processing, and optimization.

## Philosophical Foundations

The ethical implications of AI development have deep philosophical roots. Nick Bostrom's *Superintelligence: Paths, Dangers, Strategies* raises critical questions about AI alignment: "The control problem—the challenge of ensuring that superintelligent AI systems act in accordance with human values—is perhaps the most important problem humanity has ever faced" (Bostrom, 2014, p. 156).

## Conclusion

The future of AI is not about humans versus machines, but about humans working alongside intelligent systems to achieve goals that neither could accomplish alone. By approaching AI development with careful consideration of its societal impact and ethical implications, we can harness its potential to create a more prosperous, equitable, and sustainable future.

As Max Tegmark emphasizes in *Life 3.0: Being Human in the Age of Artificial Intelligence*, "The future of AI is not predetermined—it's up to us to shape it" (Tegmark, 2017, p. 312). The key to successful AI integration lies in maintaining human agency while leveraging AI's capabilities to enhance human potential and address society's most pressing challenges.

---

## References

Bostrom, N. (2014). *Superintelligence: Paths, Dangers, Strategies*. Oxford University Press.

Brynjolfsson, E., & McAfee, A. (2014). *The Second Machine Age: Work, Progress, and Prosperity in a Time of Brilliant Technologies*. W.W. Norton & Company.

Holmes, W., Bialik, M., & Fadel, C. (2019). *Artificial Intelligence in Education: Promises and Implications for Teaching and Learning*. Center for Curriculum Redesign.

Li, F. (2023). *The Worlds I See: Curiosity, Exploration, and Discovery at the Dawn of AI*. Flatiron Books.

O'Neil, C. (2016). *Weapons of Math Destruction: How Big Data Increases Inequality and Threatens Democracy*. Crown.

Russell, S. (2019). *Human Compatible: Artificial Intelligence and the Problem of Control*. Viking.

Tegmark, M. (2017). *Life 3.0: Being Human in the Age of Artificial Intelligence*. Knopf.

Topol, E. (2019). *Deep Medicine: How Artificial Intelligence Can Make Healthcare Human Again*. Basic Books.
      `,
      date: "2024-12-15",
      tags: ["Artificial Intelligence", "Technology", "Ethics", "Society"],
      slug: "take-on-ai",
      readTime: 8
    },
    {
      id: 2,
      title: "Socrates and the Courage of Questioning",
      excerpt: "A philosophical examination of Socratic questioning methods and their relevance to modern critical thinking and intellectual discourse.",
      content: `
# Socrates and the Courage of Questioning

The Socratic method, characterized by systematic questioning to stimulate critical thinking and illuminate ideas, remains one of the most powerful tools for intellectual inquiry and personal growth. This paper explores the enduring relevance of Socratic questioning in contemporary education and discourse.

## The Socratic Method

At its core, the Socratic method is not about providing answers but about asking the right questions. As Plato records in *The Apology*, Socrates famously declared, "The unexamined life is not worth living" (Plato, 399 BCE/2000, p. 38). Socrates believed that true wisdom begins with recognizing one's own ignorance, and that through careful questioning, individuals can arrive at deeper understanding and self-knowledge.

## Key Principles

### 1. **The Elenchus (Refutation)**
Socrates used systematic questioning to expose contradictions in his interlocutors' beliefs, leading them to recognize the inadequacy of their initial assumptions. As Gregory Vlastos explains in *Socrates: Ironist and Moral Philosopher*, "The elenchus is not a method for discovering truth, but for testing the consistency of beliefs" (Vlastos, 1991, p. 113). This process of intellectual refutation is fundamental to critical thinking.

### 2. **Irony and Humility**
Socratic irony involves feigning ignorance to encourage others to examine their own knowledge claims. As noted in *The Cambridge Companion to Socrates*, "Socratic irony is not deception but a pedagogical strategy that creates space for genuine inquiry" (Morrison, 2011, p. 89). This approach fosters intellectual humility and creates space for genuine inquiry.

### 3. **The Midwife Method**
Socrates compared his role to that of a midwife, helping others "give birth" to their own ideas through questioning rather than imposing his own views. In *Theaetetus*, Plato writes, "My art of midwifery is in general like theirs; the only difference is that my patients are men, not women, and my concern is not with the body but with the soul that is in travail of birth" (Plato, 369 BCE/1997, p. 150).

## Classical Foundations

The Socratic method finds its most complete expression in Plato's early dialogues. As Charles Kahn observes in *Plato and the Socratic Dialogue*, "The early dialogues present Socrates as a relentless questioner who exposes the inadequacy of conventional wisdom through systematic interrogation" (Kahn, 1996, p. 78).

## Modern Applications

### **Education**
The Socratic method is particularly valuable in modern education, where it encourages students to think critically, question assumptions, and develop their own reasoned positions rather than simply memorizing information. As Matthew Lipman argues in *Thinking in Education*, "Philosophy for children, based on Socratic questioning, develops critical thinking skills that are essential for democratic citizenship" (Lipman, 2003, p. 45).

### **Scientific Inquiry**
The spirit of Socratic questioning is essential to scientific method, where hypotheses are constantly tested, refined, and sometimes refuted through systematic investigation. Karl Popper's *The Logic of Scientific Discovery* reflects this Socratic spirit: "Science progresses not by proving theories true, but by falsifying them through critical testing" (Popper, 1959, p. 27).

### **Democratic Discourse**
In democratic societies, the ability to question authority, examine evidence, and engage in reasoned debate is crucial for informed citizenship and good governance. As John Dewey emphasizes in *Democracy and Education*, "The method of democracy is to bring conflicts out into the open where they can be seen and discussed" (Dewey, 1916, p. 101).

## The Courage to Question

Socratic questioning requires courage—the courage to admit uncertainty, to challenge established beliefs, and to pursue truth even when it leads to uncomfortable conclusions. As Martha Nussbaum writes in *Cultivating Humanity*, "Philosophical questioning requires the courage to face uncertainty and the willingness to examine one's own beliefs critically" (Nussbaum, 1997, p. 18). This intellectual courage is perhaps more important today than ever before.

## Challenges in the Digital Age

In an era of information overload and algorithmic echo chambers, the Socratic method provides a framework for navigating complexity and avoiding intellectual complacency. As Neil Postman warns in *Technopoly*, "In a world of information glut, the ability to ask the right questions becomes more important than having ready answers" (Postman, 1992, p. 70). It encourages us to question not just others' claims but our own assumptions and biases.

## Contemporary Relevance

The Socratic method continues to inspire modern approaches to critical thinking and education. As Richard Paul and Linda Elder note in *The Miniature Guide to Critical Thinking*, "Socratic questioning is the engine of critical thinking, driving us to examine our assumptions, evaluate evidence, and consider alternative perspectives" (Paul & Elder, 2006, p. 12).

## Conclusion

The Socratic method is not merely a historical curiosity but a living tradition that continues to offer profound insights into how we can think more clearly, reason more effectively, and live more examined lives. In a world where answers are often readily available but wisdom remains scarce, the courage to question—to ask "why?" and "how do we know?"—is more valuable than ever.

As Bertrand Russell observed in *The Problems of Philosophy*, "The value of philosophy is to be sought largely in its very uncertainty" (Russell, 1912, p. 161). By embracing the spirit of Socratic inquiry, we can develop the critical thinking skills necessary to navigate an increasingly complex world and contribute meaningfully to the ongoing conversation about what it means to live well and think clearly.

---

## References

Dewey, J. (1916). *Democracy and Education*. Macmillan.

Kahn, C. H. (1996). *Plato and the Socratic Dialogue: The Philosophical Use of a Literary Form*. Cambridge University Press.

Lipman, M. (2003). *Thinking in Education* (2nd ed.). Cambridge University Press.

Morrison, D. R. (Ed.). (2011). *The Cambridge Companion to Socrates*. Cambridge University Press.

Nussbaum, M. C. (1997). *Cultivating Humanity: A Classical Defense of Reform in Liberal Education*. Harvard University Press.

Paul, R., & Elder, L. (2006). *The Miniature Guide to Critical Thinking: Concepts and Tools*. Foundation for Critical Thinking.

Plato. (399 BCE/2000). *The Apology*. In *The Trial and Death of Socrates* (G. M. A. Grube, Trans.). Hackett Publishing.

Plato. (369 BCE/1997). *Theaetetus*. In *Plato: Complete Works* (J. M. Cooper, Ed.). Hackett Publishing.

Popper, K. R. (1959). *The Logic of Scientific Discovery*. Hutchinson.

Postman, N. (1992). *Technopoly: The Surrender of Culture to Technology*. Knopf.

Russell, B. (1912). *The Problems of Philosophy*. Williams and Norgate.

Vlastos, G. (1991). *Socrates: Ironist and Moral Philosopher*. Cambridge University Press.
      `,
      date: "2024-11-20",
      tags: ["Philosophy", "Education", "Critical Thinking", "Socrates"],
      slug: "socrates-courage-questioning",
      readTime: 10
    },
    {
      id: 3,
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

\`\`\`bash
src/
├── components/     # Reusable UI components
├── pages/         # Page-level components
├── hooks/         # Custom React hooks
├── types/         # TypeScript type definitions
├── utils/         # Utility functions
├── contexts/      # React contexts
└── services/      # API services
\`\`\`

## Example TypeScript Interface

Here's how to define a clean interface for blog posts:

\`\`\`typescript
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
  slug: string;
  readTime: number;
}
\`\`\`

## Custom Hook Example

\`\`\`typescript
import { useState, useEffect } from 'react';

function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPosts();
  }, []);
  
  return { posts, loading };
}
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
      id: 4,
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
      id: 5,
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
              <div className="article-content">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    code({ className, children, ...props }: any) {
                      const match = /language-(\w+)/.exec(className || '');
                      const isInline = !match;
                      return !isInline ? (
                        <SyntaxHighlighter
                          style={tomorrow as any}
                          language={match![1]}
                          PreTag="div"
                        >
                          {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                      ) : (
                        <code className={className} {...props}>
                          {children}
                        </code>
                      );
                    },
                    h1: ({ children }) => <h1 className="article-h1">{children}</h1>,
                    h2: ({ children }) => <h2 className="article-h2">{children}</h2>,
                    h3: ({ children }) => <h3 className="article-h3">{children}</h3>,
                    p: ({ children }) => <p className="article-p">{children}</p>,
                    ul: ({ children }) => <ul className="article-ul">{children}</ul>,
                    ol: ({ children }) => <ol className="article-ol">{children}</ol>,
                    li: ({ children }) => <li className="article-li">{children}</li>,
                    blockquote: ({ children }) => <blockquote className="article-blockquote">{children}</blockquote>,
                    a: ({ href, children }) => (
                      <a href={href} className="article-link" target="_blank" rel="noopener noreferrer">
                        {children}
                      </a>
                    ),
                  }}
                >
                  {selectedPost.content}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;