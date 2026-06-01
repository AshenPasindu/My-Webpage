import { useState, useEffect } from 'react'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // This matches the 2.5s timeout in the Loader component
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="app-root">
      <Loader />
      {!loading && <Navbar />}
      <main>
        <section id="home">
          <Hero />
        </section>
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      {!loading && <Footer />}
    </div>
  )
}

export default App
