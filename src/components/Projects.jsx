import { motion, AnimatePresence, useInView } from "motion/react";
import { useRef, useState } from "react";
import { ExternalLink, Github, ChevronDown } from "lucide-react";
import './Projects.css';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with Inventory and Stock Management System",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["SpringBoot", "Java", "MySQL", "OOP","HTML","Css","JavaScript"],
    github: "https://github.com/AshenPasindu/Inventary_And_Stockmanagement",
    link: "#"
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates and team features.",
    image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["TypeScript", "Next.js", "PostgreSQL"],
    github: "#",
    link: "#"
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolios have also been created, with an example being one created using basic HTML, CSS, and JavaScript..",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/AshenPasindu/HTML-CSS-JS-POTOPOLIO-TEST",
    link: "#"
  },
];

function ProjectItem({ project, index, isInView }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="project-item-accordion"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`project-accordion-trigger ${isOpen ? 'active' : ''}`}
      >
        <div className="trigger-left">
          <span className="project-number">0{index + 1}</span>
          <h3 className="project-title-accordion">
            {project.title}
          </h3>
        </div>
        <div className="trigger-right">
          <div className="project-tags-preview">
            {project.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="tag-preview">
                {tag}
              </span>
            ))}
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="chevron-box"
          >
            <ChevronDown size={32} strokeWidth={1} />
          </motion.div>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="project-accordion-content"
          >
            <div className="content-inner-grid">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="project-media-box"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img-accordion"
                />
              </motion.div>

              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="project-details-accordion"
              >
                <p className="project-description-accordion">
                  {project.description}
                </p>

                <div className="project-full-tags">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="tag-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-actions-accordion">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="action-link">
                    <ExternalLink size={18} />
                    Live Site
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="action-link">
                    <Github size={18} />
                    Source
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="projects" className="projects-figma-section">
      <div className="projects-figma-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          className="projects-header-figma"
        >
          <p className="header-tag-figma">— Selected Works</p>
          <h2 className="header-title-figma">
            PROJECTS
          </h2>
        </motion.div>

        <div className="projects-accordion-list">
          {projects.map((project, index) => (
            <ProjectItem
              key={project.title}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
