import React from 'react';
import { motion } from 'framer-motion';
import './EducationTimeline.css';

const EducationTimeline: React.FC = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Science",
      field: "Computer Science",
      institution: "Gettysburg College",
      location: "Gettysburg, Pennsylvania",
      period: "2023 - May 2027",
      gpa: "3.8+",
      status: "current",
      description: "Comprehensive study of computer science fundamentals including algorithms, data structures, software engineering, and artificial intelligence.",
      coursework: [
        "Introduction to Computer Science (JAVA) (CS 111)",
        "Introduction to Scientific Computation (CS 107)",
        "Data Structures And Algorithm (CS 216)",
        "Intro To Computer Networks (CS 322)",
        "Principles of Databases (CS 360)",
        "Theory of Computation (CS 301)",
        "Abstract Maths (Math 215)",
        "CALC 1 (Math 111)",
        "CALC 2 (Math 112)",
        "Linear Algebra (Math 212)",
        "Multivariable Calculus (Math 211)"
      ],
      achievements: [
        "Pi Mu Epsilon Math Honor Society",
        "Dean's List multiple semesters",
        "2025 Generation Google Scholar (Institute of International Education): $10,000 award recognizing substantial academic achievements, leadership, and commitment to diversity, equity, and inclusion",
        "2025 John Alfred Hamme Award (Gettysburg College): Honored for the highest demonstration of leadership, loyalty, kindness, courtesy, and true democracy"
      ]
    },
    {
      id: 2,
      degree: "Bachelor of Science",
      field: "Physics",
      institution: "Gettysburg College",
      location: "Gettysburg, Pennsylvania", 
      period: "2023 - May 2027",
      gpa: "3.8+",
      status: "current",
      description: "Advanced study of physics principles with emphasis on theoretical and computational physics, bridging the gap between technology and scientific research.",
      coursework: [
        "Classical Mechanics (PHY 319)",
        "Classical Electromagnetic Theory and Applications (PHY 211)",
        "Electronics (PHY 240)",
        "Introduction to General Relativity, Mechanics and Modern Physics (PHY 111)",
        "Quantum Mechanics (PHY 310)",
        "Quantum Physics and Thermodynamics (PHY 112)",
        "Math Techniques for Physicist (PHY 255)"
      ],
      achievements: [
        "Sigma Pi Sigma Physics Honor Society"
      ]
    }
  ];

  return (
    <div className="education-timeline">
      <div className="timeline-container">
        <div className="timeline-line"></div>
        
        {educationData.map((education, index) => (
          <motion.div
            key={education.id}
            className={`timeline-item ${education.status}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="timeline-marker">
              <div className="marker-inner">
                {education.status === 'current' ? '📚' : '🎓'}
              </div>
            </div>
            
            <div className="timeline-content">
              <div className="education-card">
                <div className="card-header">
                  <div className="degree-info">
                    <h3 className="degree-title">{education.degree}</h3>
                    <h4 className="field-of-study">{education.field}</h4>
                  </div>
                  <div className="status-info">
                    <span className={`status-badge ${education.status}`}>
                      {education.status === 'current' ? 'In Progress' : 'Completed'}
                    </span>
                    <span className="gpa">GPA: {education.gpa}</span>
                  </div>
                </div>
                
                <div className="institution-info">
                  <h5 className="institution-name">{education.institution}</h5>
                  <p className="location-period">
                    📍 {education.location} • 📅 {education.period}
                  </p>
                </div>
                
                <p className="education-description">
                  {education.description}
                </p>
                
                <div className="education-details">
                  <div className="coursework-section">
                    <h6>📖 Key Coursework</h6>
                    <div className="coursework-list">
                      {education.coursework.slice(0, 6).map((course, idx) => (
                        <motion.div
                          key={idx}
                          className="course-item"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: (index * 0.2) + (idx * 0.05) }}
                        >
                          {course}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="achievements-section">
                    <h6>🏆 Achievements</h6>
                    <div className="achievements-list">
                      {education.achievements.map((achievement, idx) => (
                        <motion.div
                          key={idx}
                          className="achievement-item"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: (index * 0.2) + (idx * 0.1) }}
                        >
                          {achievement}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EducationTimeline;