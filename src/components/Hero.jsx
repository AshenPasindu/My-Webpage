import { motion, useSpring } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import { useRef } from 'react'
import './Hero.css'

// Import the video from the public folder
const homepageVideo = '/homePage.mp4'

function MagneticLetter({ char, index, delay }) {
  const ref = useRef(null)
  const mouseX = useSpring(0, { stiffness: 200, damping: 15 })
  const mouseY = useSpring(0, { stiffness: 200, damping: 15 })

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2

    const distanceX = clientX - centerX
    const distanceY = clientY - centerY
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)

    if (distance < 120) {
      mouseX.set(distanceX * 0.45)
      mouseY.set(distanceY * 0.45)
    } else {
      mouseX.set(0)
      mouseY.set(0)
    }
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.span
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="magnetic-letter"
      style={{
        x: mouseX,
        y: mouseY,
        display: "inline-block",
        whiteSpace: char === " " ? "pre" : "normal",
      }}
      initial={{
        opacity: 0,
        z: -500,
        rotateX: -90,
        y: 100
      }}
      animate={{
        opacity: 1,
        z: 0,
        rotateX: 0,
        y: 0
      }}
      transition={{
        duration: 1.5,
        delay: delay + index * 0.08,
        ease: [0.215, 0.61, 0.355, 1],
      }}
    >
      <motion.span
        className="letter-inner"
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.2
        }}
      >
        {char}
      </motion.span>
    </motion.span>
  )
}

export default function Hero() {
  const firstName = "Ashen"
  const lastName = "Pasindu"

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="hero-bg">
      {/* Background Video */}
      <video
        className="hero-video"
        src={homepageVideo}
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Video Overlay */}
      <div className="hero-video-overlay" />

      <div className="hero-container">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hero-greeting-aaa"
        >
          HEY, I'M
        </motion.div>

        <h1 className="hero-name-aaa">
          <div className="name-line">
            {firstName.split("").map((char, index) => (
              <MagneticLetter
                key={`first-${index}`}
                char={char}
                index={index}
                delay={0.4}
              />
            ))}
          </div>
          <div className="name-line">
            {lastName.split("").map((char, index) => (
              <MagneticLetter
                key={`last-${index}`}
                char={char}
                index={index}
                delay={0.7}
              />
            ))}
          </div>
        </h1>

        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="hero-description-aaa"
        >
          BSc (Hons) in Information Technology Specializing in Software Engineering at SLIIT. <br />
          Dedicated to building innovative digital experiences and advancing in the IT industry.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 2.2, duration: 0.5 },
          y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
        }}
        className="scroll-indicator-aaa"
        onClick={scrollToAbout}
      >
        <ChevronDown size={32} color="white" />
      </motion.div>
    </div>
  )
}
