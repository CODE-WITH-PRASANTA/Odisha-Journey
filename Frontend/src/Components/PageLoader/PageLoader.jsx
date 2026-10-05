import React from 'react'
import './PageLoader.css'

const SPOKES = Array.from({ length: 8 }, (_, i) => i * 45)

const PageLoader = ({ visible = true }) => {
  return (
    <div
      className={`pl-overlay ${visible ? 'pl-show' : 'pl-hide'}`}
      role="status"
      aria-live="polite"
      aria-label="Loading page"
      aria-hidden={!visible}
    >
      <div className="pl-stage">
        {/* Sun */}
        <div className="pl-sun" />

        {/* Plane orbiting the wheel */}
        <div className="pl-orbit">
          <svg className="pl-plane" viewBox="0 0 48 48" aria-hidden="true">
            <path
              d="M44 24 30 18 22 4h-5l4 14H10l-4-6H2l3 12-3 12h4l4-6h11l-4 14h5l8-14 14-6Z"
              fill="url(#pl-plane-grad)"
            />
            <defs>
              <linearGradient id="pl-plane-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#1e88e5" />
                <stop offset="1" stopColor="#0d3b8e" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="pl-trail" />

        {/* Konark wheel */}
        <svg className="pl-wheel" viewBox="0 0 200 200" aria-hidden="true">
          <defs>
            <radialGradient id="pl-copper" cx="50%" cy="40%" r="70%">
              <stop offset="0" stopColor="#e8a15a" />
              <stop offset="1" stopColor="#8a4b1a" />
            </radialGradient>
          </defs>
          <circle cx="100" cy="100" r="94" fill="none" stroke="url(#pl-copper)" strokeWidth="10" />
          <circle cx="100" cy="100" r="84" fill="none" stroke="#c98a4b" strokeWidth="2.5" strokeDasharray="1 7" strokeLinecap="round" />
          <circle cx="100" cy="100" r="74" fill="none" stroke="url(#pl-copper)" strokeWidth="4" />
          {SPOKES.map((deg) => (
            <g key={deg} transform={`rotate(${deg} 100 100)`}>
              <rect x="95" y="26" width="10" height="64" rx="5" fill="url(#pl-copper)" />
              <circle cx="100" cy="52" r="7" fill="#f3c98f" stroke="#8a4b1a" strokeWidth="2" />
            </g>
          ))}
          <circle cx="100" cy="100" r="20" fill="url(#pl-copper)" />
          <circle cx="100" cy="100" r="9" fill="#f3c98f" stroke="#8a4b1a" strokeWidth="2" />
        </svg>

        {/* Waves */}
        <div className="pl-waves">
          <svg className="pl-wave pl-wave-back" viewBox="0 0 800 60" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 30c50-24 100-24 150 0s100 24 150 0 100-24 150 0 100 24 150 0 100-24 150 0 50 12 0 12V60H0Z" fill="#29b6d6" opacity=".55" />
          </svg>
          <svg className="pl-wave pl-wave-front" viewBox="0 0 800 60" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 34c50-22 100-22 150 0s100 22 150 0 100-22 150 0 100 22 150 0 100-22 150 0 50 10 0 10V60H0Z" fill="#0d5fb8" opacity=".9" />
          </svg>
        </div>
      </div>

      <h2 className="pl-brand">
        <span className="pl-hash">#</span>
        <span className="pl-odisha">Odisha</span>
        <span className="pl-journey">journey</span>
      </h2>
      <p className="pl-tagline">Explore, experience, discover</p>

      <div className="pl-bar" aria-hidden="true">
        <span />
      </div>
    </div>
  )
}

export default PageLoader