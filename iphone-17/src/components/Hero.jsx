import AnimatedSection from './AnimatedSection'

function Hero() {
    return (
        <section className="relative h-screen overflow-hidden bg-black">
            <div className="absolute inset-0 z-0">
                {/* Mobile Video */}
                <div className="md:hidden relative w-full h-full">
                    <video 
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    >
                        <source src="/videos/iphone-hero-mobile.mp4" type="video/mp4" />
                    </video>
                    {/* Overlay para escurecer e integrar com o tema */}
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>
                
                {/* Desktop Image */}
                <AnimatedSection animation="scale-up" delay={0}>
                    <img 
                        src="/img/hero.jpg" 
                        className="hidden md:block w-full h-full object-contain opacity-90 translate-y-20" 
                        alt="iPhone 17 Pro"
                    />
                </AnimatedSection>
                
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black"></div>
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