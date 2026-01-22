import { useEffect, useState } from "react"



export default function Skills(){
    const [Isvisible, setIsVisible] = useState(false)
    const [animated, setAnimated] = useState({})
    
    useEffect(()=>{
        const obserber = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting){
                setIsVisible(true)
                skills.forEach((skill,index) =>{
                    setTimeout(()=>{
                        setAnimated((prev)=>({
                            ...prev,[skill.name] : skill.level
                        }))
                    },index * 200)
                },{threshold : 0.3})
            }
        })
        const element = document.getElementById('skills')
        if(element) obserber.observe(element)
            return ()=> obserber.disconnect()
    },[])

   const skills = [
    { name : 'HTML,CSS,JS', level: 80},
    {name: 'TypeScript', level: 55},
    {name: 'Tailwindcss' ,level: 65},
    {name: 'Vite/React', level: 60},
    {name: 'UI/UX Design', level: 60},
    {name: 'Django', level: 49},
    {name: 'Flask', level: 70},
    {name: 'Sqlite', level: 55},
    {name: 'PostgreSQL', level: 55},
    {name: 'ML-python', level: 60}
   ]

   const Education = [
    {
        year: "2022-2025",
        title: 'Modelisation-Simulation et calcul Scientifique',
        institution: 'Université Virtuelle du Burkina Faso',
        description : "Poursuite d\'un diplôme de licence en Modélisation-Simulation et Calcul Scientifique à l\'Université Virtuelle du Burkina Faso, axé sur le développement de compétences avancées en modélisation mathématique, simulation informatique et analyse de données."
    },
    {
        year: "2026-",
        title: "Renforcement des competences en Web et ML-python",
        institution: 'W3Schools, freeCodeCamp et autres plateformes en ligne',
        description: "Engagement dans des cours en ligne et des tutoriels sur des plateformes telles que W3Schools et freeCodeCamp pour approfondir les compétences en développement web (HTML, CSS, JavaScript, React) et en apprentissage automatique avec Python."
    }
   ]


    return (
        <section id="skills" className="py-24 border-slate-900 overflow-hidden relative">
            {/* Background Elemeent */}
            <div className="absolute inset-0">
                <div className="absolute top-20 w-72 h-72 bg-green-600/10 rounded-full
                blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full
                blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
            </div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/*left education */}
                    <div className={`transition-all duration-1000 ${Isvisible ? "opacity-100 translate-x-0": "opacity-0 -translate-x-10"}`} >
                        <div className="mb-12">
                            <p className="text-green-400 font-semibold text-lg mb-4">
                                Qualification
                            </p>
                            <p className="text-green-400 text-4xl font-bold mb-8">
                                Education
                            </p>
                        </div>
                        <div className="space-y-8">
                            {Education.map((edu,index)=>{
                                return (
                                <div className={`border-l-2 border-green-400 pl-6
                                group transition-all duration-1000
                                ${Isvisible ? "opacity-100 translate-x-0": "opacity-0 -translate-x-10"} `} 
                                key={index} style={{transitionDelay: `${index * 150}ms`}}>
                                    <div className={`border-l-2 -left-2 top-0 w-4 h-4 bg-green-500 rounded-full group-hover:scale-125 transition-all duration-300`}></div>
                                    <div className="text-green-400 text-sm text-semibold 
                                    mb-2 group-hover:text-green-300 transition-all duration-300">
                                        {edu.year}
                                    </div>
                                    <h3 className="text-xl font-black text-white mb-2 group-hover:text-green-400 
                                    transition-all duration-200">
                                        {edu.title}
                                    </h3>
                                    <p className="text-gray-400 mb-2 group-hover:text-gray-300
                                    transition-all duration-200">
                                        {edu.institution}
                                    </p>
                                    <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-all
                                    duration-300">
                                        {edu.description}
                                    </p>
                                </div>
                                )
                            })}
                        </div>
                    </div>
                    {/* right progress */}
                    <div className={`transition-all duration-1000 delay-300 ${Isvisible ? "opacity-100 translate-x-0": "opacity-0 translate-x-10"}`}>
                        <div className="mb-12">
                            <p className="text-green-400 font-semibold text-lg mb-4">
                               Expert
                            </p>
                            <p className=" text-4xl font-black text-white mb-8">
                                My Skills
                            </p>
                        </div>
                        <div className="space-y-6">
                            {skills.map((skill,index) =>{
                                return (
                                    <div key={index} className={`space-y-2 transition-all duration-300`}>
                                        <div className="flex justify-between items-center">
                                            <span className="text-white font-medium group-hover:text-green-400
                                            transition-all duration-300">
                                                {skill.name}
                                            </span>
                                            <span className="text-green-300
                                            font-semibold ">
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                                            <div className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full
                                            transition-all duration-1000 ease-out relative" style={{width: `${animated[skill.name] || 0}%`}}>
                                                <div className="absolute inset-0 bg-white/20 "></div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}