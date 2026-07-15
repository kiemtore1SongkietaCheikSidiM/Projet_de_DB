import Ai from './image/Ai.jpeg'
import lapin from './image/lapin.jpeg'
import port from './image/porte.jpeg'
import book from './image/book.jpeg'
import { ExternalLink, Github } from 'lucide-react'
import { useEffect, useState } from 'react'



export default function Projects(){
    const [isVisible, setIsVisible] = useState(false)

    useEffect(()=>{
        const observer = new IntersectionObserver(([entry]) =>{
            if(entry.isIntersecting){
                setIsVisible(true)
            }
        },{threshold : 0.3})
        const element = document.getElementById('projects')
        if(element) observer.observe(element)
            return ()=> observer.disconnect()
    },[])

    const project = [
        {
            id:1,
            title: "Chatbot de Sante Maternelle",
            description: "A chatbot to learn all the questions of ladies about the babies' healthy and get automatically an response",
            image: Ai,
            technologies: ['Html,css,js','Flask','Sqlite','Machine learning'],
            Categories : "Machine Learning Web",
            features: true
        },
         {
            id:2,
            title: "Portefolio",
            description: "An description of my skills to helps in many features",
            image: port,
            technologies: ['React/Vite','TaiwindCss','Javascript'],
            Categories : "Machine Learning Web",
            features: true
        },
         {
            id:3,
            title: "Lapin management",
            description: "A chatbot to learn all the questions of ladies about the babies' healthy and get automatically an response",
            image:lapin,
            technologies: ['React/Vite','TaiwindCss','Javascript','Flask','PostgreSql'],
            Categories : "Full stack",
            features: true
        },
         {
            id:4,
            title: "Bibliotheque",
            description: "Une bibliotheque de telechargement de livres",
            image:book,
            technologies: ['Html,css,js','Django','Sqlite'],
            Categories : "Full stack",
            features: true
        }
    ]


    return (
        <section className="py-24 bg-slate-950 overflow-hidden" id="projects">
            {/* Animated background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 w-72 h-72 bg-green-600/10 rounded-full
                blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full
                blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                w-full h-full bg-linear-to-r from-transparent via-green-600/5 to-transparent"></div>
            </div>
            <div className="container mx-auto px-6 relative z-10">
                <div className={`text-center mb-16 transition-all duration-1000 
                    ${isVisible ? "opacity-100 translate-y-0":'opacity-0 translate-y-10'}`}>
                    <p className="text-green-400 font-semibold text-lg mb-4">
                        Portefolio
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Features Projects
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Here are some of my most recent projects that showcase my skills and expertise in web development.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
                    {project.map((proj,index)=>{
                        return (
                            <div className={`group bg-slate-900 rounded-xl shadow-md hover:shadow-lg 
                            transition-all duration-1000 delay-700 overflow-hidden border border-slate-700 hover:border-green-500 
                            hover:scale-105
                            ${isVisible ? "opacity-100 translate-y-0":'opacity-0 translate-y-10'}`} style={{transitionDelay: `${(index * 3) * 150}ms`}}
                            key={index}>
                                <div className="relative overflow-hidden">
                                    <img src={proj.image} alt={proj.title} className='w-full h-70 object-cover group-hover:scale-105
                                    transition-all duration-300'/>
                                    <div className='absolute top-3 right-3 flex gap-2 opacity-0
                                    group-hover:opacity-100 transition-all duration-300 '>
                                        <button className='w-8 h-8 bg-white/90 rounded-full flex items-center
                                        justify-center hover:bg-white
                                        transition-all duration-300'>
                                            <Github className='w-4 h-4 text-gray-600'/>
                                        </button>
                                        <button className='w-8 h-8 bg-white/90 rounded-full flex items-center
                                        justify-center hover:bg-white
                                        transition-all duration-300'>
                                            <ExternalLink className='w-4 h-4 text-gray-600'/>
                                        </button>
                                    </div>
                                </div>
                                <div className='p-6'>
                                    <div className='flex items-center justify-between mb-3'>
                                        <span className='bg-slate-800 text-gray-400 px-2 py-1 rounded-full
                                        text-xs font-medium'>
                                            {proj.Categories} 
                                        </span>
                                        <div className=''>
                                            <h4 className='text-lg font-bold text-white mb-2 group-hover:text-green-400
                                            transition-all duration-300'>
                                                {proj.title}
                                            </h4>
                                            <p className='text-gray-300 text-sm mb-4 leading-relaxed'>
                                                {proj.description.substring(0,100)}...
                                            </p>
                                            <div className='flex flex-wrap gap-1 mb-4'>
                                                {proj.technologies.map((tech,index) =>{
                                                    return <span className='bg-green-600 text-white px-2 py-1 rounded-full 
                                                    text-xs font-medium'>{tech}</span>
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className={`text-center transition-all duration-1000 delay-1000 mt-5
                    ${isVisible ? "opacity-100 translate-y-0":'opacity-0 translate-y-10'}`}>
                    <button className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all
                    duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105 ">
                        View All projects
                    </button>
                </div>
            </div>
        </section>
    )
}