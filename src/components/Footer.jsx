import React, { useEffect, useRef } from 'react';
import './Footer.css';

const Footer = () => {
  const lettersRef = useRef([]);

  useEffect(() => {
    const spans = lettersRef.current;
    
    spans.forEach((span, idx) => {
      span.addEventListener('click', (e) => {
        e.target.classList.add('active');
      });
      span.addEventListener('animationend', (e) => {
        e.target.classList.remove('active');
      });
      
      // Initial animation
      setTimeout(() => {
        span.classList.add('active');
      }, 750 * (idx+1));
    });
  }, []);

      return (
    <footer className="footer">
      <div className="content">
        <div className="footer-content">
          <div className="animated-title">
            <h3 className="fixed">Click the letters!</h3>
            <div className="word">
              <span ref={el => lettersRef.current[0] = el}>G</span>
              <span ref={el => lettersRef.current[1] = el}>e</span>
              <span ref={el => lettersRef.current[2] = el}>t</span>
              <span ref={el => lettersRef.current[3] = el}>&nbsp;</span>
              <span ref={el => lettersRef.current[4] = el}>I</span>
              <span ref={el => lettersRef.current[5] = el}>n</span>
              <span ref={el => lettersRef.current[6] = el}>&nbsp;</span>
              <span ref={el => lettersRef.current[7] = el}>T</span>
              <span ref={el => lettersRef.current[8] = el}>o</span>
              <span ref={el => lettersRef.current[9] = el}>u</span>
              <span ref={el => lettersRef.current[10] = el}>c</span>
              <span ref={el => lettersRef.current[11] = el}>h</span>
            </div>
          </div>
          <p>Feel free to reach out for collaborations or just a friendly hello</p>
          <div className="contact-info">
            <p>Email: sackiteyjoseph44@gmail.com</p>
            
          </div>
          <div className="social-links">
            <a href="https://github.com/Jsackitey1" target="_blank" rel="noopener noreferrer">
              <img src="/assets/github.svg" alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/joseph-sackitey-44a8831b5/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/linkedin.svg" alt="LinkedIn" />
            </a>
            <a href="https://x.com/sackitey_j" target="_blank" rel="noopener noreferrer">
              <img src="/assets/x.svg" alt="Twitter" />
            </a>
            <a href="mailto:sackiteyjoseph44@gmail.com" rel="noopener noreferrer">
              <img src="/assets/email.svg" alt="Email" />
            </a>
            <a href="https://www.instagram.com/sackitey._j" target="_blank" rel="noopener noreferrer">
              <img src="/assets/instagram.svg" alt="Instagram" />
            </a>
          </div>
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Joseph Sackitey. All rights reserved.</p>
                </div>
                </div>
              </div>
      
      {/* Wave Animation */}
      <div className="waveWrapper waveAnimation">
        <div className="waveWrapperInner bgTop">
          <div className="wave waveTop" style={{backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-top.png')"}}></div>
        </div>
        <div className="waveWrapperInner bgMiddle">
          <div className="wave waveMiddle" style={{backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-mid.png')"}}></div>
            </div>
        <div className="waveWrapperInner bgBottom">
          <div className="wave waveBottom" style={{backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-bot.png')"}}></div>
            </div>
            </div>
    </footer>
  );
};

export default Footer;