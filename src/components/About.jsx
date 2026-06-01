import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import './About.css'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const aboutImage = '/ME.JPEG' // Standardized path for public folder

  return (
    <section id="about" className="about-figma">
      <div className="about-container-figma">
        <div className="about-grid-figma">

          {/* Text Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="about-text-side"
          >
            <div className="about-header">
              <p className="about-tag">— ABOUT</p>
              <h2 className="about-main-title-figma">
                Interested in{" "}
                <span className="italic-highlight">Technology, Branding</span> and building interfaces
              </h2>
            </div>

            <div className="about-body-figma">
              <p className="about-p-large">
                Currently studying for my BSc (Hons) in Information Technology with a specialization in Software Engineering at SLIIT. My focus is on advancing in IT and building a brand name.
              </p>
              <p className="about-p-large">
               I am committed to building these using AI for the background systems and using my knowledge.
              </p>
            </div>

            <div className="about-footer-figma">
               <div className="stats-row">
                  <div className="stat-box">
                    <p className="stat-value">SLIIT</p>
                    <p className="stat-label">Education</p>
                  </div>
                  <div className="stat-box">
                    <p className="stat-value">AI Spec.</p>
                    <p className="stat-label">Focus</p>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="about-image-side"
          >
            <div className="image-wrapper-figma">
              <img
                src={aboutImage}
                alt="Ashen Pasindu"
                className="about-img-figma"
              />
              <div className="image-overlay-border"></div>
            </div>

            {/* Decorative Element */}
            <div className="decorative-blur"></div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
