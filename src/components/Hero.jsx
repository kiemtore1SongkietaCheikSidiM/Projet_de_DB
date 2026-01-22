import { ArrowRight, Github, Linkedin, Mail, Play } from "lucide-react";
import Mohamed from '../assets/mohamed.jpg'
import { useEffect, useState } from "react";


export default function Hero(){
    const [isVisible,setisVisible] = useState(false)
    useEffect(()=>{
        setisVisible(true)
    },[])
    return (
        <section id="home" className="min-h-screen flex items-center bg-gradient-to-br
        from-slate-900 to-slate-900 overflow-hidden">
            {/* Animated background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 w-72 h-72 bg-green-600/10 rounded-full
                blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full
                blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
            </div>
            <div className="container mx-auto px-6 py-20 relative z-10">
                <div className="grid lg:grid-cols-3 gap-16 items-center">
                    {/* Left content */}
                    <div className="space-y-8 ">
                        <div className="space-y-4">
                            <p className={`text-green-400 font-semibold text-lg transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : 'opacity-0 translate-y-10'}`}>
                                Get ready to start working with me
                            </p>
                            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight transition-all duration-1000 delay-200">
                                I'm 
                                <span className="text-green-400"> Web Developper</span><br />
                                <span className="text-white">Kiemtore</span>
                            </h1>
                            <p className={`text-gray-300 text-lg leading-relaxed max-w-lg transition-all duration-1000 delay-400
                                ${isVisible ? "opacity-100 translate-y-0" : 'opacity-0 translate-y-10'}`}>
                                I create stunning and responsive websites that leave a lasting impression.
                                I gradually transform ideas into digital realities. We have the skills and expertise to bring your vision to life.
                                Make your online presence stand out with a website that captivates and converts visitors into loyal customers.
                            </p>
                            <div className={`flex flex-wrap gap-4 transition-all duration-1000 delay-75 ${isVisible ? "opacity-100 translate-y-0" : 'opacity-0 translate-y-10'}`}>
                                <button className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all duration-1000 flex items-center gap-2 group
                                shadow-lg hover:shadow-xl  font-medium hover:scale-105 ">
                                    Learn more <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1"/>
                                </button>
                                <button className="border-2 border-slate-600 text-white py-4 px-8 rounded-lg 
                                   hover:border-green-600 hover:text-green-400 transition-all duration-300 font-medium flex
                                   items-center gap-2 group hover:scale-105">
                                    <Play className="w-5 h-5 "/>Play Video
                                 </button>
                            </div>
                            {/* Social link */}
                            <div className={`flex gap-4 pt-6 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : 'opacity-0 translate-y-10'}`}>
                                <a href="https://github.com/kiemtore1SongkietaCheikSidiM" className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-green-500
                                hover:text-white transition-all duration-300 group hover:scale-105 hover:rotate-6">
                                    <Github className="w-5 h-5" />
                                </a>
                                <a href="https://www.linkedin.com/in/cheik-kiemtore-08a930395" className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-green-500
                                hover:text-white transition-all duration-300 group hover:scale-105 hover:rotate-6">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="mailto:kiemtorecheik@gmail.com" className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-green-500
                                hover:text-white transition-all duration-300 group hover:scale-105 hover:rotate-6">
                                    <Mail className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Right content */}
                    <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : 'opacity-0 translate-y-10'}`}>
                        <div className="relative">
                            <div className="w-full max-w-lg mx-70">
                                <div className="relative group">
                                    <img src={Mohamed} alt="profil" className="w-full rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-105" />
                                </div>
                            </div>
                            <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-400
                            rounded-2xl opacity-20"></div>
                            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500
                            rounded-full opacity-20"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}