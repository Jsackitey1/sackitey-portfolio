import React, { useState, useMemo, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './EnhancedProjects.css';
import { Project } from '../types';
import Loading from './Loading';

// Lazy load project card for better performance
const EnhancedProjectCard = React.lazy(() => import('./EnhancedProjectCard'));

const EnhancedProjects: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'newest' | 'featured' | 'duration'>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const projects: Project[] = [
    {
      id: 1,
      title: "VigilWatch - Emergency Response App",
      description: "Life-saving emergency response application with one-tap emergency calls and real-time location sharing",
      longDescription: "VigilWatch is a comprehensive emergency response application built during HenHacks that can save lives by providing instant access to emergency services. The app features one-tap emergency calling, real-time GPS tracking, SMS alerts to trusted contacts, and a verified medical professional network.",
      technologies: ["React Native", "Firebase", "Geolocation APIs", "Twilio", "Node.js", "MongoDB"],
      image: "/sackitey-portfolio/projects/virgilwatch.gif",
      demo: "https://devpost.com/software/vigilwatch",
      github: "https://github.com/vigilwatch/app",
      tags: ["mobile", "emergency", "real-time", "geolocation"],
      category: "hackathon",
      status: "completed",
      duration: "2 days",
      teamSize: 4,
      impact: "Potentially life-saving emergency response system with real-time capabilities",
      challenges: ["Real-time location accuracy", "Emergency service integration", "Cross-platform compatibility"],
      solutions: ["Implemented GPS fusion algorithms", "Created robust API connections", "Used React Native for universal deployment"],
      learnings: ["Emergency system design", "Real-time data handling", "User experience in crisis situations"],
      featured: true,
      completionDate: "2025-02",
      skills: ["Mobile Development", "Real-time Systems", "Emergency Services", "Team Leadership"]
    },
    {
      id: 2,
      title: "Data for Good - Education Equity Analysis",
      description: "Machine learning analysis of educational disparities for National Education Equity Lab",
      longDescription: "Led a team of 5 developers in analyzing large datasets to identify patterns in educational disparities and develop data-driven solutions for the National Education Equity Lab. Used advanced statistical modeling and machine learning to provide actionable insights for improving educational outcomes.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Jupyter", "Statistical Analysis"],
      image: "/sackitey-portfolio/projects/Dataforgood.jpg",
      github: "https://github.com/dfgtexas25/Team-1",
      tags: ["data-science", "machine-learning", "education", "social-impact"],
      category: "hackathon",
      status: "completed",
      duration: "2 days",
      teamSize: 5,
      impact: "Provided insights to improve educational outcomes for underserved communities",
      challenges: ["Large dataset processing", "Statistical significance testing", "Stakeholder communication"],
      solutions: ["Implemented efficient data pipelines", "Used advanced statistical methods", "Created clear visualization dashboards"],
      learnings: ["Data science methodologies", "Team leadership", "Stakeholder presentation"],
      featured: true,
      completionDate: "2025-01",
      skills: ["Data Science", "Machine Learning", "Team Leadership", "Statistical Analysis"]
    },
    {
      id: 3,
      title: "LinkLibrary - Resource Manager",
      description: "Modern web application for organizing and managing web resources with secure cloud storage",
      longDescription: "LinkLibrary revolutionizes how users organize their digital resources. Built with React and Firebase, it provides secure cloud storage, intelligent categorization, search functionality, and sharing capabilities for bookmarks, articles, and educational materials.",
      technologies: ["React", "Firebase", "TypeScript", "Material-UI", "Cloud Firestore"],
      image: "/sackitey-portfolio/projects/linklibrary.gif",
      github: "https://github.com/Jsackitey1/link-library.git",
      liveDemo: "https://jsackitey1.github.io/link-library",
      tags: ["web", "react", "firebase", "productivity"],
      category: "featured",
      status: "completed",
      duration: "3 weeks",
      teamSize: 1,
      impact: "Used by 10+ students for resource management and organization",
      challenges: ["Real-time synchronization", "Search optimization", "Data structure design"],
      solutions: ["Implemented Firebase real-time listeners", "Created indexed search system", "Designed scalable database schema"],
      learnings: ["Firebase integration", "State management", "User experience design"],
      featured: true,
      completionDate: "2024-12",
      skills: ["Full-Stack Development", "Database Design", "Cloud Services", "UX Design"]
    },
    {
      id: 4,
      title: "Bluetooth Robotic Arm",
      description: "3D-printed Bluetooth-controlled robotic prosthesis with Android app integration",
      longDescription: "An innovative 3D-printed robotic prosthesis controlled via Bluetooth through an Android application. Features precise motor control, sensory feedback, and intuitive gesture-based controls designed to assist individuals with mobility challenges.",
      technologies: ["Python", "Arduino", "Kotlin", "Java", "3D Printing", "Bluetooth"],
      image: "/sackitey-portfolio/projects/Bionic Arm.gif",
      github: "https://github.com/Jsackitey1/Bionic-Arm.git",
      tags: ["iot", "mobile", "hardware", "accessibility"],
      category: "featured",
      status: "completed",
      duration: "6 weeks",
      teamSize: 2,
      impact: "Assistive technology solution for individuals with mobility impairments",
      challenges: ["Bluetooth connectivity stability", "Motor precision control", "3D printing tolerances"],
      solutions: ["Implemented connection retry logic", "Used PID control algorithms", "Optimized 3D model designs"],
      learnings: ["Hardware-software integration", "Mobile app development", "Assistive technology design"],
      featured: true,
      completionDate: "2024-11",
      skills: ["IoT Development", "Mobile Development", "Hardware Integration", "Accessibility Design"]
    },
    {
      id: 5,
      title: "Twitter Trend Analyzer",
      description: "AI-powered application providing real-time summaries of trending Twitter topics",
      longDescription: "A sophisticated web application that leverages AI to analyze Twitter trends and provide intelligent summaries. Uses OpenAI's API to process trending topics and generate meaningful insights about social media conversations and public sentiment.",
      technologies: ["React", "OpenAI API", "Twitter API", "Axios", "Node.js"],
      image: "/sackitey-portfolio/projects/Twitter  trend app.png",
      github: "https://github.com/Jsackitey1/twitter-summary-app.git",
      tags: ["web", "ai", "api", "social-media"],
      category: "secondary",
      status: "completed",
      duration: "2 weeks",
      teamSize: 1,
      impact: "Helps users stay informed about social media trends and public opinion",
      challenges: ["API rate limiting", "Real-time data processing", "AI prompt optimization"],
      solutions: ["Implemented intelligent caching", "Created efficient data pipelines", "Optimized AI prompts for accuracy"],
      learnings: ["API integration", "AI/ML implementation", "Social media data analysis"],
      featured: false,
      completionDate: "2024-10",
      skills: ["API Integration", "AI/ML", "Data Processing", "Social Media Analytics"]
    },
    {
      id: 6,
      title: "Brick Breaker Game",
      description: "Interactive 2D game in Java with advanced physics engine and scoring system",
      longDescription: "A classic Brick Breaker game implemented in Java using Swing. Features sophisticated collision detection, particle effects, power-ups, multiple levels, and a comprehensive scoring system with leaderboards and achievements.",
      technologies: ["Java", "Swing", "AWT", "Game Physics"],
      image: "/sackitey-portfolio/projects/Brick breaker.png",
      github: "https://github.com/Jsackitey1/brickBraker.git",
      tags: ["game", "java", "physics", "desktop"],
      category: "secondary",
      status: "completed",
      duration: "3 weeks",
      teamSize: 1,
      impact: "Educational game development project demonstrating programming fundamentals",
      challenges: ["Collision detection algorithms", "Game physics simulation", "Performance optimization"],
      solutions: ["Implemented efficient collision detection", "Used optimized rendering techniques", "Created modular game architecture"],
      learnings: ["Game development fundamentals", "Object-oriented design", "Performance optimization"],
      featured: false,
      completionDate: "2025-09",
      skills: ["Game Development", "Object-Oriented Programming", "Algorithm Design", "Performance Optimization"]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'featured', label: 'Featured', count: projects.filter(p => p.category === 'featured').length },
    { id: 'hackathon', label: 'Hackathons', count: projects.filter(p => p.category === 'hackathon').length },
    { id: 'secondary', label: 'Personal', count: projects.filter(p => p.category === 'secondary').length }
  ];

  const statusOptions = [
    { id: 'all', label: 'All Status' },
    { id: 'completed', label: 'Completed' },
    { id: 'in-progress', label: 'In Progress' },
    { id: 'planning', label: 'Planning' }
  ];

  const filteredProjects = useMemo(() => {
    let filtered = projects;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(project => project.category === selectedCategory);
    }

    // Filter by status
    if (selectedStatus !== 'all') {
      filtered = filtered.filter(project => project.status === selectedStatus);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase())) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Sort projects
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'featured':
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return new Date(b.completionDate).getTime() - new Date(a.completionDate).getTime();
        case 'newest':
          return new Date(b.completionDate).getTime() - new Date(a.completionDate).getTime();
        case 'duration':
          const getDurationDays = (duration: string) => {
            if (duration.includes('day')) return parseInt(duration);
            if (duration.includes('week')) return parseInt(duration) * 7;
            return 30; // default for months
          };
          return getDurationDays(b.duration) - getDurationDays(a.duration);
        default:
          return 0;
      }
    });

    return filtered;
  }, [selectedCategory, selectedStatus, searchQuery, sortBy]);

  const stats = {
    total: projects.length,
    featured: projects.filter(p => p.featured).length,
    completed: projects.filter(p => p.status === 'completed').length,
    technologies: [...new Set(projects.flatMap(p => p.technologies))].length
  };

  return (
    <div className="enhanced-projects-container" id="projects-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="projects-header"
      >
        <h2 className="section-title">Project Portfolio</h2>
        <p className="section-subtitle">
          Innovative solutions built with passion, creativity, and cutting-edge technology
        </p>

        <div className="projects-stats">
          <div className="stat-item">
            <span className="stat-number">{stats.total}</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{stats.featured}</span>
            <span className="stat-label">Featured</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{stats.completed}</span>
            <span className="stat-label">Completed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{stats.technologies}+</span>
            <span className="stat-label">Technologies</span>
          </div>
        </div>
      </motion.div>

      <div className="projects-controls">
        <div className="search-section">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search projects, technologies, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>
        </div>

        <div className="filter-section">
          <div className="filter-group">
            <label className="filter-label">Category:</label>
            <div className="filter-buttons">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <label className="filter-label">Status:</label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="filter-select"
            >
              {statusOptions.map(status => (
                <option key={status.id} value={status.id}>
                  {status.label}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label">Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="filter-select"
            >
              <option value="featured">Featured First</option>
              <option value="newest">Newest First</option>
              <option value="duration">Duration</option>
            </select>
          </div>

          <div className="view-toggle">
            <button
              className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
              aria-label="Grid view"
            >
              ⊞
            </button>
            <button
              className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
              aria-label="List view"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      <motion.div
        className={`projects-grid ${viewMode}`}
        layout
      >
        <AnimatePresence mode="wait">
          {filteredProjects.map((project) => (
            <Suspense key={project.id} fallback={<Loading size="medium" />}>
              <EnhancedProjectCard
                project={project}
                viewMode={viewMode}
              />
            </Suspense>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <motion.div
          className="no-results"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h3>No projects found</h3>
          <p>Try adjusting your search or filter criteria.</p>
        </motion.div>
      )}
    </div>
  );
};

export default EnhancedProjects;