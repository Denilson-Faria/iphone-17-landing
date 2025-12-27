import { useState, useEffect, useRef } from 'react';

function ScrollReveal({ children, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
}

function Comparison() {
  const [hoveredModel, setHoveredModel] = useState(null);

  const models = [
    {
      id: 'iphone17pro',
      name: 'iPhone 17 Pro',
      tagline: 'Design revolucionário para máximo desempenho em qualquer situação.',
      price: 'A partir de R$ 11.499',
      installment: 'ou R$ 958,25/mês',
      colors: ['#e67e22', '#34495e', '#95a5a6', '#ecf0f1'],
      image: '/img/iphone17.png', 
      buttonText: 'Comprar',
      buttonColor: 'bg-blue-600 hover:bg-blue-700',
      features: [
        {
          icon: <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2" strokeWidth="2"/><line x1="12" y1="18" x2="12" y2="18" strokeWidth="2" strokeLinecap="round"/></svg>,
          title: '6.3 pol. ou 6.9 pol.',
          subtitle: 'Tela Super Retina XDR'
        },
        {
          icon: <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" strokeWidth="2"/><circle cx="12" cy="13" r="4" strokeWidth="2"/></svg>,
          title: 'Sistema de câmera Pro de última geração',
          subtitle: 'Captura cada detalhe em qualquer ambiente'
        },
        {
          icon: <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2"/><rect x="9" y="9" width="6" height="6" strokeWidth="2"/><line x1="9" y1="1" x2="9" y2="4" strokeWidth="2"/><line x1="15" y1="1" x2="15" y2="4" strokeWidth="2"/><line x1="9" y1="20" x2="9" y2="23" strokeWidth="2"/><line x1="15" y1="20" x2="15" y2="23" strokeWidth="2"/><line x1="20" y1="9" x2="23" y2="9" strokeWidth="2"/><line x1="20" y1="14" x2="23" y2="14" strokeWidth="2"/><line x1="1" y1="9" x2="4" y2="9" strokeWidth="2"/><line x1="1" y1="14" x2="4" y2="14" strokeWidth="2"/></svg>,
          title: 'Chip A18 Pro',
          subtitle: 'Performance revolucionária'
        },
        {
          icon: <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="6" y="2" width="12" height="20" rx="2" strokeWidth="2"/><line x1="6" y1="6" x2="18" y2="6" strokeWidth="2"/><rect x="8" y="8" width="8" height="10" strokeWidth="2" fill="currentColor" opacity="0.2"/></svg>,
          title: 'Até 33h para reprodução de vídeo',
          subtitle: 'Bateria que dura o dia todo'
        },
        {
          icon: <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeWidth="2"/></svg>,
          title: 'Feito em titânio',
          subtitle: 'Design leve e resistente'
        }
      ]
    },
    {
      id: 'iphone16pro',
      name: 'iPhone 16 Pro',
      tagline: 'O iPhone mais rápido até agora. Com Performance excepcional.',
      price: 'A partir de R$ 9.499',
      installment: 'ou R$ 791,58/mês',
      colors: ['#34495e', '#bdc3c7', '#ecf0f1', '#2c3e50'],
      image: '/img/iphone-16-pro.png',
      buttonText: 'Comprar',
      buttonColor: 'bg-blue-600 hover:bg-blue-700',
      features: [
        {
          icon: <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2" strokeWidth="2"/><line x1="12" y1="18" x2="12" y2="18" strokeWidth="2" strokeLinecap="round"/></svg>,
          title: '6.3 pol. ou 6.9 pol.',
          subtitle: 'Tela Super Retina XDR'
        },
        {
          icon: <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" strokeWidth="2"/><circle cx="12" cy="13" r="4" strokeWidth="2"/></svg>,
          title: 'Sistema de câmera avançado de 48 MP',
          subtitle: 'Zoom óptico de 5x no Pro Max'
        },
        {
          icon: <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2"/><rect x="9" y="9" width="6" height="6" strokeWidth="2"/><line x1="9" y1="1" x2="9" y2="4" strokeWidth="2"/><line x1="15" y1="1" x2="15" y2="4" strokeWidth="2"/><line x1="9" y1="20" x2="9" y2="23" strokeWidth="2"/><line x1="15" y1="20" x2="15" y2="23" strokeWidth="2"/><line x1="20" y1="9" x2="23" y2="9" strokeWidth="2"/><line x1="20" y1="14" x2="23" y2="14" strokeWidth="2"/><line x1="1" y1="9" x2="4" y2="9" strokeWidth="2"/><line x1="1" y1="14" x2="4" y2="14" strokeWidth="2"/></svg>,
          title: 'Chip A17 Pro',
          subtitle: 'Performance extraordinária'
        },
        {
          icon: <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="6" y="2" width="12" height="20" rx="2" strokeWidth="2"/><line x1="6" y1="6" x2="18" y2="6" strokeWidth="2"/><rect x="8" y="8" width="8" height="10" strokeWidth="2" fill="currentColor" opacity="0.2"/></svg>,
          title: 'Até 27h para reprodução de vídeo',
          subtitle: 'Bateria de longa duração'
        },
        {
          icon: <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeWidth="2"/></svg>,
          title: 'Feito em titânio',
          subtitle: 'Leve, resistente e elegante'
        }
      ]
    }
  ];

  return (
    <section className="relative min-h-screen bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal delay={0}>
          <div className="text-center mb-4">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-2">
              Continue explorando.
            </h2>
            <a href="#" className="text-blue-600 hover:underline text-sm">
              Explore todos os modelos de iPhone
            </a>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          {models.map((model, index) => (
            <ScrollReveal key={model.id} delay={index * 200}>
              <div 
                className="group relative bg-gray-50 rounded-3xl p-5 hover:shadow-2xl transition-all duration-300 max-w-md mx-auto"
                onMouseEnter={() => setHoveredModel(model.id)}
                onMouseLeave={() => setHoveredModel(null)}
              >
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                    {model.name}
                  </h3>
                  <p className="text-xs text-gray-600 max-w-sm mx-auto leading-relaxed">
                    {model.tagline}
                  </p>
                  <p className="text-base font-semibold text-gray-900 mt-3">
                    {model.price}
                  </p>
                  <p className="text-xs text-gray-600">
                    {model.installment}
                  </p>
                </div>

                <div className="flex justify-center mb-3">
                  <img 
                    src={model.image}
                    alt={model.name}
                    className={`h-48 w-auto object-contain transition-transform duration-300 ${
                      hoveredModel === model.id ? 'scale-110' : 'scale-100'
                    }`}
                  />
                </div>

                <div className="flex justify-center gap-2 mb-5">
                  {model.colors.map((color, idx) => (
                    <button
                      key={idx}
                      className="w-7 h-7 rounded-full border-2 border-gray-300 hover:border-gray-900 transition-all hover:scale-110"
                      style={{ backgroundColor: color }}
                      aria-label={`Cor ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex gap-2 mb-6 justify-center">
                  <button className={`px-5 py-2.5 ${model.buttonColor} text-white rounded-full text-sm font-medium transition-all hover:scale-105 shadow-lg`}>
                    {model.buttonText}
                  </button>
                  <button className="px-5 py-2.5 border-2 border-blue-600 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-50 transition-all">
                    Saiba mais
                  </button>
                </div>

                <div className="space-y-3 border-t border-gray-200 pt-5">
                  {model.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 flex-shrink-0 text-gray-700">
                        {feature.icon}
                      </div>
                      <div>
                        <p className="text-xs font-medium text-gray-900 leading-tight">
                          {feature.title}
                        </p>
                        {feature.subtitle && (
                          <p className="text-xs text-gray-500 mt-0.5">
                            {feature.subtitle}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-gray-200">
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">AI</span>
                    </div>
                    <span className="font-medium">Apple Intelligence</span>
                  </div>
                  <p className="text-xs text-gray-500 text-center mt-2 leading-relaxed">
                    Sistema de IA integrado para experiências mais inteligentes e personalizadas
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Comparison;