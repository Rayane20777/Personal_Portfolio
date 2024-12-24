import React from 'react'
import { ExternalLink } from 'lucide-react'
import { Badge } from "../app/components/ui/badge"

const Experience: React.FC = () => {
  const technologies = ['Laravel', 'React.js', 'MySQL', 'UML']

  return (
    <section id="experience" className="mb-24">
      <h3 className="text-2xl font-semibold text-gray-100 mb-4 hover:text-emerald-400 transition-colors duration-300">Expérience</h3>
      <div className="space-y-12">
        <div className="group">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-emerald-400 text-sm group-hover:translate-x-1 transition-transform duration-300">Mai 2024 — Juil. 2024</span>
          </div>
          <div className="flex items-center space-x-2">
            <h4 className="text-xl text-gray-100 group-hover:text-emerald-400 transition-colors duration-300">Stage PFE chez LafargeHolcim</h4>
            <ExternalLink className="w-4 h-4 text-emerald-400 group-hover:rotate-45 transition-transform duration-300" />
          </div>
          <div className="mt-4 space-y-4 text-gray-400">
            <p className="group-hover:text-gray-200 transition-colors duration-300">
              Modélisation d&apos;une application de gestion d&apos;analyse chimique. Développement d&apos;une 
              application web avec Laravel et React.js pour optimiser les processus de laboratoire.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li className="group-hover:text-gray-200 transition-colors duration-300">
                Conception UML pour modéliser les fonctionnalités du système
              </li>
              <li className="group-hover:text-gray-200 transition-colors duration-300">
                Développement backend avec Laravel: automatisation des processus, centralisation des données (MySQL)
              </li>
              <li className="group-hover:text-gray-200 transition-colors duration-300">
                Création d&apos;une interface utilisateur responsive avec React.js
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Badge 
                  key={tech} 
                  variant="outline" 
                  className="bg-[#112240] text-emerald-400 border-emerald-400/30 hover:bg-emerald-400 hover:text-[#0a192f] transition-colors duration-300"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

