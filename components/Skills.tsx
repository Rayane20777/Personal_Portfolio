'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills: React.FC = () => {
  const [filter, setFilter] = useState<string | null>(null)

  const skills: Skill[] = [
    // Front-end
    { name: "HTML", level: 90, category: "Front-end" },
    { name: "CSS", level: 85, category: "Front-end" },
    { name: "Tailwind", level: 85, category: "Front-end" },
    { name: "Bootstrap", level: 80, category: "Front-end" },
    { name: "JavaScript", level: 85, category: "Front-end" },
    { name: "AJAX", level: 80, category: "Front-end" },
    { name: "Angular", level: 85, category: "Front-end" },
    { name: "React", level: 80, category: "Front-end" },
    
    // Back-end
    { name: "Java", level: 90, category: "Back-end" },
    { name: "Spring Boot", level: 85, category: "Back-end" },
    { name: "Spring Data", level: 80, category: "Back-end" },
    { name: "Spring Security", level: 75, category: "Back-end" },
    { name: "JEE", level: 75, category: "Back-end" },
    { name: "PHP", level: 70, category: "Back-end" },
    { name: "Laravel", level: 75, category: "Back-end" },
    { name: "Hibernate", level: 70, category: "Back-end" },
    
    // Database
    { name: "PostgreSQL", level: 85, category: "Database" },
    { name: "MySQL", level: 85, category: "Database" },
    { name: "H2", level: 75, category: "Database" },
    { name: "MongoDB", level: 80, category: "Database" },
    
    // Testing
    { name: "JUnit", level: 80, category: "Testing" },
    { name: "Mockito", level: 75, category: "Testing" },
    { name: "JaCoCo", level: 70, category: "Testing" },
    { name: "SonarLint", level: 75, category: "Testing" },
    
    // DevOps
    { name: "Docker", level: 80, category: "DevOps" },
    { name: "Docker Compose", level: 75, category: "DevOps" },
    { name: "Jenkins", level: 70, category: "DevOps" },
    
    // Tools
    { name: "Git", level: 90, category: "Tools" },
    { name: "GitHub", level: 85, category: "Tools" },
    { name: "GitFlow", level: 80, category: "Tools" },
  ]

  const categories = Array.from(new Set(skills.map(skill => skill.category)))

  const filteredSkills = filter ? skills.filter(skill => skill.category === filter) : skills

  return (
    <section id="skills" className="mb-24">
      <h3 className="text-2xl font-semibold text-gray-100 mb-8 hover:text-emerald-400 transition-colors duration-300">
        Compétences Techniques
      </h3>
      <div className="mb-6 flex flex-wrap gap-2">
        <button
          onClick={() => setFilter(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
            filter === null ? 'bg-emerald-400 text-gray-900' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          Tous
        </button>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
              filter === category ? 'bg-emerald-400 text-gray-900' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <AnimatePresence>
          {filteredSkills.map(skill => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="bg-gray-800 rounded-lg p-4 shadow-lg hover:shadow-emerald-400/10 transition-shadow duration-300"
            >
              <h4 className="text-lg font-semibold text-emerald-400 mb-2">{skill.name}</h4>
              <p className="text-sm text-gray-400">{skill.category}</p>
              <div className="mt-2 w-full bg-gray-700 rounded-full h-2.5">
                <div 
                  className="bg-emerald-400 h-2.5 rounded-full" 
                  style={{ width: `${(skill.level / 2)}%` }}
                ></div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Skills

