import { motion, useSpring, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Mail, MapPin, Github, Linkedin, Facebook, Instagram } from "lucide-react";
import './Contact.css'

function MagneticLetter({ char, index, totalDelay, baseItalic }) {
  const ref = useRef(null);
  const x = useSpring(0, { stiffness: 150, damping: 15 });
  const y = useSpring(0, { stiffness: 150, damping: 15 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    if (distance < 100) {
      x.set(distanceX * 0.4);
      y.set(distanceY * 0.4);
      setIsHovered(true);
    } else {
      x.set(0);
      y.set(0);
      setIsHovered(false);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: -45 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: totalDelay + (index * 0.05),
        ease: [0.215, 0.61, 0.355, 1]
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        fontStyle: (isHovered || baseItalic) ? "italic" : "normal",
        color: baseItalic ? "#fbbf24" : "#ffffff"
      }}
      style={{ x, y, display: "inline-block", whiteSpace: char === " " ? "pre" : "normal" }}
      className="magnetic-char"
    >
      {char}
    </motion.span>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const text1 = "Let's Work";
  const text2 = "Together";

  return (
    <section id="contact" className="contact-figma-section">
      <div className="contact-figma-container">
        <div ref={ref} className="contact-heading-wrap">
          <h2 className="contact-display-title">
            {text1.split("").map((char, index) => (
              <MagneticLetter
                key={`work-${index}`}
                char={char}
                index={index}
                totalDelay={0}
              />
            ))}
          </h2>
          <h2 className="contact-display-title">
            {text2.split("").map((char, index) => (
              <MagneticLetter
                key={`together-${index}`}
                char={char}
                index={index}
                totalDelay={0.3}
                baseItalic={true}
              />
            ))}
          </h2>
        </div>

        <div className="contact-grid-figma">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="contact-details-side"
          >
            <p className="contact-intro-text">
              Have a project in mind? Let's discuss how we can work together to
              bring your ideas to life.
            </p>

            <div className="contact-items-list">
              <div className="contact-info-item">
                <Mail size={24} />
                <span>ashenp395@gmail.com</span>
              </div>

              <div className="contact-info-item">
                <MapPin size={24} />
                <span>Colombo, Sri Lanka</span>
              </div>
            </div>

            <div className="contact-social-flex">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/AshenPasindu"
                target="_blank"
                className="social-icon-btn"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/ashen-pasindu-840b2040a/"
                target="_blank"
                className="social-icon-btn"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.facebook.com/share/1BeDMUemPx/"
                target="_blank"
                className="social-icon-btn"
              >
                <Facebook size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.instagram.com/ashen_pasixx"
                target="_blank"
                className="social-icon-btn"
              >
                <Instagram size={24} />
              </motion.a>
            </div>

            <div className="status-badge-wrap">
              <motion.div
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="status-dot"
              />
              <span className="status-label-text">
                STATUS // AVAILABLE 2026
              </span>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            onSubmit={handleSubmit}
            className="contact-form-figma"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="figma-input"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="figma-input"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="figma-textarea"
              required
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="figma-submit-btn"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
