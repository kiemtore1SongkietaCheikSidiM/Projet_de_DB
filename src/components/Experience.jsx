import { Award, Briefcase, Calendar, MapPin } from "lucide-react"
import { useEffect, useState } from "react"




export default function Experience(){
    const [isVisibleItem, setIsVisibleItem] = useState([])
    const [timelineVisible,setTimelineVisible] = useState(false)

    useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = Number(entry.target.dataset.index)
        setIsVisibleItem(prev => [...new Set([...prev, index])])
      }
    })
  }, { threshold: 0.3 })

  document.querySelectorAll('.experience-item')
    .forEach(el => observer.observe(el))

  return () => observer.disconnect()
}, [])


    const  experiences = [
        {
            company: "School Stage",
            position : 'stage',
            period: '2025',
            Location: 'Ouagadougou, Cissin',
            description: 'ML in chatbot',
            achivement: ["Validation",'best score','be graduated'],
            skills: ['Flask','ML','HTML','CSS','JS','SQLite']
        }
    ]
    return(
        <section id="experience" className="py-24 bg-slate-900 relative overflow-hidden">
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
                <div className="text-center mb-16">
                    <p className="text-green-400 font-semibold text-lg mb-4">
                        All company
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        My experiences
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto delay-300">
                        My professionnal journey et experience that shape my expertise
                    </p>
                </div>
                <div className="max-w-5xl mx-auto">
                    <div className="relative">
                        {/* Animated timeline */}
                        <div className="absolute left-8 md:left-1/2 transform md:-translate-1/2 absolute left-8 md:left-1/2 inset-y-0 w-1 bg-slate-700 rounded-full">
                            <div className={`w-full bg-gradient-to-b from-green-500 via-green-400
                                to-green-300 rounded-full transition-all duration-300 ease-out`}>
                                    <div className="w-full h-full bg-gradient-to-b from-green-500 to-green-300"></div>
                                </div>
                        </div>
                        {experiences.map((expert,index)=> {
                            return (
                                <div
                                className={`experience-item relative flex mb-20 transition-all duration-700
                                 ${isVisibleItem.includes(index)
                                 ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-10'
                                 }`}
                                data-index={index}
                                >

                                        {/* Animated timeline */}
                                        <div className={`timeline-line  left-8 md:left-1/2 pt-5
                                            md:-translate-x-1/2 transform w-6 h-6 bg-green-500 rounded-full border-4 border-slate-900 shadow-lg z-10 ${isVisibleItem.includes(index) ? "scale-100" : 'scale-0'}`}
                                            style={{transitionDelay : `${index * 300 + 1200}ms`}}>
                                                <div className="absolute inset-0 bg-green-400 rounded-full"></div>
                                                <div className="absolute inset-0 bg-green-500 rounded-full"></div>
                                            </div>
                                            {/* Content Card */}
                                            <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12': 'md:pl-12'}`}>
                                                <div className={` bg-slate-800 p-8 rounded-2xl shadow-2xl border border-slate-800 hover:border-green-500 transition-all duration-500 transform hover:scale-105 hover:shadow-red-500/20
                                                    group `}>
                                                        <div className="flex items-center gap-2 mb-6 group-hover:transform
                                                        group-hover-scale-105 transition-all duration-300">
                                                            <div className=" w-12 h-12 bg-green-600 rounded-full flex items-center 
                                                            justify-between shadow-lg group-hover:bg-green-500
                                                            transition-all duration-300 group-hover:rotate-6 ">
                                                                <Briefcase className="w-6 h-6 text-white"/>
                                                            </div>
                                                            <div className="text-xs font-bold text-white group-hover:text-green-600 
                                                            transition-colors duration-300">
                                                                {expert.company}
                                                            </div>
                                                            <div className="flex items-center gap-2 text-green-400 text-sm">
                                                                <Calendar className="w-4 h-4"/>
                                                                {expert.period}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <h4 className="text-lg font-semibold text-green-400 mb-2 group-hover:text-green-300 
                                                        transition-colors duration-300">
                                                            {expert.position}
                                                        </h4>
                                                        <div className="flex items-center gap-2 text-green-400 text-sm">
                                                            <MapPin className="w-4 h-4"/>
                                                            {expert.Location}
                                                        </div>
                                                    </div>
                                                    {/* description */}
                                                    <div className="text-gray-300 mb-6 leading-relaxed group-hover:text-white 
                                                    transition-all duration-300">
                                                        {expert.description}
                                                    </div>

                                                    {/* Achivement */}
                                                    <div className="mb-6">
                                                        <h5 className="font-semibold text-white items-center gap-2 group-hover:text-green-500 mb-3
                                                        transition-all flex duration-300">
                                                            <Award className="w-6 h-6 text-green-400"/>
                                                            key Achivement
                                                        </h5>
                                                        <ul className="space-y-2">
                                                            {expert.achivement.map((ok,index) =>{
                                                                return (
                                                                    <li key={index} className={`flex items-start gap-3 text-gray-300`} 
                                                                    style={{
                                                                        animationDelay : `${index *300 + ok *200 + 1500}ms`
                                                                        }}>
                                                                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                                                                        <span>
                                                                            {ok}
                                                                        </span>
                                                                    </li>
                                                                )
                                                            })}
                                                        </ul>
                                                    </div>
                                                    {/* skills */}
                                                    <div className="">
                                                        
                                                    </div>
                                            </div>
                                    </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}