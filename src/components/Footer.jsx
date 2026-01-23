import { ArrowUp, Heart } from "lucide-react";


export default function Footer (){
    const scrolltop = ()=>{
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })

    }
    
    return (
        <div className="bg-slate-900 text-white py-12 border-t border-slate-800 relative overflow-hidden
        ">
            {/* Background Elemeent */}
            <div className="absolute inset-0">
                <div className="absolute top-20 w-72 h-72 bg-green-600/10 rounded-full
                blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full
                blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
            </div>
            <div className="container mx-auto relative px-6 z-10">
                <div className="flex flex-col md:flex-row md:text-start text-center justify-between  items-center">
                    <div className="mb-6 md:mb-0 ">
                        <div className="text-2xl font-bold mb-2 group cursor-pointer">
                            <span className="text-green-500 group-hover:text-green-500 transition-all duration-300">
                                Songkieta Cheik Sidi Mohamed
                            </span>
                            <span className="text-white group-hover:text-green-500  transition-all duration-300">
                                KIEMTORE
                            </span>
                            <span className="text-green-500 group-hover:text-green-500  transition-all duration-300">
                                .
                            </span>
                            <p className="text-gray-400 hover:text-gray-300 transition-all duration-300">
                                Web developer full stack
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2 text-gray-400">
                            <span className="">
                                Made with
                                <Heart className="w-4 h-4 text-green-500 fill-current"/>
                            </span>
                        </div>
                        <button onClick={scrolltop}>
                            <ArrowUp className="w-10 h-10 bg-green-600 rounded-full flex items-center
                            hover:bg-green-600 transition-all duration-300 hover:scale-110 hover:rotate-12 group"/>
                        </button>
                    </div>
                </div>
                <div className="mt-8 text-gray-500 text-sm text-center">
                    © {new Date().getFullYear()} Mohamed Kiemtore All rights reserved.
                </div>
            </div>
        </div>
    )
}