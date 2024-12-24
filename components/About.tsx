import React from 'react'

const About: React.FC = () => {
  const technologies = [
    'Java & Spring Boot',
    'Angular',
    'React.js',
    'Laravel',
    'PostgreSQL',
    'Docker',
    'Jenkins',
    'Git/GitHub',
    'MongoDB'
  ]

  return (
    <section id="about" className="mb-24">
      <h3 className="text-2xl font-semibold text-gray-100 mb-4 hover:text-emerald-400 transition-colors duration-300">À propos</h3>
      <div className="space-y-4 text-gray-400">
        <p className="hover:text-gray-200 transition-colors duration-300">
          Développeur Full-Stack Java Angular basé à Safi, je suis passionné par le développement 
          d&apos;applications performantes et scalables. Mon expertise couvre l&apos;ensemble du stack technique, 
          du back-end Java aux interfaces utilisateur modernes avec Angular et React.
        </p>
        <div className="space-y-4">
          <h4 className="text-xl text-gray-100 hover:text-emerald-400 transition-colors duration-300">Technologies principales :</h4>
          <div className="grid grid-cols-2 gap-2">
            {technologies.map((tech) => (
              <div key={tech} className="flex items-center space-x-2 group">
                <span className="text-emerald-400 transition-all duration-300 group-hover:translate-x-1">▹</span>
                <span className="group-hover:text-gray-200 transition-colors duration-300">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

