import React from 'react'

const Contact: React.FC = () => {
    return (
        <section id="contact">
            <h3 className="text-2xl font-semibold text-gray-100 mb-4 hover:text-emerald-400 transition-colors duration-300">Contact</h3>
            <div className="space-y-4">
                <p className="text-gray-400 max-w-xl hover:text-gray-200 transition-colors duration-300">
                    Je suis actuellement à la recherche de nouvelles opportunités. N'hésitez pas
                    à me contacter si vous avez des questions ou si vous souhaitez discuter
                    d'une collaboration potentielle.
                </p>
            </div>
        </section>
    )
}

export default Contact

