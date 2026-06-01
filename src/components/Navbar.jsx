import { motion } from 'motion/react'
import './Navbar.css'

export default function Navbar() {
  // Ensure the labels match the intended link targets (case-insensitive for id selection)
  const navItems = [
    { label: 'ABOUT', id: 'about' },
    { label: 'SKILLS', id: 'skills' },
    { label: 'PROJECTS', id: 'projects' },
    { label: 'CONTACT', id: 'contact' }
  ]

  const handleScroll = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <ul className="nav-links">
        {navItems.map((item, index) => (
          <motion.li
            key={item.label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          >
            <button
              onClick={() => handleScroll(item.id)}
              className="nav-btn"
            >
              {item.label}
            </button>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  )
}
