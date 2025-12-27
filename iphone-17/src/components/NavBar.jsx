import { useState, useEffect } from 'react';

export default function NavBar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [menuOpen]);

    const scrollToSection = (e, id) => {
        e.preventDefault();
        setMenuOpen(false);
        const element = document.querySelector(id);
        if (element) {
            const offset = 80; 
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <nav 
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    scrolled 
                        ? 'bg-black/70 backdrop-blur-md shadow-lg shadow-black/20' 
                        : 'bg-transparent'
                }`}
            >
                {/* Desktop */}
                <div className="hidden md:block">
                    <div className="max-w-7xl mx-auto px-6 py-4">
                        <div className="flex items-center justify-between">
                            {/* Apple Logo */}
                            <a href="#" className="text-white hover:text-orange-500 transition-colors duration-300">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                                </svg>
                            </a>

                            {/* Menu */}
                            <div className="flex items-center space-x-8">
                                <a 
                                    href="#design" 
                                    onClick={(e) => scrollToSection(e, '#design')}
                                    className="text-white hover:text-blue-400 transition-colors duration-300 text-sm font-medium"
                                >
                                    Design
                                </a>
                                <a 
                                    href="#camera" 
                                    onClick={(e) => scrollToSection(e, '#camera')}
                                    className="text-white hover:text-blue-400 transition-colors duration-300 text-sm font-medium"
                                >
                                    Camera
                                </a>
                                <a 
                                    href="#performance" 
                                    onClick={(e) => scrollToSection(e, '#performance')}
                                    className="text-white hover:text-blue-400 transition-colors duration-300 text-sm font-medium"
                                >
                                    Performance
                                </a>
                                <a 
                                    href="#colors" 
                                    onClick={(e) => scrollToSection(e, '#colors')}
                                    className="text-white hover:text-blue-400 transition-colors duration-300 text-sm font-medium"
                                >
                                    Cores
                                </a>
                            </div>

                            {/* Button */}
                            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full text-white text-sm font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/30">
                                Comprar
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile */}
                <div className="md:hidden">
                    <div className="px-4 py-3">
                        <div className="flex items-center justify-between">
                            {/* Apple Logo */}
                            <a href="#" className="text-white hover:text-orange-500 transition-colors duration-300">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                                </svg>
                            </a>
                            
                            {/* Hamburger Button */}
                            <button 
                                onClick={() => setMenuOpen(!menuOpen)}
                                className="text-white p-2 hover:text-orange-500 transition-colors duration-300"
                                aria-label="Menu"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {menuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div 
                className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 md:hidden transition-all duration-500 ${
                    menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
            >
                <div className={`flex flex-col items-center justify-center h-full space-y-8 transition-all duration-500 ${
                    menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
                }`}>
                    <a 
                        href="#design" 
                        onClick={(e) => scrollToSection(e, '#design')}
                        className="text-white hover:text-orange-500 transition-colors duration-300 text-2xl font-medium"
                    >
                        Design
                    </a>
                    <a 
                        href="#camera" 
                        onClick={(e) => scrollToSection(e, '#camera')}
                        className="text-white hover:text-orange-500 transition-colors duration-300 text-2xl font-medium"
                    >
                        Camera
                    </a>
                    <a 
                        href="#performance" 
                        onClick={(e) => scrollToSection(e, '#performance')}
                        className="text-white hover:text-orange-500 transition-colors duration-300 text-2xl font-medium"
                    >
                        Performance
                    </a>
                    <a 
                        href="#colors" 
                        onClick={(e) => scrollToSection(e, '#colors')}
                        className="text-white hover:text-orange-500 transition-colors duration-300 text-2xl font-medium"
                    >
                        Cores
                    </a>
                    
                    <button 
                        onClick={() => setMenuOpen(false)}
                        className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full text-white text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/30 mt-4"
                    >
                        Comprar
                    </button>
                </div>
            </div>
        </>
    );
}