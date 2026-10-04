import React, { useState } from 'react';
import './Navbar.css';

const menu = [
  { label: 'Home', href: '/' },
  {
    label: 'Travel Package',
    children: [
      'Golden Triangle (Puri-Konark-Bhubaneswar)',
      'Wildlife & Nature (Similipal/Bhitarkanika)',
      'Tribal & Heritage Tours',
      'Chilika Lake & Waterfalls'
    ],
  },
  {
    label: 'Visa',
    children: ['Tourist Visa', 'Business Visa', 'Visa on Arrival'],
  },
  { label: 'About Us', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState(null);

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar__inner">
        {/* Brand/Logo Placeholder or Mobile Toggler area */}
        <div className="navbar__mobile-header">
          <button
            className={`navbar__toggle ${mobileOpen ? 'is-active' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <span className="bar-top" />
            <span className="bar-mid" />
            <span className="bar-bot" />
          </button>
        </div>

        {/* Main Menu Links */}
        <ul className={`navbar__menu ${mobileOpen ? 'is-open' : ''}`}>
          {menu.map((item) => (
            <li
              key={item.label}
              className={`navbar__item ${openDrop === item.label ? 'is-dropped' : ''}`}
              onMouseEnter={() => window.innerWidth > 992 && item.children && setOpenDrop(item.label)}
              onMouseLeave={() => window.innerWidth > 992 && setOpenDrop(null)}
            >
              <a
                href={item.href || '#'}
                className={`navbar__link ${active === item.label ? 'is-active' : ''}`}
                onClick={(e) => {
                  if (item.children) {
                    e.preventDefault();
                    setOpenDrop(openDrop === item.label ? null : item.label);
                  } else {
                    setMobileOpen(false);
                    setOpenDrop(null);
                  }
                  setActive(item.label);
                }}
              >
                {item.label}
                {item.children && <span className="caret" />}
              </a>

              {/* Dropdown Menu */}
              {item.children && (
                <ul className="navbar__dropdown">
                  {item.children.map((c) => (
                    <li key={c}>
                      <a 
                        href="#" 
                        onClick={(e) => {
                          e.preventDefault();
                          setMobileOpen(false);
                          setOpenDrop(null);
                        }}
                      >
                        {c}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* WhatsApp Direct Action Card */}
        <a
          className="navbar__whatsapp"
          href="https://wa.me/916372545244"
          target="_blank"
          rel="noreferrer"
          aria-label="Contact us on WhatsApp"
        >
          <span className="navbar__wa-icon">
            <svg viewBox="0 0 32 32" width="20" height="20" fill="#fff" aria-hidden="true">
              <path d="M16 3C9.4 3 4 8.3 4 14.9c0 2.3.7 4.5 1.9 6.3L4 28l7-1.8c1.7.9 3.9 1.4 5 1.4 6.6 0 12-5.3 12-11.9S22.600 3 16 3zm0 21.800c-1.600 0-3.200-.5-4.500-1.300l-.3-.2-4.100 1 1.100-4-.2-.4a9.700 9.700 0 0 1-1.500-5c0-5.400 4.500-9.800 10-9.800s10 4.400 10 9.800-4.500 9.900-10.500 9.900zm5.500-7.300c-.3-.2-1.800-.9-2.100-1s-.5-.2-.7.200-.8 1-1 1.200-.4.200-.7.100a8 8 0 0 1-4-3.500c-.3-.5.300-.5.900-1.600.1-.2 0-.4 0-.5l-.9-2.200c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.100-.8.400s-1 1-1 2.500 1.100 2.900 1.200 3.100c.2.200 2.100 3.300 5.200 4.600 1.900.8 2.700.9 3.600.7.600-.1 1.800-.7 2-1.400.3-.7.300-1.300.2-1.400s-.3-.2-.6-.4z" />
            </svg>
          </span>
          <span className="navbar__wa-text">
            <small>WhatsApp</small>
            <strong>+91 637 254 5244</strong>
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;