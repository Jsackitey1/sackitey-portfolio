import{r,j as e}from"./motion-BcFKgIdB.js";import"./vendor-DbHEDQBy.js";const d=()=>{const[i,a]=r.useState(null),o=[{id:1,title:"Building Scalable React Applications with TypeScript",excerpt:"Learn how to structure large React applications using TypeScript for better maintainability and developer experience.",content:`
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
      `,date:"2024-01-15",tags:["React","TypeScript","Web Development"],slug:"building-scalable-react-applications",readTime:5},{id:2,title:"My Journey into Open Source Development",excerpt:"How I started contributing to open source projects and what I learned along the way.",content:`
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
      `,date:"2024-01-10",tags:["Open Source","Career","Community"],slug:"journey-into-open-source",readTime:4},{id:3,title:"Sustainability in Tech: More Than Just Code",excerpt:"Exploring how we can make technology more sustainable and environmentally conscious.",content:`
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
      `,date:"2024-01-05",tags:["Sustainability","Environment","Technology"],slug:"sustainability-in-tech",readTime:6}],s=()=>{a(null)};return e.jsxs("div",{className:"blog-container",id:"blog-section",children:[e.jsx("h2",{className:"section-title",children:"Latest Articles"}),e.jsx("p",{className:"section-subtitle",children:"Thoughts on development, technology, and life"}),e.jsx("div",{className:"blog-grid",children:o.map(t=>e.jsxs("article",{className:"blog-card",children:[e.jsxs("div",{className:"blog-header",children:[e.jsx("h3",{className:"blog-title",children:t.title}),e.jsxs("div",{className:"blog-meta",children:[e.jsx("span",{className:"blog-date",children:new Date(t.date).toLocaleDateString()}),e.jsxs("span",{className:"blog-read-time",children:[t.readTime," min read"]})]})]}),e.jsx("p",{className:"blog-excerpt",children:t.excerpt}),e.jsx("div",{className:"blog-tags",children:t.tags.map(n=>e.jsx("span",{className:"blog-tag",children:n},n))}),e.jsx("button",{onClick:()=>a(t),className:"read-more-btn","aria-label":`Read full article: ${t.title}`,children:"Read More"})]},t.id))}),i&&e.jsx("div",{className:"blog-modal",onClick:s,children:e.jsxs("div",{className:"blog-modal-content",onClick:t=>t.stopPropagation(),children:[e.jsx("button",{className:"modal-close-btn",onClick:s,"aria-label":"Close article",children:"×"}),e.jsxs("div",{className:"blog-article",children:[e.jsxs("div",{className:"article-header",children:[e.jsx("h1",{children:i.title}),e.jsxs("div",{className:"article-meta",children:[e.jsx("span",{children:new Date(i.date).toLocaleDateString()}),e.jsxs("span",{children:[i.readTime," min read"]})]}),e.jsx("div",{className:"article-tags",children:i.tags.map(t=>e.jsx("span",{className:"article-tag",children:t},t))})]}),e.jsx("div",{className:"article-content",dangerouslySetInnerHTML:{__html:i.content.replace(/\n/g,"<br/>").replace(/```([^`]+)```/g,"<pre><code>$1</code></pre>")}})]})]})})]})};export{d as default};
//# sourceMappingURL=Blog-DXv2KSEg.js.map
