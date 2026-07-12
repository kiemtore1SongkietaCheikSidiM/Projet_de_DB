import { useState } from 'react'
import Mohamed from './mohamed.jpg'
import { useEffect } from 'react'


export default function About(){
    const [isVisible,setIsVisible] = useState(false)
    useEffect(()=>{
        const observer = new IntersectionObserver(([entry]) =>{
            if(entry.isIntersecting){
                setIsVisible(true)
            }
        },{threshold : 0.3})
        const element = document.getElementById('about')
        if(element) observer.observe(element)
            return ()=> observer.disconnect()
    },[])
    return (
        <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Backgound Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 w-72 h-72 bg-green-600/10 rounded-full
                blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full
                blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                w-full h-full bg-linear-to-r from-transparent via-green-600/5 to-transparent"></div>
            </div>
            <div className="container mx-auto px-6 py-4">
                <div className="container px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-space">
                        {/* left Image */}
                        <div className={`relative transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0":"opacity-0 translate-x-10"}`}>
                            <div className="relative group">
                                <div className="w-full max-w-md mx-auto">
                                    <div className="relative border-4 border-green-500 rounded-2xl p-2
                                    group-hover:border-green-400 transition-all duration-1000">
                                        <img src={Mohamed} alt="" className="
                                        w-full rounded-xl transition-all duration-500 group-hover:scale-105"/>
                                        <div className='absolute inset-2 bg-linear-to-tr from-green-600/10 to-transparent rounded-xl opacity-0 
                                        group-hover:opacity-100 transition-all duration-500'></div>
                                        {/* Floated animation*/}
                                        <div className='absolute -top-6 right-6 w-12 h-12 bg-red-600/20 rounded '></div>
                                        <div className='absolute -bottom-6 -left-6 w-8 h-8 bg-blue-800/20 rounded-full '></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Right content */}
                        <div className={`space-y-8 transition-all transition-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0":"opacity-0 translate-x-10"}`}>
                            <div className='space-y-4'>
                                <p className='text-green-400 font-semibold text-lg'>
                                    About us
                                </p>
                                <h2 className='text-4xl md:text-5xl text-white font-bold animate-slide-up'>
                                    Why hire me for your <br />
                                    <span className=''>
                                        next project
                                    </span>
                                </h2>
                                <p className='text-green-400 font-semibold delay-200'>
                                    Web developer full stack
                                </p>
                            </div>
                            <div className='space-y-4 text-gray-300 leading-relaxed'>
                                <p className={` text-lg transition-all duration-300 delay-500 ${isVisible ? "opacity-100 translate-x-0":"opacity-0 translate-x-10"}`}>
                                    I am Mohamed, a passionate full-stack web developer with expertise in creating dynamic and responsive web applications. With a strong foundation in both front-end and back-end technologies, I specialize in building seamless user experiences and robust server-side solutions. My skills include HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. I am dedicated to delivering high-quality code and innovative solutions that meet client needs and exceed expectations.
                                </p>
                                <p className={`transition-all duration-1000 delay-75 ${isVisible ? "opacity-100 translate-x-0":"opacity-0 translate-x-10"}`}>
                                    Let's collaborate to bring your ideas to life and create impactful web solutions together!
                                </p>
                            </div>
                            <div className={`grid grid-cols-2 gap-8 px-6 transition-all duration-1000 delay-100`}>
                                <div className='group'>
                                    <p className='text-white font-semibold group-hover:text-green-400
                                    transition-all duration-300'>
                                        Name
                                    </p>
                                    <p className='text-gray-300'>
                                        Songkieta Cheik Sidi Mohamed
                                    </p>
                                </div>
                                <div className='group'>
                                    <p className='text-white font-semibold group-hover:text-green-400
                                    transition-all duration-300'>
                                        Location
                                    </p>
                                    <p className='text-gray-300'>
                                        Ouagadougou, Cissin
                                    </p>
                                </div>
                                <div className='group'>
                                    <p className='text-white font-semibold group-hover:text-green-400
                                    transition-all duration-300'>
                                        Birth Date
                                    </p>
                                    <p className='text-gray-300'>
                                        13 June 2003
                                    </p>
                                </div>
                                <div className='group'>
                                    <p className='text-white font-semibold group-hover:text-green-400
                                    transition-all duration-300'>
                                        Email:
                                    </p>
                                    <p className='text-gray-300'>
                                            kiemtorecheik@gmail.com
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-wrap gap-4 transition-all duration-300 delay-100'>
                                <button className='bg-green-400 text-white px-8 py-3 rounded-lg hover:bg-green-700
                                transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105'>
                                    Download
                                </button>
                                <button className='border-2 border-slate-600 text-white px-8 py-3
                                rounded-lg hover:border-green-600 hover:text-green-400 transition-all duration-300
                                font-medium hover:scale-105'>
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}