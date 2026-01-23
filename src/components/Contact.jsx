import { Github, Linkedin, Mail, MapPin, Phone, X } from "lucide-react";



export default function Contact(){
    return (
        <section className="">
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
                <div className={`text-center mb-16 transition-all duration-1000`}>
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
                    <div className="space-y-8 transition-all duration-1000">
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
                                    hover:border-green-500 group cursor-pointer transform hover:scale-105 `} style={{transitionDelay : `${index * 200 + 300}ms`}}>
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
                        <div className={`pt-8 transition-all duration-1000 delay-900`}>
                            <h4 className="text-lg font-semibold text-white mb-4">
                                Follow me
                            </h4>
                            <div className="flex gap-4">
                                {[Github,Linkedin,X].map((Icone,index) =>{
                                    return (
                                        <a href="#" className={`w-12 h-12 bg-slate-900 rounded-lg flex items-center
                                        justify-center hover:bg-green-600 hover:text-white transition-all duration-300
                                        group border border-slate-700 hover:border-green-700 hover:scale-110 hover:rotate-6`}>
                                            <Icone className="w-5 h-5"/>
                                        </a>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    {/* Contact form*/}
                    <div className=""></div>
                </div>
            </div>
        </section>
    )
}