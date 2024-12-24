import React from 'react'
import { ExternalLink, Github } from 'lucide-react'
import { Badge } from "../app/components/ui/badge"

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'VintageMaroc',
      description: "Plateforme e-commerce de vinyles et matériel musical et brocante",
      details: [
        "Développement d'une application e-commerce pour vinyles, équipements musicaux et brocante",
        "Gestion des utilisateurs (admin, client) et intégration d'un panier d'achat avec paiement",
        "Interface intuitive et gestion avancée des produits (recherche, filtres, promotions)"
      ],
      tech: ['SpringBoot', 'Angular', 'PostgreSQL', 'Docker', 'Jenkins', 'Kubernetes', 'UML', 'Jira', 'Github']
    },
    {
      title: 'Musify',
      description: "Gestion de catalogue musical",
      details: [
        "API REST pour albums et chansons avec rôles USER/ADMIN",
        "Authentification sécurisée via JWT et cryptage des mots de passe (BCrypt)",
        "Pagination, tri et recherche avancés pour albums et chansons"
      ],
      tech: ['Spring Boot', 'MongoDB', 'Jenkins', 'Docker', 'Swagger']
    },
    {
      title: 'TaskFlow',
      description: "Application de gestion de tâches",
      details: [
        "Application ToDoList avec gestion des tâches et catégories",
        "Tableau de bord interactif avec statistiques et notifications",
        "Recherche en temps réel et persistance des données via localStorage"
      ],
      tech: ['Angular 17', 'SCSS', 'Tailwind']
    }
  ]

  return (
      <section id="projects" className="mb-24">
        <h3 className="text-2xl font-semibold text-gray-100 mb-4 hover:text-emerald-400 transition-colors duration-300">
          Projets
        </h3>
        <div className="space-y-12">
          {projects.map((project, index) => (
              <div key={index} className="group">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <h4 className="text-xl text-gray-100 group-hover:text-emerald-400 transition-colors duration-300">
                      {project.title}
                    </h4>
                    <div className="flex space-x-2">
                      <ExternalLink className="w-4 h-4 text-emerald-400 group-hover:rotate-45 transition-transform duration-300" />
                      <Github className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                    {project.description}
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-400">
                    {project.details.map((detail, idx) => (
                        <li key={idx} className="group-hover:text-gray-200 transition-colors duration-300">
                          {detail}
                        </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
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
          ))}
        </div>
      </section>
  )
}

export default Projects

