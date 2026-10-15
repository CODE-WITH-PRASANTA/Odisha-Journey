import React, { useCallback, useEffect, useRef, useState } from 'react'
import './PackageMain.css'

/* ------------------------------------------------------------------
   IMAGE IMPORTS  -> change these paths to your own assets
------------------------------------------------------------------- */
import slideOne from '../../assets/puri-sun-temple-1.png'
import slideTwo from '../../assets/puri-sun-temple-2.png'
import slideThree from '../../assets/puri-sun-temple-3.png'
import slideFour from '../../assets/puri-sun-temple-4.png'

const SLIDE_DURATION = 4000 // image + content change every 4 seconds
const EXIT_DURATION = 600 // time given to the old content to slide out

/* ------------------------------------------------------------------
   SLIDES  -> every image has its own content, edit text freely
------------------------------------------------------------------- */
const SLIDES = [
  {
    id: 1,
    src: slideOne,
    alt: 'Konark Sun Temple chariot wheel at sunset',
    category: 'Temple Tours',
    badge: 'Popular',
    title: 'Divine Puri & Sun Temple Odyssey',
    duration: '5 Days / 4 Nights',
    locations: 'Puri · Konark · Chilika Lake · Bhubaneswar',
    persons: '2–15 Persons',
    rating: 5,
  },
  {
    id: 2,
    src: slideTwo,
    alt: 'Intricate stone carvings of Konark Sun Temple',
    category: 'Heritage Walk',
    badge: 'Top Rated',
    title: 'Konark, the Chariot of the Sun God',
    duration: 'Day 2 · Full Day',
    locations: 'Konark · Chandrabhaga Beach · Ramachandi',
    persons: '2–15 Persons',
    rating: 5,
  },
  {
    id: 3,
    src: slideThree,
    alt: 'Jagamohana of Konark Sun Temple in golden light',
    category: 'Sacred Puri',
    badge: 'Must Visit',
    title: 'Jagannath Dham & Golden Sunrise Beach',
    duration: 'Day 1 · Full Day',
    locations: 'Puri · Jagannath Temple · Puri Beach',
    persons: '2–15 Persons',
    rating: 5,
  },
  {
    id: 4,
    src: slideFour,
    alt: 'Boats on Chilika Lake at sunset',
    category: 'Lake Escape',
    badge: 'Scenic',
    title: 'Sunset Boating on Chilika Lake',
    duration: 'Day 3 · Half Day',
    locations: 'Chilika Lake · Satapada · Dolphin Point',
    persons: '2–15 Persons',
    rating: 5,
  },
]

/* ---------------------------- Icons ------------------------------ */
const ClockIcon = () => (
  <svg className="PackageMain__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
)

const PinIcon = () => (
  <svg className="PackageMain__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
)

const UsersIcon = () => (
  <svg className="PackageMain__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
    <path d="M16 5.2a3.2 3.2 0 0 1 0 5.6" />
    <path d="M18 14.4c1.8.8 3 2.6 3 5.6" />
  </svg>
)

const StarIcon = () => (
  <svg className="PackageMain__starSvg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.5l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.5l-5.9 3.2 1.2-6.6L2.5 9.5l6.6-.9L12 2.5Z" />
  </svg>
)

const SmallStarIcon = () => (
  <svg className="PackageMain__badgeStar" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.5l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.5l-5.9 3.2 1.2-6.6L2.5 9.5l6.6-.9L12 2.5Z" />
  </svg>
)

/* Splits a title into words -> letters so every letter can animate */
const AnimatedTitle = ({ text }) => {
  let letterIndex = 0
  return (
    <h1 className="PackageMain__title" aria-label={text}>
      {text.split(' ').map((word, w) => (
        <span className="PackageMain__word" key={`${word}-${w}`} aria-hidden="true">
          {word.split('').map((char) => {
            const index = letterIndex++
            return (
              <span className="PackageMain__letter" key={index} style={{ '--l': index }}>
                {char}
              </span>
            )
          })}
        </span>
      ))}
    </h1>
  )
}

