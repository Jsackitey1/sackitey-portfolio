import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import './Experience.css';

interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  category: 'internship' | 'hackathon' | 'open-source' | 'project';
  skills: string[];
  achievements?: string[];
  links?: { label: string; url: string }[];
  current?: boolean;
  logo?: string;
  color?: string;
}

const Experience: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('date-desc');

  const experiences: Experience[] = [
    {
      id: 1,
      role: "Associate SDE Intern",
      company: "Google",
      location: "San Francisco, CA",
      startDate: "May 2025",
      endDate: "August 2025",
      description: "Migrating Google Play Games for PC desktop client from a legacy architecture in C++ to a WebView2-based implementation, written in C#, to improve maintainability, test coverage, and resource usage.",
      category: "internship",
      skills: ["C#", "TypeScript", "C++", "Nunit testing"],
      current: true,
      color: "#4285F4"
    },
    
    {
      id: 2,
      role: "HeadStarter AI SWE Fellow",
      company: "HeadStarter",
      location: "Remote",
      startDate: "June 2024",
      endDate: "August 2024",
      description: "Built 2 AI-powered applications and APIs using cutting-edge technologies that significantly streamlined development processes and enhanced user engagement through intelligent automation.",
      category: "project",
      skills: ["Next.js", "OpenAI API", "Pinecone", "Stripe API", "AI/ML", "Full-Stack Development"],
      achievements: [
        "Developed 2 production-ready AI applications with 95% uptime",
        "Integrated payment processing increasing conversion rates by 30%",
        "Implemented vector search improving query response time by 60%"
      ],
      links: [
        { label: "Demo", url: "#" }
      ],
      current: false,
      color: "#9C27B0"
    },
    {
      id: 3,
      role: "Sustainability Intern",
      company: "Gettysburg College",
      location: "Gettysburg, PA",
      startDate: "May 2024",
      endDate: "August 2024",
      description: "Designed and implemented a comprehensive campus water fountain mapping system to improve accessibility, promote sustainability, and reduce plastic waste through strategic placement and user-friendly design.",
      category: "internship",
      skills: ["GIS Mapping", "Data Analysis", "Sustainability Planning", "User Experience Design", "Environmental Impact Assessment"],
      achievements: [
        "Mapped 50+ water fountains across campus improving accessibility",
        "Reduced plastic bottle usage by estimated 25% through strategic placement",
        "Created interactive digital map used by 3000+ students daily"
      ],
      current: false,
      color: "#00C851"
    },
    {
      id: 4,
      role: "Data for Good Hackathon Participant",
      company: "JPMorgan Chase & Co.",
      location: "Plano, Texas",
      startDate: "Oct 2024",
      endDate: "Oct 2024",
      description: 'Developed a predictive model for <a href="https://nationalequitylab.org" target="_blank" rel="noopener noreferrer">National Education Equity Lab</a> to identify high-impact courses for new high schools. Analyzed performance data and demographics to recommend course offerings, inform expansion strategies, and deliver actionable insights to advance educational equity.',
      category: "hackathon",
      skills: ["Python", "Data Science", "Machine Learning", "Pandas", "Scikit-learn", "Data Visualization", "Teamwork"],
      achievements: [
        "Developed predictive model with 85% accuracy for social impact prediction",
        "Collaborated with 4-person cross-functional team under tight deadlines",
        "Presented solution to panel of JPMorgan executives and data scientists"
      ],
      links: [
        { label: "DevPost", url: "#" }
      ],
      current: false,
      color: "#FF6B35"
    }
  ];

  const filterOptions = [
    { key: 'all', label: 'All Experiences', icon: '🌟', count: experiences.length },
    { key: 'internship', label: 'Internships', icon: '💼', count: experiences.filter(exp => exp.category === 'internship').length },
    { key: 'hackathon', label: 'Hackathons', icon: '🏆', count: experiences.filter(exp => exp.category === 'hackathon').length },
    { key: 'open-source', label: 'Open Source', icon: '🌐', count: experiences.filter(exp => exp.category === 'open-source').length },
    { key: 'project', label: 'Projects', icon: '🚀', count: experiences.filter(exp => exp.category === 'project').length }
  ];

  const filteredAndSortedExperiences = useMemo(() => {
    let filtered = activeFilter === 'all' 
      ? experiences 
      : experiences.filter(exp => exp.category === activeFilter);

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'date-desc':
          if (a.current && !b.current) return -1;
          if (!a.current && b.current) return 1;
          return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
        case 'date-asc':
          if (a.current && !b.current) return -1;
          if (!a.current && b.current) return 1;
          return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
        case 'company':
          return a.company.localeCompare(b.company);
        default:
          return 0;
      }
    });
  }, [activeFilter, sortBy]);

  const stats = useMemo(() => {
    const totalExperiences = experiences.length;
    const currentExperiences = experiences.filter(exp => exp.current).length;
    const totalSkills = new Set(experiences.flatMap(exp => exp.skills)).size;
    const companiesWorkedWith = new Set(experiences.map(exp => exp.company)).size;

    return { totalExperiences, currentExperiences, totalSkills, companiesWorkedWith };
  }, []);

  return (
    <div className="experience-container" id="experience-section">
      <div className="experience-header">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Professional Journey
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          My experience spans software engineering, AI development, open-source contributions, and sustainability initiatives. 
          Each role has shaped my expertise in building impactful technology solutions and leading community-driven projects.
        </motion.p>

        <motion.div 
          className="experience-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="stat-card">
            <span className="stat-number">{stats.totalExperiences}</span>
            <span className="stat-label">Experiences</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{stats.currentExperiences}</span>
            <span className="stat-label">Active Roles</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{stats.totalSkills}</span>
            <span className="stat-label">Technologies</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{stats.companiesWorkedWith}</span>
            <span className="stat-label">Organizations</span>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="experience-controls"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="filter-tabs">
          {filterOptions.map((option) => (
            <button
              key={option.key}
              className={`filter-tab ${activeFilter === option.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(option.key)}
            >
              <span className="tab-icon">{option.icon}</span>
              <span className="tab-label">{option.label}</span>
              <span className="tab-count">({option.count})</span>
            </button>
          ))}
        </div>

      </motion.div>

      <div className="experiences-grid">
        {filteredAndSortedExperiences.length > 0 ? (
          filteredAndSortedExperiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ExperienceCard {...experience} />
            </motion.div>
          ))
        ) : (
          <div className="no-results">
            <p>No experiences found for the selected filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;