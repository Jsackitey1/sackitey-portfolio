import React, { useEffect, useRef } from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const spans = lettersRef.current.filter(Boolean) as HTMLSpanElement[];

    const listeners = spans.map((span, idx) => {
      const handleClick = (e: Event) => {
        (e.target as HTMLElement).classList.add('active');
      };

      const handleAnimationEnd = (e: Event) => {
        (e.target as HTMLElement).classList.remove('active');
      };

      span.addEventListener('click', handleClick);
      span.addEventListener('animationend', handleAnimationEnd);

      const timeoutId = window.setTimeout(() => {
        span.classList.add('active');
      }, 600 * (idx + 1));

      return { span, handleClick, handleAnimationEnd, timeoutId };
    });

    return () => {
      listeners.forEach(({ span, handleClick, handleAnimationEnd, timeoutId }) => {
        span.removeEventListener('click', handleClick);
        span.removeEventListener('animationend', handleAnimationEnd);
        window.clearTimeout(timeoutId);
      });
    };
  }, []);

  const setLetterRef = (index: number) => (el: HTMLSpanElement | null) => {
    lettersRef.current[index] = el;
  };

  return (
    <footer className="footer">
      <div className="footer-content window95-window">
        <div className="window95-titlebar">
          <span>CONTACT.INF</span>
          <div className="window95-controls" aria-hidden="true">
            <span className="window95-control">_</span>
            <span className="window95-control">□</span>
            <span className="window95-control">×</span>
          </div>
        </div>
        <div className="window95-body">
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

          <p>Feel free to reach out for collaborations or just a friendly hello.</p>

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
    </footer>
  );
};

export default Footer;
