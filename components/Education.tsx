import React from 'react'

const Education: React.FC = () => {
  const education = [
    {
      title: "Formation en développement Web Java Angular",
      institution: "Youcode, Safi, UM6P",
      period: "2023 - 2025",
    },
    {
      title: "Baccalauréat (Physique-Chimie)",
      institution: "Othmane Bnou Affane, Casablanca",
      period: "2022 - 2023",
    }
  ]

  const courses = [
    {
      title: "MongoDB Java Developer Path",
      status: "En Progrès"
    },
    {
      title: "Oracle Java SE 8 Fundamentals",
      status: "En Progrès"
    },
    {
      title: "Bootcamp Youcode",
      period: "Juil. 2023"
    }
  ]

  return (
      <section id="education" className="mb-24">
        <h3 className="text-2xl font-semibold text-gray-100 mb-8 hover:text-emerald-400 transition-colors duration-300">
          Formation
        </h3>
        <div className="space-y-8">
          {education.map((item, index) => (
              <div key={index} className="group">
                <div className="flex items-center space-x-2 mb-2">
              <span className="text-emerald-400 text-sm group-hover:translate-x-1 transition-transform duration-300">
                {item.period}
              </span>
                </div>
                <div className="space-y-1">
                  <h4 className="text-xl text-gray-100 group-hover:text-emerald-400 transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                    {item.institution}
                  </p>
                </div>
              </div>
          ))}

          <div className="pt-8">
            <h4 className="text-xl text-gray-100 mb-4">Certifications et Cours</h4>
            <div className="space-y-4">
              {courses.map((course, index) => (
                  <div key={index} className="group flex justify-between items-center">
                <span className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                  {course.title}
                </span>
                    <span className="text-emerald-400 text-sm">
                  {course.status || course.period}
                </span>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  )
}

export default Education

