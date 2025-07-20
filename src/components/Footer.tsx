import React, { useEffect, useRef } from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const spans = lettersRef.current.filter(Boolean);
    
    spans.forEach((span, idx) => {
      if (span) {
        const handleClick = (e: Event) => {
          (e.target as HTMLElement).classList.add('active');
        };
        
        const handleAnimationEnd = (e: Event) => {
          (e.target as HTMLElement).classList.remove('active');
        };

        span.addEventListener('click', handleClick);
        span.addEventListener('animationend', handleAnimationEnd);
        
        // Initial animation
        setTimeout(() => {
          span.classList.add('active');
        }, 750 * (idx + 1));

        // Cleanup
        return () => {
          span.removeEventListener('click', handleClick);
          span.removeEventListener('animationend', handleAnimationEnd);
        };
      }
    });
  }, []);

  const setLetterRef = (index: number) => (el: HTMLSpanElement | null) => {
    lettersRef.current[index] = el;
  };

  return (
    <footer className="footer">
      <div className="content">
        <div className="footer-content">
          <div className="animated-title">
            <h3 className="fixed">Click the letters!</h3>
            <div className="word">
              <span ref={setLetterRef(0)}>G</span>
              <span ref={setLetterRef(1)}>e</span>
              <span ref={setLetterRef(2)}>t</span>
              <span ref={setLetterRef(3)}>&nbsp;</span>
              <span ref={setLetterRef(4)}>I</span>
              <span ref={setLetterRef(5)}>n</span>
              <span ref={setLetterRef(6)}>&nbsp;</span>
              <span ref={setLetterRef(7)}>T</span>
              <span ref={setLetterRef(8)}>o</span>
              <span ref={setLetterRef(9)}>u</span>
              <span ref={setLetterRef(10)}>c</span>
              <span ref={setLetterRef(11)}>h</span>
            </div>
          </div>
          <p>Feel free to reach out for collaborations or just a friendly hello</p>
          <div className="contact-info">
            <p>Email: sackiteyjoseph44@gmail.com</p>
          </div>
          <div className="social-links">
            <a 
              href="https://github.com/Jsackitey1" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <img src="/assets/github.svg" alt="GitHub" />
            </a>
            <a 
              href="https://www.linkedin.com/in/joseph-sackitey/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <img src="/assets/linkedin.svg" alt="LinkedIn" />
            </a>
            <a 
              href="https://x.com/sackitey_j" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Twitter Profile"
            >
              <img src="/assets/x.svg" alt="Twitter" />
            </a>
            <a 
              href="mailto:sackiteyjoseph44@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Send Email"
            >
              <img src="/assets/email.svg" alt="Email" />
            </a>
            <a 
              href="https://www.instagram.com/sackitey._j/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
            >
              <img src="/assets/instagram.svg" alt="Instagram" />
            </a>
          </div>
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Joseph Sackitey. All rights reserved.</p>
          </div>
        </div>
      </div>
      
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