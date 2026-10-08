import './App.css'
import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Topbar from './Components/Topbar/Topbar'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import PageLoader from './Components/PageLoader/PageLoader'

import About from '../src/Pages/About/About'
import Galary from './Pages/Galary/Galary'
import Blog from './Pages/Blog/Blog'
import Faq from './Pages/Faq/Faq'
import Contact from './Pages/Contact/Contact'
import AboutPageOne from './Components/AboutPageOne/AboutPageOne'
import AboutPageTwo from './Components/AboutPageTwo/AboutPageTwo'
import AboutPageThree from './Components/AboutPageThree/AboutPageThree'
import AboutPageFour from './Components/AboutPageFour/AboutPageFour'
import AboutPageFive from './Components/AboutPageFive/AboutPageFive'
import AboutPageQuestion from './Components/AboutPageQuestion/AboutPageQuestion'

function App() {
  const location = useLocation()
  const [loading, setLoading] = useState(true) // shows on first visit too

  // Show the loader on every route change
  useEffect(() => {
    setLoading(true)
    window.scrollTo({ top: 0 })
    const timer = setTimeout(() => setLoading(false), 1300)
    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <>
      <PageLoader visible={loading} />

      <Topbar />
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Galary />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-one" element={<AboutPageOne/>} />
          <Route path="/about-two" element={<AboutPageTwo/>} />
          <Route path="/about-three" element={<AboutPageThree/>} />
          <Route path="/about-four" element={<AboutPageFour/>} />
          <Route path="/about-five" element={<AboutPageFive/>} />
          <Route path="/about-question" element={<AboutPageQuestion/>} />






          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App