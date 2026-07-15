import { Github, Linkedin, Mail, MapPin, Phone, Send, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser'


const service = import.meta.env.VITE_serviceID
const template = import.meta.env.VITE_template
const key = import.meta.env.VITE_Key
export default function Contact(){
   const [isVisible, setIsVisible] = useState(false)
   const form = useRef()

   const SendEmail = (e)=>{
    e.preventDefault()
    emailjs.sendForm(service, template, form.current, {
        publicKey: key,
      })
      .then(()=>{
        console.log("Succes de fou")
      },
    (error)=>{
        console.log(error)
        console.log("Message:",error.text)
    })
   }
   useEffect(() =>{
    const observer = new IntersectionObserver(
        ([entry]) =>{
            if(entry.intersectionRatio){
                setIsVisible(true)
            }
        },{threshold : 0.3}
    )
    const element = document.getElementById('contact')
    if(element) observer.observe(element)
        return ()=> observer.disconnect()
   },[])


    return (
        <section id="contact" className="py-24 bg-slate-800 relative overflow-hidden">
            {/* Background Elemeent */}
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
                 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <p className="text-green-400 font-semibold text-lg mb-4">
                        Get in touch
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Let's work together
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Have a project in mind ? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
                    </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-16">
                    <div className={`space-y-8 transition-all duration-1000
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h3 className="text-2xl font-bold text-white mb-6">
                            Contact Information
                        </h3>
                        <p className="text-gray-300 leading-relaxed mb-8">
                            I'm always interesting about new oportinuties and exiting projects.
                            Whether you have a question or just want to say hi, I will try my best to Get
                            back to you as soon as possible.
                        </p>
                        <div className="space-y-4 p-5">
                            {[
                                {
                                    icon: Mail,
                                    title: "Email",
                                    info: 'kiemtorecheik@gmail.com',
                                },
                                {
                                    icon: Phone,
                                    title: "Phone",
                                    info: '+226 56 14 12 34'
                                },
                                {
                                    icon: MapPin,
                                    title: "Location",
                                    info: 'Ouagadougou, Cissin'
                                }
                            ].map((contact,index) => {
                                return (
                                    <div key={index} className={`flex items-center gap-4 p-4 bg-slate-900 
                                    rounded-lg hover:bg-slate-700 transition-all duration-300 border border-slate-700
                                    hover:border-green-500 group cursor-pointer transform hover:scale-105
                                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} `} style={{transitionDelay : `${index * 200 + 300}ms`}}>
                                        <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center
                                        justify-center group-hover:bg-green-500 transition-all duration-300
                                        group-hover:rotate-6">
                                            <contact.icon className="w-6 h-6 text-white"/>

                                        </div>
                                        <div>
                                            <p className="font-semibold text-white group-hover:text-gray-400
                                        transition-all duration-300">
                                                {contact.title}
                                            </p>
                                            <p className="font-semibold text-white group-hover:text-gray-400
                                        transition-all duration-300">
                                                {contact.info}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                            }
                        </div>
                        <div className={`pt-8 transition-all duration-1000 delay-900
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <h4 className="text-lg font-semibold text-white mb-4">
                                Follow me
                            </h4>
                            <div className="flex gap-4">
                                {[Github,Linkedin,X].map((Icone,index) =>{
                                    return (
                                        <a href="#" className={`w-12 h-12 bg-slate-900 rounded-lg flex items-center
                                        justify-center hover:bg-green-600 hover:text-white transition-all duration-300
                                        group border border-slate-700 hover:border-green-700 hover:scale-110 hover:rotate-6`} key={index}>
                                            <Icone className="w-5 h-5"/>
                                        </a>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    {/* Contact form*/}
                    <div className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                        transition-all duration-1000 delay-300 `}>
                        <div className="bg-slate-900 p-8 rounded-2xl border
                        border-slate-700 hover:bg-green-500/50 transition-all duration-300">
                            <h3 className="text-2xl font-bold text-white ">
                                Send a message
                            </h3>
                            <form ref={form} onSubmit={SendEmail}>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="group">
                                        <label className="block text-sm font-semibold text-gray-300
                                        mb-2 group-hover:text-green-300 transition-all duration-300">
                                            Full name
                                        </label>
                                        <input type="text" id="name"
                                         name="user_name" 
                                         className="w-full bg-slate-700
                                        border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:text-gray-200 
                                        y-4 focus:outline-none focus:ring-2 focus:ring-green-500
                                        focus:border-transparent transition-300 hover:border-green-50" 
                                        placeholder="Your name" required />
                                    </div>
                                    <div className="group">
                                        <label className="block text-sm font-semibold text-gray-300
                                        mb-2 group-hover:text-green-300 transition-all duration-300">
                                            Email
                                        </label>
                                        <input type="text" id="mail" 
                                        name="user_email" className="w-full bg-slate-700
                                        border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:text-gray-200 
                                        y-4 focus:outline-none focus:ring-2 focus:ring-green-500
                                        focus:border-transparent transition-300 hover:border-green-50" placeholder="Your mail" required />
                                    </div>
                                </div>
                                <div className="group mt-5">
                                    <label className="block text-sm font-semibold text-gray-300
                                        mb-2 group-hover:text-green-300 transition-all duration-300">
                                            Subjet
                                    </label>
                                    <input type="text" id="message" name="subject" className="w-full bg-slate-700
                                        border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:text-gray-200 
                                        y-4 focus:outline-none focus:ring-2 focus:ring-green-500
                                        focus:border-transparent transition-300 hover:border-green-50" placeholder="Project discussion" required /> 
                                </div>
                                <div className="group mt-5">
                                    <label className="block text-sm font-semibold text-gray-300
                                        mb-2 group-hover:text-green-300 transition-all duration-300">
                                            Message
                                    </label>
                                    <textarea type="text" id="msg" name="message" className="w-full bg-slate-700
                                        border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:text-gray-200 
                                        y-4 focus:outline-none focus:ring-2 focus:ring-green-500
                                        focus:border-transparent transition-300 hover:border-green-50" placeholder=" tell me about your project" required /> 
                                </div>
                                <button type="submit" className="mt-5 w-full bg-green-600 text-white px-4 py-4 rounde-lg
                                hover:bg-green-700 transition-all duration-300 font-semibold flex items-center
                                justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 group">
                                    Send Message <Send className="w-5 h-5 transition-all group-hover:translate-x-1 group-hover:translate-y-1"/>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}