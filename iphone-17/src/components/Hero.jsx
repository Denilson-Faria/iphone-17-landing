function Hero() {
    return (
        <section className="relative h-screen overflow-hidden bg-black">
            <div className="absolute inset-0 z-0">
                <img 
                    src="/img/mobile-heroo.png" 
                    className="md:hidden w-full h-full object-cover object-center opacity-90 scale-75 translate-y-16" 
                    alt="iPhone 17 Pro"
                />
                <img 
                    src="/img/hero.jpg" 
                    className="hidden md:block w-full h-full object-contain opacity-90 translate-y-20" 
                    alt="iPhone 17 Pro"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black"></div>
            </div>

            <div className="md:hidden relative z-10 h-full flex flex-col justify-end pb-16 px-6 text-center">
                <button className="bg-blue-600 hover:bg-blue-700 w-full max-w-xs mx-auto px-12 py-3 rounded-full text-white text-base font-medium mb-3 transition-all">
                    Comprar
                </button>
                <p className="text-white text-xs">
                    A partir de R$ 958,25/mês ou R$ 11.499*
                </p>
            </div>
            
            <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                </svg>
            </div>
        </section>
    )
}

export default Hero