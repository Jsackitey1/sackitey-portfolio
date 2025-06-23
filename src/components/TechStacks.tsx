import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './TechStacks.css';
import { TechStack } from '../types';

const TechStacks: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const techStacks: TechStack[] = [
    {
      category: "Programming Languages",
      items: [
        { name: "Java", proficiency: "expert", yearsOfExperience: 2, projects: ["Brick Breaker Game", "Robotic Arm"], category: "language", learningYear: 2021 },
        { name: "Python", proficiency: "expert", yearsOfExperience: 3, projects: ["Data Analysis", "Robotic Arm", "ML Projects"], category: "language", learningYear: 2022 },
        { name: "JavaScript", proficiency: "advanced", yearsOfExperience: 3, projects: ["LinkLibrary", "Twitter Analyzer", "Portfolio"], category: "language", learningYear: 2022 },
        { name: "TypeScript", proficiency: "advanced", yearsOfExperience: 1, projects: ["LinkLibrary", "Portfolio"], category: "language", learningYear: 2023 },
        { name: "C#", proficiency: "intermediate", yearsOfExperience: 1, projects: ["Desktop Applications"], category: "language", learningYear: 2022 },
        { name: "SQL", proficiency: "intermediate", yearsOfExperience: 2, projects: ["Database Projects"], category: "language", learningYear: 2023 },
        { name: "HTML & CSS", proficiency: "expert", yearsOfExperience: 3, projects: ["All Web Projects"], category: "language", learningYear: 2022 }
      ]
    },
    {
      category: "Frontend Technologies",
      items: [
        { name: "React", proficiency: "expert", yearsOfExperience: 3, projects: ["LinkLibrary", "Twitter Analyzer", "Portfolio"], category: "frontend", learningYear: 2024 },
        { name: "React Native", proficiency: "advanced", yearsOfExperience: 1, projects: ["VigilWatch"], category: "frontend", learningYear: 2024 },
        { name: "Framer Motion", proficiency: "advanced", yearsOfExperience: 1, projects: ["Portfolio"], category: "frontend", learningYear: 2024 },
        { name: "Material-UI", proficiency: "intermediate", yearsOfExperience: 2, projects: ["LinkLibrary"], category: "frontend", learningYear: 2023 },
        { name: "Tailwind CSS", proficiency: "intermediate", yearsOfExperience: 1, projects: ["Recent Projects"], category: "frontend", learningYear: 2024 },
        { name: "Vite", proficiency: "intermediate", yearsOfExperience: 1, projects: ["Portfolio"], category: "frontend", learningYear: 2025 }
      ]
    },
    {
      category: "Backend & Database",
      items: [
        { name: "Node.js", proficiency: "advanced", yearsOfExperience: 2, projects: ["VigilWatch", "Twitter Analyzer"], category: "backend", learningYear: 2024 },
        { name: "Express.js", proficiency: "intermediate", yearsOfExperience: 2, projects: ["API Projects"], category: "backend", learningYear: 2025 },
        { name: "Firebase", proficiency: "advanced", yearsOfExperience: 2, projects: ["LinkLibrary", "VigilWatch"], category: "backend", learningYear: 2024 },
        { name: "MongoDB", proficiency: "intermediate", yearsOfExperience: 2, projects: ["VigilWatch", "Database Projects"], category: "backend", learningYear: 2025 },
        { name: "Cloud Firestore", proficiency: "advanced", yearsOfExperience: 2, projects: ["LinkLibrary"], category: "backend", learningYear: 2024 }
      ]
    },
    {
      category: "Tools & Platforms",
      items: [
        { name: "Git & GitHub", proficiency: "expert", yearsOfExperience: 4, projects: ["All Projects"], category: "tools", learningYear: 2021 },
        { name: "GitHub Actions", proficiency: "intermediate", yearsOfExperience: 1, projects: ["Portfolio"], category: "tools", learningYear: 2024 },
        { name: "Arduino", proficiency: "advanced", yearsOfExperience: 2, projects: ["Robotic Arm"], category: "tools", learningYear: 2023 },
        { name: "3D Printing", proficiency: "intermediate", yearsOfExperience: 1, projects: ["Robotic Arm"], category: "tools", learningYear: 2024 },
        { name: "MATLAB", proficiency: "intermediate", yearsOfExperience: 2, projects: ["Engineering Projects"], category: "tools", learningYear: 2022 },
        { name: "Jupyter", proficiency: "advanced", yearsOfExperience: 2, projects: ["Data Analysis"], category: "tools", learningYear: 2023 }
      ]
    },
    {
      category: "APIs & Services",
      items: [
        { name: "OpenAI API", proficiency: "advanced", yearsOfExperience: 1, projects: ["Twitter Analyzer", "AI Projects"], category: "api", learningYear: 2024 },
        { name: "Twilio", proficiency: "intermediate", yearsOfExperience: 1, projects: ["VigilWatch"], category: "api", learningYear: 2024 },
        { name: "Geolocation APIs", proficiency: "advanced", yearsOfExperience: 1, projects: ["VigilWatch"], category: "api", learningYear: 2024 },
        { name: "Twitter API", proficiency: "intermediate", yearsOfExperience: 1, projects: ["Twitter Analyzer"], category: "api", learningYear: 2024 },
        { name: "Stripe API", proficiency: "beginner", yearsOfExperience: 1, projects: ["HeadStarter Projects"], category: "api", learningYear: 2024 },
        { name: "Pinecone", proficiency: "intermediate", yearsOfExperience: 1, projects: ["AI Projects"], category: "api", learningYear: 2024 }
      ]
    },
    {
      category: "Data Science & ML",
      items: [
        { name: "Pandas", proficiency: "advanced", yearsOfExperience: 2, projects: ["Data Analysis"], category: "data", learningYear: 2023 },
        { name: "Matplotlib", proficiency: "intermediate", yearsOfExperience: 2, projects: ["Data Visualization"], category: "data", learningYear: 2023 },
        { name: "Statistical Analysis", proficiency: "intermediate", yearsOfExperience: 2, projects: ["Data for Good"], category: "data", learningYear: 2023 },
        { name: "Machine Learning", proficiency: "intermediate", yearsOfExperience: 1, projects: ["Data Analysis"], category: "data", learningYear: 2024 }
      ]
    }
  ];

  const cubeImages = [
    { name: 'React', icon: '⚛️', color: '#61DAFB' },
    { name: 'TypeScript', icon: '📘', color: '#3178C6' },
    { name: 'Python', icon: '🐍', color: '#3776AB' },
    { name: 'JavaScript', icon: '📜', color: '#F7DF1E' },
    { name: 'Java', icon: '☕', color: '#ED8B00' },
    { name: 'Firebase', icon: '🔥', color: '#FFCA28' }
  ];

  const categories = [
    { id: 'all', label: 'All Technologies', count: techStacks.reduce((acc, stack) => acc + stack.items.length, 0) },
    { id: 'language', label: 'Languages', count: techStacks.find(s => s.category === 'Programming Languages')?.items.length || 0 },
    { id: 'frontend', label: 'Frontend', count: techStacks.find(s => s.category === 'Frontend Technologies')?.items.length || 0 },
    { id: 'backend', label: 'Backend', count: techStacks.find(s => s.category === 'Backend & Database')?.items.length || 0 },
    { id: 'tools', label: 'Tools', count: techStacks.find(s => s.category === 'Tools & Platforms')?.items.length || 0 },
    { id: 'api', label: 'APIs', count: techStacks.find(s => s.category === 'APIs & Services')?.items.length || 0 },
    { id: 'data', label: 'Data/ML', count: techStacks.find(s => s.category === 'Data Science & ML')?.items.length || 0 }
  ];

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case 'expert': return '#00ff88';
      case 'advanced': return '#4CAF50';
      case 'intermediate': return '#FF9800';
      case 'beginner': return '#f44336';
      default: return '#757575';
    }
  };

  const getProficiencyWidth = (proficiency: string) => {
    switch (proficiency) {
      case 'expert': return '100%';
      case 'advanced': return '80%';
      case 'intermediate': return '60%';
      case 'beginner': return '40%';
      default: return '20%';
    }
  };

  const filteredStacks = selectedCategory === 'all' 
    ? techStacks 
    : techStacks.map(stack => ({
        ...stack,
        items: stack.items.filter(item => item.category === selectedCategory)
      })).filter(stack => stack.items.length > 0);

  const stats = {
    totalTechs: techStacks.reduce((acc, stack) => acc + stack.items.length, 0),
    expertLevel: techStacks.reduce((acc, stack) => acc + stack.items.filter(item => item.proficiency === 'expert').length, 0),
    yearsTotal: Math.max(...techStacks.flatMap(stack => stack.items.map(item => item.yearsOfExperience))),
    categories: techStacks.length
  };

  return (
    <div className="tech-container" id="techstack-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="tech-header"
      >
        <h1 className="tech-title">Technology Stack</h1>
        <p className="tech-subtitle">
          A comprehensive overview of my technical skills and expertise
        </p>

        <div className="tech-stats">
          <div className="stat-card">
            <span className="stat-number">{stats.totalTechs}</span>
            <span className="stat-label">Technologies</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{stats.expertLevel}</span>
            <span className="stat-label">Expert Level</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{stats.yearsTotal}+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{stats.categories}</span>
            <span className="stat-label">Categories</span>
          </div>
        </div>
      </motion.div>

      <div className="tech-controls">
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>
      </div>
      
      <div className="tech-content">
        <div className="tech-sections">
          {filteredStacks.map((stack, index) => (
            <motion.div 
              key={index} 
              className="tech-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 className="section-title">{stack.category}</h3>
              <div className="tech-grid">
                {stack.items.map((item, itemIndex) => (
                  <motion.div 
                    key={itemIndex} 
                    className="tech-item"
                    onMouseEnter={() => setHoveredTech(item.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="tech-item-header">
                      <span className="tech-name">{item.name}</span>
                      <span className={`proficiency-badge ${item.proficiency}`}>
                        {item.proficiency}
                      </span>
                    </div>
                    
                    <div className="proficiency-bar">
                      <div 
                        className="proficiency-fill"
                        style={{ 
                          width: getProficiencyWidth(item.proficiency),
                          backgroundColor: getProficiencyColor(item.proficiency)
                        }}
                      />
                    </div>
                    
                    <div className="tech-meta">
                      <span className="experience">⏱️ {item.yearsOfExperience} years</span>
                      {item.learningYear && (
                        <span className="learning-year">📅 Since {item.learningYear}</span>
                      )}
                    </div>

                    {hoveredTech === item.name && (
                      <motion.div 
                        className="tech-tooltip"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                      >
                        <h5>Projects:</h5>
                        <ul>
                          {item.projects.map((project, idx) => (
                            <li key={idx}>{project}</li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="cube-container">
          <div className="cube-wrapper">
            <motion.div 
              id="enhanced-cube"
              animate={{ rotateX: 360, rotateY: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {cubeImages.map((tech, index) => (
                <div 
                  key={index}
                  className={`cube-face face-${index}`}
                  style={{ backgroundColor: tech.color + '20' }}
                >
                  <div className="cube-content">
                    <span className="cube-icon">{tech.icon}</span>
                    <span className="cube-name">{tech.name}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          
          <div className="cube-legend">
            <h4>Featured Technologies</h4>
            <div className="legend-items">
              {cubeImages.map((tech, index) => (
                <div key={index} className="legend-item">
                  <span className="legend-icon">{tech.icon}</span>
                  <span className="legend-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="proficiency-legend">
        <h4>Proficiency Levels</h4>
        <div className="legend-grid">
          <div className="legend-item">
            <div className="legend-color expert"></div>
            <span>Expert (3+ years, production ready)</span>
          </div>
          <div className="legend-item">
            <div className="legend-color advanced"></div>
            <span>Advanced (2+ years, confident)</span>
          </div>
          <div className="legend-item">
            <div className="legend-color intermediate"></div>
            <span>Intermediate (1+ years, learning)</span>
          </div>
          <div className="legend-item">
            <div className="legend-color beginner"></div>
            <span>Beginner (&lt; 1 year, exploring)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStacks;