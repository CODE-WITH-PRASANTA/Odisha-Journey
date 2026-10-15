import React, { useEffect, useRef, useState } from 'react'
import './PackageMiddle.css'

/* ------------------------------------------------------------------
   DATA  -> edit text / price / phone number here
------------------------------------------------------------------- */
const PHONE_DISPLAY = '+91 63725 45244'
const PHONE_LINK = '+916372545244'
const WHATSAPP_NUMBER = '916372545244'
const PACKAGE_NAME = 'Divine Puri & Sun Temple Odyssey'
const PRICE = 34999
const ALL_PACKAGES_LINK = '/packages'

/* Sticky box touches the bottom of your navbar.
   NAVBAR_SELECTOR -> CSS selector of your fixed/sticky navbar (comma separated list is fine).
   NAV_OVERLAP     -> px the box slides UNDER the navbar so its rounded top corners are hidden
                      and it looks attached (set 0 for an exact edge-to-edge touch).
   FALLBACK_TOP    -> px from the top of the screen when no fixed navbar is found. */
const NAVBAR_SELECTOR = 'header, nav, .navbar, .header'
const NAV_OVERLAP = 18
const FALLBACK_TOP = 16

const OVERVIEW =
  'Immerse yourself in spiritual transcendence and architectural marvels. Experience the holy city of Puri, visit the world-renowned UNESCO Heritage Sun Temple at Konark, and witness the serene waters of Chilika Lake, the largest brackish water lagoon in Asia, home to rare Irrawaddy Dolphins.'

const STATS = [
  { id: 'duration', label: 'Duration', value: '5 Days / 4 Nights', icon: 'clock' },
  { id: 'destinations', label: 'Destinations', value: 'Puri +3', icon: 'pin' },
  { id: 'group', label: 'Group Size', value: '2–15 Persons', icon: 'users' },
  { id: 'rating', label: 'Rating', value: '5.0 ★', icon: 'star' },
]

const INCLUDED = [
  'Luxury 5-Star Accommodations',
  'Private Audi A6 Chauffeur-driven transfer',
  'Gourmet dining plan (Breakfast & Dinner)',
  'V.I.P. Darshan passes at Jagannath Temple',
  'Guided private catamaran ride in Chilika',
]

const ITINERARY = [
  {
    id: 'd1',
    day: 'Day 1',
    short: 'D1',
    title: 'Arrival in Temple City & Golden Beach Transfer',
    text: 'Warm traditional welcome at Bhubaneswar airport. Drive to Puri in a private luxury vehicle. Check-in at your 5-star beach resort. Evening sand art display and leisure walk on Puri Golden Beach.',
  },
  {
    id: 'd2',
    day: 'Day 2',
    short: 'D2',
    title: 'VIP Jagannath Temple Darshan & Chilika Lagoon',
    text: 'Begin with a V.I.P. darshan at the Jagannath Temple with a guide who explains its rituals. After lunch, drive to Chilika Lake for a private catamaran ride to spot Irrawaddy Dolphins and migratory birds at sunset.',
  },
  {
    id: 'd3',
    day: 'Day 3',
    short: 'D3',
    title: 'Konark Marine Drive & Sun Temple Light Show',
    text: 'Take the scenic Marine Drive along the Bay of Bengal to Konark. Explore the UNESCO-listed Sun Temple and its chariot wheels with a heritage guide, then stay for the evening light show.',
  },
  {
    id: 'd4',
    day: 'Day 4',
    short: 'D4',
    title: 'Bhubaneswar Heritage Walk & Caves',
    text: 'Transfer to Bhubaneswar. Visit the Lingaraj Temple area, the Udayagiri and Khandagiri caves, and the Odisha State Museum. Enjoy a farewell dinner featuring Odia specialties.',
  },
  {
    id: 'd5',
    day: 'Day 5',
    short: 'D5',
    title: 'Departure & Souvenir Shopping',
    text: 'After breakfast, shop for Pattachitra paintings, silver filigree and handloom textiles at local markets. Our chauffeur then drops you at the airport or railway station.',
  },
]

