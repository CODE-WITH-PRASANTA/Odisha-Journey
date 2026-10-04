import React, { useState } from 'react';
import './Topbar.css';
import OdishaJourneyLogo from '../../assets/Odisha Journey Logo.webp';

const Topbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="topbar">
      <div className="topbar__inner">
        {/* Brand Logo */}
        <a href="/" className="topbar__logo" aria-label="Odisha Journey home">
          <img src={OdishaJourneyLogo} alt="Odisha Journey" className="topbar__logo-img" />
        </a>

        {/* Desktop Search Bar */}
        <form className="topbar__search" role="search" onSubmit={(e) => e.preventDefault()}>
          <svg className="topbar__search-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3.5-3.5" />
          </svg>
          <input 
            type="text" 
            placeholder="Find Your Perfect Tour Package..." 
            aria-label="Search tour packages" 
          />
          <button type="submit" className="topbar__search-btn">Search</button>
        </form>

        {/* Desktop Actions */}
        <div className="topbar__actions">
          <a href="/help" className="topbar__help">Need Help?</a>
          <a href="/login" className="topbar__login">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <circle cx="12" cy="8" r="4.5" />
              <path d="M3.5 21c0-4.7 3.8-7.5 8.5-7.5s8.5 2.8 8.5 7.5z" />
            </svg>
            Login
          </a>
        </div>

        {/* Mobile Menu Toggler */}
        <button 
          className={`topbar__toggler ${mobileMenuOpen ? 'active' : ''}`} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path className="bar-top" d="M4 7h16" />
            <path className="bar-mid" d="M4 12h16" />
            <path className="bar-bot" d="M4 17h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`topbar__mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <form className="topbar__mobile-search" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Find your tour..." aria-label="Mobile search tour" />
          <button type="submit">Search</button>
        </form>
        <div className="topbar__mobile-links">
          <a href="/help" className="topbar__mobile-help">Need Help?</a>
          <a href="/login" className="topbar__mobile-login">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <circle cx="12" cy="8" r="4.5" />
              <path d="M3.5 21c0-4.7 3.8-7.5 8.5-7.5s8.5 2.8 8.5 7.5z" />
            </svg>
            Login
          </a>
        </div>
      </div>
    </header>
  );
};

export default Topbar;