/* --------------------------- Component --------------------------- */
const PackageMain = () => {
  const rootRef = useRef(null)
  const [active, setActive] = useState(0) // image shown
  const [contentIndex, setContentIndex] = useState(0) // content shown
  const [phase, setPhase] = useState('pre') // 'pre' | 'in' | 'out'
  const [inView, setInView] = useState(false)

  const goTo = useCallback((index) => setActive(index), [])

  /* Auto slide every 4 seconds (pauses while hero is off-screen) */
  useEffect(() => {
    if (!inView) return undefined
    const timer = setTimeout(() => {
      setActive((prev) => (prev + 1) % SLIDES.length)
    }, SLIDE_DURATION)
    return () => clearTimeout(timer)
  }, [active, inView])

  /* Content follows the image: old content slides out, new one types in.
     Runs ONLY when the image changes (depends on `active` alone), so the
     timers below are never cancelled halfway by our own state updates. */
  const contentRef = useRef(0)

  useEffect(() => {
    // Image is already showing its own content (first render / clicked back)
    if (active === contentRef.current) {
      setPhase('in')
      return undefined
    }

    let raf1
    let raf2
    setPhase('out')

    const swap = setTimeout(() => {
      contentRef.current = active
      setContentIndex(active)
      setPhase('pre')
      raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(() => setPhase('in'))
      })
    }, EXIT_DURATION)

    return () => {
      clearTimeout(swap)
      cancelAnimationFrame(raf1)
      cancelAnimationFrame(raf2)
    }
  }, [active])

  /* Entrance whenever the section enters the viewport */
  useEffect(() => {
    const el = rootRef.current
    if (!el) return undefined
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)
        setPhase((prev) => {
          if (prev === 'out') return prev
          return entry.isIntersecting ? 'in' : 'pre'
        })
      },
      { threshold: 0.25 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  /* Scroll-linked parallax: writes progress (0 -> 1) to a CSS variable */
  useEffect(() => {
    const el = rootRef.current
    if (!el) return undefined
    let ticking = false

    const update = () => {
      const { top, height } = el.getBoundingClientRect()
      const progress = Math.min(Math.max(-top / (height || 1), 0), 1)
      el.style.setProperty('--pm-progress', progress.toFixed(4))
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        window.requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const current = SLIDES[contentIndex]
  const contentState = phase === 'out' ? 'out' : phase === 'in' && inView ? 'in' : 'pre'

  return (
    <section
      ref={rootRef}
      className={`PackageMain ${inView ? 'PackageMain--visible' : ''}`}
      aria-label={current.title}
    >
      {/* ---------- Background slider ---------- */}
      <div className="PackageMain__media" aria-hidden="true">
        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`PackageMain__slide ${index === active ? 'PackageMain__slide--active' : ''}`}
          >
            <img
              className="PackageMain__image"
              src={slide.src}
              alt={slide.alt}
              loading={index === 0 ? 'eager' : 'lazy'}
              draggable="false"
            />
          </div>
        ))}
        <div className="PackageMain__overlay" />
        <div className="PackageMain__glow" />
      </div>

      {/* ---------- Content ---------- */}
      <div className="PackageMain__container">
        <div
          key={current.id}
          className={`PackageMain__content PackageMain__content--${contentState}`}
          aria-live="polite"
        >
          <div className="PackageMain__badges">
            <span className="PackageMain__badge PackageMain__badge--category" style={{ '--m': 0 }}>
              {current.category}
            </span>
            <span className="PackageMain__badge PackageMain__badge--popular" style={{ '--m': 1 }}>
              <SmallStarIcon />
              {current.badge}
            </span>
          </div>

          <AnimatedTitle text={current.title} />

          <span className="PackageMain__line" />

          <div className="PackageMain__meta">
            <span className="PackageMain__metaItem" style={{ '--m': 0 }}>
              <ClockIcon />
              {current.duration}
            </span>
            <span className="PackageMain__metaItem" style={{ '--m': 1 }}>
              <PinIcon />
              {current.locations}
            </span>
            <span className="PackageMain__metaItem" style={{ '--m': 2 }}>
              <UsersIcon />
              {current.persons}
            </span>
            <span
              className="PackageMain__stars"
              style={{ '--m': 3 }}
              aria-label={`${current.rating} out of 5 stars`}
            >
              {Array.from({ length: current.rating }).map((_, i) => (
                <span className="PackageMain__star" key={i} style={{ '--s': i }}>
                  <StarIcon />
                </span>
              ))}
            </span>
          </div>
        </div>

        {/* ---------- Thumbnails ---------- */}
        <div className="PackageMain__thumbs">
          {SLIDES.map((slide, index) => {
            const isActive = index === active
            return (
              <button
                key={slide.id}
                type="button"
                className={`PackageMain__thumb ${isActive ? 'PackageMain__thumb--active' : ''}`}
                style={{ '--t': index }}
                onClick={() => goTo(index)}
                aria-label={`Show image ${index + 1}`}
                aria-current={isActive}
              >
                <img className="PackageMain__thumbImage" src={slide.src} alt="" draggable="false" />
                {isActive && (
                  <span
                    key={`${active}-${inView}`}
                    className="PackageMain__progress"
                    style={{ animationDuration: `${SLIDE_DURATION}ms` }}
                  />
                )}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PackageMain