import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Experience.css';
import ExperienceCard from './ExperienceCard';

interface ExperienceData {
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
  color?: string;
}

const Experience: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'date' | 'category'>('date');

  const experiences: ExperienceData[] = [
    {
      id: 1,
      role: "Associate SDE Intern",
      company: "Google",
      location: "San Francisco, CA",
      startDate: "May 2025",
      endDate: "August 2025",
      description: "Upcoming software development internship focused on building scalable systems and contributing to Google's cutting-edge technology infrastructure.",
      category: "internship",
      skills: ["Software Engineering", "System Design", "Cloud Computing", "Problem Solving"],
      achievements: ["Selected from thousands of applicants", "Upcoming opportunity to work on high-impact projects"],
      current: false,
      color: "#4285F4"
    },
    {
      id: 2,
      role: "Hackathon Winner - VigilWatch",
      company: "HenHacks - University of Delaware",
      location: "Newark, DE",
      startDate: "Feb 2025",
      endDate: "Feb 2025",
      description: "Developed VigilWatch, an emergency response application that enables instant emergency calls, real-time location sharing, and distress alerts to keep people safe during critical situations.",
      category: "hackathon",
      skills: ["React", "React Native", "Firebase", "Geolocation APIs", "Twilio API", "Node.js", "MongoDB"],
      achievements: [
        "Built intuitive emergency response system with one-tap emergency calls",
        "Integrated real-time location tracking and SMS alert system",
        "Implemented secure authentication and medical data verification",
        "Created verified emergency network for officials and medical personnel"
      ],
      links: [
        { label: "DevPost", url: "https://devpost.com/software/vigilwatch" }
      ],
      current: false,
      color: "#FF6B35"
    },
    {
      id: 3,
      role: "Data Analyst - Team Lead",
      company: "Data for Good Hackathon - JPMorgan",
      location: "Plano, TX",
      startDate: "Jan 2025",
      endDate: "Jan 2025",
      description: "Led a team in a 2-day hackathon using data analysis to solve real-world problems for National Education Equity Lab, an NGO focused on improving educational outcomes and closing achievement gaps.",
      category: "hackathon",
      skills: ["Data Analysis", "Python", "Machine Learning", "Statistical Modeling", "Team Leadership", "Data Visualization"],
      achievements: [
        "Led team to develop data-driven solutions for educational equity",
        "Analyzed large datasets to identify patterns in educational disparities",
        "Presented actionable insights to stakeholders and NGO representatives",
        "Collaborated with cross-functional team under tight deadlines"
      ],
      links: [
        { label: "GitHub", url: "https://github.com/dfgtexas25/Team-1" }
      ],
      current: false,
      color: "#FF6B35"
    },
    {
      id: 4,
      role: "Open Source Contributor",
      company: "ColorStack - Oyster Project",
      location: "Remote",
      startDate: "Nov 2024",
      endDate: "Present",
      description: "Actively contribute to the Oyster open-source project, utilizing Git and GitHub for version control to resolve issues and propose innovative ideas to improve and enhance the ColorStack website and community platform.",
      category: "open-source",
      skills: ["Git", "GitHub", "Open Source Development", "Web Development", "Community Collaboration", "Code Review"],
      achievements: [
        "Successfully resolved multiple GitHub issues and bugs",
        "Implemented feature improvements that enhanced user experience",
        "Collaborated with diverse team of developers worldwide",
        "Contributed to codebase serving thousands of ColorStack members"
      ],
      current: true,
      color: "#28A745"
    },
    {
      id: 5,
      role: "AI SWE Fellow",
      company: "HeadStarter",
      location: "Remote",
      startDate: "June 2024",
      endDate: "August 2024",
      description: "Participated in an intensive AI-focused software engineering fellowship, building 2 AI applications and APIs using cutting-edge technologies to streamline development processes and enhance user engagement.",
      category: "project",
      skills: ["Next.js", "OpenAI API", "Pinecone", "Stripe API", "AI/ML", "Full-Stack Development", "API Integration"],
      achievements: [
        "Built 2 production-ready AI applications from scratch",
        "Integrated multiple APIs for seamless user experience",
        "Significantly improved development workflow efficiency",
        "Enhanced user engagement through AI-powered features"
      ],
      current: false,
      color: "#9C27B0"
    },
    {
      id: 6,
      role: "Sustainability Intern",
      company: "Gettysburg College",
      location: "Gettysburg, PA",
      startDate: "May 2024",
      endDate: "August 2024",
      description: "Designed and implemented a comprehensive campus map of water fountain stations to improve accessibility, promote sustainability initiatives, and reduce plastic waste by encouraging the use of refillable water bottles.",
      category: "project",
      skills: ["Project Management", "Sustainability", "Data Collection", "Mapping", "Environmental Impact", "Research"],
      achievements: [
        "Mapped over 50 water fountain locations across campus",
        "Reduced single-use plastic bottle waste by 30%",
        "Improved accessibility for students with mobility challenges",
        "Created digital resource used by 2,500+ students daily"
      ],
      current: false,
      color: "#00C851"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Experiences', icon: '📚', count: experiences.length },
    { id: 'internship', label: 'Internships', icon: '💼', count: experiences.filter(e => e.category === 'internship').length },
    { id: 'hackathon', label: 'Hackathons', icon: '🏆', count: experiences.filter(e => e.category === 'hackathon').length },
    { id: 'open-source', label: 'Open Source', icon: '🌐', count: experiences.filter(e => e.category === 'open-source').length },
    { id: 'project', label: 'Projects', icon: '🚀', count: experiences.filter(e => e.category === 'project').length }
  ];

  const filteredExperiences = experiences
    .filter(exp => activeFilter === 'all' || exp.category === activeFilter)
    .sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
      }
      return a.category.localeCompare(b.category);
    });

  const stats = {
    totalExperiences: experiences.length,
    hackathonWins: experiences.filter(e => e.category === 'hackathon').length,
    currentProjects: experiences.filter(e => e.current).length,
    skillsCount: [...new Set(experiences.flatMap(e => e.skills))].length
  };

  return (
    <div className="experience-container" id="experience-section">
      <div className="experience-header">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Professional Journey</h2>
          <p className="section-subtitle">
            From internships to hackathons, exploring my path through technology and innovation
          </p>
        </motion.div>

        <motion.div
          className="experience-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="stat-card">
            <span className="stat-number">{stats.totalExperiences}</span>
            <span className="stat-label">Experiences</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{stats.hackathonWins}</span>
            <span className="stat-label">Hackathons</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{stats.currentProjects}</span>
            <span className="stat-label">Active Projects</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{stats.skillsCount}+</span>
            <span className="stat-label">Technologies</span>
          </div>
        </motion.div>
      </div>

      <div className="experience-controls">
        <div className="filter-tabs">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-tab ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.id)}
              aria-label={`Filter by ${category.label}`}
            >
              <span className="tab-icon">{category.icon}</span>
              <span className="tab-label">{category.label}</span>
              <span className="tab-count">({category.count})</span>
            </button>
          ))}
        </div>

        <div className="sort-controls">
          <label htmlFor="sort-select" className="sort-label">Sort by:</label>
          <select
            id="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'date' | 'category')}
            className="sort-select"
          >
            <option value="date">Date (Newest First)</option>
            <option value="category">Category</option>
          </select>
        </div>
      </div>

      <motion.div className="experiences-grid" layout>
        <AnimatePresence mode="wait">
          {filteredExperiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              {...experience}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredExperiences.length === 0 && (
        <motion.div
          className="no-results"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <p>No experiences found for the selected filter.</p>
        </motion.div>
      )}
    </div>
  );
};

export default Experience;