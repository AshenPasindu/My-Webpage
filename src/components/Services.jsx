import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { Code2, Palette, Database, Smartphone, Globe, Zap } from 'lucide-react'
import './Services.css'

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "React, HTML, CSS, JavaScript, Next.js",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Node.js, Java, MongoDB, PostgreSQL",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Figma, Adobe XD, Responsive Design",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "React Native, Progressive Web Apps",
  },
  {
    icon: Globe,
    title: "Web Technologies",
    description: "HTML5, CSS, JavaScript, REST APIs",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimization, SEO, Accessibility",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" className="services-figma">
      <div className="services-container-figma">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="services-main-title"
        >
          Skills & Expertise
        </motion.h2>

        <div className="services-grid-figma">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="service-card-figma"
            >
              <skill.icon size={48} className="service-icon-figma" />
              <h3 className="service-title-figma">{skill.title}</h3>
              <p className="service-description-figma">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
