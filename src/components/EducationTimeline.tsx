import React from 'react';
import './EducationTimeline.css';

interface EducationItem {
  id: number;
  degree: string;
  field: string;
  institution: string;
  location: string;
  startYear: string;
  endYear: string;
  gpa?: string;
  honors?: string[];
  coursework?: string[];
  achievements?: string[];
}

const EducationTimeline: React.FC = () => {
  const education: EducationItem[] = [
    {
      id: 1,
      degree: "Bachelor of Science",
      field: "Computer Science",
      institution: "Gettysburg College",
      location: "Pennsylvania",
      startYear: "2023",
      endYear: "2027",
      gpa: "3.8/4.0",
      honors: ["Dean's List", "Computer Science Honor Society"],
      coursework: ["Data Structures", "Algorithms", "Software Engineering", "Database Systems"],
      achievements: ["Outstanding Student in CS", "Hackathon Winner"]
    },
    {
      id: 2,
      degree: "Bachelor of Arts",
      field: "Physics",
      institution: "Gettysburg College",
      location: "Pennsylvania", 
      startYear: "2023",
      endYear: "2027",
      gpa: "3.9/4.0",
      honors: ["Sigma Pi Sigma Physics Honor Society", "Physics Department Award"],
      coursework: ["Quantum Mechanics", "Thermodynamics", "Mathematical Physics", "Astrophysics"],
      achievements: ["Research Assistant", "Physics Lab Teaching Assistant"]
    }
  ];

  return (
    <div className="education-timeline">
      <h2 className="timeline-title">Education Journey</h2>
      <div className="timeline-container">
        <div className="timeline-line"></div>
        {education.map((item, index) => (
          <div key={item.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-marker">
              <span className="marker-year">{item.startYear}</span>
            </div>
            <div className="timeline-content">
              <div className="timeline-card">
                <div className="card-header">
                  <h3 className="degree-title">{item.degree}</h3>
                  <span className="field-badge">{item.field}</span>
                </div>
                
                <div className="institution-info">
                  <h4 className="institution-name">{item.institution}</h4>
                  <span className="location">{item.location}</span>
                  <span className="duration">{item.startYear} - {item.endYear}</span>
                </div>

                {item.gpa && (
                  <div className="gpa-section">
                    <span className="gpa-label">GPA:</span>
                    <span className="gpa-value">{item.gpa}</span>
                  </div>
                )}

                {item.honors && item.honors.length > 0 && (
                  <div className="section">
                    <h5 className="section-title">Honors & Recognition</h5>
                    <ul className="honors-list">
                      {item.honors.map((honor, idx) => (
                        <li key={idx} className="honor-item">{honor}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {item.coursework && item.coursework.length > 0 && (
                  <div className="section">
                    <h5 className="section-title">Key Coursework</h5>
                    <div className="coursework-tags">
                      {item.coursework.map((course, idx) => (
                        <span key={idx} className="course-tag">{course}</span>
                      ))}
                    </div>
                  </div>
                )}

                {item.achievements && item.achievements.length > 0 && (
                  <div className="section">
                    <h5 className="section-title">Achievements</h5>
                    <ul className="achievements-list">
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx} className="achievement-item">{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationTimeline;