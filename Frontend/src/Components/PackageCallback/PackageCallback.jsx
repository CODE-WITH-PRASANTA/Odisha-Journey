import React, { useEffect, useMemo, useRef, useState } from 'react'
import './PackageCallback.css'

/* ------------------------------------------------------------------
   IMAGE IMPORTS -> change these paths to your own assets
------------------------------------------------------------------- */
import backgroundImage from '../../assets/packagebackground.png'
import puriImage from '../../assets/puri.png'
import konarkImage from '../../assets/konark.png'
import chilikaImage from '../../assets/chilika.png'
import bhubaneswarImage from '../../assets/bhubaneswar.png'

const API_ENDPOINT = ''
const ADMIN_EMAIL = 'odishatourtravelsreport@gmail.com'
const MESSAGE_LIMIT = 250

const FEATURES = [
  { id: 'quick', icon: 'phone', title: 'Quick Response', text: 'Call within ~10 mins' },
  { id: 'free', icon: 'shield', title: 'Free Consultation', text: 'Best customized offers' },
  { id: 'guide', icon: 'map', title: 'Expert Guidance', text: 'Tailored travel plans' },
]

const DESTINATIONS = [
  { id: 'puri', name: 'Puri', text: 'Jagannath Temple', image: puriImage },
  { id: 'konark', name: 'Konark', text: 'Sun Temple', image: konarkImage },
  { id: 'chilika', name: 'Chilika Lake', text: "Asia's Largest Lagoon", image: chilikaImage },
  { id: 'bhubaneswar', name: 'Bhubaneswar', text: 'Temples & Heritage', image: bhubaneswarImage },
]

const STATS = [
  { id: 'travelers', icon: 'users', end: 5000, decimals: 0, suffix: '+', label: 'Happy Travelers' },
  { id: 'rating', icon: 'star', end: 4.8, decimals: 1, suffix: '/5', label: 'Customer Rating' },
  { id: 'years', icon: 'trophy', end: 10, decimals: 0, suffix: '+ Yrs', label: 'Experience' },
  { id: 'places', icon: 'pin', end: 50, decimals: 0, suffix: '+', label: 'Destinations' },
]

const CITIES = [
  'Bhubaneswar',
  'Cuttack',
  'Puri',
  'Kolkata',
  'Delhi',
  'Mumbai',
  'Bengaluru',
  'Hyderabad',
  'Chennai',
  'Pune',
  'Ahmedabad',
  'Other',
]

const REQUEST_TYPES = [
  'General Callback Request',
  'Tour Package Enquiry',
  'Hotel Booking',
  'Car Rental',
  'Custom Itinerary',
  'Group / Corporate Tour',
]

const BADGES = [
  { id: 'cancel', tone: 'green', icon: 'shield', lines: 'Free cancellation' },
  { id: 'fees', tone: 'blue', icon: 'rupee', lines: 'Zero booking fees' },
  { id: 'confirm', tone: 'purple', icon: 'phone', lines: 'Instant call confirm' },
]

const INITIAL_VALUES = {
  name: '',
  phone: '',
  email: '',
  city: '',
  requestType: REQUEST_TYPES[0],
  bestTime: '',
  message: '',
  website: '',
}

/* ---------------------------- Icons ------------------------------ */
const paths = {
  pin: (
    <>
      <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />,
  shield: (
    <>
      <path d="M12 3l7 3v5.5c0 4.4-2.9 8-7 9.5-4.1-1.5-7-5.1-7-9.5V6l7-3Z" />
      <path d="m8.8 12 2.2 2.2 4.2-4.6" />
    </>
  ),
  map: (
    <>
      <path d="M9 4 3.5 6v14L9 18l6 2 5.5-2V4L15 6 9 4Z" />
      <path d="M9 4v14M15 6v14" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="3.6" />
      <path d="M4.5 20c0-4 3.4-6.5 7.5-6.5s7.5 2.5 7.5 6.5" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  building: (
    <>
      <path d="M12 21s6-5.4 6-10a6 6 0 0 0-12 0c0 4.6 6 10 6 10Z" />
      <circle cx="12" cy="11" r="2" />
    </>
  ),
  doc: (
    <>
      <rect x="4.5" y="3.5" width="15" height="17" rx="2.5" />
      <path d="M8.5 9h7M8.5 13h7M8.5 17h4" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </>
  ),
  chat: <path d="M20.5 11.5a8 8 0 0 1-11.9 7L3.5 20l1.5-4.6a8 8 0 1 1 15.5-3.9Z" />,
  send: (
    <>
      <path d="M21 3 10.5 13.5" />
      <path d="m21 3-6.5 18-4-7.5L3 9.5 21 3Z" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="10.5" width="14" height="10" rx="2.5" />
      <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
    </>
  ),
  rupee: <path d="M7 5h10M7 9h10M7 5c5.5 0 6 4.5 0 4.5H8l7 8.5" />,
  users: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M16 5.2a3.2 3.2 0 0 1 0 5.6" />
      <path d="M18 14.4c1.8.8 3 2.6 3 5.6" />
    </>
  ),
  star: <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3Z" />,
  trophy: (
    <>
      <path d="M8 4h8v5a4 4 0 0 1-8 0V4Z" />
      <path d="M8 6H4.5c0 3 1.5 4.5 3.7 4.8M16 6h3.5c0 3-1.5 4.5-3.7 4.8" />
      <path d="M12 13v4M8.5 20h7M9.5 17h5v3h-5z" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  alert: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5v5M12 16h.01" />
    </>
  ),
}

const Icon = ({ name, className = 'PackageCallback__icon' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {paths[name]}
  </svg>
)

/* ----------------- Custom Premium Dropdown Component ----------------- */
const CustomSelect = ({ value, options, onChange, placeholder, icon, hasError }) => {
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div
      ref={selectRef}
      className={`PackageCallback__customSelect ${isOpen ? 'is-open' : ''} ${hasError ? 'is-error' : ''}`}
    >
      <button
        type="button"
        className="PackageCallback__selectTrigger"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="PackageCallback__selectLeft">
          <Icon name={icon} className="PackageCallback__fieldIcon" />
          <span className={`PackageCallback__selectValue ${!value ? 'is-placeholder' : ''}`}>
            {value || placeholder}
          </span>
        </span>
        <Icon name="chevron" className="PackageCallback__chevron" />
      </button>

      {isOpen && (
        <ul className="PackageCallback__dropdownMenu" role="listbox">
          {options.map((opt) => (
            <li
              key={opt}
              role="option"
              aria-selected={value === opt}
              className={`PackageCallback__dropdownItem ${value === opt ? 'is-selected' : ''}`}
              onClick={() => {
                onChange(opt)
                setIsOpen(false)
              }}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

/* --------------------------- Helpers ----------------------------- */
const cleanPhone = (raw) => {
  let digits = raw.replace(/\D/g, '')
  if (digits.length > 10 && digits.startsWith('91')) digits = digits.slice(2)
  if (digits.length > 10 && digits.startsWith('0')) digits = digits.slice(1)
  return digits.slice(0, 10)
}

const validate = (v) => {
  const errors = {}
  if (!v.name.trim()) errors.name = 'Name required'
  else if (v.name.trim().length < 3) errors.name = 'Min 3 chars'

  if (!v.phone) errors.phone = 'Phone number required'
  else if (!/^[6-9]\d{9}$/.test(v.phone)) errors.phone = 'Valid 10-digit number'

  if (v.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) {
    errors.email = 'Valid email only'
  }

  if (!v.city) errors.city = 'Please select city'

  if (!v.message.trim()) errors.message = 'Please specify requirements'
  else if (v.message.trim().length < 6) errors.message = 'Min 6 characters'

  return errors
}

const sendCallback = async (payload) => {
  if (!API_ENDPOINT) {
    await new Promise((resolve) => setTimeout(resolve, 1100))
    return {}
  }
  const response = await fetch(API_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!response.ok) throw new Error('Request failed')
  return await response.json()
}

const Counter = ({ end, decimals, suffix, start }) => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return
    let raf
    const began = performance.now()
    const tick = (now) => {
      const t = Math.min((now - began) / 1400, 1)
      setValue(end * (1 - Math.pow(1 - t, 4)))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [start, end])

  return (
    <>
      {decimals ? value.toFixed(decimals) : Math.round(value)}
      {suffix}
    </>
  )
}

/* --------------------------- Component --------------------------- */
const PackageCallback = () => {
  const rootRef = useRef(null)
  const formRef = useRef(null)
  const statsRef = useRef(null)
  const messageRef = useRef(null)

  const [values, setValues] = useState(INITIAL_VALUES)
  const [touched, setTouched] = useState({})
  const [attempted, setAttempted] = useState(false)
  const [status, setStatus] = useState('idle')
  const [apiError, setApiError] = useState('')
  const [reference, setReference] = useState('')
  const [statsVisible, setStatsVisible] = useState(false)

  const errors = useMemo(() => validate(values), [values])
  const showError = (field) => (attempted || touched[field]) && errors[field]

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('PackageCallback__reveal--in')
          if (entry.target === statsRef.current) setStatsVisible(true)
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.1 }
    )
    root.querySelectorAll('.PackageCallback__reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    let next = value
    if (name === 'phone') next = cleanPhone(value)
    if (name === 'message') next = value.slice(0, MESSAGE_LIMIT)
    setValues((prev) => ({ ...prev, [name]: next }))
  }

  const handleBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }))
  }

  const pickDestination = (name) => {
    setValues((prev) => ({
      ...prev,
      message: `Planning a trip to ${name}. Please share customized package & best quotes.`,
    }))
    setTouched((prev) => ({ ...prev, message: false }))
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    messageRef.current?.focus()
  }

  const resetForm = () => {
    setValues(INITIAL_VALUES)
    setTouched({})
    setAttempted(false)
    setApiError('')
    setStatus('idle')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'loading') return
    setAttempted(true)

    const found = validate(values)
    if (Object.keys(found).length > 0) return

    if (values.website) {
      setStatus('success')
      return
    }

    setStatus('loading')
    setApiError('')

    try {
      const result = await sendCallback(values)
      setReference(result.id || `OD-${Date.now().toString(36).toUpperCase().slice(-5)}`)
      setStatus('success')
    } catch {
      setApiError('Unable to submit. Please check your network & retry.')
      setStatus('error')
    }
  }

  const isSuccess = status === 'success'
  const isLoading = status === 'loading'

  return (
    <section ref={rootRef} className="PackageCallback" aria-labelledby="PackageCallback-title">
      <div className="PackageCallback__bg" aria-hidden="true">
        <div className="PackageCallback__bgImage" style={{ backgroundImage: `url(${backgroundImage})` }} />
        <div className="PackageCallback__bgShade" />
      </div>

      <div className="PackageCallback__container">
        <div className="PackageCallback__grid">
          {/* ================= LEFT CONTENT ================= */}
          <div className="PackageCallback__left">
            <span className="PackageCallback__pill PackageCallback__reveal">
              <Icon name="pin" className="PackageCallback__pillIcon" />
              Explore · Discover · Experience
            </span>

            <h2 className="PackageCallback__title PackageCallback__reveal">
              <span>Request a</span>
              <span className="PackageCallback__titleLine--accent">Callback</span>
            </h2>

            <p className="PackageCallback__lead PackageCallback__reveal">
              Let our travel expert call you to craft your luxury Odisha vacation with personalized itineraries.
            </p>

            <div className="PackageCallback__features">
              {FEATURES.map((item) => (
                <div key={item.id} className="PackageCallback__feature PackageCallback__reveal">
                  <span className="PackageCallback__featureIcon">
                    <Icon name={item.icon} />
                  </span>
                  <strong className="PackageCallback__featureTitle">{item.title}</strong>
                  <span className="PackageCallback__featureText">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="PackageCallback__destinations">
              {DESTINATIONS.map((place) => (
                <button
                  key={place.id}
                  type="button"
                  className="PackageCallback__place PackageCallback__reveal"
                  onClick={() => pickDestination(place.name)}
                >
                  <span className="PackageCallback__placeImageWrap">
                    <img className="PackageCallback__placeImage" src={place.image} alt={place.name} loading="lazy" />
                  </span>
                  <span className="PackageCallback__placeBody">
                    <span className="PackageCallback__placeInfo">
                      <strong className="PackageCallback__placeName">{place.name}</strong>
                      <span className="PackageCallback__placeText">{place.text}</span>
                    </span>
                    <span className="PackageCallback__placeArrow">
                      <Icon name="arrow" />
                    </span>
                  </span>
                </button>
              ))}
            </div>

            <div ref={statsRef} className="PackageCallback__stats PackageCallback__reveal">
              {STATS.map((stat) => (
                <div key={stat.id} className="PackageCallback__stat">
                  <span className="PackageCallback__statIcon">
                    <Icon name={stat.icon} />
                  </span>
                  <div className="PackageCallback__statText">
                    <strong className="PackageCallback__statValue">
                      <Counter end={stat.end} decimals={stat.decimals} suffix={stat.suffix} start={statsVisible} />
                    </strong>
                    <span className="PackageCallback__statLabel">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= RIGHT FORM CARD ================= */}
          <div className="PackageCallback__right">
            <div className="PackageCallback__card PackageCallback__reveal">
              <header className="PackageCallback__cardHead">
                <span className="PackageCallback__cardIcon">
                  <Icon name="phone" />
                </span>
                <div className="PackageCallback__cardTitleWrap">
                  <h3 className="PackageCallback__cardTitle">
                    Request a <span className="PackageCallback__cardTitleAccent">Callback</span>
                  </h3>
                  <div className="PackageCallback__online">
                    <span className="PackageCallback__onlineDot" />
                    <span>Travel Team Active · ~10 min response</span>
                  </div>
                </div>
              </header>

              {!isSuccess ? (
                <form ref={formRef} className="PackageCallback__form" onSubmit={handleSubmit} noValidate>
                  {/* Row 1 */}
                  <div className="PackageCallback__row">
                    <div className="PackageCallback__cell">
                      <div className={`PackageCallback__field ${showError('name') ? 'is-error' : ''}`}>
                        <Icon name="user" className="PackageCallback__fieldIcon" />
                        <input
                          className="PackageCallback__input"
                          type="text"
                          name="name"
                          placeholder="Full Name *"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      {showError('name') && <span className="PackageCallback__error">{errors.name}</span>}
                    </div>

                    <div className="PackageCallback__cell">
                      <div className={`PackageCallback__field ${showError('phone') ? 'is-error' : ''}`}>
                        <Icon name="phone" className="PackageCallback__fieldIcon" />
                        <input
                          className="PackageCallback__input"
                          type="tel"
                          name="phone"
                          placeholder="Phone / WhatsApp *"
                          value={values.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      {showError('phone') && <span className="PackageCallback__error">{errors.phone}</span>}
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="PackageCallback__row">
                    <div className="PackageCallback__cell">
                      <div className={`PackageCallback__field ${showError('email') ? 'is-error' : ''}`}>
                        <Icon name="mail" className="PackageCallback__fieldIcon" />
                        <input
                          className="PackageCallback__input"
                          type="email"
                          name="email"
                          placeholder="Email (optional)"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      {showError('email') && <span className="PackageCallback__error">{errors.email}</span>}
                    </div>

                    <div className="PackageCallback__cell">
                      <CustomSelect
                        value={values.city}
                        options={CITIES}
                        placeholder="Select City *"
                        icon="building"
                        hasError={Boolean(showError('city'))}
                        onChange={(val) => {
                          setValues((prev) => ({ ...prev, city: val }))
                          setTouched((prev) => ({ ...prev, city: true }))
                        }}
                      />
                      {showError('city') && <span className="PackageCallback__error">{errors.city}</span>}
                    </div>
                  </div>

                  {/* Row 3 - Request Type Custom Select */}
                  <div className="PackageCallback__cell">
                    <CustomSelect
                      value={values.requestType}
                      options={REQUEST_TYPES}
                      placeholder="Request Type"
                      icon="doc"
                      onChange={(val) => setValues((prev) => ({ ...prev, requestType: val }))}
                    />
                  </div>

                  {/* Row 4 - Best time */}
                  <div className="PackageCallback__cell">
                    <div className="PackageCallback__field">
                      <Icon name="calendar" className="PackageCallback__fieldIcon" />
                      <input
                        className="PackageCallback__input"
                        type="text"
                        name="bestTime"
                        placeholder="Preferred call time (e.g. Today 4 PM)"
                        value={values.bestTime}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Row 5 - Message */}
                  <div className="PackageCallback__cell">
                    <div className={`PackageCallback__field PackageCallback__field--area ${showError('message') ? 'is-error' : ''}`}>
                      <Icon name="chat" className="PackageCallback__fieldIcon PackageCallback__fieldIcon--top" />
                      <textarea
                        ref={messageRef}
                        className="PackageCallback__input PackageCallback__textarea"
                        name="message"
                        placeholder="Your travel requirement or itinerary plan *"
                        rows={3}
                        maxLength={MESSAGE_LIMIT}
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <span className="PackageCallback__counter">
                        {values.message.length}/{MESSAGE_LIMIT}
                      </span>
                    </div>
                    {showError('message') && <span className="PackageCallback__error">{errors.message}</span>}
                  </div>

                  {/* Honeypot */}
                  <input
                    type="text"
                    name="website"
                    value={values.website}
                    onChange={handleChange}
                    className="PackageCallback__honey"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {apiError && <p className="PackageCallback__apiError">{apiError}</p>}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className={`PackageCallback__submit ${isLoading ? 'is-loading' : ''}`}
                    disabled={isLoading}
                  >
                    <span className="PackageCallback__submitGlow" />
                    <span className="PackageCallback__submitContent">
                      {isLoading ? (
                        <>
                          <span className="PackageCallback__spinner" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Icon name="send" className="PackageCallback__submitIcon" />
                          <span>SUBMIT CALLBACK REQUEST</span>
                          <Icon name="arrow" className="PackageCallback__submitArrow" />
                        </>
                      )}
                    </span>
                  </button>

                  <div className="PackageCallback__secure">
                    <Icon name="lock" />
                    <span>Your details are completely confidential & secure</span>
                  </div>

                  {/* Badges footer */}
                  <div className="PackageCallback__badges">
                    {BADGES.map((b) => (
                      <div key={b.id} className="PackageCallback__badge">
                        <span className={`PackageCallback__badgeIcon PackageCallback__badgeIcon--${b.tone}`}>
                          <Icon name={b.icon} />
                        </span>
                        <span>{b.lines}</span>
                      </div>
                    ))}
                  </div>
                </form>
              ) : (
                <div className="PackageCallback__success">
                  <div className="PackageCallback__successRing">
                    <span className="PackageCallback__successTickMark">✓</span>
                  </div>
                  <h4 className="PackageCallback__successTitle">Request Received!</h4>
                  <p className="PackageCallback__successText">
                    Our destination specialist is reviewing your request and will call you shortly.
                  </p>
                  <p className="PackageCallback__successRef">
                    Booking Reference: <strong>{reference}</strong>
                  </p>
                  <button type="button" className="PackageCallback__again" onClick={resetForm}>
                    Submit Another Query
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PackageCallback