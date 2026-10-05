import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './BreadCrumMain.css'

import DefaultBg from '../../assets/Odisha Coastal Temple Travel Timeline.png'

// Map URL segments to readable labels
const ROUTE_LABELS = {
  about: 'About Us',
  contact: 'Contact Us',
  services: 'Services',
}

const toLabel = (segment) =>
  ROUTE_LABELS[segment] ||
  decodeURIComponent(segment)
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())

const BreadCrumMain = ({
  title,
  subtitle,
  trail,          // optional manual override: [{ label, to }]
  image = DefaultBg,
  height,
}) => {
  const { pathname } = useLocation()

  // Build crumbs from URL: /services/web-design -> Home / Services / Web Design
  const segments = pathname.split('/').filter(Boolean)

  const autoCrumbs = segments.map((seg, i) => ({
    label: toLabel(seg),
    to: '/' + segments.slice(0, i + 1).join('/'),
  }))

  const crumbs = [{ label: 'Home', to: '/' }, ...(trail ?? autoCrumbs)]

  // Last crumb = current page (not a link)
  const parents = crumbs.slice(0, -1)
  const current = crumbs[crumbs.length - 1]

  return (
    <section
      className="bread-crum-main"
      style={{ backgroundImage: `url("${image}")`, ...(height && { height }) }}
      aria-label={`${title} page header`}
    >
      <div className="bread-crum-main__scrim" />

      <div className="bread-crum-main__content">
        <h1 className="bread-crum-main__title">{title}</h1>
        {subtitle && <p className="bread-crum-main__subtitle">{subtitle}</p>}

        <nav className="bread-crum-main__nav" aria-label="Breadcrumb">
          <ol className="bread-crum-main__list">
            {parents.map((c) => (
              <li key={c.to} className="bread-crum-main__item">
                <Link to={c.to}>{c.label}</Link>
              </li>
            ))}
            <li
              key={current.to}
              className="bread-crum-main__item is-current"
              aria-current="page"
            >
              {current.label}
            </li>
          </ol>
        </nav>
      </div>
    </section>
  )
}

export default BreadCrumMain