const TRUST = [
  { id: 'safe', title: 'Safe & Secure', text: 'Verified drivers, GPS tracking', icon: 'shield' },
  { id: 'years', title: '10+ Years', text: 'Expert travel experience', icon: 'award' },
  { id: 'free', title: 'Free Planning', text: 'Custom itinerary at no cost', icon: 'check' },
]

const PERKS = ['Free cancellation (72 hrs before)', 'No booking fees', 'Instant confirmation on call']
const DESTINATIONS = ['Puri', 'Konark', 'Chilika Lake', 'Bhubaneswar']

/* ---------------------------- Icons ------------------------------ */
const Svg = ({ children, className = 'PackageMiddle__icon', ...rest }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...rest}
  >
    {children}
  </svg>
)

const ICONS = {
  clock: (
    <Svg>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </Svg>
  ),
  pin: (
    <Svg>
      <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </Svg>
  ),
  users: (
    <Svg>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M16 5.2a3.2 3.2 0 0 1 0 5.6" />
      <path d="M18 14.4c1.8.8 3 2.6 3 5.6" />
    </Svg>
  ),
  star: (
    <Svg>
      <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3Z" />
    </Svg>
  ),
  shield: (
    <Svg>
      <path d="M12 3l7 3v5.5c0 4.4-2.9 8-7 9.5-4.1-1.5-7-5.1-7-9.5V6l7-3Z" />
    </Svg>
  ),
  award: (
    <Svg>
      <circle cx="12" cy="9" r="5" />
      <path d="M9 13.5 8 21l4-2.2 4 2.2-1-7.5" />
    </Svg>
  ),
  check: (
    <Svg>
      <path d="M21 12a9 9 0 1 1-5.2-8.2" />
      <path d="m8 11.5 4 4 8.5-9" />
    </Svg>
  ),
}

const SparkIcon = () => (
  <Svg className="PackageMiddle__titleIcon PackageMiddle__titleIcon--orange">
    <path d="M9.5 4.5 11 9l4.5 1.5L11 12l-1.5 4.5L8 12 3.5 10.5 8 9l1.5-4.5Z" />
    <path d="M17.5 3v3M16 4.5h3" />
    <path d="M18 14.5v4M16 16.5h4" />
  </Svg>
)

const CheckTitleIcon = () => (
  <Svg className="PackageMiddle__titleIcon PackageMiddle__titleIcon--green">
    <path d="M21 12a9 9 0 1 1-5.2-8.2" />
    <path d="m8 11.5 4 4 8.5-9" />
  </Svg>
)

const CalendarIcon = () => (
  <Svg className="PackageMiddle__titleIcon PackageMiddle__titleIcon--orange">
    <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
    <path d="M3.5 10h17M8 3v4M16 3v4" />
  </Svg>
)

const ChevronIcon = () => (
  <Svg className="PackageMiddle__chevron">
    <path d="m6 9 6 6 6-6" />
  </Svg>
)

const WhatsAppIcon = () => (
  <Svg className="PackageMiddle__btnIcon">
    <path d="M20.5 11.8a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.4-4.2A8.5 8.5 0 1 1 20.5 11.8Z" />
  </Svg>
)

const PhoneIcon = () => (
  <Svg className="PackageMiddle__btnIcon">
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </Svg>
)

const ArrowLeftIcon = () => (
  <Svg className="PackageMiddle__btnIcon">
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </Svg>
)

const PerkCheckIcon = () => (
  <Svg className="PackageMiddle__perkIcon">
    <path d="M21 12a9 9 0 1 1-5.2-8.2" />
    <path d="m8 11.5 4 4 8.5-9" />
  </Svg>
)

const PinSmallIcon = () => (
  <Svg className="PackageMiddle__chipIcon">
    <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </Svg>
)

