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
  category: 'internship' | 'research' | 'hackathon' | 'open-source' | 'project';
  skills: string[];
  achievements?: string[];
  links?: { label: string; url: string }[];
  current?: boolean;
  logo?: string;
  color?: string;
}

const Experience: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [sortBy] = useState<string>('date-desc');

  const experiences: Experience[] = [
    {
      "id": 5,
      "role": "Computational Physics Researcher",
      "company": "Gettysburg College",
      "location": "Gettysburg, PA",
      "startDate": "August 2026",
      "endDate": "Present",
      "description": "Developing Python/C++ simulation and analysis tools to study hydrodynamic propulsion and collective motion for roughly 10,000 interacting particles.",
      "category": "research",
      "skills": [
            "Python",
            "C++",
            "Fluid Dynamics",
            "3D Geometry",
            "Data Visualization"
      ],
      "achievements": [
            "Engineered an end-to-end fluid dynamics simulation pipeline for O(10⁴) interacting particles.",
            "Developed an automated 3D geometric packing generator with periodic boundary conditions, spatial clearance validation, and collision/overlap detection.",
            "Built analytics and visualization workflows to calculate mean squared displacement (MSD) and render interactive HTML and MP4 simulations."
      ],
      "current": true,
      "color": "#008080"
    },
    {
      "id": 6,
      "role": "Data Engineering Intern",
      "company": "Intuit",
      "location": "Mountain View, CA",
      "startDate": "May 2026",
      "endDate": "August 2026",
      "description": "Built production AI developer tooling and CI/CD frameworks for data engineering teams and TurboTax marketing data pipelines.",
      "category": "internship",
      "skills": [
            "Apache Flink",
            "CI/CD",
            "AI Developer Tools",
            "Data Engineering",
            "Test Automation"
      ],
      "achievements": [
            "Deployed a multi-agent AI plugin for Claude Code and Cursor across 5 Data Engineering teams, automating Flink development from Jira ticket to release-ready PR and cutting development time from 2 days to 1 hour (48x faster).",
            "Built a production deployment and validation framework for processor artifacts across 4 critical marketing data pipelines, tripling developer productivity and enabling self-serve releases.",
            "Built an end-to-end CI/CD test framework for the TurboTax filing journey across 4 pipelines, enforcing release gates in QAL, E2E, and production and reducing validation turnaround by 83% (3 hours to 30 minutes)."
      ],
      "current": false,
      "color": "#0077C5"
    },
    {
      id: 1,
      role: "Associate Software Developer Intern",
      company: "Google",
      location: "San Francisco, CA",
      startDate: "May 2025",
      endDate: "August 2025",
      description: "Developed a high-performance Windows desktop client for Google Play Games on PC, focusing on improving launch times, reducing installer size, and enhancing web infrastructure for optimal cross-process communication.",
      category: "internship",
      skills: ["C#", "TypeScript", "C++", "Windows Desktop Development", "WebView2", "System Design", "Performance Optimization"],
      achievements: [
        "Improved launch times by 10% through performance optimizations",
        "Reduced installer size by ~70 MB, enhancing user experience",
        "Enhanced web infrastructure and cross-process communication between desktop client and Progressive Web App",
        "Reduced memory use, CPU load, and launch time through efficient system design",
        "Implemented a WebSocket-based IPC layer in C# and TypeScript for real-time state synchronization between native desktop components and the PWA frontend"
      ],
      current: false,
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
      location: "Plano, TX",
      startDate: "Apr 2025",
      endDate: "Apr 2025",
      description: 'Developed a data analytics pipeline for the <a href="https://edequitylab.org/" target="_blank" rel="noopener noreferrer">National Education Equity Lab</a> Data for Good initiative, processing multi-sheet administrative and survey data to generate actionable insights for educational equity.',
      category: "hackathon",
      skills: ["Python", "Data Science", "Machine Learning", "K-Means Clustering", "Logistic Regression", "Pandas", "Scikit-learn", "Data Pipeline", "Data Analysis"],
      achievements: [
        "Developed a data analytics pipeline that ingested, cleaned, and merged multi-sheet administrative and survey data (courses, classrooms, students, and schools)",
        "Applied K-Means clustering to group schools by locale and engagement patterns, producing data-driven onboarding recommendations for new partner institutions",
        "Used logistic regression to identify key predictors of student success and satisfaction, enabling targeted academic interventions and improved program design"
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
    { key: 'research', label: 'Research', icon: '🔬', count: experiences.filter(exp => exp.category === 'research').length },
    { key: 'hackathon', label: 'Hackathons', icon: '🏆', count: experiences.filter(exp => exp.category === 'hackathon').length },
    { key: 'open-source', label: 'Open Source', icon: '🌐', count: experiences.filter(exp => exp.category === 'open-source').length },
    { key: 'project', label: 'Projects', icon: '🚀', count: experiences.filter(exp => exp.category === 'project').length }
  ];

  const filteredAndSortedExperiences = useMemo(() => {
    const filtered = activeFilter === 'all'
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