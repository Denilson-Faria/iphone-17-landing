import { useState } from 'react';

function AnimatedSection({ children, animation = "fade-up", delay = 0 }) {
  return (
    <div 
      className="animate-in"
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: 'backwards'
      }}
    >
      {children}
    </div>
  );
}

function VideoShowcase() {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  
  const videos = [
    { src: '/videos/idosa.mp4', title: 'Modo Retrato Cinemático' },
   
  ];

 
  const galleryImages = [
    { 
      src: '/img/neve.webp',
      title: 'Clareza. Mesmo na neve.',
      specs: 'Câmera Principal 48MP • f/1.78 • Estabilização Óptica'
    },
    { 
      src: '/img/trem.webp',
      title: 'Zoom Tetraprismático 5x',
      specs: 'Teleobjetiva 12MP • f/2.8 • Foco em Movimento'
    },
    { 
      src: '/img/bosque.webp',
      title: 'Detalhes. De perto.',
      specs: 'Ultra Wide 48MP • f/2.2 • Modo Macro Avançado'
    },
    { 
      src: '/img/predio.webp',
      title: 'Fotografia Computacional',
      specs: 'Smart HDR 5 • Deep Fusion • Processamento A18 Pro'
    },
    { 
      src: '/img/selfie.jpg',
      title: 'Retratos. Perfeitos.',
      specs: 'Câmera Frontal 12MP • f/1.9 • LiDAR Depth Mapping'
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <>
      <section className="relative h-screen overflow-hidden bg-black">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/cidade.mp4" type="video/mp4" />
            <source src="https://assets.mixkit.co/videos/preview/mixkit-night-city-traffic-from-above-32793-large.mp4" type="video/mp4" />
          </video>
          
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.3) 100%)'
          }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
          <AnimatedSection animation="fade-up" delay={200}>
            <h2 className="text-white text-5xl md:text-7xl font-bold mb-4 tracking-tight">
              Sua Cidade.
              <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                Seu iPhone.
              </span>
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={400}>
            <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
              Capture cada momento urbano com clareza impressionante. 
              <span className="block mt-2 text-gray-300">
                Seja de dia ou de noite, seu iPhone 17 Pro está pronto.
              </span>
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <button 
                onClick={() => setShowVideoModal(true)}
                className="group relative px-8 py-3.5 rounded-full text-white font-medium transition-all hover:scale-105 overflow-hidden shadow-xl shadow-orange-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transition-all group-hover:from-orange-600 group-hover:to-orange-700"></div>
                <span className="relative z-10 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                  </svg>
                  Ver Câmera em Ação
                </span>
              </button>
              
              <button 
                onClick={() => setShowGallery(true)}
                className="group relative px-8 py-3.5 rounded-full text-white font-medium transition-all hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full transition-all group-hover:bg-white/20 group-hover:border-white/30"></div>
                <span className="relative z-10 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clipRule="evenodd" />
                  </svg>
                  Galeria de Fotos
                </span>
              </button>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={800}>
            <div className="mt-12 flex flex-wrap gap-3 justify-center max-w-3xl">
              {[
                '🌃 Modo Noite Avançado', 
                '📸 Câmera 48MP', 
                '⚡ Captura Instantânea', 
                '🎥 ProRes 4K'
              ].map((feature, index) => (
                <span 
                  key={index}
                  className="px-5 py-2.5 rounded-full bg-black/40 backdrop-blur-md border border-white/30 text-white text-sm font-medium hover:bg-black/60 hover:border-orange-400/50 transition-all"
                >
                  {feature}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="1.5" 
            stroke="currentColor" 
            className="w-8 h-8 text-white/70"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
          </svg>
        </div>
      </section>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm animate-fadeIn">
          <button 
            onClick={() => setShowVideoModal(false)}
            className="absolute top-6 right-6 text-white hover:text-orange-400 transition-colors z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation Arrows */}
          <button 
            onClick={prevVideo}
            className="absolute left-6 text-white hover:text-orange-400 transition-colors hover:scale-110 z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-12 h-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>

          <button 
            onClick={nextVideo}
            className="absolute right-6 text-white hover:text-orange-400 transition-colors hover:scale-110 z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-12 h-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
          
          <div className="w-full max-w-5xl px-20 animate-scaleIn">
            <video 
              key={currentVideoIndex}
              controls 
              autoPlay
              className="w-full rounded-2xl shadow-2xl"
            >
              <source src={videos[currentVideoIndex].src} type="video/mp4" />
            </video>
            <div className="text-center mt-6">
              <p className="text-white text-lg mb-2">iPhone 17 Pro - {videos[currentVideoIndex].title}</p>
              <p className="text-gray-400">{currentVideoIndex + 1} / {videos.length}</p>
            </div>

            {/* Video Thumbnails */}
            <div className="flex gap-3 justify-center mt-6">
              {videos.map((video, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentVideoIndex(index)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    index === currentVideoIndex 
                      ? 'bg-orange-500 text-white' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Vídeo {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Gallery Lightbox */}
      {showGallery && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm animate-fadeIn">
          <button 
            onClick={() => setShowGallery(false)}
            className="absolute top-6 right-6 text-white hover:text-orange-400 transition-colors z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation Arrows */}
          <button 
            onClick={prevImage}
            className="absolute left-6 text-white hover:text-orange-400 transition-colors hover:scale-110 z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-12 h-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>

          <button 
            onClick={nextImage}
            className="absolute right-6 text-white hover:text-orange-400 transition-colors hover:scale-110 z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-12 h-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Image Display */}
          <div className="w-full max-w-6xl px-20 animate-scaleIn">
            <img 
              src={galleryImages[currentImageIndex].src} 
              alt={galleryImages[currentImageIndex].title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-2xl shadow-2xl"
            />
            <div className="text-center mt-6">
              <p className="text-white text-xl font-semibold mb-1">{galleryImages[currentImageIndex].title}</p>
              <p className="text-gray-400 text-sm mb-2">{galleryImages[currentImageIndex].specs}</p>
              <p className="text-gray-500 text-xs">{currentImageIndex + 1} / {galleryImages.length}</p>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex gap-3 justify-center mt-6 overflow-x-auto pb-4">
              {galleryImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentImageIndex 
                      ? 'border-orange-500 scale-110' 
                      : 'border-white/30 hover:border-white/60'
                  }`}
                >
                  <img 
                    src={img.src} 
                    alt={img.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-in {
          animation: fade-up 0.8s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.4s ease-out;
        }
      `}</style>
    </>
  );
}

export default VideoShowcase;