/* --------------------------- Component --------------------------- */
const PackageMiddle = () => {
  const rootRef = useRef(null)
  const priceRef = useRef(null)
  const [openId, setOpenId] = useState('d1')
  const [price, setPrice] = useState(0)

  /* Keeps the sticky box exactly below the navbar (also works if the navbar hides on scroll) */
  useEffect(() => {
    const root = rootRef.current
    if (!root) return undefined
    let raf = 0

    const measure = () => {
      let offset = 0
      document.querySelectorAll(NAVBAR_SELECTOR).forEach((el) => {
        const { position } = window.getComputedStyle(el)
        if (position !== 'fixed' && position !== 'sticky') return
        const rect = el.getBoundingClientRect()
        // a wide bar that sits at the top part of the screen (works even while a top strip is still visible above it)
        if (
          rect.width < window.innerWidth * 0.5 ||
          rect.height > window.innerHeight * 0.4 ||
          rect.bottom <= 0 ||
          rect.top > window.innerHeight * 0.3
        ) {
          return
        }
        offset = Math.max(offset, rect.bottom)
      })
      const top = offset > 0 ? Math.max(Math.round(offset) - NAV_OVERLAP, 0) : FALLBACK_TOP
      root.style.setProperty('--pm-sticky-top', `${top}px`)
      raf = 0
    }

    const schedule = () => {
      if (!raf) raf = window.requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    window.addEventListener('load', schedule)
    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      window.removeEventListener('load', schedule)
      if (raf) window.cancelAnimationFrame(raf)
    }
  }, [])

  /* Reveal-on-scroll for every element with PackageMiddle__reveal */
  useEffect(() => {
    const root = rootRef.current
    if (!root) return undefined
    const items = root.querySelectorAll('.PackageMiddle__reveal')

    if (!('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('PackageMiddle__reveal--in'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('PackageMiddle__reveal--in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    items.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  /* Price count-up (runs once when the booking card is visible) */
  useEffect(() => {
    const el = priceRef.current
    if (!el) return undefined
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) {
      setPrice(PRICE)
      return undefined
    }

    let raf
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const duration = 1400
        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - t, 4)
          setPrice(Math.round(PRICE * eased))
          if (t < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [])

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id))

  const whatsappEnquiry = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi, I would like to enquire about the "${PACKAGE_NAME}" package.`
  )}`
  const whatsappBooking = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi, I would like to book the "${PACKAGE_NAME}" package.`
  )}`

  return (
    <section ref={rootRef} className="PackageMiddle">
      <div className="PackageMiddle__container">
        <div className="PackageMiddle__grid">
          {/* ===================== LEFT : scrolling content ===================== */}
          <div className="PackageMiddle__main">
            {/* ---- Overview ---- */}
            <article className="PackageMiddle__card PackageMiddle__reveal">
              <header className="PackageMiddle__head">
                <SparkIcon />
                <h2 className="PackageMiddle__heading">Package Overview</h2>
              </header>
              <p className="PackageMiddle__text">{OVERVIEW}</p>

              <div className="PackageMiddle__divider" />

              <div className="PackageMiddle__stats">
                {STATS.map((stat, i) => (
                  <div
                    key={stat.id}
                    className="PackageMiddle__stat PackageMiddle__reveal"
                    style={{ '--d': `${0.08 * i}s` }}
                  >
                    <span className="PackageMiddle__statIcon">{ICONS[stat.icon]}</span>
                    <span className="PackageMiddle__statLabel">{stat.label}</span>
                    <strong className="PackageMiddle__statValue">{stat.value}</strong>
                  </div>
                ))}
              </div>
            </article>

            {/* ---- What's included ---- */}
            <article className="PackageMiddle__card PackageMiddle__reveal">
              <header className="PackageMiddle__head">
                <CheckTitleIcon />
                <h2 className="PackageMiddle__heading">What&apos;s Included</h2>
              </header>
              <ul className="PackageMiddle__included">
                {INCLUDED.map((item, i) => (
                  <li
                    key={item}
                    className="PackageMiddle__includedItem PackageMiddle__reveal"
                    style={{ '--d': `${0.07 * i}s` }}
                  >
                    <span className="PackageMiddle__includedIcon">
                      <PerkCheckIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            {/* ---- Itinerary ---- */}
            <article className="PackageMiddle__card PackageMiddle__reveal">
              <header className="PackageMiddle__head">
                <CalendarIcon />
                <h2 className="PackageMiddle__heading">Day-by-Day Itinerary</h2>
              </header>

              <div className="PackageMiddle__days">
                {ITINERARY.map((day, i) => {
                  const isOpen = openId === day.id
                  return (
                    <div
                      key={day.id}
                      className={`PackageMiddle__day PackageMiddle__reveal ${isOpen ? 'PackageMiddle__day--open' : ''}`}
                      style={{ '--d': `${0.07 * i}s` }}
                    >
                      <button
                        type="button"
                        className="PackageMiddle__dayButton"
                        onClick={() => toggle(day.id)}
                        aria-expanded={isOpen}
                        aria-controls={`PackageMiddle-panel-${day.id}`}
                        id={`PackageMiddle-tab-${day.id}`}
                      >
                        <span className="PackageMiddle__dayBadge">{day.short}</span>
                        <span className="PackageMiddle__dayInfo">
                          <span className="PackageMiddle__dayLabel">{day.day}</span>
                          <span className="PackageMiddle__dayTitle">{day.title}</span>
                        </span>
                        <ChevronIcon />
                      </button>

                      <div
                        className="PackageMiddle__dayPanel"
                        id={`PackageMiddle-panel-${day.id}`}
                        role="region"
                        aria-labelledby={`PackageMiddle-tab-${day.id}`}
                      >
                        <div className="PackageMiddle__dayPanelInner">
                          <p className="PackageMiddle__dayText">{day.text}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </article>

            {/* ---- Trust cards ---- */}
            <div className="PackageMiddle__trust">
              {TRUST.map((item, i) => (
                <div
                  key={item.id}
                  className="PackageMiddle__trustItem PackageMiddle__reveal"
                  style={{ '--d': `${0.1 * i}s` }}
                >
                  <span className="PackageMiddle__trustIcon">{ICONS[item.icon]}</span>
                  <strong className="PackageMiddle__trustTitle">{item.title}</strong>
                  <span className="PackageMiddle__trustText">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ===================== RIGHT : sticky booking box ===================== */}
          <aside className="PackageMiddle__aside">
            <div className="PackageMiddle__asideInner">
              <div className="PackageMiddle__booking PackageMiddle__reveal PackageMiddle__reveal--right">
                <span className="PackageMiddle__bookingGlow" aria-hidden="true" />

                <p className="PackageMiddle__eyebrow">Starting from</p>
                <p className="PackageMiddle__price" ref={priceRef}>
                  ₹{price.toLocaleString('en-IN')}
                </p>
                <p className="PackageMiddle__priceNote">per person · all taxes included</p>

                <div className="PackageMiddle__actions">
                  <a
                    className="PackageMiddle__btn PackageMiddle__btn--whatsapp"
                    href={whatsappEnquiry}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon />
                    WhatsApp Enquiry
                  </a>
                  <a className="PackageMiddle__btn PackageMiddle__btn--call" href={`tel:${PHONE_LINK}`}>
                    <PhoneIcon />
                    {PHONE_DISPLAY}
                  </a>
                  <a
                    className="PackageMiddle__btn PackageMiddle__btn--book"
                    href={whatsappBooking}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CheckTitleIconWhite />
                    Book This Package
                  </a>
                </div>

                <ul className="PackageMiddle__perks">
                  {PERKS.map((perk) => (
                    <li key={perk} className="PackageMiddle__perk">
                      <PerkCheckIcon />
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="PackageMiddle__destinations PackageMiddle__reveal PackageMiddle__reveal--right" style={{ '--d': '0.12s' }}>
                <h3 className="PackageMiddle__destinationsTitle">Destinations Covered</h3>
                <div className="PackageMiddle__chips">
                  {DESTINATIONS.map((place) => (
                    <span key={place} className="PackageMiddle__chip">
                      <PinSmallIcon />
                      {place}
                    </span>
                  ))}
                </div>
              </div>

              <a
                className="PackageMiddle__allPackages PackageMiddle__reveal PackageMiddle__reveal--right"
                style={{ '--d': '0.2s' }}
                href={ALL_PACKAGES_LINK}
              >
                <ArrowLeftIcon />
                View All Packages
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

/* small white check icon used inside the orange button */
const CheckTitleIconWhite = () => (
  <Svg className="PackageMiddle__btnIcon">
    <path d="M21 12a9 9 0 1 1-5.2-8.2" />
    <path d="m8 11.5 4 4 8.5-9" />
  </Svg>
)

export default PackageMiddle