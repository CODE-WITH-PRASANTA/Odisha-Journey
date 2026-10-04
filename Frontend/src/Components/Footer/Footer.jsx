import React, { useEffect, useState } from 'react'
import './Footer.css'
import OdishaJourneyLogo from '../../assets/Odisha Journey Logo.webp'

/* ---------- Content (edit these) ---------- */
const company = {
  name: 'Odisha Journey',
  tagline: 'Explore • Experience • Discover',
  about:
    'Odisha Journey is your trusted Odisha tour & travel partner. From the golden temples of Puri and Konark to the serene shores of Chilika, we craft memorable, hassle-free journeys for families, couples and groups.',
  address: 'Your Office Address, City, Odisha - 000000, India',
  phone: '+91 637 254 5244',
  whatsapp: '916372545244',
  email: 'info@odishajourney.com',
}

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Travel Package', href: '/travel-package' },
  { label: 'Visa', href: '/visa' },
  { label: 'About Us', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

const popularTours = [
  { label: 'Golden Triangle (Puri-Konark-Bhubaneswar)', href: '/travel-package' },
  { label: 'Puri Jagannath Darshan', href: '/travel-package' },
  { label: 'Konark Sun Temple Tour', href: '/travel-package' },
  { label: 'Chilika Lake Escape', href: '/travel-package' },
  { label: 'Similipal Wildlife Safari', href: '/travel-package' },
]

const socials = [
  { name: 'Facebook', href: '#', d: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
  {
    name: 'Instagram',
    href: '#',
    d: 'M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5z M16 11.4a4 4 0 1 1-7.9 1.2 4 4 0 0 1 7.9-1.2z M17.5 6.5h.01',
  },
  {
    name: 'YouTube',
    href: '#',
    d: 'M22.5 6.4a2.8 2.8 0 0 0-1.9-2C18.9 4 12 4 12 4s-6.9 0-8.6.5a2.8 2.8 0 0 0-1.9 2A29 29 0 0 0 1 11.8a29 29 0 0 0 .5 5.3A2.8 2.8 0 0 0 3.4 19c1.7.5 8.6.5 8.6.5s6.900 0 8.600-.5a2.8 2.8 0 0 0 1.900-2 29 29 0 0 0 .5-5.200 29 29 0 0 0-.5-5.400z M9.750 15 15.500 11.750 9.750 8.500z',
  },
  {
    name: 'X (Twitter)',
    href: '#',
    d: 'M23 3a10.900 10.900 0 0 1-3.100 1.500 4.500 4.500 0 0 0-7.900 3v1A10.700 10.700 0 0 1 3 4s-4 9 5 13a11.600 11.600 0 0 1-7 2c9 5 20 0 20-11.500a4.500 4.500 0 0 0-.1-.8A7.700 7.700 0 0 0 23 3z',
  },
  {
    name: 'WhatsApp',
    href: `https://wa.me/${company.whatsapp}`,
    d: 'M21 11.500a8.400 8.400 0 0 1-.9 3.800 8.500 8.500 0 0 1-7.600 4.700 8.400 8.400 0 0 1-3.800-.9L3 21l1.900-5.700a8.400 8.400 0 0 1-.9-3.800 8.500 8.500 0 0 1 4.700-7.600 8.400 8.400 0 0 1 3.800-.9h.5a8.500 8.500 0 0 1 8 8z',
  },
]

/* ---------- Small icon helper ---------- */
const Icon = ({ children, size = 18 }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
)

const Footer = () => {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <footer className="footer">
      {/* Call-to-action band */}
      <div className="footer__cta-wrap">
        <div className="footer__cta">
          <div>
            <h3>Ready to explore Odisha?</h3>
            <p>Talk to our travel experts and get a custom package within minutes.</p>
          </div>
          <a
            className="footer__cta-btn"
            href={`https://wa.me/${company.whatsapp}`}
            target="_blank"
            rel="noreferrer"
          >
            Plan My Trip
            <Icon size={18}>
              <path d="M5 12h14M13 6l6 6-6 6" />
            </Icon>
          </a>
        </div>
      </div>

      {/* Main columns */}
      <div className="footer__main">
        {/* Brand */}
        <div className="footer__col footer__brand">
          <a href="/" className="footer__logo" aria-label="Odisha Journey home">
            <img src={OdishaJourneyLogo} alt="Odisha Journey" />
          </a>
          <p>{company.about}</p>
          <div className="footer__social">
            {socials.map((s) => (
              <a key={s.name} href={s.href} aria-label={s.name} target="_blank" rel="noreferrer">
                <Icon>
                  <path d={s.d} />
                </Icon>
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div className="footer__col footer__col--links">
          <h4 className="footer__title">Quick Links</h4>
          <ul className="footer__links">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Popular tours */}
        <div className="footer__col footer__col--tours">
          <h4 className="footer__title">Popular Tours</h4>
          <ul className="footer__links">
            {popularTours.map((l) => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer__col footer__col--contact">
          <h4 className="footer__title">Contact Info</h4>
          <ul className="footer__contact">
            <li>
              <span className="footer__ico">
                <Icon>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </Icon>
              </span>
              <span>{company.address}</span>
            </li>
            <li>
              <span className="footer__ico">
                <Icon>
                  <path d="M22 16.920v3a2 2 0 0 1-2.200 2 19.800 19.800 0 0 1-8.600-3.100 19.500 19.500 0 0 1-6-6A19.800 19.800 0 0 1 2.100 4.200 2 2 0 0 1 4.100 2h3a2 2 0 0 1 2 1.700c.1 1 .4 1.900.7 2.800a2 2 0 0 1-.5 2.100L8.100 9.900a16 16 0 0 0 6 6l1.300-1.300a2 2 0 0 1 2.100-.4c.9.300 1.800.6 2.800.7a2 2 0 0 1 1.700 2z" />
                </Icon>
              </span>
              <a href={`tel:${company.phone.replace(/\s/g, '')}`}>{company.phone}</a>
            </li>
            <li>
              <span className="footer__ico">
                <Icon>
                  <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
                  <path d="M22 6l-10 7L2 6" />
                </Icon>
              </span>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
            <li>
              <span className="footer__ico">
                <Icon>
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </Icon>
              </span>
              <span>Mon - Sat: 9am - 7pm<br />Sunday: By appointment</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <p>
            &copy; {new Date().getFullYear()} <strong>{company.name}</strong> - Odisha Tour &amp; Travel. All rights reserved.
          </p>
          <p className="footer__tagline">{company.tagline}</p>
          <div className="footer__legal">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <button
        type="button"
        className={`footer__top ${showTop ? 'is-visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <Icon size={22}>
          <path d="M18 15l-6-6-6 6" />
        </Icon>
      </button>
    </footer>
  )
}

export default Footer