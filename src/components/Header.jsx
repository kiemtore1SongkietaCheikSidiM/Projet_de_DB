import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "./image/CV.pdf"




export default function Header (){

    const[isMenuOpen, setIsmeuOpen] = useState(false)
    const [isScrolled, setIscrolled] = useState(false)
    useEffect(()=>{
        const handledScrolled = ()=> {
            setIscrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll',handledScrolled)
        return window.removeEventListener('scroll', handledScrolled)
    },[])
    const ScrollToSection = (href)=>{
        const element = document.querySelector(href)
        if (element){
            element.scrollIntoView({behavior : 'smooth'})
        }
        setIsmeuOpen(false) 
    }
    const navItems = [
        {name : 'Home', href : "#home"},
        {name : 'About', href : "#about"},
        {name : 'Skills', href : "#skills"},
        {name : 'Projects', href : "#projects"},
        {name : 'Contact', href : "#contact"},
    ]


    return (
        <header className={`fixed to-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-slate-950 backdrop-blur-2xl shadow-lg border-b border-slate-800':
            'bg-transparent'
        }`}>
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">
                        <span className="text-green-400">
                            Songkieta Cheik Sidi Mohamed
                        </span>
                        <span className="text-white"> 
                            Kiemtore
                        </span>
                        <span className="text-green-400">.</span>
                    </div>
                    {/* Desktop Menu*/}
                    <nav className="hidden md:flex space-x-8">
                        {navItems.map((item, index) =>{
                            return <button key={index}
                            onClick={()=> ScrollToSection(item.href)} className="text-gray-300 hover:text-green-400 transition-all
                            duration-300 font-medium relative group" style={{animationDelay: `${index * 0.1}s`}}>
                                {item.name}
                                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300
                                group-hover:w-full"></span>
                            </button>
                        })}
                    </nav>
                    <button className="hidden md:flex item-center gap-2 bg-green-600 text-white py-2.5 rounded-lg hover:bg-red-600 transition-all duration-200 font-medium
                    shadow-lg hover:shadow-xl hover:scale-105">
                        <a href={Image} download="cv" >
                            Download CV
                        </a>
                    </button>
                    {/* Mobile Menu */}
                    <button className="text-white md:hidden" onClick={()=> setIsmeuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
                {/* Mobile Navigation */}
                {isMenuOpen && (
                     <nav className="md:hidden mt-4 pb-4 border-t border-slate-800 pt-4 bg-slate-800
                rounded-lg shadow-lg">
                    {navItems.map((item)=>{
                        return <button key={index} className="block w-full text-left py-6 px-4 text-gray-300 hover:text-green-400 hover:bg-slate-700
                        transition-all duration-300 rounded-lg">{item.name}</button>
                    })}
                    
                    <button className="mt-4 w-full flex items-center justify-center gap-2 bg-green-500
                    text-white px-6 py-2.5 rounded-lg hover:bg-green-700 transition-all duration-300">
                        <a href={Image} download="cv" >
                            Download CV
                        </a>
                    </button>
                </nav>
                )}
            </div>
        </header>
    )
}