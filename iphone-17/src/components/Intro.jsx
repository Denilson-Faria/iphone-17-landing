import AnimatedSection from './AnimatedSection';

function Intro() {
    const specs = [
        { value: '6.3"', label: 'Display Super Retina XDR', color: 'text-blue-600' },
        { value: 'A18 Pro', label: 'Chip mais rápido', color: 'text-orange-500' },
        { value: '48MP', label: 'Sistema de câmera', color: 'text-blue-600' },
        { value: '29h', label: 'Bateria', color: 'text-orange-500' },
    ];

    return (
        <section className="bg-black py-6 md:py-20 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto text-center">
                <AnimatedSection animation="fade-up" delay={0}>
                    <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6">iPhone 17 Pro</h1>
                </AnimatedSection>

                <AnimatedSection animation="fade-up" delay={100}>
                    <p className="text-xl sm:text-2xl md:text-4xl mb-4 text-gradient font-bold">
                        Titânio. Tão forte. Tão leve. Tão pro
                    </p>
                </AnimatedSection>

                <AnimatedSection animation="fade-up" delay={200}>
                    <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                        O design mais refinado que já criamos. Titânio de grau aeroespacial. Chip A18 Pro. Sistema de câmera Pro revolucionário.
                    </p>
                </AnimatedSection>
            </div>

            <AnimatedSection animation="scale" delay={300}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                    <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/50 cursor-pointer">
                        Compre agora
                    </button>
                    <button className="w-full sm:w-auto border-2 border-white rounded-full hover:bg-white hover:text-black px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 cursor-pointer">
                        Saiba mais
                    </button>
                </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mx-auto max-w-4xl">
                    {specs.map((spec, index) => (
                        <div 
                            key={index}
                            className="cursor-pointer bg-gray-900 rounded-2xl p-4 sm:p-6 hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                            style={{ 
                                animationDelay: `${index * 100}ms`,
                                animationFillMode: 'backwards'
                            }}
                        >
                            <p className={`text-2xl sm:text-3xl font-bold ${spec.color}`}>{spec.value}</p>
                            <p className="text-xs sm:text-sm text-gray-300 mt-2">{spec.label}</p>
                        </div>
                    ))}
                </div>
            </AnimatedSection>
        </section>
    )
}

export default Intro;