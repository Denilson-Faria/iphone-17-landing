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

function Footer() {
    const sections = [
        {
            title: 'Comprar e Saber Mais',
            links: ['iPhone 17 Pro', 'iPhone 17 Pro Max', 'Comparar modelos', 'Acessórios']
        },
        {
            title: 'Especificações',
            links: ['Características técnicas', 'Câmera', 'Bateria', 'Display']
        },
        {
            title: 'Suporte',
            links: ['Suporte ao iPhone', 'AppleCare+', 'iOS 19', 'Contato']
        },
        {
            title: 'Apple',
            links: ['Sobre a Apple', 'Newsroom', 'Privacidade', 'Carreiras']
        }
    ];

    const buttonLinks = ['Política de Privacidade', 'Termos de Uso', 'Vendas'];

    return (
        <footer className="bg-black border-t border-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <ScrollReveal delay={0}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
                      {sections.map((section, index) => (
                          <div key={index}>
                              <h4 className="font-semibold mb-4 text-gray-200">{section.title}</h4>
                              <ul className="space-y-2 text-sm text-gray-400">
                                  {section.links.map((link, linkIndex) => (
                                      <li key={linkIndex}>
                                          <a href="#" className="hover:text-white transition-colors">{link}</a>
                                      </li>
                                  ))}
                              </ul>
                          </div>
                      ))}
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                  <div className="border-t border-gray-800 pt-8">
                      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                          <p className="text-sm text-gray-500 order-2 md:order-1 text-center md:text-left">
                              Copyright © 2025 Apple Inc. Todos os direitos reservados.
                          </p>
                          
                          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs text-gray-400 order-1 md:order-2">
                              {buttonLinks.map((link, index) => (
                                  <a href="#" key={index} className="hover:text-white transition-colors">
                                      {link}
                                  </a>
                              ))}
                          </div>
                      </div>
                      <p className="text-[10px] text-gray-600 mt-8 text-center md:text-left uppercase tracking-widest">
                          Site criado para fins de estudo em React + Tailwind CSS
                      </p>
                  </div>
                </ScrollReveal>
            </div>
        </footer>
    );
}

export default Footer;