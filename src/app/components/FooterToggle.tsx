'use client';

import { useState } from 'react';

export default function FooterToggle() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFooter = () => {
    setIsOpen(!isOpen);
  };

  return (
    <footer className="footer">
      <button 
        className={`footer-toggle ${isOpen ? 'active' : ''}`}
        onClick={toggleFooter}
        aria-label="Toggle footer content"
      />
      <div className={`footer-content ${isOpen ? 'show' : ''}`}>
        <div className="profile-container">
          <div className="profile-card">
            <div className="profile-list">
              <div className="profile-row">
                <a
                  className="box github-link github-link-abrar"
                  href="https://github.com/abrarShakhi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/file.svg"
                    alt="File icon"
                    width={16}
                    height={16}
                  />
                  AbrarShakhi
                </a>
                <a
                  className="box github-link github-link-brick"
                  href="https://github.com/Brick-C"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/file.svg"
                    alt="File icon"
                    width={16}
                    height={16}
                  />
                  Brick-C
                </a>
              </div>
              <div className="profile-row">
                <a
                  className="box portal-link"
                  href="https://portal.ewubd.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/window.svg"
                    alt="Window icon"
                    width={16}
                    height={16}
                  />
                  Portal
                </a>
                <a
                  className="box website-link"
                  href="https://ewubd.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/globe.svg"
                    alt="Globe icon"
                    width={16}
                    height={16}
                  />
                  Go to ewubd.edu
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 